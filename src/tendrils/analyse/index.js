/**
 * Interpret useful info (velocity, higher order) from an array of data (for
 * example, a `web-audio-analyser` audio analysis).
 */

/* global Uint8Array */

import { eulerDyDt } from '../physics/euler';
import { mapList } from '../../fp/map';
import { reduceList } from '../../fp/reduce';
import { step } from '../../utils';


// Use them to derive higher-order info (velocity, acceleration, force, jerk...)

export const logRates = (last, current, dt, out = new Uint8Array(last.length)) =>
    mapList((v, i) => eulerDyDt(v, current[i], dt), last, out);

/**
 * Put the rates of change of the previous (lower) order of data into the next
 * (higher) order of data, for each order.
 *
 * @see `makeOrderLog` in `../data-log/`.
 */
export function orderLogRates(orderLog, dt = 1) {
    for(let o = 1, oL = orderLog.length; o < oL; ++o) {
        logRates(orderLog[o-1][1], orderLog[o-1][0], dt, step(orderLog[o]));
    }

    return orderLog;
}


// Interpret from that info.

export const peak = (data) =>
    reduceList((max, v) => ((Math.abs(v) > Math.abs(max))? v : max), data, 0);

export const peakPos = (data) => reduceList((max, v, i) => {
        if(Math.abs(v) > Math.abs(max.peak)) {
            max.peak = v;
            max.pos = i;
        }

        return max;
    },
    data,
    {
        peak: 0,
        pos: -1
    });

export const sum = (data) => reduceList((sum, v) => sum+Math.abs(v), data, 0);

export const weightedSum = (data, fulcrum = 0.5) =>
    reduceList((sum, v, i) =>
            sum+Math.abs(v*(1-Math.abs((i/(data.length-1))-fulcrum))),
        data, 0);

export const mean = (data) => sum(data)/data.length;

export const weightedMean = (data, fulcrum = 0.5) =>
    weightedSum(data, fulcrum)/data.length;
