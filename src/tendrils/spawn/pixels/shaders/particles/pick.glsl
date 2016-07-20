/**
 * Pick the Highest velocity.
 * Uses the same data structure as the particles.
 */

#pragma glslify: length2 = require(../../../../shaders/utils/length-2)

vec4 pick(in vec4 a, in vec4 b) {
    return ((length2(a.zw) > length2(b.zw))? a : b);
}

#pragma glslify: export(pick)
