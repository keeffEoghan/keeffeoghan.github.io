precision highp float;

// Where the crest limit is (0 is the path direction, 1 is perpendicular/away).
uniform float crestShape;

varying vec4 values;
varying vec2 crest;
varying float sdf;

void main() {
    float d = abs(sdf);
    float speed = length(values.rg)*(1.0-d);

    vec2 vel = normalize(mix(values.rg, crest, d*crestShape))*speed;

    gl_FragColor = vec4(vel, values.b, values.a-d);
}
