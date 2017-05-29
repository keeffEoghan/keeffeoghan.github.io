float transform(mat2 m, float v) {
    return (m*vec2(v, 1.0)).x;
}

vec2 transform(mat3 m, vec2 v) {
    return (m*vec3(v, 1.0)).xy;
}

vec3 transform(mat4 m, vec3 v) {
    return (m*vec4(v, 1.0)).xyz;
}

#pragma glslify: export(transform)
