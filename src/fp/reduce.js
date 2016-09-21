/**
 * Reduce an array-like object.
 * Similar to native, but with iteratee-first arguments.
 * Supports the native one-value behaviour.
 */
export const reduceList = (f, list, out) => ((out === undefined)?
        Array.prototype.reduce.call(list, f)
    :   Array.prototype.reduce.call(list, f, out));

/**
 * Reduce any type of object.
 * Same as above signature, but iterates over all the given object's own
 * properties.
 * Supports the native one-value behaviour.
 */
export const reduce = (f, any, out) =>
    reduceList(((out === undefined)?
                (acc, k, i) => f(((i)? acc : any[acc]), any[k], k, any, i)
            :   (acc, k, i) => f(acc, any[k], k, any, i)),
        Object.keys(any), out);

export default reduce;