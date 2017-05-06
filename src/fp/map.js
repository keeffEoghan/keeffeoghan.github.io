import { reduceList } from './reduce';
import iterable from './iterable';

/**
 * Map an array-like object.
 * Similar to native, but with iteratee-first arguments; and allows the object
 * into which properties will be mapped to be defined (a new array, by default).
 */
export const mapList = (f, x, out = []) => reduceList((acc, v, i) => {
        acc[i] = f(v, i, x);

        return acc;
    },
    x, out);

/**
 * Map any type of object.
 * Same as above signature, but iterates over all the given object's own
 * properties.
 */
export const map = (f, any, out = []) => reduceList((acc, k, i, keys) => {
        acc[k] = f(any[k], k, any, i, keys);

        return acc;
    },
    iterable(any), out);

export default map;
