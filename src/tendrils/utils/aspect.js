import vec2 from 'gl-matrix/src/gl-matrix/vec2';

export const aspect = (out, vec, scale) =>
    vec2.scale(out, vec2.inverse(out, vec), scale);

export const minAspect = (out, vec) =>
    aspect(out, vec, Math.min(vec[0], vec[1]));

export const maxAspect = (out, vec) =>
    aspect(out, vec, Math.max(vec[0], vec[1]));

export default aspect;
