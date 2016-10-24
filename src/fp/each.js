import iterable from './iterable';

/**
 * Iterate an array-like object.
 * Similar to native, but with iteratee-first arguments.
 */
export const eachList = (f, x) => {
    Array.prototype.forEach.call(x, f);
    // @todo
    // Array.prototype.some.call(x, f);

    return x;
};

/**
 * Iterate any type of object.
 * Same as above signature, but iterates over all the given object's own
 * properties.
 */
export const each = (f, any) => {
    eachList((k, i, keys) => f(any[k], k, any, i, keys), iterable(any));

    return any;
};

export default each;
