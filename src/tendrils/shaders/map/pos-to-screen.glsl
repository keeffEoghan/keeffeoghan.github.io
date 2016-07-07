/**
 * @return The screen-space position for a given state position.
 */
vec2 posToScreen(in vec2 pos, in vec2 resolution) {
    // Correct aspect ratio.
    // @todo Constrain to minimum dimension?
    return vec2(pos.x/resolution.x*resolution.y, pos.y);
}

#pragma glslify: export(posToScreen)
