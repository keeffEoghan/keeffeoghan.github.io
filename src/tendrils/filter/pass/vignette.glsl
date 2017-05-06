/**
 * @requires {vec2} mid The center of the vignette
 * @requires {float} limit The radius of the vignette
 * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff
 */

#pragma glslify: vignette = require(../vignette)

vec4 pass(vec2 uv, vec4 pixel) {
    return pixel*vignette(uv, mid, limit, curve);
}

#pragma glslify: export(pass)
