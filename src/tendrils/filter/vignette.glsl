#pragma glslify: bezier = require(../utils/bezier)


// @todo Remove the `1.0-` here?
float amount(vec2 point, vec2 mid, float limit) {
    return min(1.0-(length(point-mid)/limit), 1.0);
}


float vignette(vec2 point, vec2 mid, float limit) {
    return max(0.0, amount(point, mid, limit));
}

float vignette(vec2 point, vec2 mid, float limit, float curve) {
    return max(0.0, curve*amount(point, mid, limit));
}

float vignette(vec2 point, vec2 mid, float limit, vec2 curve) {
    return max(0.0, bezier(curve, amount(point, mid, limit)));
}

float vignette(vec2 point, vec2 mid, float limit, vec3 curve) {
    return max(0.0, bezier(curve, amount(point, mid, limit)));
}

float vignette(vec2 point, vec2 mid, float limit, vec4 curve) {
    return max(0.0, bezier(curve, amount(point, mid, limit)));
}

#pragma glslify: export(vignette)
