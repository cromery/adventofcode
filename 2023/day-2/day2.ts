import { splitAtLineBreak } from '@utils';
import { input } from './day2-input';

// https://adventofcode.com/2023/day/2

// The Elf would first like to know which games would have been possible
// if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

const validateCubes = ({ color, number }) => {
    switch (color) {
        case 'red':
            return number <= 12;
        case 'green':
            return number <= 13;
        case 'blue':
            return number <= 14;

        default:
            break;
    }
};

export function part1() {
    const answer = splitAtLineBreak(input).reduce((acc, game) => {
        const [round, setsString] = game.replace('Game ', '').split(':');
        const sets = setsString.split(';').map((set) => set.split(','));
        let possibleGame = true;
        sets.forEach((set) =>
            set.forEach((draw) => {
                const [number, color] = draw.replace(' ', '').split(' ');
                if (!validateCubes({ color, number })) {
                    possibleGame = false;
                }
            })
        );
        return (acc = acc + (possibleGame ? parseInt(round, 10) : 0));
    }, 0);
    console.log('part1 ~ answer:', answer);
}

export function part2() {
    const answer = splitAtLineBreak(input).reduce((acc, game) => {
        const setsString = game.replace('Game ', '').split(':')[1];
        const sets = setsString.split(';').map((set) => set.split(','));
        const setData: Record<string, number> = {};
        sets.forEach((set) =>
            set.forEach((draw) => {
                const [numberString, color] = draw.replace(' ', '').split(' ');
                const number = parseInt(numberString, 10);
                if (!setData[color]) {
                    setData[color] = number;
                }
                if (setData[color] < number) {
                    setData[color] = number;
                }
            })
        );
        const leastAmmountOfCubes = Object.values(setData).reduce((acc, number) => {
            if (!acc) {
                return (acc = number);
            }
            return (acc = acc * number);
        }, 0);
        return (acc = acc + leastAmmountOfCubes);
    }, 0);
    console.log('part2 ~ answer:', answer);
}
