#pragma glslify: length2 = require(./length-2)
#pragma glslify: eps = require(../const/epsilon)


bool nilish(in float v) {
    return (v*v <= eps);
}

bool nilish(in vec2 v) {
    return (length2(v) <= eps);
}

bool nilish(in vec3 v) {
    return (length2(v) <= eps);
}

bool nilish(in vec4 v) {
    return (length2(v) <= eps);
}

#pragma glslify: export(nilish)
