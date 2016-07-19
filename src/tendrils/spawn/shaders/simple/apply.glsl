/**
 * The velocity is encoded directly in the `yz` channel.
 */
vec4 apply(in vec2 uv, in vec2 pos, in vec4 data) {
    return vec4(pos, data.yz);
}

#pragma glslify: export(apply)
