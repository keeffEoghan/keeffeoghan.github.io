import * as init from '../init';

import frag from './index.frag';

export const defaults = () => ({
    shader: [init.defaults().shader[0], frag],
    uniforms: {
        radius: 1,
        speed: 0
    }
});

const baseOptions = defaults();

export const spawnBall = (gl, options) =>
    init.spawner(gl, Object.assign(baseOptions, options));

export default spawnBall;
