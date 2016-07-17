/**
 * @requires {function} pick The scoring function, takes 2 vec4, returns 1
 * @requires {const int} samples The number of samples to take
 */

#pragma glslify: random = require(glsl-random)

const vec2 nullUV = vec2(-1.0);

/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 */

vec2 bestSample(inout vec4 best, in vec2 bestUV, in sampler2D data) {
    for(int n = 0; n < samples; ++n) {
        float f = float(n);
        vec2 uv = mod(vec2(random(vec2(best.xy*f)), random(vec2(best.zw*f))),
                1.0);
        vec4 value = pick(best, texture2D(data, uv));

        bestUV = ((value == best)? bestUV : uv);
        best = value;
    }

    return bestUV;
}

vec2 bestSample(inout vec4 best, in sampler2D data) {
    return bestSample(best, nullUV, data);
}

#pragma glslify: export(bestSample)
