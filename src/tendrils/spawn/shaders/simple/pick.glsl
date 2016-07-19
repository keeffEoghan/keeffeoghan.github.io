/**
 * The score is encoded directly in the `x` channel.
 */
vec4 pick(in vec4 a, in vec4 b) {
    return ((a.x > b.x)? a : b);
}

#pragma glslify: export(pick)
