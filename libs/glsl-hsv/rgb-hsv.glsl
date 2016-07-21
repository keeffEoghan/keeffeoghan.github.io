const vec4 k = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
const float e = 1.0e-10;

vec3 rgb2hsv(vec3 c) {
    vec4 p = ((c.g < c.b)? vec4(c.bg, k.wz) : vec4(c.gb, k.xy));
    vec4 q = ((c.r < p.x)? vec4(p.xyw, c.r) : vec4(c.r, p.yzx));

    float d = q.x-min(q.w, q.y);

    return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)), d/(q.x+e), q.x);
}

#pragma glslify: export(rgb2hsv)
