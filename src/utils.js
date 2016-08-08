export const step = (array) => array.unshift(array.pop());


const invLog2 = 1/Math.log(2);

export const nextPow2 = (x) => Math.pow(2, Math.ceil(Math.log(x)*invLog2));
