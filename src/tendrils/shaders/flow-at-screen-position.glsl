/**
 * @return The screen-space position and age for a given state position.
 */
vec3 flowAtScreenPosition(in vec2 screenPosition, in sampler2D flow) {
    // Screen -> UV
    return texture2D(flow, (screenPosition+vec2(1.0))*0.5).xyz;
}

#pragma glslify: export(flowAtScreenPosition)
