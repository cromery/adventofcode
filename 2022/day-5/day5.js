import { layout, moveOrder } from './day5-input.js';
import * as helper from '../../helper.js';


export const day5 = () => {
    const cargoData = helper.splitAtLineBreak(layout);
    const cargo = {};

    cargoData.pop().replaceAll(' ', '').split('').forEach(cargoStack => {
        cargo[cargoStack] = [];
    });
    cargoData.forEach(stack => console.log(stack.length))
    // const cargoStacks = cargoData.map(row => row.split(/(?<=\])\s|\s(?=\[)/g)).reverse();
    // console.log(cargoStacks);
    // cargoStacks.forEach(row => row.forEach(subString => {
    //     console.log(subString.length);
    // }))
    // const cargoStacks = cargoData.map(row => row.replaceAll(/(?<=\])\s|\s(?=\[)/g, '')).reverse();
    // console.log(cargoStacks);
    // cargoStacks.forEach(row => {
    //     const rowSplit = row.split('');
    //     console.log(rowSplit);
    // })
    // cargoData.pop().forEach(char => {
    //     if (char === ' ') return;
    //     cargo[char] = [];
    // });
    // const cargoStacks = cargoData.reverse();
    // for (let i = 0; i < cargoStacks.length; i++) {
    //     const row = cargoStacks[i];
    //     let cargoCounter = 9;
    //     let whitespaceCounter = 2;
    //     for (let j = row.length; j > -1; j--) {
    //         if (row[j] === ' ' && whitespaceCounter !== 3) {
    //             whitespaceCounter++;
    //         } else if (row[j] === ' ' && whitespaceCounter === 3) {
    //             whitespaceCounter = 0;
    //             cargoCounter--;
    //         } else if (whitespaceCounter === 3)  {
    //             cargo[cargoCounter].push(row[j])
    //             cargoCounter--;
    //             whitespaceCounter = 0;
    //         }
    //     }
    // }
    // const cargoPart2 = JSON.parse(JSON.stringify(cargo));
    // console.log(cargo);
    // const cargoOrder = helper.splitAtLineBreak(moveOrder);
    // cargoOrder.forEach(order =>  {
    //     const [amount, from, to] = order.match(/\d+/g)
    //     for (let i = 0; i < amount; i++) {
    //         cargo[to].push(cargo[from].pop());
    //     }
    // })
    // console.log('part 1:', Object.values(cargo).map(col => {
    //     return col[col.length-1]
    // }).join(''));

    // cargoOrder.forEach(order =>  {
    //     const [amount, from, to] = order.match(/\d+/g)
    //     if (amount === '1') {
    //         cargoPart2[to].push(cargoPart2[from].pop());
    //     } else {
    //         const inTransit = cargoPart2[from].splice(cargoPart2[from].length - amount);
    //         cargoPart2[to].push(...inTransit);
    //     }
    // });
    // console.log('part 2:', Object.values(cargoPart2).map(col => {
    //     return col[col.length-1]
    // }).join(''));
}