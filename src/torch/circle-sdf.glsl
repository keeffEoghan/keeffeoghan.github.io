float sdf(vec2 pos, float radius) {
    return length(pos)-radius;
}

#pragma glslify: export(sdf)
