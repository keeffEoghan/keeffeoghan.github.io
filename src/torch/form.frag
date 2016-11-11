precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D past;
uniform sampler2D audio;

uniform float harmonies;
uniform float falloff;
uniform float silent;
uniform float grow;
uniform float spin;

uniform float radius;
uniform float thick;

uniform float jitter;

uniform float nowAlpha;
uniform float pastAlpha;

vec3 sampler(vec2 uv) {
    return texture2D(past, uv).rgb;
}

#pragma glslify: blur = require(glsl-hash-blur, sample = sampler, iterations = 3)

#pragma glslify: map = require(glsl-map)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: bezier = require(../tendrils/utils/bezier)
#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)
#pragma glslify: length2 = require(../tendrils/utils/length-2)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)

const vec2 mid = vec2(0.5);
const vec4 curve = vec4(0.0, 0.0, 0.4, 1.0);
const float growLimit = 1.3;

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);
    float angle = mod(posToAngle(pos)+(spin*time), 1.0)/harmonies;


    // The ring
    float sdf = clamp(abs(dist-radius)-thick, 0.0, 1.0);

    // Light attenuation
    // @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
    // float attenuate = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
    // float attenuate = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
    // float attenuate = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
    float attenuate = 1.0/sdf/sdf;
    // float attenuate = 1.0/sdf;


    // Sound
    float sound = attenuate*falloff*
            max(abs(sampleSound(audio, angle).x), silent);


    // Sample and warp the past state
    
    vec2 off = mid-uv;
    float growRate = clamp(bezier(curve, dist/growLimit), 0.0, 1.0);
    vec2 pastUV = uv+(off*grow*dt*(1.0-growRate));

    vec4 old = texture2D(past, pastUV);

    old.rgb = blur(pastUV, jitter*growRate, viewRes.x/viewRes.y, mod(time, 20.0));


    // Accumulate color

    // vec4 color = vec4(sound*nowAlpha)+(old*pastAlpha);
    vec4 color = vec4(clamp(sound*nowAlpha, 0.0, 1.0))+
            clamp(old*pastAlpha, 0.0, 1.0);

    gl_FragColor = color;
    // gl_FragColor = clamp(color, vec4(0.0), vec4(1.0));
}
