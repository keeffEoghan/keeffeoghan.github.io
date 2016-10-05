/**
 * Left-to-right function composition.
 */
export const pipe = (...fns) => (x) => fns.reduce((r, f) => f(r), x);

/**
 * Right-to-left function composition.
 */
export const compose = (...fns) => (x) => fns.reduceRight((r, f) => f(r), x);

export default compose;
