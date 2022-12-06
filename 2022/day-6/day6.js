import { day6Input } from './day6-input.js';

export const day6 = () => {
    const dataBufferArray = day6Input.split('');
    let packetSequence = [];
    const packetChecker = new Set();

    const packetFinder = (packetMarkerLength) => {
        packetSequence = [];
        packetChecker.clear();

        for (let i = 0; i < dataBufferArray.length; i++) {
            if (packetSequence.length === packetMarkerLength) {
                packetSequence.forEach(packet => packetChecker.add(packet));
                if (packetChecker.size === packetMarkerLength) {
                    console.log('packetSequence short:', packetSequence.join(''));
                    console.log('Processed packets:', i);
                    return;
                } else {
                    packetChecker.clear();
                    packetSequence.shift();
                }
            }
            packetSequence.push(dataBufferArray[i]);
        }
    }
    packetFinder(4);
    packetFinder(14);
}