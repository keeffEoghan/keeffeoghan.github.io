// @see `./index.js`

import { vec2 } from 'gl-matrix';

export const verlet = (out, acc, pos0, pos1, dt0, dt1) =>
    vec2.add(out,
        vec2.sub(out, vec2.scale(out, pos1, 2), pos0),
        vec2.scale(out, acc, dt0*(dt1 || dt0)));

export const verletDyDt = (out, pos0, pos1, pos2, dt0, dt1) =>
    vec2.scale(out,
        vec2.add(out, vec2.sub(out, pos2, vec2.scale(out, pos1, 2)), pos0),
        1/dt0/(dt1 || dt0));

export default verlet;
