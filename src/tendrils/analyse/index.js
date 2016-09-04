/**
 * Interpret useful info (velocity, higher order) from an array of data (for
 * example, a `web-audio-analyser` audio analysis).
 */

/* global Uint8Array */

import { eulerDyDt } from '../physics/euler';
import { map, reduce } from '../../fp';


// Use them to derive higher-order info (velocity, acceleration, force, jerk...)

export const rate = (last, current, dt, out = new Uint8Array(last.length)) =>
    map((v, i) => eulerDyDt(v, current[i], dt), last, out);


// Interpret from that info.

export const peak = (data) =>
    reduce((max, v) => Math.max(Math.abs(v), max), data, -1);

export const peakPos = (data) => reduce((max, v, i) => {
        let h = Math.abs(v);

        if(h > max.peak) {
            max.peak = h;
            max.pos = i;
        }

        return max;
    },
    data,
    {
        peak: -1,
        pos: -1
    });

export const sum = (data) => reduce((sum, v) => sum+v, data, 0);

export const weightedSum = (data, fulcrum) =>
    reduce((sum, v, i) => sum+(v*(1-(Math.abs(i-fulcrum)/(data.length-1)))),
        data, 0);

export const mean = (data) => sum(data)/data.length;

export const weightedMean = (data, fulcrum) =>
    weightedSum(data, fulcrum)/data.length;
