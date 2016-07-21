/**
 * @return The screen-space position for a given state position.
 */

vec2 posToScreen(vec2 resolution) {
    // Correct aspect ratio.
    // return vec2(resolution.y/resolution.x, 1.0);
    return resolution/min(resolution.y, resolution.x);
}

vec2 posToScreen(vec2 pos, vec2 resolution) {
    return pos*posToScreen(resolution);
}

#pragma glslify: export(posToScreen)
