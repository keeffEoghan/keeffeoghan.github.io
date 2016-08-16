/**
 * Verlet integration in 2D. See slide 26 of the second part of
 * [Acko's Animating Your Way to Glory](http://acko.net/blog/animate-your-way-to-glory/).
 *
 * @param acc Acceleration.
 * @param pos1 Position.
 * @param pos0 Last position.
 * @param dt Time elapsed since the last frame.
 * @return The new position (`pos2`).
 */
vec2 verlet(vec2 acc, vec2 pos1, vec2 pos0, float dt) {
    return (2.0*pos1)-pos0+(acc*dt*dt);
}

#pragma glslify: export(verlet)
