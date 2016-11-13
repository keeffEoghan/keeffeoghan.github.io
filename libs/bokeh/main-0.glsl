vec3 acc = vec3(0.0);
vec3 div = vec3(0.0);
float r = 1.0;
vec2 angle = vec2(0.0, radius);

amount += radius*500.0;

for(int j = 0; j < iterations; j++) {
    r += 1.0/r;
    angle = rot*angle;

    // (r-1.0) here is the equivalent to sqrt(0, 1, 2, 3...)
    vec2 lookup = uv+(texel*(r-1.0)*angle);
