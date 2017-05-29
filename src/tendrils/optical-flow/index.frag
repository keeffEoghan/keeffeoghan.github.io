/**
 * @see https://forum.openframeworks.cc/t/ofxflowtools-optical-flow-fluid-dynamics-and-particles-in-glsl/15470
 * @see https://github.com/moostrik/ofxFlowTools
 * @see https://github.com/diwi/PixelFlow
 * @see http://thomasdiewald.com/blog/?p=2766
 * @see https://adamferriss.com/gush/
 * @see https://github.com/princemio/ofxMIOFlowGLSL/blob/master/src/FlowShader.cpp
 */

precision highp float;

uniform sampler2D view;
uniform sampler2D last;

uniform vec2 viewSize;

uniform float offset;
uniform float lambda;

uniform float time;
uniform float speed;
uniform float speedLimit;

varying vec2 uv;

#pragma glslify: bezier = require(../utils/bezier)

#pragma glslify: grayScale = require(../utils/gray-scale)
#pragma glslify: flow = require(../flow/apply/state, time = time)
#pragma glslify: posToUV = require(../map/pos-to-uv)

const vec2 zero = vec2(0.0);
const vec2 flipUV = vec2(-1.0);
const vec3 falloff = vec3(0.0, 0.0, 1.0);
/*
vec4 mapColor(vec2 vec, vec2 scale) {
    vec2 x = vec2(max(vec.x, 0.0), abs(min(vec.x, 0.0)))*scale.x;
    vec2 y = vec2(max(vec.y, 0.0), abs(min(vec.y, 0.0)))*scale.y;

    float dirY = ((y.x > y.y)? 0.9 : 1.0);

    return vec4(x.xy, max(y.x, y.y), dirY);
}*/

#if 1
    vec4 pixel(sampler2D texture, vec2 uv) {
        return grayScale(texture2D(texture, uv));
    }
#else
    vec4 pixel(sampler2D texture, vec2 uv) {
        return texture2D(texture, uv);
    }
#endif

void main() {
    vec2 st = posToUV(uv*flipUV/viewSize);

    vec2 offsetX = vec2(offset, 0.0);
    vec2 offsetY = vec2(0.0, offset);

    // Gradient

    vec4 gradX = (pixel(view, st+offsetX)-pixel(view, st-offsetX))+
        (pixel(last, st+offsetX)-pixel(last, st-offsetX));

    vec4 gradY = (pixel(view, st+offsetY)-pixel(view, st-offsetY))+
        (pixel(last, st+offsetY)-pixel(last, st-offsetY));

    vec4 gradMag = sqrt((gradX*gradX)+(gradY*gradY)+vec4(lambda));

    // Difference
    vec4 diff = pixel(view, st)-pixel(last, st);

    // vec2 vec = vec2((diff*(gradX/gradMag)).x, (diff*(gradY/gradMag)).x);

    // gl_FragColor = mapColor(vec, scale);

    vec2 vec = vec2((diff*(gradX/gradMag)).x, (diff*(gradY/gradMag)).x)*speed;

    gl_FragColor = flow(bezier(falloff, length(vec)/speedLimit)*vec, speedLimit);
}
