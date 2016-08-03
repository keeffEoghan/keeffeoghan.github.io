/**
 * Draw a line.
 */

/* global Float32Array */

import geom from 'gl-geometry';
import lineNormals from 'polyline-normals';
import shader from 'gl-shader';
import forOwn from 'lodash/forOwn';

import vert from './vert/index.vert';
import frag from './frag/index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    uniforms: {
        color: [1, 1, 1, 1],
        rad: 0.1,
        viewSize: [1, 1]
    },
    attributes: null,
    vertNum: 2,
    vertSize: 2,
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

        this.shader = ((Array.isArray(params.shader))?
                shader(gl, ...params.shader)
            :   params.shader);

        this.vertNum = params.vertNum;
        this.vertSize = params.vertSize;

        this.path = [...params.path];
        this.closed = params.closed;

        // Add any new attributes you like according to this structure.
        // See `update`, `initAttributes`, `setAttributes`.
        this.attributes = {
            position: {
                data: null,
                getSize: () => this.vertSize
            },
            normal: {
                data: null,
                getSize: () => this.vertSize
            },
            miter: {
                data: null,
                size: 1
            },
            ...params.attributes
        };

        this.geom = geom(gl);
    }

    update(path = this.path, closed = this.closed, each = this.setAttributes) {
        this.path = path;
        this.closed = closed;
        this.lineNormals = lineNormals(this.path, this.closed);

        if(this.closed) {
            this.path.push(this.path[0]);
            this.lineNormals.push(this.lineNormals[0]);
        }


        this.initAttributes();

        const attributes = this.attributes;
        const values = {};
        const index = {};
        const vertNum = this.vertNum;

        // Set up attribute data
        for(let p = 0, pL = path.length; p < pL; ++p) {
            const lineNormal = this.lineNormals[p];

            values.point = path[p];
            values.normal = lineNormal[0];
            values.miter = lineNormal[1];

            index.path = p;
            index.point = p*vertNum;

            for(let v = 0; v < vertNum; ++v) {
                index.vert = v;
                index.data = index.point+v;

                each(values, index, attributes, this);
            }
        }

        // Bind to geometry attributes
        forOwn(attributes, (attribute, name) =>
            this.geom.attr(name, attribute.data, { size: attribute.size }));

        return this;
    }

    draw(mode = this.gl.TRIANGLE_STRIP, ...rest) {
        this.geom.bind(this.shader);
        Object.assign(this.shader.uniforms, this.uniforms);
        this.geom.draw(mode, ...rest);

        return this;
    }

    initAttributes(path = this.path) {
        const num = path.length*this.vertNum;
        const attributes = this.attributes;

        forOwn(attributes, (attribute) => {
            // Cache any computed sizes.
            if(attribute.getSize) {
                attribute.size = attribute.getSize(this);
            }

            // Initialise new data if needed.
            const length = num*attribute.size;

            if(!attribute.data || attribute.data.length !== length) {
                attribute.data = new Float32Array(length);
            }
        });

        return this;
    }

    setAttributes(values, index, attributes) {
        attributes.position.data.set(values.point,
            index.data*attributes.position.size);

        attributes.normal.data.set(values.normal,
            index.data*attributes.normal.size);

        // Flip odd miters
        attributes.miter.data[index.data] = values.miter*(((index.data%2)*2)-1);
    }
}

export default Line;
