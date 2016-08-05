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
                    speed: 0.05,
                    maxSpeed: 0.01,
                    rad: 0.1
                },
                attributes: {
                    ...defaults().attributes,
                    previous: { getSize: (line) => line.vertSize },
                    // time: { size: 1 },
                    // dt: { size: 1 }
                },
                ...options
            });

        /**
         * An array of times matching each point in the line path.
         * @type {Array}
         */
        this.times = (options.times || []);
    }

    update(each = this.setAttributes.bind(this)) {
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

        // const time = this.times[index.path];

        // attributes.time.data.set(time, index.data*attributes.time.size);

        // attributes.dt.data.set(time-this.times[prev],
        //     index.data*attributes.dt.size);
    }

    trimOld(ago, now = Date.now()) {
        const oldest = now-ago;
        const times = this.times;
        let t = times.length-1;

        for(let time = now; t >= 0 && time > oldest; --t) {
            time = times[t];
        }

        this.times.splice(0, t);
        this.line.path.splice(0, t);

        return this;
    }
}

export default FlowLine;
