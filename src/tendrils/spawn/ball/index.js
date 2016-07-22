import shader from 'gl-shader';

import vert from '../../shaders/screen/index.vert';
import frag from './index.frag';

export default (gl) => ({
    uniforms: {
        radius: 1,
        speed: 0.01
    },

    spawn: shader(gl, vert, frag),
    respawn(tendrils) {
        tendrils.respawnShader(this.spawn, this.uniforms);
    }
});
