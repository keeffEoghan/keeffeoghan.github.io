vec4 preAlpha(vec3 color, float alpha) {
    return vec4(color.rgb*alpha, alpha);
}

vec4 preAlpha(vec4 color) {
    return preAlpha(color.rgb, color.a);
}

#pragma glslify: export(preAlpha)
