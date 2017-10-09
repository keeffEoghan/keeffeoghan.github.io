// @see `./index.js`

import { vec2 } from 'gl-matrix';

export const euler = (out, vel, pos, dt) =>
    vec2.add(out, pos, vec2.scale(out, vel, dt));

export const eulerDyDt = (out, pos0, pos1, dt) =>
    vec2.scale(out, vec2.sub(out, pos1, pos0), 1/dt);

export default euler;
