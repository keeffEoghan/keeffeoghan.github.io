precision highp float;

uniform sampler2D previous;
uniform sampler2D particles;

uniform sampler2D colorMap;

uniform vec4 flowColor;
uniform vec4 baseColor;

uniform vec2 dataRes;
uniform vec2 geomRes;

uniform vec2 viewSize;

uniform float time;
uniform float speedAlpha;
uniform float colorMapAlpha;
uniform float maxSpeed;
uniform float flowDecay;

attribute vec2 uv;

varying vec4 color;


#pragma glslify: map = require(glsl-map)

#pragma glslify: inert = require(../const/inert)
#pragma glslify: tau = require(../const/tau)
#pragma glslify: length2 = require(../utils/length-2)
#pragma glslify: angleToVec = require(../utils/angle-to-vec)
#pragma glslify: preAlpha = require(../utils/pre-alpha)
#pragma glslify: stateAtFrame = require(../state/state-at-frame)


const vec3 flowColorAxis = vec3(tau/3.0, tau*2.0/3.0, tau);

const vec4 minColor = vec4(0.0);
const vec4 maxColor = vec4(1.0);

const vec4 minAlign = vec4(-1.0);
const vec4 maxAlign = vec4(1.0);

void main() {
    vec4 state = stateAtFrame(uv, dataRes, previous, particles);

    if(state.xy != inert) {
        vec2 vel = state.zw/maxSpeed;
        float speedRate = min(length2(vel)/speedAlpha, 1.0);


        // Color map

        vec4 mappedColor = texture2D(colorMap, uv*geomRes/dataRes);
        
        mappedColor.a *= colorMapAlpha;


        // Flow color
        
        vec3 alignRGB = vec3(dot(vel, angleToVec(flowColorAxis.r)),
                dot(vel, angleToVec(flowColorAxis.g)),
                dot(vel, angleToVec(flowColorAxis.b)));

        vec3 flowAlign = map(mix(alignRGB, alignRGB.brg*(1.0-flowDecay),
                    sin(time*flowDecay)),
                minAlign.rgb, maxAlign.rgb, minColor.rgb, maxColor.rgb);


        // Color summation (pre-multiplying alpha so they don't cross over)

        color = preAlpha(mappedColor)+
            preAlpha(flowColor.rgb*flowAlign, flowColor.a)+
            baseColor;

        color = clamp(vec4(color.rgb, color.a*speedRate), minColor, maxColor);


        // Position
        gl_Position = vec4(state.xy*viewSize, 0.0, 1.0);
    }
}
