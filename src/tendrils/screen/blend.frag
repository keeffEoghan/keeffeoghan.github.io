/**
 * Color summation from multiple buffers, each blending with a global alpha.
 *
 * @todo Split out `numViews` so this can be re-used easily.
 */

precision highp float;

const numViews = 2;

uniform sampler2D views[numViews];

uniform vec2 resolution;

#pragma glslify: preAlpha = require(../utils/pre-alpha)

void main() {
    const vec2 uv = gl_FragCoord.xy/resolution;

    // Accumulate colors
    
    vec4 sum = vec4(0.0);

    for(int v = 0; v < numViews; ++v) {
        vec4 color = texture2D(views[v], uv);

        // Pre-multiplied alpha so they don't cross over
        sum += preAlpha(color.rgb, color.a*alphas[v]);
    }

    gl_FragColor = sum;
}
