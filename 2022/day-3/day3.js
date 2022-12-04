import * as helper from '../../helper.js';
import { day3Input } from './day3-input.js';

export const day3 = () => {
    const items = {};
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(i+65);
        items[letter.toLowerCase()] = {type: letter.toLowerCase(), prio: i +1};
        items[letter] = {type: letter, prio: i + 27}
    }
    const backpacks = helper.splitAtLineBreak(day3Input);

    let prioSum = 0;
    backpacks.forEach(backpack => {
        const findDuplicate = new Set();
        const firstContainer = backpack.length/2;
        for (let i = 0; i < firstContainer; i++) {
            findDuplicate.add(backpack.charAt(i))
        }
        for (let i = firstContainer; i < backpack.length; i++) {
            if (findDuplicate.has(backpack.charAt(i))) {
                prioSum += items[backpack.charAt(i)].prio;
                return;
            }
        }
    })
    console.log(prioSum);
}