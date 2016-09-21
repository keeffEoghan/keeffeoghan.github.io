// import { reduce } from '../../fp/reduce';

// Timeline - wrapper for the bezier API.
// Animate along an array of keyframes, using bezier curves or lerp between each
// pair.

// Functions to animate.
/**
 * Animate along a timeline of keyframes (properties, timings, and curves),
 * using the tweens.
 */

/**
 * Prepare a timeline from a given set of keyframes (properties, timings, and
 * curves).
 * Create a lookup table from the provided keyframes config - a total duration
 * and a reverse lookup from key times to key names.
 *
 * @param {Array.<Object>} frames
 *        A list of keyframes, each an object of the form:
 *            value: {(Number|Object.<Number>)} The value/s to be animated
 *            span: {Number} Time until the next frame
 *            ease: {?Array.<Number>} A bezier easing curve to use for animating
 */
// export const timeline = (frames) => reduce((out, frame, k) => {
//         out.times[];
//         out.span += frame.span;
//     },
//     frames, {
//         frames,
//         times: ,
//         span: 0
//     });

// A full playthrough function.
// Simple wrapper, with start-time, time, rate, start, stop, play, loop, etc.
// Uses the above with its timing to play a full sequence.

// Smooth transitions between curves - needed, or manual?
// Set the first control point of each next curve to be the colinear reflection
// of the last control point of the current curve in its final point.
