/**
 * Pick the Highest velocity.
 * Uses the same data structure as the particles.
 */

#pragma glslify: length2 = require(../../../utils/length-2)

vec4 pick(vec4 current, vec4 next) {
    return ((length2(current.zw) > length2(next.zw))? current : next);
}

#pragma glslify: export(pick)
