/**
 * Draw forms into a tendrils flow FBO.
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
                    maxSpeed: 0.01,
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

        // Drawn properties, derived from the above on `update`.
        this.drawnTimes = null;
    }

    update(each = this.setAttributes.bind(this)) {
        // @todo Unsure if this makes sense - reconsider closed loop times.
        this.drawnTimes = ((this.line.closed && this.line.path.length)?
            this.times.concat(this.times[0]) : this.times);

        this.line.update(each);

        return this;
    }

    draw(...rest) {
        this.line.draw(...rest);

        return this;
    }

    setAttributes(values, index, attributes, line) {
        line.setAttributes(values, index, attributes, line);

        const prev = ((line.closed)?
                wrapIndex(index.path-1, line.path.length)
            :   Math.max(0, index.path-1));

        attributes.previous.data.set(line.path[prev],
            index.data*attributes.previous.size);

        const time = this.drawnTimes[index.path];

        attributes.time.data[index.data] = time;
        attributes.dt.data[index.data] = time-this.drawnTimes[prev];
    }

    /**
     * Remove any path segments older than the given amunt of time ago.
     * Oldest times start at the back (from 0 up) of the path.
     *
     * @param  {Number} ago The amount of time ago (in ms) before which to trim.
     * @param  {Number} now The current time.
     */
    trimOld(ago, now = Date.now()) {
        const times = this.times;
        const path = this.line.path;

        const oldest = now-ago;

        while(times[0] < oldest) {
            times.shift();
            path.shift();
        }

        return this;
    }
}

export default FlowLine;

// Test stuff:
/*
    // path: [[-0.8, 0], [0.8, 0]],
    // path: [
    //     [-0.8, -0.8],
    //     [0.8, -0.8],
    //     [0.8, 0.8],
    //     [-0.8, 0.8],

    //     [-0.8, -0.4],

    //     [-0.4, -0.4],
    //     [-0.4, 0.4],
    //     [0.4, 0.4],
    //     [0.4, -0.4],
    //     [-0.1, -0.4]
    // ],
    // path: Array(20).fill(0).map((v, i, array) => {
    //     const a = i/array.length*Math.PI*2;
    //     const vec = vec2.fromValues(Math.cos(a), Math.sin(a));

    //     return vec2.scale(vec, vec, 0.5);
    // }),
    // closed: true,
    // times: Array(20).fill(0).map((v, i) => 1000+i*500)
*/
