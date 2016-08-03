/**
 * Draw forms into a tendrils flow FBO.
 */

import Line, { defaults } from '../geom/line';

import vert from './index.vert';
import frag from './index.frag';

const wrapIndex = (i, l) => ((i < 0)? l+i : i%l);

export class FlowLine {
    constructor(gl, options) {
        this.line = new Line(gl, {
                shader: [vert, frag],
                uniforms: {
                    ...defaults().uniforms,
                    time: 0,
                    // speed: 10000000000,
                    // maxSpeed: 1,
                    speed: 0.05,
                    maxSpeed: 0.01,
                    rad: 0.1
                },
                attributes: {
                    ...defaults().attributes,
                    previous: {
                        getSize: (line) => line.vertSize
                    }
                },
                ...options
            });
    }

    update(path, closed, each = this.setAttributes) {
        this.line.update(path, closed, each);

        return this;
    }

    draw(...rest) {
        this.line.uniforms.time = Date.now();

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
    }
}

export default FlowLine;
