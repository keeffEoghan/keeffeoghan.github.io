float length2(in vec2 v) {
    return dot(v, v);
}

float length2(in vec3 v) {
    return dot(v, v);
}

float length2(in vec4 v) {
    return dot(v, v);
}

#pragma glslify: export(length2)