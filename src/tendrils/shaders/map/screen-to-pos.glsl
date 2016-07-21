#pragma glslify: posToScreen = require(./pos-to-screen)

/**
 * @return The state position for a given screen-space position.
 */

vec2 screenToPos(vec2 resolution) {
    return 1.0/posToScreen(resolution);
}

vec2 screenToPos(vec2 screen, vec2 resolution) {
    return screen*screenToPos(resolution);
}

#pragma glslify: export(screenToPos)
