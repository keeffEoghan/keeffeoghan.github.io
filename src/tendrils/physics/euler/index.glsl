/**
 * Euler integration.
 *
 * @param {*} vel Velocity.
 * @param {*} pos Current position.
 * @param {*} dt Time elapsed.
 * @return The new position (`pos1`).
 */

float euler(float vel, float pos, float dt) {
    return pos+(vel*dt);
}

vec2 euler(vec2 vel, vec2 pos, float dt) {
    return pos+(vel*dt);
}

vec3 euler(vec3 vel, vec3 pos, float dt) {
    return pos+(vel*dt);
}


#pragma glslify: export(euler)
