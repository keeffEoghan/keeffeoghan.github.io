precision highp float;

uniform float radius;
uniform float speed;

#pragma glslify: random = require(glsl-random)

#pragma glslify: angleToVec = require(../../utils/angle-to-vec)
#pragma glslify: tau = require(../../const/tau)

void main() {
    vec4 randoms = vec4(random((gl_FragCoord.xy*1.7654)+2.3675),
        random((gl_FragCoord.xy*1.23494)+0.36434),
        random((gl_FragCoord.xy*0.327789)+3.498787),
        random((gl_FragCoord.xy*9.0374)+0.2773));

    gl_FragColor = vec4(angleToVec(randoms.x*tau)*randoms.y*radius,
        angleToVec(randoms.z*tau)*randoms.w*speed);
}
