import * as helper from '../../helper.js'
import { day4Input, andysInput } from './day4-input.js'

export const day4 = () => {
    const assignmentList = helper.splitAtLineBreak(day4Input).map(pair => {
        return pair.split(',').map(assignment => {
            return assignment.split('-').map(string => {
                return parseInt(string, 10)
            });
        })
    });
    let containedPairs = 0;
    assignmentList.forEach(pair => {
        const [firstLow, firstHigh] = pair[0];
        const [secondLow, secondHigh] = pair[1];

        if (firstLow <= secondLow && firstHigh >= secondHigh) {
            containedPairs++;
        } else if (secondLow <= firstLow && secondHigh >= firstHigh) {
            containedPairs++;
        }

    });
    console.log('containedPairs:', containedPairs);

    let anyOverlapPairs = 0;
    assignmentList.forEach(pair => {
        const [firstLow, firstHigh] = pair[0];
        const [secondLow, secondHigh] = pair[1];

        if (firstHigh >= secondLow && firstLow <= secondHigh) anyOverlapPairs++;
    });
    console.log('anyOverlapPairs', anyOverlapPairs)
};