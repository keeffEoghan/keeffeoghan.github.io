/**
 * Draw forms into a tendrils flow FBO.
 */

import Line, { defaults } from '../';

const wrapIndex = (i, l) => ((i < 0)? l+i : i%l);

export default (gl, options) => ({
    line: new Line(gl, {
        uniforms: {
            ...defaults().uniforms,
            time: 0,
            speed: 0,
            maxSpeed: 0
        },
        attributes: {
            ...defaults().attributes,
            previous: { size: 2 }
        },
        ...options
    }),
    update(path, closed, each = this.setAttribute) {
        return this.line.update(path, closed, each);
    },
    setAttribute(values, index, attributes) {
        this.line.setAttribute(values, index, attributes);

        const i = ((this.line.closed)?
                wrapIndex(index.path, this.line.path.length)
            :   Math.max(0, index.path));

        attributes.previous = this.line.path[i];
    }
});
