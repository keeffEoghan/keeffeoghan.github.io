/**
 * @return The screen-space position for a given state position.
 */
vec2 screenPosition(in vec2 position, in vec2 resolution) {
    // Correct aspect ratio.
    // @todo Constrain to minimum dimension?
    position.x *= resolution.y/resolution.x;

    return position;
}

#pragma glslify: export(screenPosition)
