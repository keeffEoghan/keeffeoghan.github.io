#pragma glslify: preAlpha = require(../utils/pre-alpha)

vec4 blend(vec4 sum, vec4 color, float alpha) {
    return sum+preAlpha(color.rgb, color.a*alpha);
}

#pragma glslify: export(blend)
