/**
 * @return The screen-space position for a given state position.
 */

vec2 posToScreen(in vec2 resolution) {
    // Correct aspect ratio.
    // @todo Constrain to minimum dimension?
    return vec2(resolution.y/resolution.x, 1.0);
}

vec2 posToScreen(in vec2 pos, in vec2 resolution) {
    return pos*posToScreen(resolution);
}

#pragma glslify: export(posToScreen)
