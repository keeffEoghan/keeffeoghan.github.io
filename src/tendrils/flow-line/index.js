/**
 * Draw forms into a tendrils flow FBO.
 *
 * @todo Improve the smoothness of this - currently very uneven and jagged,
 *       especially over short gaps.
 */

import Line, { defaults } from '../geom/line';

import vert from './index.vert';
import frag from './index.frag';

const wrapIndex = (i, l) => ((i < 0)? l+i : i%l);

export class FlowLine {
    constructor(gl, options = {}) {
        this.line = new Line(gl, {
                shader: [vert, frag],
                uniforms: {
                    ...defaults().uniforms,
                    speed: 3,
                    speedLimit: 0.01,
                    rad: 0.1,
                    crestShape: 0.6
                },
                attributes: {
                    ...defaults().attributes,
                    previous: { getSize: (line) => line.vertSize },
                    time: { size: 1 },
                    dt: { size: 1 }
                },
                ...options
            });

        /**
         * An array of times matching each point in the line path.
         * @type {Array}
         */
        this.times = (options.times || []);
    }

    update(setAttributes = this.setAttributes) {
        // @todo Unsure if this makes sense - reconsider closed loop times.
        const drawnTimes = ((this.line.closed && this.line.path.length)?
                this.times.concat(this.times[0]) : this.times);

        this.line.update((...rest) => setAttributes(drawnTimes, ...rest));

        return this;
    }

    draw(...rest) {
        this.line.draw(...rest);

        return this;
    }

    setAttributes(times, values, index, attributes, line) {
        line.setAttributes(values, index, attributes, line);

        const prev = ((line.closed)?
                wrapIndex(index.path-1, line.path.length)
            :   Math.max(0, index.path-1));

        attributes.previous.data.set(line.path[prev],
            index.data*attributes.previous.size);

        const time = times[index.path];

        attributes.time.data[index.data] = time;
        attributes.dt.data[index.data] = time-times[prev];
    }

    add(time, point) {
        this.times.push(time);
        this.line.path.push(point);

        return this;
    }

    insert(time, point) {
        const index = this.findIndex(time);

        this.times.splice(index, 0, time);
        this.line.path.splice(index, 0, point);

        return this;
    }

    at(index, out = {}) {
        out.time = this.times[index];
        out.point = this.line.path[index];

        return out;
    }

    findIndex(time) {
        const next = this.times.findIndex((other) => other > time);

        return ((next < 0)? this.times.length : next);
    }

    /**
     * Remove any path segments older than the given amunt of time ago.
     * Oldest times start at the back (from 0 up) of the path.
     *
     * @param  {Number} ago The amount of time ago (in ms) before which to trim.
     * @param  {Number} now The current time.
     */
    trim(ago, now = Date.now()) {
        const times = this.times;
        const path = this.line.path;

        const oldest = now-ago;

        while(times[0] < oldest) {
            times.shift();
            path.shift();
        }

        return this.length;
    }

    get length() {
        return this.times.length;
    }
}

export default FlowLine;
