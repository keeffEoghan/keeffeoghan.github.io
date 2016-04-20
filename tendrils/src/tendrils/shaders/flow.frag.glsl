precision highp float;

uniform bool debug;

uniform float maxSpeed;

varying vec2 flow;

void main() {
    float a = length(flow)/maxSpeed;

    gl_FragColor = ((debug)?
            vec4(((flow*1000.0)+vec2(1.0))*0.5, 0.0, a)
        :   vec4(flow, 1.0, a));
}
