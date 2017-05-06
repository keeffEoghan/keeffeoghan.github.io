// Can't access `arguments` if using arrow function.
export function frame(to, time, ease, call) {
    return ((arguments.length > 1)? { to, time, ease, call } : to);
}

export default frame;
