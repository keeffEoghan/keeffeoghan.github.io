import lerp from 'lerp';
import bezier from 'bezier';
import isNumber from 'lodash/isNumber';

import { map } from '../../fp/map';

/**
 * Animating between 2 given numbers is just lerping, using `bezier.curve` with
 * the ease curve if given.
 */
export const tweenValue = (a, b, t, ease) =>
        ((a === b)? b : lerp(a, b, ((ease)? bezier(ease, t) : t)));

/**
 * A wrapper for the above that maps number properties from 2 objects into
 * tweened numbers in a given output object.
 */
export const tweenProps = (a, b, t, ease, out = {}) =>
    map((v, k) => ((isNumber(v))?
                tweenValue(((k in a)? a[k] : out[k]), v, t, ease)
            :   ((t < 1)? a[k] : v)),
        b, out);

/**
 * Generic wrapper of the above, handling the cases for both numbers and objects
 * of numbers, to pass to the above tweens.
 * Also handles an object syntax, where the first argument is an object of the
 * named arguments for the above functions, and the (optional) second argument
 * is the output object.
 */
export const tween = (a, b, ...rest) =>
    ((rest.length)?
        ((isNumber(b))? tweenValue : tweenProps)(a, b, ...rest)
    :   tween(a.a, a.b, a.t, a.ease, b));


export default tween;
