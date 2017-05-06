/**
 * A timeline, time-sorted keyframes compatible with (but not dependent on)
 * `./tween`.
 * Also uses ease-joining from `./join-curve`.
 */

import clamp from 'clamp';

import makeFrame from './frame';
import joinCurve from './join-curve';
import each from '../../fp/each';
import filter from '../../fp/filter';
import iterable from '../../fp/iterable';


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
    out.apply = Object.assign((out.apply || {}), frame.to);

    if(frame.call && frame.call.length) {
        (out.call || (out.call = [])).push(...frame.call);
    }

    return out;
};

/**
 * An always time-sorted array of frames.
 */
export class Timeline {
    constructor(frames, infinite = true, rewind = false, symmetric = true) {
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

        this.infinite = infinite;
        this.rewind = rewind;
    }


    // Keyframes - changing and ordering

    setup(frames = [], infinite = true) {
        // Sandwich between Infinite end frames if needed, to make the timeline
        // always playable
        return this.frames = sort((infinite)?
                [{ time: -Infinity }, ...frames, { time: Infinity }]
            :   [...frames]);
    }

    merge(frames) {
        return each((frame) => this.add(frame), frames);
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
            const dir = Math.sign(passed);
            const onwards = (((this.reverse)? -dir : dir) > 0);

            // Accumulate properties of any skipped frames
            if(skipped > 0 && onwards) {
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

    playFrom(time = this.time, start = 0) {
        this.seek(start);

        return this.play(time);
    }

    setTime(time) {
        const gap = this.gapAt(time);

        this.span = this.spanGapAt(time, gap, this.span);
        this.gap = gap;
        this.time = time;

        return this;
    }


    // Querying state, retrieving frames

    indexOf(frame) {
        const next = this.frames.findIndex((other) => order(other, frame) > 0);

        return ((next < 0)? this.frames.length : next);
    }

    gapAt(time) {
        if(this.frames.length < 2) {
            return -1;
        }
        else {
            const next = this.frames.findIndex((frame) => frame.time >= time);

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


    // Removing frames

    splice(index = 0, num = 0, ...adding) {
        let start = index;
        let remove = num;

        if(this.infinite) {
            // Clamp `start` *between* the 2 Infinite end frames
            const length = Math.max(0, this.frames.length-2);
            const i = ((index < 0)? length+index : index);

            start = Math.min(length, Math.max(1, i));

            // Clamp `remove` below the last Infinite end frame, accommodating
            // any shift in the index clamping above
            remove = Math.min(num-Math.max(start-i, 0), length-start);
        }

        return this.frames.splice(start, remove, ...adding);
    }

    // Remove the frame at the given index
    spliceIndex(index, ...adding) {
        return this.splice(index, 1, ...adding)[0];
    }

    // Remove a frame adjacent to the given time (this accounts for `reverse` in
    // getting the adjacent side, so `-1` is always `previous` to the time)
    spliceAt(time, adjacent = -1, ...adding) {
        const gap = this.gapAt(time);
        const direction = ((this.reverse)? -1 : 1)*adjacent;
        const index = ((direction > 0)? Math.ceil : Math.floor)(gap);

        return this.splice(index, 1, ...adding)[0];
    }

    // Remove the frames within the time span of `start` till `duration`
    spliceSpan(duration, start = 0, ...adding) {
        const a = this.gapAt(start);
        const b = this.gapAt(start+duration);
        const i = Math.min(a, b);

        return this.splice(Math.ceil(i), Math.floor(Math.max(a, b)-i),
                ...adding);
    }


    // Joining new frames to those before

    to(...frame) {
        this.add(...frame);

        return this;
    }

    easeTo(align, ...frame) {
        this.easeJoin(this.add(...frame), align);

        return this;
    }

    smoothTo(...frame) {
        return this.easeTo(1, ...frame);
    }

    flipTo(...frame) {
        return this.easeTo(-1, ...frame);
    }

    over(duration, ...frame) {
        this.addSpan(duration, ...frame);

        return this;
    }

    easeOver(duration, align, ...frame) {
        this.easeJoin(this.addSpan(duration, ...frame), align);

        return this;
    }

    smoothOver(duration, ...frame) {
        return this.easeOver(duration, 1, ...frame);
    }

    flipOver(duration, ...frame) {
        return this.easeOver(duration, -1, ...frame);
    }

    // If there's a previous frame, ease smoothly from it.
    easeJoin(f, align) {
        let ease = null;

        if(f > 0) {
            const frame = this.frames[f];

            ease = ((frame.ease && frame.ease.length)?
                    frame.ease : [0, 1]);

            ease.splice(1, 0, joinCurve(this.frames[f-1].ease, align));
            frame.ease = ease;
        }

        return ease;
    }


    // Etc

    valid(gap = this.gap, span = this.span) {
        return (gap > 0 && span);
    }

    // Returns the minimum amount of changed data for a given frame, by diffing
    // the frame with the ones adjacent.
    // Note that this will only be correct if the adjacent frames don't change
    // later.
    // @todo Split this out to minimise all the frames.
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
        return ((this.frames.length)? this.frames[0].time : null);
    }

    end() {
        return ((this.frames.length)?
            this.frames[this.frames.length-1].time : null);
    }

    duration() {
        return (this.end() || 0)-(this.start() || 0);
    }
}


export default Timeline;
