/**
 * @requires `./head.vert`
 * @requires {function} apply A function applying a `vec4` state into a `vec3`
 *                            color to be drawn.
 */

#pragma glslify: inert = require(../../../utils/inert)
#pragma glslify: stateForFrame = require(../../state/state-at-frame)

void main() {
    vec4 state = stateForFrame(uv, dataRes, previous, data);

    if(state.xy != inert) {
        gl_Position = vec4(state.xy*viewSize, 1.0, 1.0);

        // Faster particles leave a greater influence (opacity).
        // Linear interpolation - inaccurate for vectors, will it be OK without
        // sudden turns, or do we need a per-fragment lookup?
        // @todo Remove this check for perf
        float a = length(state.zw)/maxSpeed;

        color = vec4(apply(state), a);
    }
}
