precision highp float;

uniform sampler2D previous;
uniform sampler2D particles;

uniform vec2 dataRes;
uniform vec2 geomRes;

uniform vec2 viewSize;

uniform sampler2D colorMap;
uniform float colorMapAlpha;

uniform vec4 flowColor;
uniform vec4 baseColor;

uniform float time;
uniform float speedLimit;
uniform float flowDecay;

uniform float speedAlpha;

attribute vec2 uv;

varying vec4 color;


/**
 * Pre-generated constants, equivalent to:
 *     flowAxisR: `angleToVec(0)`
 *     flowAxisG: `angleToVec(tau/3.0)`
 *     flowAxisB: `angleToVec(tau*2.0/3.0)`
 */
const vec2 flowAxisR = vec2(1.0, 0.0);
const vec2 flowAxisG = vec2(-0.5000000000000004, -0.8660254037844385);
const vec2 flowAxisB = vec2(-0.4999999999999998, 0.8660254037844387);

const vec4 minColor = vec4(0.0);
const vec4 maxColor = vec4(1.0);

const vec4 minAlign = vec4(-1.0);
const vec4 maxAlign = vec4(1.0);

// @todo Turn some of these `const`s into `uniform`s
const vec2 center = vec2(0.0);
const vec2 fadeRange = vec2(0.2, 1.0);
const vec3 falloff = vec3(fadeRange.x, fadeRange.y, fadeRange.y);


#pragma glslify: map = require(glsl-map)

#pragma glslify: inert = require(../const/inert)
#pragma glslify: length2 = require(../utils/length-2)
#pragma glslify: vignette = require(../filter/vignette)
#pragma glslify: preAlpha = require(../utils/pre-alpha)
#pragma glslify: stateAtFrame = require(../state/state-at-frame)

void main() {
    vec4 state = stateAtFrame(uv, dataRes, previous, particles);

    if(state.xy != inert) {
        vec2 pos = state.xy;
        vec2 vel = state.zw/speedLimit;
        float speedRate = min(length2(vel)/speedAlpha, 1.0);


        // Color map

        vec4 mappedColor = texture2D(colorMap, uv*geomRes/dataRes);

        mappedColor *= colorMapAlpha;


        // Flow color
        
        vec3 alignRGB = vec3(dot(vel, flowAxisR),
                dot(vel, flowAxisG), dot(vel, flowAxisB));

        vec3 flowAlign = map(mix(alignRGB, alignRGB.gbr*(1.0-flowDecay),
                    sin(time*flowDecay)),
                minAlign.rgb, maxAlign.rgb, minColor.rgb, maxColor.rgb);

        vec4 flowAlignedColor = vec4(flowColor.rgb*flowAlign, flowColor.a);


        // Color summation, clamping and pre-multiplying alpha so they don't
        // cross over

        color = clamp(preAlpha(baseColor), minColor, maxColor)+
            clamp(preAlpha(mappedColor), minColor, maxColor)+
            clamp(preAlpha(flowAlignedColor), minColor, maxColor);

        color.a *= speedRate*clamp(vignette(pos, center, 1.0, falloff),
                        fadeRange.x, fadeRange.y);


        // Position
        gl_Position = vec4(pos*viewSize, 0.0, 1.0);
    }
}
