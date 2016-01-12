'use strict';

/**
 * A monkey-patched port of [gl-particles](https://github.com/stackgl/gl-particles/blob/master/index.js).
 * Adds support for different draw modes (as opposed to just POINTS) and a more
 * separated FBO and vertex setup (so you can have different-sized buffer and
 * particles data).
 *
 */

import triangle from 'a-big-triangle';
import Geom from 'gl-geometry';
import Shader from 'gl-shader';
import ndarray from 'ndarray';
import FBO from 'gl-fbo';

const logicVert = `
    precision mediump float;
    attribute vec2 position;

    void main() {
        gl_Position = vec4(position, 1, 1);
    }
    `;

function generateLUT(shape) {
    let size = shape[0]*shape[1]*2;
    let data = new Float32Array(size);
    let k = 0;

    const [w, h] = shape;

    for(let i = 0; i < w; ++i) {
        for(let j = 0; j < h; ++j) {
            data[k++] = i/w;
            data[k++] = j/h;
        }
    }

    return data;
}

export default function Particles(gl, options = {}) {
    if(!(this instanceof Particles)) {
        return new Particles(gl, options);
    }

    this.gl = gl;

    if(!options.logic) {
        throw new Error('Please pass in the "logic" shader option');
    }

    if(!options.vert) {
        throw new Error('Please pass in the "vert" shader option');
    }

    if(!options.frag) {
        throw new Error('Please pass in the "frag" shader option');
    }

    // The dimensions of the state data FBOs. Can be 1:1 with the number of
    // particle vertices, or
    this.shape = (options.shape || [64, 64]);
    this.geomShape = (options.geomShape || [...this.shape]);

    this.logic = Shader(gl, logicVert, options.logic);
    this.render = Shader(gl, options.vert, options.frag);

    this.logicVertSource = logicVert;

    this.geom = Geom(gl);
    this.geom.attr('uv', generateLUT(this.geomShape), { size: 2 });

    this.buffers = [];
    this.setupBuffers(options.buffers || 2);
}

Object.assign(Particles.prototype, {
    step: function(update) {
        this.stepBuffers();

        this.buffers[0].bind();
        this.gl.viewport(0, 0, this.shape[0], this.shape[1]);

        this.logic.bind();
        this.logic.uniforms.resolution = this.shape;
        this.logic.uniforms.data = this.buffers[1].color[0].bind(0);

        if(update) {
            update(this.logic.uniforms);
        }

        triangle(this.gl);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    },

    draw: function(update, mode = this.gl.POINTS) {
        this.geom.bind(this.render);
        this.render.uniforms.data = this.buffers[0].color[0].bind(0);

        if(update) {
            update(this.render.uniforms);
        }

        this.geom.draw(mode);
    },

    populate: function(map) {
        let data = new Float32Array(this.shape[0]*this.shape[1]*4);
        let vec4 = new Float32Array(4);
        let i = 0;

        for(let x = 0; x < this.shape[0]; x++) {
            for(let y = 0; y < this.shape[1]; y++) {
                vec4[0] = vec4[1] = vec4[2] = vec4[3] = 0;

                map(x, y, vec4);

                data[i++] = vec4[0];
                data[i++] = vec4[1];
                data[i++] = vec4[2];
                data[i++] = vec4[3];
            }
        }

        let pixels = ndarray(data, [this.shape[0], this.shape[1], 4]);

        this.buffers.forEach((buffer) => buffer.color[0].setPixels(pixels));
    },


    setupBuffers: function(num) {
        let n = 0;

        for(; n < num; ++n) {
            if(!this.buffers[n]) {
                this.buffers[n] = FBO(this.gl, [this.shape[0], this.shape[1]],
                        { float: true });
            }
        }

        while(this.buffers.length > num) {
            this.buffers.pop().dispose();
        }
    },

    stepBuffers: function() {
        this.buffers.unshift(this.buffers.pop());
    },


    setLogicShader: function(logicFrag) {
        this.logic.update(logicVert, logicFrag);
    },

    setRenderShader: function(renderFrag, renderVert) {
        this.render.update(renderVert, renderFrag);
    }
});
