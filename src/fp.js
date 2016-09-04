export const pipe = (fns, x) => fns.reduce((r, f) => f(r), x);

export const compose = (fns, x) => fns.reduceRight((r, f) => f(r), x);

export const reduce = (f, x, out) => ((out === undefined)?
        Array.prototype.reduce.call(x, f)
    :   Array.prototype.reduce.call(x, f, out));

export const map = (f, x, out = []) => reduce((out, v, i) => {
        out[i] = f(v, i, x);

        return out;
    },
    x, out);
