/**
 * A way to easily compose filter passes on the pixel before applying it.
 *
 * @see `../../../filter/`
 * @see `./`
 * @requires {function} pass The filter pass function, given the pixel.
 * @requires {function} apply The apply function, given the result of `pass`.
 */

vec4 compose(vec2 uv, vec2 pos, vec4 pixel) {
    return apply(uv, pos, pass(uv, pixel));
}

#pragma glslify: export(compose)