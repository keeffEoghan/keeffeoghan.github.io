import lerp from 'lerp';
import bezier from 'bezier';
import isNumber from 'lodash/isNumber';

import { map } from '../../fp/map';

/**
 * Animating between 2 given numbers is just using a `bezier.curve` function.
 */
export const tweenNum = (a, b, t, curve) =>
    lerp(a, b, ((curve)? bezier(curve, t) : t));

/**
 * Version of the above, returning a function that performs the tween for a
 * single given `t` value.
 */
export const numTweener = (a, b, curve) => (t) => tweenNum(a, b, t, curve);


/**
 * A wrapper for the above that maps number properties from 2 objects into
 * tweened numbers in an object.
 */
export const tweenProps = (a, b, t, curve, out = a) =>
    map((v, k) => tweenNum(a[k], v, t, curve), b, out);

/**
 * Version of the above, returning a function that performs the tween for a
 * single given `t` value.
 */
export const propsTweener = (a, b, curve, out) => (t) =>
    tweenProps(a, b, t, curve, out);


/**
 * Generic wrapper of the above, handling the case for both numbers and objects
 * of numbers, to pass to the above tweens.
 */
export const tween = (a, b, t, ...rest) =>
    ((isNumber(b))? tweenNum : tweenProps)(a, b, ...rest);

/**
 * Version of the above, returning a function that performs the tween for a
 * single given `t` value.
 */
export const tweener = (a, b, ...rest) => (t) => tween(a, b, t, ...rest);

export default tweener;
