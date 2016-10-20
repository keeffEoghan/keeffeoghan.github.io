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

    apply(span, out = {}) {
        if(span) {
            Object.assign(out, span.apply);
            tween(span, out);
            each((f) => f(out, span), span.call);
        }

        return out;
    }

    play(time, out) {
        return this.apply(this.timeline.play(time), out);
    }

    playFrom(time, start, out) {
        return this.apply(this.timeline.playFrom(time, start), out);
    }

    to(...frame) {
        this.timeline.add(...frame);

        return this;
    }

    easeTo(align, ...frame) {
        this.easeJoin(this.timeline.add(...frame), align);

        return this;
    }

    smoothTo(...frame) {
        return this.easeTo(1, ...frame);
    }

    flipTo(...frame) {
        return this.easeTo(-1, ...frame);
    }

    easeOver(duration, align, ...frame) {
        this.easeJoin(this.timeline.addSpan(duration, ...frame), align);

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
            const frame = this.timeline.frames[f];

            ease = ((frame.ease && frame.ease.length)?
                    frame.ease : [0, 1]);

            ease.splice(1, 0, joinCurve(this.timeline.frames[f-1].ease, align));
            frame.ease = ease;
        }

        return ease;
    }
}

export default Sequencer;
