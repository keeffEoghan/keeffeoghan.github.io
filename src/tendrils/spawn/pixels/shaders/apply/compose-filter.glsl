/**
 * A way to easily compose filter passes on the pixel before applying it.
 *
 * @see `../../../../shaders/filter/`
 * @see `./`
 * @requires {function} pass The filter pass function, given the pixel.
 * @requires {function} pass The apply function, given the result of `pass`.
 */

vec4 compose(vec2 uv, vec2 pos, vec4 pixel) {
    return apply(uv, pos, pass(uv, pixel));
}

#pragma glslify: export(compose)