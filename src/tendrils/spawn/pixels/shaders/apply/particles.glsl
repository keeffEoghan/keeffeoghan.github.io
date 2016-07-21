/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the particles.
 */
vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    return vec4(pos, pixel.zw);
}

#pragma glslify: export(apply)
