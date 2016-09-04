/**
 * Forward euler integration.
 *
 * @param {Number} vel Velocity.
 * @param {Number} pos Current position.
 * @param {Number} dt Time elapsed.
 * @return The new position (`pos1`).
 */
export const euler = (vel, pos, dt) => pos+(vel*dt);

/**
 * The inverse (differentiation) of the above (integration) - find velocity from
 * positions and time.
 *
 * @param {Number} pos1 Last position.
 * @param {Number} pos2 Current position.
 * @param {Number} dt Time elapsed.
 * @return {Number} The velocity.
 */
export const eulerDyDt = (pos0, pos1, dt) => (pos1-pos0)/dt;

export default euler;
