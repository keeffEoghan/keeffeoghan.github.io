precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D form;

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    vec4 geom = texture2D(form, uv);

    gl_FragColor = vec4(geom.rgb, geom.a*length(pos)-0.3);
}
