import * as helper from '../../helper.js';
import { day2Input } from './day2-input.js'

export const day2 = () => {
    const rounds = helper.splitAtLineBreak(day2Input).map(round => round.split(' '));

    const rules = {
        A: {
            name: 'rock',
            score: 1, 
        },
        B: {
            name: 'paper',
            score: 2, 
        },
        C: {
            name: 'scissor',
            score: 3, 
        },
        draw: 3,
        win: 6,
        lose: 0,
        beatMap: function(key) {
                if (key === this.A) {
                    return this.C;
                } else if (key === this.B) {
                    return this.A;
                } else return this.B
        },
        loseMap: function(key) {
                if (key === this.A) {
                    return this.B;
                } else if (key === this.B) {
                    return this.C;
                } else return this.A
        },
    };

    // xyz to abc Converter
    const xyz = {
            ...rules,
            X: rules.A, 
            Y: rules.B, 
            Z: rules.C
        };

    let firstStratPoints = 0;
    rounds.forEach(round => {
        const [opponent, player] = [rules[round[0]], xyz[round[1]]];
        if (opponent == player) {
            return firstStratPoints += rules.draw + player.score;
        }
        if (xyz.beatMap(player) == opponent) {
            return firstStratPoints += rules.win + player.score;
        } else {
            return firstStratPoints += rules.lose + player.score;
        }
    });
    console.log('firstStratPoints:', firstStratPoints);

    const xyzStrat = {
        X: rules.lose,
        Y: rules.draw,
        Z: rules.win,
    }

    let secondStratPoints = 0;
    rounds.forEach(round => {
        const [opponent, playerStrat] = [rules[round[0]], xyzStrat[round[1]]];
        if (playerStrat === rules.draw) {
            return secondStratPoints += rules.draw + opponent.score;
        }
        if (playerStrat === rules.win) {
            secondStratPoints += rules.win + rules.loseMap(opponent).score;
        } else {
            secondStratPoints += rules.lose + rules.beatMap(opponent).score;
        }
    });
    console.log('secondStratPoints:', secondStratPoints);
};