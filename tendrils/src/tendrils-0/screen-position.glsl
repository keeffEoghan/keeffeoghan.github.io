/**
 * @return The screen-space position for a given state position.
 */
vec4 screenPosition(in vec2 position, in vec2 resolution) {
    // Correct aspect ratio.
    // @todo Constrain to minimum dimension?
    position.x *= resolution.y/resolution.x;

    return vec4(position, 1, 1);
}

#pragma glslify: export(screenPosition)
