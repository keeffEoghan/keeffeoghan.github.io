import times from 'lodash/times';

/**
 * Make an array of data bins, for logging.
 *
 * (3) => [*, *, *]
 *
 * @param {Number} size The size of the data log.
 * @param {Function} dataMaker Creates new data storage instances, given an
 *                             index.
 * @return {Array} An array of data bins.
 */
export const makeLog = (size, dataMaker = () => []) => times(size, dataMaker);

/**
 * Make a 2D array of the above, for logging higher-order data (calculus slope:
 * as in integration, differentiation) of base data.
 *
 * (3) => [
 *     [*, *, *],
 *     [*, *],
 *     [*]
 * ]
 *
 * @param {Number} order The order of the slope log - the total number of logs
 *                       will be a factorial of this value (`order!`),
 *                       descending in length at each level from `order` to 1.
 * @param {Function} logMaker Creates new data storage log instances, given a
 *                            size.
 * @return {Array} A 2D array, of logs of logs of data.
 */
export const makeOrderLog = (order, logMaker = makeLog) =>
    times(order, (i) => logMaker(order-i));


export default makeOrderLog;
