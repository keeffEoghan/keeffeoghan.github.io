float length2(vec2 v) {
    return dot(v, v);
}

float length2(vec3 v) {
    return dot(v, v);
}

float length2(vec4 v) {
    return dot(v, v);
}

#pragma glslify: export(length2)