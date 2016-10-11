/**
 * Draw a line.
 */

/* global Float32Array */

import geom from 'gl-geometry';
import lineNormals from 'polyline-normals';
import shader from 'gl-shader';

import each from '../../../fp/each';
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

        this.path = (params.path || []);
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

        // Drawn properties, derived from the above on `update`.
        this.drawnPath = this.drawnNormals = null;

        this.geom = geom(gl);
    }

    update(setAttributes = this.setAttributes) {
        this.drawnPath = this.path;
        this.drawnNormals = lineNormals(this.drawnPath, this.closed);

        if(this.closed && this.path.length) {
            this.drawnPath = this.drawnPath.concat(this.drawnPath[0]);
            this.drawnNormals.push(this.drawnNormals[0]);
        }

        this.initAttributes();

        // Caches
        const drawnPath = this.drawnPath;
        const drawnNormals = this.drawnNormals;
        const attributes = this.attributes;
        const vertNum = this.vertNum;
        const values = {};
        const index = {};

        // Set up attribute data
        for(let p = 0, pL = drawnNormals.length; p < pL; ++p) {
            const pointNormal = drawnNormals[p];

            values.point = drawnPath[p];
            values.normal = pointNormal[0];
            values.miter = pointNormal[1];

            index.path = p;
            index.point = p*vertNum;

            for(let v = 0; v < vertNum; ++v) {
                index.vert = v;
                index.data = index.point+v;

                setAttributes(values, index, attributes, this);
            }
        }

        // Bind to geometry attributes
        each((attribute, name) =>
                this.geom.attr(name, attribute.data, { size: attribute.size }),
            attributes);

        return this;
    }

    draw(mode = this.gl.TRIANGLE_STRIP, ...rest) {
        if(this.path.length > 0) {
            this.geom.bind(this.shader);
            Object.assign(this.shader.uniforms, this.uniforms);
            this.geom.draw(mode, ...rest);
        }

        return this;
    }

    initAttributes() {
        const num = this.drawnPath.length*this.vertNum;

        each((attribute) => {
                // Cache any computed sizes.
                if(attribute.getSize) {
                    attribute.size = attribute.getSize(this);
                }

                // Initialise new data if needed.
                const length = num*attribute.size;

                if(!attribute.data || attribute.data.length !== length) {
                    attribute.data = new Float32Array(length);
                }
            },
            this.attributes);

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
