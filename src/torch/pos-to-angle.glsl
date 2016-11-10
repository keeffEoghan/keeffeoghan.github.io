#pragma glslify: pi = require(../tendrils/const/pi)
#pragma glslify: tau = require(../tendrils/const/tau)

float map(vec2 pos) {
    return (atan(pos.y, pos.x)+pi)/tau;
}

#pragma glslify: export(map)
