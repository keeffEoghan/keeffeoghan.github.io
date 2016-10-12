vec2 angleToVec(float rad) {
    return vec2(cos(rad), sin(rad));
}

#pragma glslify: export(angleToVec)
