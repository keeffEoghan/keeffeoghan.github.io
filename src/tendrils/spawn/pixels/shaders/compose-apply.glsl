vec4 compose(vec2 uv, vec2 pos, vec4 data) {
    return b(uv, pos, a(uv, pos, data));
}

#pragma glslify: export(compose)
