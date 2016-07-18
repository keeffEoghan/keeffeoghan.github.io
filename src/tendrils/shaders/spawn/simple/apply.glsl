/**
 * The velocity is encoded directly in the `yz` channel.
 */
vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos, state.yz);
}

#pragma glslify: export(apply)
