/**
 * Verlet integration in 2D. See slide 26 of the second part of
 * [Acko's Animating Your Way to Glory](http://acko.net/blog/animate-your-way-to-glory/).
 *
 * @param acc Accelration.
 * @param pos Position.
 * @param lastPos Last position.
 * @param dt Time elapsed since the last frame.
 * @return The new position.
 */
vec2 verlet(in vec2 acc, in vec2 pos, in vec2 lastPos, in float dt) {
    return (2.0*pos)-lastPos+(acc*dt*dt);
}

#pragma glslify: export(verlet)
