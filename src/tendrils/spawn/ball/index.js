import * as init from '../init';

import frag from './index.frag';

export const defaults = () => ({
    shader: [init.defaults().shader[0], frag],
    uniforms: {
        radius: 1,
        speed: 0
    }
});

export const spawnBall = (gl, options) => init.spawner(gl, {
    ...defaults(),
    ...options
});

export default spawnBall;
