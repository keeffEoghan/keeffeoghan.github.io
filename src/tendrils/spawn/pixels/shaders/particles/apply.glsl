/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the particles.
 */
vec4 apply(vec2 uv, vec2 pos, vec4 data) {
    return vec4(pos, data.zw);
}

#pragma glslify: export(apply)
