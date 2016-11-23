float sdf(vec2 pos, vec2 center, float radius) {
    return length(pos-center)-radius;
}

float sdf(vec3 pos, vec3 center, float radius) {
    return length(pos-center)-radius;
}

#pragma glslify: export(sdf)
