/**
 * @return The screen-space position for a given state position.
 */
vec2 screenPosition(in vec2 position, in vec2 resolution) {
    // Correct aspect ratio.
    // @todo Constrain to minimum dimension?
    return vec2(position.x/resolution.x*resolution.y, position.y);
}

#pragma glslify: export(screenPosition)
