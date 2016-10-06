/**
 * A timeline, time-sorted keyframes compatible with (but not dependent on)
 * `./tween`.
 */

import clamp from 'clamp';
import isNumber from 'lodash/isNumber';

import each from '../../fp/each';


export const makeFrame = (to, time, ease) => ({ to, time, ease });

export const fromTo = (start, to, duration, offset = 0, ...rest) => [
        makeFrame(start, offset),
        makeFrame(to, offset+duration, ...rest)
    ];

export const order = (a, b) => a.time-b.time;
export const sort = (frames) => frames.sort(order);

export const range = (a, b) => [Math.min(a, b), Math.max(a, b)];

export const offset = (a, b, time) => {
    const [min, max] = range(a.time, b.time);

    return clamp((time-min)/(max-min), 0, 1);
};

export const within = (a, b, time) => {
    const [min, max] = range(a.time, b.time);

    return (min < time && time <= max);
};

/**
 * An always time-sorted array of frames.
 */
export class Timeline {
    constructor(frames, symmetric = true) {
        this.frames = this.setup(frames);

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
    }


    // Keyframes - changing and ordering

    setup(frames = []) {
        return this.frames = sort([...frames]);
    }

    add(frame, ...rest) {
        if(rest.length) {
            return this.add(makeFrame(frame, ...rest));
        }
        else {
            const next = this.frames.findIndex((f) => order(f, frame) > 0);
            const f = ((next < 0)? this.frames.length : next-1);

            this.frames.splice(f, 0, frame);

            return f;
        }
    }

    addSpan(duration, ...rest) {
        const f = this.add(...rest);

        if(duration) {
            this.add(null, this.frames[f].time-duration);
        }

        return f;
    }

    splice(frames) {
        return each((frame) => this.add(frame), frames);
    }


    // Playback - changing state

    seek(time) {
        if(this.valid() && within(this.span.a, this.span.b, time)) {
            this.span.t = offset(this.span.a, this.span.b, time);
        }
        else {
            this.setSpanGapAt(time);
        }

        return this.span;
    }

    // Same as above, but accumulates any skipped frames into the `span`'s `b`,
    // if we're dealing with an animation of multiple properties.
    play(time) {
        const gap0 = Math.max(this.gap, 0.5);
        const t0 = ((this.span)? this.span.t : 0);

        let span = this.seek(time);

        if(this.valid() && !isNumber(span.b)) {
            const apply = {};

            const passed = this.gap-gap0;
            const skipped = Math.abs(passed);

            if(skipped > 0) {
                const dir = Math.sign(passed);
                const side = ((dir < 0)? Math.floor : Math.ceil);

                for(let f = 0; f < skipped; ++f) {
                    Object.assign(apply, this.frames[side(gap0+(f*dir))].to);
                }
            }

            if(this.gap < 1 && span.t < t0 && span.t <= 0) {
                Object.assign(apply, this.frames[0].to);
            }
            else if(this.gap > this.frames.length-2 &&
                    span.t > t0 && span.t >= 1) {
                Object.assign(apply, this.frames[this.frames.length-1].to);
            }

            span = {
                ...span,
                apply
            };
        }

        return span;
    }

    setSpanGapAt(time) {
        const gap = this.gapAt(time);

        this.span = this.spanGapAt(time, gap, this.span);
        this.gap = gap;
        this.time = time;
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
            let a = this.frames[Math.floor(gap)];
            let b = this.frames[Math.ceil(gap)];

            if(!this.symmetric && time < this.time) {
                let swap = a;

                a = b;
                b = swap;
            }

            out.a = a.to;
            out.b = b.to;
            out.t = offset(a, b, time);
            out.ease = b.ease;
        }
        else {
            out = undefined;
        }

        return out;
    }

    valid(gap = this.gap, span = this.span) {
        return (gap > 0 && span);
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

    within(time) {
        return ((this.frames.length < 2)?
                false
            :   within(this.frames[0], this.frames[this.frames.length-1], time));
    }
}


export default Timeline;
