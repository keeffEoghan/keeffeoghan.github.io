/**
 * Directly spawns a particle according to its euivalent position/values in the
 * given texture.
 *
 * @requires {function} apply A function that transforms a `vec4` of data into a
 *                            valid `vec4` state.
 */

void main() {
    /**
     * @todo I have no idea why this seems to be required here and not in the
     *       main logic shader... seems to do with the data/geometry size ratio.
     */
    // vec2 uv = gl_FragCoord.xy/dataRes;
    vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);

    vec4 state = apply(uv, spawnToPos(uv), texture2D(spawnData, uv));

    gl_FragColor = vec4(state.xy, state.zw*speed);
}
