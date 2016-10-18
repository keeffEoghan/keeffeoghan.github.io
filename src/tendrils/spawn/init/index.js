import shader from 'gl-shader';

import vert from '../../screen/index.vert';
import frag from './index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    uniforms: null
});

export const spawner = (gl, options) => {
    const params = Object.assign(defaults(), options);

    return {
        gl,
        uniforms: params.uniforms,

        shader: ((Array.isArray(params.shader))?
                shader(gl, ...params.shader)
            :   params.shader),

        spawn(tendrils) {
            tendrils.spawnShader(this.shader, this.uniforms);
        }
    };
};

export default spawner;
