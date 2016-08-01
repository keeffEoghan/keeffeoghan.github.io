vec2 perp(vec2 vec) {
    return vec2(-vec.y, vec.x);
}

#pragma glslify: export(perp)