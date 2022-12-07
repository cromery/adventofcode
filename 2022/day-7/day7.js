import { day7Input, test7Input } from './day7-input.js';
import * as helper from '../../helper.js';

export const day7 = () => {
    const inputArray = helper.splitAtLineBreak(day7Input);
    let fileSystem = {};
    let currentDirArray = [];

    inputArray.forEach((line, index) => {
        let currentDir = currentDirArray[currentDirArray.length -1]
        if (/\$ cd \//.test(line)) {
            fileSystem['/'] = {'dsize': 0};
            currentDirArray.push(fileSystem['/']);
        } else {
            if (/^dir\s/.test(line)) {
                const subDir = line.replace('dir ', '');
                currentDir[subDir] = {'dsize': 0};
            } else if (/^\d+\s/.test(line)) {
                const [size, file] = line.split(' ');
                currentDir[file] = {'size': size};
            }
            if (/\$\scd\s\.\./.test(line)) {
                currentDirArray.pop();
            } else if (/\$\scd\s/.test(line)) {
                currentDirArray.push(currentDir[line.replace(/\$\scd\s/, '')]);
            }
        }
    });
    let total = 0;
    let dirsIndex = [];
    let unusedSpace = 70000000;
    let spaceNeeded = 30000000;
    const indexDirSize = (dir, parent) => {
        Object.keys(dir).forEach(file => {
            if (dir[file].size) {
                const filesize = parseInt(dir[file].size);
                dir.dsize += filesize;
                if (parent) {
                    parent.forEach(p => {
                        p.dsize += filesize
                    })
                }
            }
            if (typeof dir[file] === 'object' && !dir[file].size) {
                const newParent = [...parent, dir]
                indexDirSize(dir[file], newParent)
            }
        })
        if (dir.dsize <= 100000) total += dir.dsize;
        dirsIndex.push(dir.dsize);
    }
    const indexSystemSize = (fs) => {
        const root = Object.keys(fs);
        Object.keys(fs[root]).forEach(dir => {
            if (typeof fs[root][dir] === 'object' && !fs[root][dir].size) {
                const parent = [fs[root]]
                indexDirSize(fs[root][dir], parent)
            } else if (fs[root][dir].size) {
                const filesize = parseInt(fs[root][dir].size);
                fs[root].dsize += filesize;
            }
        })
        if (fs[root].dsize <= 100000) total += fs[root].dsize;
        dirsIndex.push(fs[root].dsize)
    }
    
    const root = fileSystem['/'];
    indexSystemSize(fileSystem)
    // console.log(root);
    console.log('part1', total);
    
    let dirToRemove;
    dirsIndex.sort((a,b) => b-a).forEach((dirSize, index, arr) => {
        if (index === 0) {
            unusedSpace -= dirSize;
            spaceNeeded -= unusedSpace;
        }
        if (dirSize > spaceNeeded && dirSize < arr[index-1]) {
            dirToRemove = dirSize;
        }
    })
    console.log('unusedSpace', unusedSpace);
    console.log('spaceNeeded', spaceNeeded);
    console.log('dirsIndex', dirsIndex);
    console.log(dirToRemove);


}