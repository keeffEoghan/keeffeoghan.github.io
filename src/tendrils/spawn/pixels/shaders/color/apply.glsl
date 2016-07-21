/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 */

#pragma glslify: rgb2hsv = require(../../../../../../libs/glsl-hsv/rgb-hsv)

#pragma glslify: tau = require(../../../../shaders/const/tau)
#pragma glslify: angleToPos = require(../../../../shaders/utils/angle-to-pos)

vec4 apply(vec2 uv, vec2 pos, vec4 data) {
    vec3 hsv = rgb2hsv(data.rgb);

    return vec4(pos, angleToPos(hsv.r*tau)*hsv.g*hsv.b*data.a);
}

#pragma glslify: export(apply)
