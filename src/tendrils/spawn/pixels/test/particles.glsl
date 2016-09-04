/**
 * Pick the Highest velocity.
 * Uses the same data structure as the particles.
 */

#pragma glslify: length2 = require(../../../utils/length-2)

float test(vec4 data) {
    return length2(data.zw);
}

#pragma glslify: export(test)
