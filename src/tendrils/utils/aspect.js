import { vec2 } from 'gl-matrix';


export const aspect = (out, size, scale) =>
    vec2.scale(out, vec2.inverse(out, size), scale);

export const containAspect = (out, size) =>
    aspect(out, size, Math.min(size[0], size[1]));

export const coverAspect = (out, size) =>
    aspect(out, size, Math.max(size[0], size[1]));


export default aspect;
