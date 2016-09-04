/**
 * Verlet integration. See slide 26 of the second part of
 * [Acko's Animating Your Way to Glory](http://acko.net/blog/animate-your-way-to-glory/).
 *
 * @param {*} acc Acceleration.
 * @param {*} pos0 Last position.
 * @param {*} pos1 Current position.
 * @param {*} dt0 Time elapsed in the last frame.
 * @param {*} dt1 Time elapsed in the current frame.
 * @return The new position (`pos2`).
 */

float verlet(float acc, float pos0, float pos1, float dt0, float dt1) {
    return (2.0*pos1)-pos0+(acc*dt0*dt1);
}

vec2 verlet(vec2 acc, vec2 pos0, vec2 pos1, float dt0, float dt1) {
    return (2.0*pos1)-pos0+(acc*dt0*dt1);
}

vec3 verlet(vec3 acc, vec3 pos0, vec3 pos1, float dt0, float dt1) {
    return (2.0*pos1)-pos0+(acc*dt0*dt1);
}


// Constant time step

float verlet(float acc, float pos0, float pos1, float dt) {
    return verlet(acc, pos0, pos1, dt, dt);
}

vec2 verlet(vec2 acc, vec2 pos0, vec2 pos1, float dt) {
    return verlet(acc, pos0, pos1, dt, dt);
}

vec3 verlet(vec3 acc, vec3 pos0, vec3 pos1, float dt) {
    return verlet(acc, pos0, pos1, dt, dt);
}


#pragma glslify: export(verlet)
