import * as helper from '../../helper.js';
import { day1Input } from './day1-input.js';

export const day1 = () => {
    const elfArray = day1Input.split('\n\n').map(container => {
        return container.split('\n').map(string => parseInt(string, 10))
    })

    let {first, second, third, total} = {first: 0, second: 0, third: 0, total: 0};
    elfArray.forEach(elf => {
        const carriedCalories = elf.reduce((a,c) => a+c, 0);
        if (!first || first < carriedCalories) {
            third = second;
            second = first;
            first = carriedCalories;
        } else if (!second || second < carriedCalories) {
            third = second;
            second = carriedCalories;
        } else if (!third || third < carriedCalories) {
            third = carriedCalories;
        }
        total = (first + second + third)
    });
    console.log('mostCarriedCalories:', first);
    console.log('topThreeTotal:', total);
};