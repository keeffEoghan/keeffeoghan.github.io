/**
 * @requires {float} levels The number of samples to take at different LODs
 * @requires {float} stride The step up to take between each LOD
 */

#pragma glslify: posToUV = require(../map/pos-to-uv)
#pragma glslify: getFlow = require(./get)

/**
 * @return The flow velocity and age for a given screen position, sampling
 *         several scales.
 */
vec2 flowAtScreenPos(vec2 pos, sampler2D flow, float time, float flowDecay) {
    vec2 uv = posToUV(pos);
    vec2 flowForce = vec2(0.0);
    float flowMax = 0.0;

    for(float level = 0.0; level < levels*stride; level += stride) {
        vec4 flowData = texture2D(flow, uv, level);
        float factor = 1.0/(level+1.0);

        flowForce += getFlow(flowData, time, flowDecay)*factor;
        flowMax += factor;
    }

    return flowForce/flowMax;
}

#pragma glslify: export(flowAtScreenPos)
