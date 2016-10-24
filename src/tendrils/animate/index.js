/**
 * A convenience class that wraps the timeline and tween utilities.
 * Players and timelines can be combined, nested, and played in parallel.
 */

import Timeline from './timeline';
import tween from './tween';
import each from '../../fp/each';
import reduce from '../../fp/reduce';
import map from '../../fp/map';


export function apply(span, out = {}) {
    if(span) {
        Object.assign(out, span.apply);
        tween(span, out);
        each((f) => f(out, span), span.call);
    }

    return out;
}

export class Player {
    constructor(tracks) {
        // Allow the collection type to be defined elsewhere - any iterable.
        this.tracks = tracks;

        // Convert them in-place into timelines.
        this.add(this.tracks);
    }

    add(tracks) {
        map((track) =>
                ((track instanceof Timeline)? track : new Timeline(track)),
            tracks, this.tracks);

        return this;
    }

    import(players) {
        each((player) => each((track) => this.add(track), player.tracks),
            players);

        return this;
    }

    each(f) {
        each(f, this.tracks);

        return this;
    }

    apply(f, out = {}) {
        this.each((track) => apply(f(track, out), out));

        return this;
    }

    seek(time, out) {
        return this.apply((track) => track.seek(time), out);
    }

    play(time, out) {
        return this.apply((track) => track.play(time), out);
    }

    playFrom(time, start, out) {
        return this.apply((track) => track.playFrom(time, start), out);
    }

    frames(out = []) {
        return map((track) => track.frames, this.tracks, out);
    }


    // @todo Finding a timelines, spans, frames by time

    // Find a timeline by the frame closest to a given time
    // trackAt(time, adjacent = -1) {
    // }

    // Find the frame closest to a given time
    // frameAt(time, adjacent = -1) {
    // }

    // Find the frames within the time span of `start` till `duration`
    // spanAt(duration, start = 0) {
    // }


    // Time

    start() {
        return reduce((start, track) => Math.min(track.start(), start),
                this.tracks, null);
    }

    end() {
        return reduce((end, track) => Math.min(track.end(), end),
                this.tracks, null);
    }

    duration() {
        return (this.end() || 0)-(this.start() || 0);
    }
}

export default Player;
