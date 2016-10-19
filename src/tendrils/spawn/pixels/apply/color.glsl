/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 *
 * @requires {float} time The current time
 */

#pragma glslify: rgb2hsv = require(../../../../../libs/glsl-hsv/rgb-hsv)

#pragma glslify: tau = require(../../../const/tau)
#pragma glslify: angleToVec = require(../../../utils/angle-to-vec)

vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    vec3 hsv = rgb2hsv(pixel.rgb);

    return vec4(pos, angleToVec((hsv.r+(time*0.0001))*tau)*hsv.g*hsv.b*pixel.a);
}

#pragma glslify: export(apply)
