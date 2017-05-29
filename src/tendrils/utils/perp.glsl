vec2 perp(vec2 vec) {
    return vec2(-vec.y, vec.x);
}

vec2 perp(vec2 vec, bool anti) {
    return ((anti)? vec2(vec.y, -vec.x) : perp(vec));
}

#pragma glslify: export(perp)
