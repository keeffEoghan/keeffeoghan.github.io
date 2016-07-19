/**
 * @requires {function} pick The scoring function, takes 2 vec4, returns 1
 * @requires {const int} samples The number of samples to take
 */

#pragma glslify: random = require(glsl-random)

#pragma glslify: inert = require(../../shaders/const/inert)
#pragma glslify: nilish = require(../../shaders/utils/nilish)

/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 */

vec2 bestSample(in sampler2D data, inout vec4 best, in vec2 bestUV) {
    for(int n = 0; n < samples; ++n) {
        vec2 off = vec2(float(n));
        vec2 uv = mod(vec2(random(best.xz+off), random(best.yw+off)), 1.0);
        vec4 next = pick(best, texture2D(data, uv));

        bestUV = ((nilish(next-best))? bestUV : uv);
        best = next;
    }

    return bestUV;
}

vec2 bestSample(in sampler2D data, inout vec4 best) {
    return bestSample(data, best, inert);
}

#pragma glslify: export(bestSample)
