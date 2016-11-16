precision highp float;

#pragma glslify: import(./head)

uniform sampler2D audio;
uniform sampler2D form;

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

uniform float attenuate;

uniform float spin;

uniform float radius;
uniform float thick;

uniform float otherRadius;
uniform float otherThick;
uniform float otherEdge;

uniform float triangleRadius;
uniform float triangleFat;
uniform float triangleEdge;

uniform float formAlpha;
uniform float ringAlpha;

uniform float staticScale;
uniform float staticSpeed;
uniform float staticAlpha;

uniform vec4 ambient;
uniform vec4 emit;

const vec3 mid = vec3(0.0);

// @todo Noise in form as well?
#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: posToAngle = require(./pos-to-angle)

#pragma glslify: sampleSound = require(./sample-sound)
#pragma glslify: sdfCircle = require(./sdf/circle)
#pragma glslify: sdfTriangle = require(./sdf/triangle)

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);
    float angle = abs(mod(posToAngle(pos)+(spin*time), 1.0)/harmonies);

    float frequencyOffset = 1.0/frequencies;

    float soundKernel = sampleSound(audio, angle).x+
        (sampleSound(audio, angle-frequencyOffset).x*soundSmooth)+
        (sampleSound(audio, angle+frequencyOffset).x*soundSmooth);

    float amp = max(abs(soundKernel/(1.0+(2.0*soundSmooth))), silent);

    float noiseTime = time*noiseSpeed;


    // The light ring

    float warp = (mean*amp*soundWarp)+
        (noise(vec3(pos*(1.0+noiseScale*(0.3+peak)), noiseTime))
            *noiseWarp*(0.3+mean));

    float ringSDF = clamp(abs(dist-radius-warp)-thick, 0.0, 1.0)/amp;


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

    float triSDF = sdfTriangle(vec3(pos, 0.0), mid, tri1*triRad,
            mix(tri1, tri2*triRad, triangleFat*(1.0-peakPos)))/
        step(triangleEdge, abs(peak));


    // Closest

    float sdf = min(min(ringSDF, otherSDF), triSDF);

    // Light attenuation
    // @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
    // float fade = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
    // float fade = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
    // float fade = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
    float fade = 1.0/sdf/sdf;
    // float fade = 1.0/sdf;


    // Sound
    float sound = fade;


    // Accumulate color

    vec4 ring = vec4(sound*attenuate);

    vec4 geom = texture2D(form, uv);

    vec4 background = vec4(noise(vec3(uv*noiseScale*staticScale,
            mean*noiseTime*dt*staticSpeed)));

    // vec4 color = ring*emit*ringAlpha;
    // vec4 color = geom*ambient*formAlpha;

    vec4 color = (ring*emit*ringAlpha)+
            (geom*ambient*formAlpha)+
            (background*staticAlpha);

    gl_FragColor = color;
}
