/**
 * Blend textures into a target
 */

import shader from 'gl-shader';

import { mapList } from '../../../fp/map';
import Screen from '../';

import vert from '../index.vert';
import frag from './index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    views: [],
    alphas: [],
    resolution: [1, 1]
});

export class Blend {
    constructor(gl, options) {
        this.gl = gl;

        const params = Object.assign(defaults(), options);

        this.shader = ((Array.isArray(params.shader))?
                shader(this.gl, ...params.shader)
            :   params.shader);

        this.screen = new Screen(gl);

        this.views = params.views;
        this.alphas = params.alphas;
        this.resolution = params.resolution;

        this.uniforms = {};
    }

    draw(target, resolution = (target && target.shape), clear = true) {
        if(target) {
            target.bind();
        }

        if(resolution) {
            this.gl.viewport(0, 0, resolution[0], resolution[1]);
            this.resolution = resolution;
        }

        if(clear) {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        }

        this.shader.bind();

        Object.assign(this.shader.uniforms, this.uniforms, {
                views: mapList((view, v) =>
                        ((view.color)? view.color[0] : view).bind(v),
                    this.views, this.uniforms.views),
                alphas: this.alphas,
                resolution: this.resolution
            });

        this.screen.render();

        if(target) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        }
    }
}

export default Blend;
