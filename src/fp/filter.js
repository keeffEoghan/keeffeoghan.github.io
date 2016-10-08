import { reduceList } from './reduce';
import iterable from './iterable';

export const filterList = (f, x, out = []) => reduceList((acc, v, i) => {
        if(f(v, i, x)) {
            acc.push(v);
        }

        return acc;
    },
    x, out);

/**
 * Map any type of object.
 * Same as above signature, but iterates over all the given object's own
 * properties.
 */
export const filter = (f, any, out = null) => reduceList((acc, k, i, keys) => {
        const v = any[k];

        if(f(v, k, any, i, keys)) {
            (acc || (acc = {}))[k] = v;
        }

        return acc;
    },
    iterable(any), out);


export default filter;
