import { reduceList } from './reduce';

/**
 * Iterate an array-like object.
 * Similar to native, but with iteratee-first arguments.
 */
export const eachList = (f, x) =>
    reduceList((nil, v, i) => f(v, i, x), x, null);

/**
 * Iterate any type of object.
 * Same as above signature, but iterates over all the given object's own
 * properties.
 */
export const each = (f, any) =>
    eachList((k, i) => f(any[k], k, any, i), Object.keys(any));

export default each;