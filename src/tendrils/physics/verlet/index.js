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
export const verlet = (acc, pos1, pos0, dt) => (2.0*pos1)-pos0+(acc*dt*dt);

export default verlet;
