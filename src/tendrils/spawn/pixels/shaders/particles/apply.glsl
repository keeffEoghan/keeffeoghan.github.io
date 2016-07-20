/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the particles.
 */
vec4 apply(in vec2 uv, in vec2 pos, in vec4 data) {
    return vec4(pos, data.zw);
}

#pragma glslify: export(apply)
