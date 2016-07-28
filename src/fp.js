export const pipe = (...ops) => (x) => ops.reduce((r, f) => f(r), x);

export const compose = (...ops) => (x) => ops.reduceRight((r, f) => f(r), x);
