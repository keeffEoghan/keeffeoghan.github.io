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

    easeTo(align, ...frame) {
        const f = this.timeline.add(...frame);

        // If there's a previous frame, ease smoothly from it.
        if(f > 0) {
            const added = this.timeline.frames[f];

            const ease = ((added.ease && added.ease.length)?
                    added.ease : [0, 1]);

            ease.splice(1, 0, joinCurve(this.timeline.frames[f-1].ease, align));
            added.ease = ease;
        }

        return this;
    }

    smoothTo(...frame) {
        return this.easeTo(1, ...frame);
    }

    flipTo(...frame) {
        return this.easeTo(-1, ...frame);
    }

    play(time, out = {}) {
        const span = this.timeline.play(time);

        if(span.apply) {
            map((v) => ((isFunction(v))? v() : v), span.apply, out);
        }

        return tween(span, out);
    }
}

export default Sequencer;
