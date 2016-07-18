vec2 angleToPos(in float rad) {
    return vec2(cos(rad), sin(rad));
}

#pragma glslify: export(angleToPos)