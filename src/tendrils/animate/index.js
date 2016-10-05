/**
 * A convenience class that wraps the timeline, tween, and ease-joining
 * utilities into a single package.
 */
import isFunction from 'lodash/isFunction';

import Timeline from './timeline';
import tween from './tween';
import joinCurve from './join-curve';
import map from '../../fp/map';

export class Sequencer {
    constructor(frames) {
        this.timeline = new Timeline(frames);
    }

    play(time, out = {}) {
        const span = this.timeline.play(time);

        if(span) {
            if(this.timeline.within(time)) {
                tween(span, out);
            }

            if(span.apply) {
                map((v) => ((isFunction(v))? v() : v), span.apply, out);
            }
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
        return this.easeOver(1, ...frame);
    }

    flipOver(duration, ...frame) {
        return this.easeOver(-1, ...frame);
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
