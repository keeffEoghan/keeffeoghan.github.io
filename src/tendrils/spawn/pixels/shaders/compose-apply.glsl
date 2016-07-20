vec4 compose(in vec2 uv, in vec2 pos, in vec4 data) {
    return b(uv, pos, a(uv, pos, data));
}

#pragma glslify: export(compose)
