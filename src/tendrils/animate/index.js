/**
 * A convenience class that wraps the timeline, tween, and ease-joining
 * utilities into a single package.
 */

import Timeline from './timeline';
import tween from './tween';
import joinCurve from './join-curve';
import each from '../../fp/each';

export class Sequencer {
    constructor(frames) {
        this.timeline = new Timeline(frames);
    }

    play(time, out = {}) {
        const span = this.timeline.play(time);

        if(span) {
            Object.assign(out, span.apply);
            tween(span, out);
            each((f) => f(out, time, span), span.call);
        }

        return out;
    }

    easeTo(align, ...frame) {
        return this.easeJoin(this.timeline.add(...frame), align);
    }

    smoothTo(...frame) {
        return this.easeTo(1, ...frame);
    }

    flipTo(...frame) {
        return this.easeTo(-1, ...frame);
    }

    easeOver(duration, align, ...frame) {
        return this.easeJoin(this.timeline.addSpan(duration, ...frame), align);
    }

    smoothOver(duration, ...frame) {
        return this.easeOver(duration, 1, ...frame);
    }

    flipOver(duration, ...frame) {
        return this.easeOver(duration, -1, ...frame);
    }

    // If there's a previous frame, ease smoothly from it.
    easeJoin(f, align) {
        if(f > 0) {
            const frame = this.timeline.frames[f];

            const ease = ((frame.ease && frame.ease.length)?
                    frame.ease : [0, 1]);

            ease.splice(1, 0, joinCurve(this.timeline.frames[f-1].ease, align));
            frame.ease = ease;
        }

        return this;
    }
}

export default Sequencer;
