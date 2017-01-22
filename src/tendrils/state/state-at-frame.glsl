const float frameOffset = 0.25;

/**
 * For every data point, we have two vertices - current and previous state.
 * Every other vertex looks up previous data. In this way, (vertical)
 * neighbours alternate from previous to current state.
 * (Vertical neighbours, because WebGL iterates column-major.)
 *
 * @return State data for the vertex, either current or previous.
 */

vec4 stateAtFrame(vec2 uv, vec2 shape, sampler2D previous, sampler2D current) {
    float nearIndex = uv.y*shape.y;
    float offset = fract(nearIndex);
    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);

    // @note Some systems comlain about this form of texture lookup:
    // return texture2D(((offset > frameOffset)? current : previous), lookup);
    return ((offset > frameOffset)?
            texture2D(current, lookup)
        :   texture2D(previous, lookup));
}

#pragma glslify: export(stateAtFrame)
