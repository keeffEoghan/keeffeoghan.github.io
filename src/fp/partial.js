/**
 * Returns a wrap of the function `f`, which accumulates the arguments of each
 * time it's called; if called with no arguments, it returns `f` called with all
 * the previously accumulated arguments.
 */
export const part = (f) => (...rest) =>
    ((rest.length)? part(() => f(...rest)) : f());

/**
 * Returns a wrap of the function `f`, which accumulates the arguments of each
 * time it's called, until the total number of arguments meets the length
 * `arity`.
 */
export const curry = (f, arity = f.length) => (...rest) =>
    ((arity > rest.length)?
        curry(() => f(...rest), arity-rest.length)
    :   f(...rest));

export default part;
