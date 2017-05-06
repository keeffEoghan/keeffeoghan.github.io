// @todo Use 2D SDF instead of 3D with a fake z

float dot2(in vec3 v) {
    return dot(v, v);
}

float sdf(vec3 pos, vec3 a, vec3 b, vec3 c) {
    vec3 ba = b-a;
    vec3 pa = pos-a;
    vec3 cb = c-b;
    vec3 pb = pos-b;
    vec3 ac = a-c;
    vec3 pc = pos-c;

    vec3 nor = cross(ba, ac);

    return sqrt(
        (sign(dot(cross(ba, nor), pa))+
        sign(dot(cross(cb, nor), pb))+
        sign(dot(cross(ac, nor), pc)) < 2.0)?
            min(min(dot2(ba*clamp(dot(ba, pa)/dot2(ba), 0.0, 1.0)-pa), 
                    dot2(cb*clamp(dot(cb, pb)/dot2(cb), 0.0, 1.0)-pb)),
                dot2(ac*clamp(dot(ac, pc)/dot2(ac), 0.0, 1.0)-pc))
        :   dot(nor, pa)*dot(nor, pa)/dot2(nor));
}

#pragma glslify: export(sdf)
