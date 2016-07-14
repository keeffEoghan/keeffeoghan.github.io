/**
 * @requires {function} pick The scoring function, takes 2 vec4, returns 1
 * @requires {const int} samples The number of samples to take
 */

#pragma glslify: noise = require(glsl-noise/simplex/2d)

const vec2 noUV = vec2(-1.0);

/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 */
vec2 bestSample(inout vec4 best, in sampler2D data, in vec2 seed) {
    vec2 bestUV = noUV;

    for(int n = 0; n < samples; ++n) {
        float f = float(n);
        vec2 uv = mod(vec2(noise(vec2(seed.x, f)), noise(vec2(seed.y, f))),
            1.0);
        vec4 value = pick(best, texture2D(data, uv));

        bestUV = ((value == best)? bestUV : uv);
        best = value;
    }

    return bestUV;
}

#pragma glslify: export(bestSample)
