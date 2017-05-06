/**
 * Adapted from `bezier`.
 */

float bezier(vec2 cp, float t) {
    return cp.x+(cp.y-cp.x)*t;
}

float bezier(vec3 cp, float t) {
    float ut = 1.0-t;

    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;
}

float bezier(vec4 cp, float t) {
    float ut = 1.0-t;
    float a1 = cp.y*ut+cp.z*t;

    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;
}

#pragma glslify: export(bezier)
