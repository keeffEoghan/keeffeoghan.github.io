/**
 * @return The screen-space position for a given state position.
 */
vec2 flowAtScreenPosition(in vec2 screenPosition, in sampler2D flow) {
    // Screen -> UV
    return texture2D(flow, (screenPosition+vec2(1.0))*0.5).xy;
}

#pragma glslify: export(flowAtScreenPosition)
