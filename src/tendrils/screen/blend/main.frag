/**
 * Color summation from multiple buffers, each blending with a global alpha.
 *
 * @requires {float} numBuffers The number of source buffers to blend together
 * @requires {function} blend A function blending a source buffer into a sum
 */

uniform sampler2D buffers[numBuffers];
uniform float alphas[numBuffers];
uniform vec2 resolution;

void main() {
    const vec2 uv = gl_FragCoord.xy/resolution;

    // Accumulate colors
    
    vec4 sum = vec4(0.0);

    for(int i = 0; i < numBuffers; ++i) {
        vec4 color = texture2D(buffers[i], uv);

        // Pre-multiplied alpha so they don't cross over
        sum = blend(sum, color, alphas[i]);
    }

    gl_FragColor = sum;
}
