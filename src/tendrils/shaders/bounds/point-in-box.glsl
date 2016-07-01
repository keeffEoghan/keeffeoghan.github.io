/**
 * @return Whether the given point is within the given box.
 */
bool pointInBox(in vec2 point, in vec4 box) {
    return (clamp(point, box.xy, box.zw) == point);
}

#pragma glslify: export(pointInBox)
