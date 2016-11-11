// @todo Remove duplication

precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D audio;
uniform sampler2D form;

uniform float harmonies;
uniform float attenuate;
uniform float silent;
uniform float spin;

uniform float radius;
uniform float thick;

uniform float formAlpha;
uniform float ringAlpha;

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)

void main() {
    // @note Copied, from here...

    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);
    float angle = mod(posToAngle(pos)+(spin*time), 1.0)/harmonies;


    // The light ring (again)
    float sdf = clamp(abs(dist-radius)-thick, 0.0, 1.0);

    // Light attenuation
    // @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
    // float fade = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
    // float fade = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
    // float fade = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
    float fade = 1.0/sdf/sdf;
    // float fade = 1.0/sdf;


    // Sound
    float sound = fade*max(abs(sampleSound(audio, angle).x), silent);

    // @note ...until here
    sound *= attenuate;


    // Accumulate color

    // vec4 light = vec4(hsv2rgb(vec3(angle, 0.8, 0.7)), sound);
    vec4 ring = vec4(sound);
    vec4 ambient = vec4(hsv2rgb(vec3(angle, 0.8, 0.7)), 1.0);
    vec4 geom = texture2D(form, uv);

    vec4 color = (ring*ringAlpha)+(geom*formAlpha*ambient);
    // vec4 color = (light*ringAlpha)+(geom*formAlpha*light);
    // vec4 color = geom*light;

    gl_FragColor = color;
}
