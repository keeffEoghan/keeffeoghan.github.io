/**
 * @requires `./head.vert`
 * @requires {function} apply A function applying a `vec4` state into a `vec3`
 *                            color to be drawn.
 */

#pragma glslify: inert = require(../../const/inert)
#pragma glslify: stateForFrame = require(../../state/state-at-frame)

void main() {
    vec4 state = stateForFrame(uv, dataRes, previous, data);

    if(state.xy != inert) {
        gl_Position = vec4(state.xy*viewSize, 1.0, 1.0);
        color = flow(state.zw, speedLimit);
    }
}
