/**
 * Color summation from multiple views, each blending with a global alpha.
 *
 * @requires {float} numViews The number of source views to blend together
 * @requires {function} blend A function blending a source buffer into a sum
 */

uniform sampler2D views[numViews];
uniform float alphas[numViews];
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution;

    // Accumulate colors
    
    vec4 sum = vec4(0.0);

    for(int i = 0; i < numViews; ++i) {
        vec4 color = texture2D(views[i], uv);

        // Pre-multiplied alpha so they don't cross over
        sum = blend(sum, color, alphas[i]);
    }

    gl_FragColor = sum;
}
