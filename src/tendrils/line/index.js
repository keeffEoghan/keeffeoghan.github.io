/**
 * Draw a line.
 */

/* global Float32Array */

import geom from 'gl-geometry';
import lineNormals from 'polyline-normals';
import shader from 'gl-shader';
import isArray from 'lodash/isArray';

import vert from './index.vert';
import frag from './index.frag';


export const defaults = () => ({
    shader: [vert, frag],
    uniforms: {
        color: [1, 1, 1, 1],
        rad: 0.1,
        viewSize: [1, 1]
    },
    vertNum: 2,
    path: [],
    closed: false
});

export class Line {
    constructor(gl, options) {
        const params = {
            ...defaults(),
            ...options
        };

        this.gl = gl;
        this.uniforms = params.uniforms;

        this.shader = ((isArray(params.shader))?
                shader(gl, ...params.shader)
            :   params.shader);

        this.vertNum = params.vertNum;
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

        const num = this.path.length*this.vertNum;
        const vertSize = ((this.path[0])? this.path[0].length : 0);
        const attr = this.attributes;

        // Initialise new data if needed.
        if(!attr.position || attr.position.length !== num*vertSize) {
            Object.assign(attr, {
                    position: new Float32Array(num*vertSize),
                    normal: new Float32Array(num*vertSize),
                    miter: new Float32Array(num)
                });
        }

        for(let p = 0, pL = this.path.length; p < pL; ++p) {
            const point = this.path[p];
            const [normal, miter] = this.lineNormals[p];

            for(let v = 0, vL = this.vertNum, odd = 1; v < vL; ++v, odd *= -1) {
                const i = (p*vL)+v;

                attr.position.set(point, i*vertSize);
                attr.normal.set(normal, i*vertSize);

                // Flip odd miters
                attr.miter[i] = miter*odd;
            }
        }

        this.geom.attr('position', attr.position, { size: vertSize });
        this.geom.attr('normal', attr.normal, { size: vertSize });
        this.geom.attr('miter', attr.miter, { size: 1 });
    }

    draw(mode = this.gl.TRIANGLE_STRIP, ...rest) {
        this.geom.bind(this.shader);
        Object.assign(this.shader.uniforms, this.uniforms);
        this.geom.draw(mode, ...rest);
    }
}

export default Line;
