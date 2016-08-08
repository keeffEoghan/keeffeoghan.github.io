/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 */

#pragma glslify: rgb2hsv = require(../../../../../../libs/glsl-hsv/rgb-hsv)

#pragma glslify: tau = require(../../../../shaders/const/tau)
#pragma glslify: angleToPos = require(../../../../shaders/utils/angle-to-pos)

vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    vec3 hsv = rgb2hsv(pixel.rgb);

    return vec4(pos, angleToPos(hsv.r*hsv.g*hsv.b*tau)*hsv.g*hsv.b*pixel.a);
}

#pragma glslify: export(apply)
