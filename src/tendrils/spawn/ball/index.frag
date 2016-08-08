precision highp float;

uniform float radius;
uniform float speed;

#pragma glslify: random = require(glsl-random)

#pragma glslify: angleToPos = require(../../shaders/utils/angle-to-pos)
#pragma glslify: tau = require(../../shaders/const/tau)

void main() {
    vec4 randoms = vec4(random(gl_FragCoord.xy*1.2+3.4),
        random(gl_FragCoord.xy*5.6+7.8),
        random(gl_FragCoord.xy*8.7+6.5),
        random(gl_FragCoord.xy*4.3+2.1));

    gl_FragColor = vec4(angleToPos(randoms.x*tau)*randoms.y*radius,
        angleToPos(randoms.z*tau)*randoms.w*speed);
}
