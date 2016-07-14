/**
 * @requires {float} levels The number of samples to take at different LODs
 * @requires {float} stride The step up to take between each LOD
 */

#pragma glslify: posToUV = require(../map/pos-to-uv)

/**
 * @return The flow velocity and age for a given screen position, sampling
 *         several scales.
 */
vec2 flowAtScreenPos(in vec2 pos, in sampler2D flow,
        in float time, in float flowDecay) {
    vec2 uv = posToUV(pos);
    vec2 flowForce = vec2(0.0);
    float flowMax = 0.0;

    for(float level = 0.0; level < levels*stride; level += stride) {
        vec4 flowData = texture2D(flow, uv, level);
        float factor = 1.0/(level+1.0);

        flowForce += flowData.xy*factor*
            max(0.0, 1.0-((time-flowData.z)*flowDecay));

        flowMax += factor;
    }

    return flowForce/flowMax;
}

#pragma glslify: export(flowAtScreenPos)
