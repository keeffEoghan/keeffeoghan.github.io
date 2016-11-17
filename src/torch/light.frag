precision highp float;

uniform float time;
// @todo Use dt against audio rates?
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D audio;

uniform float peak;
uniform float peakPos;
uniform float mean;

uniform float frequencies;
uniform float harmonies;
uniform float silent;
uniform float soundSmooth;
uniform float soundWarp;

uniform float noiseWarp;
uniform float noiseSpeed;
uniform float noiseScale;

uniform float spin;

uniform float ringRadius;
uniform float ringThick;
uniform float ringAlpha;

uniform float otherRadius;
uniform float otherThick;
uniform float otherEdge;
uniform float otherAlpha;

uniform float triangleRadius;
uniform float triangleFat;
uniform float triangleEdge;
uniform float triangleAlpha;

uniform float staticScale;
uniform float staticSpeed;
uniform float staticShift;
uniform float staticAlpha;

// @todo Noise in form as well?
#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)

#pragma glslify: posToAngle = require(./pos-to-angle)

#pragma glslify: sampleSound = require(./sample-sound)
#pragma glslify: sdfCircle = require(./sdf/circle)
#pragma glslify: sdfTriangle = require(./sdf/triangle)

const vec3 mid = vec3(0.0);

float attenuate(float sdf) {
    // @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
    return 1.0/sdf/sdf;
}

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);
    float angle = abs(mod(posToAngle(pos)+(spin*time), 1.0)/harmonies);

    float frequencyOffset = 1.0/frequencies;

    float soundKernel = sampleSound(audio, angle).x+
        (sampleSound(audio, angle-frequencyOffset).x*soundSmooth)+
        (sampleSound(audio, angle+frequencyOffset).x*soundSmooth);

    float sound = abs(soundWarp*soundKernel/(1.0+(2.0*soundSmooth)))+silent;

    float noiseTime = time*noiseSpeed;


    // The light ring

    float warp = (mean*sound)+
        (noise(vec3(pos*(1.0+noiseScale), noiseTime))*noiseWarp);

    float ringSDF = clamp(abs(dist-ringRadius-warp)-ringThick, 0.0, 1.0)/sound;


    // Other circle

    vec2 otherPos = vec2(noise(vec3(peakPos, peak+noiseTime, mean)),
            noise(vec3(peakPos+0.972, peak+noiseTime+0.234, mean+0.3785)));

    float otherRad = otherRadius*length(otherPos)*peakPos;

    float otherSDF = clamp(abs(sdfCircle(pos, otherPos, otherRad))-
                abs(otherThick*mean),
            0.0, 1.0)/
        step(otherEdge, abs(peak));


    // Triangle

    vec3 tri1 = vec3(noise(vec3(peak+dt+0.879, peakPos-noiseTime+0.822,
                peak-peakPos+0.545)),
            noise(vec3(peak+0.882, peakPos+noiseTime+0.354,
                peak+peakPos+0.455)),
            0.0);

    vec3 tri2 = vec3(noise(vec3(peak+dt+0.227, peakPos+noiseTime+0.822,
                peak+peakPos+0.092)),
            noise(vec3(peak-dt+0.192, peakPos-noiseTime+0.277,
                peak-peakPos+0.304)),
            0.0);

    float triRad = mean*triangleRadius;

    float triangleSDF = sdfTriangle(vec3(pos, 0.0), mid, tri1*triRad,
            mix(tri1, tri2*triRad, triangleFat*(1.0-peakPos)))/
        step(triangleEdge, abs(peak));


    // "TV static" background
    float background = noise(vec3(uv*staticScale,
            (mean*staticShift)+(time*staticSpeed)));


    // Accumulate
    gl_FragColor = vec4(max(0.0, attenuate(ringSDF)*ringAlpha)+
            (attenuate(otherSDF)*otherAlpha)+
            (attenuate(triangleSDF)*triangleAlpha)+
            (background*staticAlpha));
}
