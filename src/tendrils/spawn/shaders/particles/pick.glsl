/**
 * Pick the Highest velocity.
 * Uses the same data structure as the particles.
 */
vec4 pick(in vec4 a, in vec4 b) {
    return ((dot(a.zw, a.zw) > dot(b.zw, b.zw))? a : b);
}

#pragma glslify: export(pick)
