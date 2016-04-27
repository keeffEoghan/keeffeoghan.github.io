const float frameOffset = 0.25;

/**
 * For every data point, we have two vertices - current and previous state.
 * Every other vertex looks up previous data. In this way, (vertical)
 * neighbours alternate from previous to current state.
 * (Vertical neighbours, because WebGL iterates column-major.)
 *
 * @return State data for the vertex, either current or previous.
 */

vec4 stateForFrame(in vec2 uv, in vec2 shape,
        in sampler2D previous, in sampler2D current) {
    float nearIndex = uv.y*shape.y;
    float offset = fract(nearIndex);
    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);

    // Look up both textures, because sampler2D can't really be used in
    // expressions.
    return ((offset > frameOffset)?
        texture2D(current, lookup) : texture2D(previous, lookup));
}

#pragma glslify: export(stateForFrame)
