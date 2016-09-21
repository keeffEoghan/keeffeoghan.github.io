import { mapList } from './map';

/**
 * Returns a wrap of the function `f`, which when called will call `f` with the
 * given arguments rearranged according to the sequence of `order`.
 */
export const reArg = (f, ...order) => (...rest) =>
    f(...mapList((v, i) => rest[((i >= order.length)? i : order[i])], rest));

export default reArg;
