/**
 * The velocity is encoded directly in the `yz` channel.
 */
vec4 apply(vec2 uv, vec2 pos, vec4 data) {
    return vec4(pos, data.yz);
}

#pragma glslify: export(apply)
