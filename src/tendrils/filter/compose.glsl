/**
 * A way to easily compose filter passes on the pixel.
 *
 * @requires {function} a
 * @requires {function} b
 */

vec4 compose(vec2 uv, vec4 pixel) {
    return b(uv, a(uv, pixel));
}

#pragma glslify: export(compose)
