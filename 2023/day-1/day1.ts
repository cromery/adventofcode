import { splitAtLineBreak } from '@utils';
import { input } from './day1-input';

// https://adventofcode.com/2023/day/1

// On each line, the calibration value can be found by combining the first digit and the last digit (in that order)
// to form a single two-digit number.

// Consider your entire calibration document. What is the sum of all of the calibration values?

export function part1() {
    const calibration = splitAtLineBreak(input).reduce((acc, line) => {
        if (!line.length) return acc;
        const digits = line.match(/\d/g);
        const lineCalibration = `${digits[0]}${digits.pop()}`;
        return (acc = acc + parseInt(lineCalibration, 10));
    }, 0);
    console.log('calibration:', calibration);
}

// --- Part Two ---
// Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters:
// one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

// Equipped with this new information, you now need to find the real first and last digit on each line. For example:

const digitStrings = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

export function part2() {
    const calibration = splitAtLineBreak(input).reduce((acc, line) => {
        if (!line.length) return acc;
        const matches = [];
        for (let index = 0; index < line.length; index++) {
            const lineSubstring = line.substring(index);
            const match = lineSubstring.match(
                /^(\d|one|two|three|four|five|six|seven|eight|nine)/i
            );
            if (match) {
                matches.push(match[0]);
            }
        }
        const lineCalibration = `${
            Object.keys(digitStrings).includes(matches[0]) ? digitStrings[matches[0]] : matches[0]
        }${
            Object.keys(digitStrings).includes(matches[matches.length - 1])
                ? digitStrings[matches.pop()]
                : matches.pop()
        }`;
        return (acc = acc + parseInt(lineCalibration, 10));
    }, 0);
    console.log('calibration:', calibration);
}
