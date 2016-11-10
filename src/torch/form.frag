precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform sampler2D previous;

uniform vec2 viewSize;
uniform vec2 viewRes;

#pragma glslify: noise = require(glsl-noise/simplex/3d)

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes*viewSize;

    gl_FragColor = texture2D(previous, uv)+
        vec4(vec3(noise(vec3(uv*10000.0, time*0.0001))), 0.01)*dt;
}
