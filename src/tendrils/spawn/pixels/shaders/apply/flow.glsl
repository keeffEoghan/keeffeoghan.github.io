/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the flow.
 *
 * @todo Time decay
 */
vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    return vec4(pos, pixel.xy);
}

#pragma glslify: export(apply)
