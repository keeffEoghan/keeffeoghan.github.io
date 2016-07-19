float transform(in mat2 m, in float v) {
    return (m*vec2(v, 1.0)).x;
}

vec2 transform(in mat3 m, in vec2 v) {
    return (m*vec3(v, 1.0)).xy;
}

vec3 transform(in mat4 m, in vec3 v) {
    return (m*vec4(v, 1.0)).xyz;
}

#pragma glslify: export(transform)