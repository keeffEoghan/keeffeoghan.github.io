/**
 * Verlet integration. See slide 26 of the second part of
 * [Acko's Animating Your Way to Glory](http://acko.net/blog/animate-your-way-to-glory/).
 *
 * @param {Number} acc Acceleration.
 * @param {Number} pos0 Last position.
 * @param {Number} pos1 Current Position.
 * @param {Number} dt0 Time elapsed in the last frame.
 * @param {Number} dt1 Time elapsed in the current frame.
 * @return {Number} Next position (`pos2`).
 */
export const verlet = (acc, pos0, pos1, dt0, dt1) =>
    (2*pos1)-pos0+(acc*dt0*(dt1 || dt0));

/**
 * The inverse (differentiation) of the above (integration) - find acceleration
 * from positions and time.
 *
 *     pos2 = (2.0*pos1)-pos0+(acc*dt*dt)
 *     (2.0*pos1)-pos0+(acc*dt*dt) = pos2
 *     acc*dt*dt = pos2-(2.0*pos1)+pos0
 *     acc = (pos2-(2.0*pos1)+pos0)/dt/dt
 *
 * @param {Number} pos0 First position.
 * @param {Number} pos1 Last position.
 * @param {Number} pos2 Current position.
 * @param {Number} dt0 Time elapsed in the last frame.
 * @param {Number} dt1 Time elapsed in the current frame.
 * @return {Number} The acceleration.
 */
export const verletDyDt = (pos0, pos1, pos2, dt0, dt1) =>
    (pos2-(2*pos1)+pos0)/dt0/(dt1 || dt0);

export default verlet;
