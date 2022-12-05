import { layout } from './day5-input.js';
import * as helper from '../../helper.js';

export const day5 = () => {
    const cargo = helper.splitAtLineBreak(layout).map(row => {
        return row.split('');
    })
    console.log(cargo);
}