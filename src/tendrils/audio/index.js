/* global Uint8Array, Float32Array */

/**
 * High level audio analyser - a way to interpret inputs from audio samples over
 * time, to trigger outputs.
 */

import { step, wrapIndex } from '../../utils';
import each from '../../fp/each';
import makeAudioData from './data';
import { makeLog, makeOrderLog } from '../data-log';
import { orderLogRates, peak } from '../analyse';


export const defaultTest = (trigger) =>
    peak(trigger.dataOrder(-1)) > trigger.limit;

export class AudioTrigger {
    constructor(analyser, orders, limit = 200, test = null, react = null) {
        this.analyser = analyser;

        this.orderLog = makeOrderLog(orders, (size) =>
            makeLog(size, () =>
                makeAudioData(this.analyser,
                    ((size === orders)? Uint8Array : Float32Array))));

        // Not really needed
        this.limit = limit;
        this.test = test;
        this.react = react;
    }

    // Update the sample logs from the analyser.
    sample(dt = 1, method = 'frequencies') {
        this.analyser[method](step(this.orderLog[0]));
        orderLogRates(this.orderLog, dt);

        return this;
    }

    // The most recet sample at the nth-order log. Negative `nth` indexes in
    // reverse (highest-lowest).
    dataOrder(nth) {
        return wrapIndex(nth, this.orderLog)[0];
    }

    // Not relly needed - more a demo than anything.
    // Test if the latest sample breaks the limit to trigger a response.
    fire(react = this.react, test = (this.test || defaultTest)) {
        const triggered = !!test(this);

        if(triggered) {
            react(this);
        }

        return triggered;
    }

    clear() {
        each((log) => each((data) => each((v, i) => data[i] = 0, data), log),
            this.orderLog);
    }
}

export default AudioTrigger;
