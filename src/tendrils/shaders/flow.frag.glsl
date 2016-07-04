precision highp float;

uniform bool showFlow;

uniform float time;
uniform float flowDecay;
uniform float maxSpeed;

varying vec2 flow;

void main() {
    float a = length(flow)/maxSpeed;

    // @todo Remove this check for perf
    gl_FragColor = ((showFlow)?
            vec4(((flow*1000.0)+vec2(1.0))*0.5, sin(time*flowDecay), a)
        :   vec4(flow, time, a));
}
