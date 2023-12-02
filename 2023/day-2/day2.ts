import { splitAtLineBreak } from '@utils';
import { input } from './day2-input';

export function part1() {
    const games = splitAtLineBreak(input).reduce((acc, game) => {
        const [round, setsString] = game.replace('Game ', '').split(':');
        let sets = setsString.split(';').map((set) => set.split(','));
        sets = sets.map((set) =>
            set.map((draw) => {
                const [number, color] = draw.replace(' ', '').split(' ');
                return {color, number}
            })
        );
        console.log('🚀 ~ file: day2.ts:8 ~ games ~ sets:', sets);
        return acc;
    }, 0);
    console.log('🚀 ~ file: day2.ts:6 ~ part1 ~ games:', games);
}
