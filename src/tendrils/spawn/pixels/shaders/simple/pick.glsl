/**
 * The score is encoded directly in the `x` channel.
 */
vec4 pick(vec4 current, vec4 next) {
    return ((current.x > next.x)? current : next);
}

#pragma glslify: export(pick)
