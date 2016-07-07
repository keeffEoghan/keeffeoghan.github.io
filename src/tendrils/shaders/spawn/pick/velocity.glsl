vec4 pick(in vec4 a, in vec4 b) {
    return ((dot(a.yz, a.yz) > dot(b.yz, b.yz))? a : b);
}

#pragma glslify: export(pick)
