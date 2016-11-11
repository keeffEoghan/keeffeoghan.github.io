precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D form;

uniform float radius;
uniform float thick;

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

#pragma glslify: circleSDF = require(./circle-sdf)

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;
    float dist = length(pos);

    vec4 geom = texture2D(form, uv);

    // float sdf = circleSDF(pos, radius-thick)-circleSDF(pos, radius+thick);
    // float sdf = smoothstep(radius-thick, radius, dist)-
    //         smoothstep(radius, radius+thick, dist);

    float sdf = 1.0-clamp(abs(dist-radius)-thick, 0.0, 1.0);

    vec4 ring = vec4(vec3(sdf), 1.0);

    vec4 color = preAlpha(ring)+preAlpha(geom);

    // gl_FragColor = ring;
    // gl_FragColor = color;
    gl_FragColor = geom;
}
