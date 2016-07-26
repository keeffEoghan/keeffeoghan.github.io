import shader from 'gl-shader';
import isArray from 'lodash/isArray';

import vert from '../../shaders/screen/index.vert';
import frag from './index.frag';

export const defaults = {
    shader: [vert, frag],
    uniforms: null
};

export const spawner = (gl, options = {}) => ({
    gl,
    uniforms: options.uniforms,

    shader: ((isArray(options.shader))?
            shader(gl, ...options.shader)
        :   options.shader),

    respawn(tendrils) {
        tendrils.respawnShader(this.shader, this.uniforms);
    }
});

export default spawner;
