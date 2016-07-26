/**
 * Draw a line.
 */

/* global Float32Array */

import geom from 'gl-geometry';
import lineNormals from 'polyline-normals';
import shader from 'gl-shader';
import triangle from 'a-big-triangle';
import isArray from 'lodash/isArray';

import vert from './index.vert';
import frag from './index.frag';

// @todo Do this for all the defaults and similar static objects!
export const defaults = () => ({
    shader: [vert, frag],
    uniforms: {
        color: [0, 0, 0, 1],
        weight: 0.1
    },
    vertsPerPoint: 2,
    path: [],
    closed: false
});

export class Line {
    constructor(gl, options) {
        const params = {
                ...defaults,
                ...options
            };

        this.gl = gl;
        this.uniforms = params.uniforms;

        this.shader = ((isArray(params.shader))?
                shader(gl, ...params.shader)
            :   params.shader);

        this.vertsPerPoint = params.vertsPerPoint;
        this.path = [...params.path];
        this.closed = params.closed;

        this.attributes = {
            position: null,
            normal: null,
            miter: null
        };

        this.geom = geom(gl);

        this.update();
    }

    update(path = this.path, closed = this.closed) {
        this.path = path;
        this.closed = closed;
        this.lineNormals = lineNormals(this.path, this.closed);

        if(this.closed) {
            this.path.push(this.path[0]);
            this.lineNormals.push(this.lineNormals[0]);
        }

        const num = this.path.length*this.vertsPerPoint;
        const attr = this.attributes;

        // Initialise new data if needed.
        if(!attr.position || attr.position.length !== num*2) {
            Object.assign(attr, {
                    position: new Float32Array(num*2),
                    normal: new Float32Array(num*2),
                    miter: new Float32Array(num)
                });
        }

        for(let p = 0, pL = this.path.length; p < pL; ++p) {
            const point = this.path[p];
            const lineNormals = this.lineNormals[p];
            const normal = lineNormals[0];
            const miter = lineNormals[1];

            for(let v = 0, vL = this.vertsPerPoint; v < vL; ++v) {
                const i = p+v;
                const flipOdd = (i*2)-1;

                attr.position.set(point, i*2);
                attr.normal.set(normal, i*2);
                attr.miter.set(miter*flipOdd, i);
            }
        }

        this.geom.attr('position', attr.position, { size: 2 });
        this.geom.attr('normal', attr.normal, { size: 2 });
        this.geom.attr('miter', attr.miter, { size: 1 });
    }

    draw() {}
}

export default Line;
