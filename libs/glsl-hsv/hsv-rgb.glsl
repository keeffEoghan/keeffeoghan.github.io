const vec4 k = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);

vec3 hsv2rgb(vec3 c) {
    vec3 p = abs(fract(c.xxx+k.xyz)*6.0-k.www);
    return c.z*mix(k.xxx, clamp(p-k.xxx, 0.0, 1.0), c.y);
}

#pragma glslify: export(hsv2rgb)
