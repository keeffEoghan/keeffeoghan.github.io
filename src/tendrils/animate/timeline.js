/**
 * A timeline, time-sorted keyframes compatible with (but not dependent on)
 * `./tween`.
 */

import clamp from 'clamp';
import isNumber from 'lodash/isNumber';

import each from '../../fp/each';
import filter from '../../fp/filter';
import iterable from '../../fp/iterable';


export function makeFrame(to, time, ease, call) {
    return ((arguments.length > 1)? { to, time, ease, call } : to);
}

export const order = (a, b) => ((a.time > b.time)? 1 : -1);
export const sort = (frames) => frames.sort(order);

export const offset = (a, b, time) => {
    const min = Math.min(a.time, b.time);

    return clamp(((time-min)/(Math.max(a.time, b.time)-min) || 0), 0, 1);
};

export const within = (a, b, time) =>
    (Math.min(a.time, b.time) < time && time <= Math.max(a.time, b.time));


export const changed = (past, next) =>
    ((past === next)?
        null
    : ((iterable(past).length && iterable(next).length)?
        filter((v, k) => v !== past[k], next)
    :   next));

const accumulate = (frame, out = {}) => {
    if(!isNumber(frame.to)) {
        out.apply = Object.assign((out.apply || {}), frame.to);
    }

    if(frame.call && frame.call.length) {
        (out.call || (out.call = [])).push(...frame.call);
    }

    return out;
};

/**
 * An always time-sorted array of frames.
 */
export class Timeline {
    constructor(frames, infinite, rewind = false, symmetric = true) {
        this.frames = this.setup(frames, infinite);

        // The playhead: time, current in-between position, and pair of frames
        // on the timeline (if valid).
        this.time = 0;
        this.gap = -1;
        this.span = undefined;

        /**
         * If symmetric, the eases play the same forwards as backwards; the
         * later frame's ease is used.
         * If not, frames are reached by the same ease, forwards or backwards;
         * the destination frame's ease is used.
         */
        this.symmetric = symmetric;

        this.rewind = rewind;
    }


    // Keyframes - changing and ordering

    setup(frames = [], infinite = true) {
        return this.frames = sort((infinite)?
                [{ time: -Infinity }, ...frames, { time: Infinity }]
            :   [...frames]);
    }

    splice(frames) {
        return each((frame) => this.add(frame), frames);
    }

    indexOf(frame) {
        const next = this.frames.findIndex((other) => order(other, frame) > 0);

        return ((next < 0)? this.frames.length : next);
    }

    insertFrame(f, frame) {
        this.frames.splice(f, 0, frame);

        return this;
    }


    // Adding frames (and creating, if needed)

    add(...frame) {
        const adding = makeFrame(...frame);
        const f = this.indexOf(adding);

        this.insertFrame(f, adding);

        return f;
    }

    // Adds a null frame before the added frame, to define the start point of
    // its transition.
    // Note that this will only be correct if the position of this frame or any
    // within `duration` time before don't change.
    addSpan(duration, ...frame) {
        const f = this.add(...frame);
        const t0 = this.frames[f].time-duration;
        const past = this.frames[f-1];

        if(duration && (!past || past.time < t0)) {
            this.add(null, t0);
        }

        return f;
    }


    // Playback - changing state

    seek(time) {
        if(this.valid() && within(this.span.past, this.span.next, time)) {
            this.span.t = offset(this.span.past, this.span.next, time);
        }
        else {
            this.setTime(time);
        }

        return this.span;
    }

    // Same as above, but accumulates any skipped frames into the `span`'s `b`,
    // if we're dealing with an animation of multiple properties.
    play(time) {
        const gap0 = Math.max(this.gap, 0.5);

        let span = this.seek(time);

        if(this.valid()) {
            const accumulated = {};

            const passed = this.gap-gap0;
            const skipped = Math.abs(passed);

            // Accumulate properties of any skipped frames
            if(skipped > 0) {
                const dir = Math.sign(passed);
                const side = ((dir < 0)? Math.floor : Math.ceil);

                for(let f = 0; f < skipped; ++f) {
                    accumulate(this.frames[side(gap0+(f*dir))], accumulated);
                }
            }

            span = {
                ...span,
                ...accumulated
            };
        }

        return span;
    }

    setTime(time) {
        const gap = this.gapAt(time);

        this.span = this.spanGapAt(time, gap, this.span);
        this.gap = gap;
        this.time = time;

        return this;
    }


    // Querying state

    gapAt(time) {
        if(this.frames.length < 2) {
            return -1;
        }
        else {
            const next = this.frames.findIndex((frame) => frame.time > time);

            // Always constrain the gap within the timeline, if the timeline is
            // valid (has 2 or more frames).
            return ((next < 0)? this.frames.length-1 : Math.max(next, 1))-0.5;
        }
    }

    spanGapAt(time, gap = this.gapAt(time), out = {}) {
        if(gap >= 0) {
            let past = this.frames[Math.floor(gap)];
            let next = this.frames[Math.ceil(gap)];
            let ease = next.ease;

            // Swap if we're going in reverse
            if(this.rewind) {
                if(!this.symmetric) {
                    ease = past.ease;
                }

                let swap = past;

                past = next;
                next = swap;
            }

            out.past = past;
            out.next = next;
            out.a = past.to;
            out.b = next.to;
            out.t = offset(past, next, time);
            out.ease = ease;
        }
        else {
            out = undefined;
        }

        return out;
    }

    valid(gap = this.gap, span = this.span) {
        return (gap > 0 && span);
    }

    // Returns the minimum amount of changed data for a given frame, by diffing
    // the frame with the ones adjacent.
    // Note that this will only be correct if the adjacent frames don't change
    // later.
    minFrame(...frame) {
        const full = makeFrame(...frame);
        const f = this.indexOf(full);

        const past = this.frames[f-1];
        const diffPast = ((past && past.to)? changed(past, full.to) : null);

        const next = this.frames[f+1];
        const diffNext = ((next && next.to)? changed(next, full.to) : null);

        const diff = ((iterable(diffPast).length || iterable(diffNext).length)?
                {
                    ...diffPast,
                    ...diffNext
                }
            :   diffPast);

        return {
                ...full,
                to: diff
            };
    }


    // Time

    start() {
        return ((this.frames.length)? this.frames[0].time : 0);
    }

    end() {
        return ((this.frames.length)?
            this.frames[this.frames.length-1].time : 0);
    }

    duration() {
        return this.start()-this.end();
    }
}


export default Timeline;
