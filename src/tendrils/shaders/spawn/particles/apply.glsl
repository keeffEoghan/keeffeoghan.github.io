/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the particles.
 */
vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos, state.zw);
}

#pragma glslify: export(apply)
