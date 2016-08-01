/**
 * The velocity is encoded directly in the `yz` channel.
 */
vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    return vec4(pos, pixel.yz);
}

#pragma glslify: export(apply)
