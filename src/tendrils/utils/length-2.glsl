float length2(vec2 vec) {
    return dot(vec, vec);
}

float length2(vec3 vec) {
    return dot(vec, vec);
}

float length2(vec4 vec) {
    return dot(vec, vec);
}

#pragma glslify: export(length2)
