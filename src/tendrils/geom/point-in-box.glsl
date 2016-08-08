/**
 * @return 1.0 if the point is in the pox, 0.0 if not.
 */
float pointInBox(vec2 point, vec4 box) {
    vec2 diff = point-clamp(point, box.xy, box.zw);

    return step(dot(diff, diff), 0.0);
}

#pragma glslify: export(pointInBox)
