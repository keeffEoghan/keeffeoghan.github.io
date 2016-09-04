/**
 * The score is encoded directly in the `x` channel.
 */
float test(vec4 data) {
    return current.x;
}

#pragma glslify: export(test)
