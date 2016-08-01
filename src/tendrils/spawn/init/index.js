import shader from 'gl-shader';
import isArray from 'lodash/isArray';

import vert from '../../screen/index.vert';
import frag from './index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    uniforms: null
});

export const spawner = (gl, options) => {
    const params = {
        ...defaults(),
        ...options
    };

    return {
        gl,
        uniforms: params.uniforms,

        shader: ((isArray(params.shader))?
                shader(gl, ...params.shader)
            :   params.shader),

        respawn(tendrils) {
            tendrils.respawnShader(this.shader, this.uniforms);
        }
    };
};

export default spawner;
