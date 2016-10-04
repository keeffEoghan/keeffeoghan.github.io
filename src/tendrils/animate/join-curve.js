/**
 * Reflect transitions between curves.
 * Set the first control point of the next curve to be the colinear reflection
 * of the last control point of the last curve in its final point.
 */
export const join = (curve, align = 1) =>
    ((!curve || curve.length === 0)? 0
    : ((curve.length === 1)? curve[0]
    :   (curve[curve.length-1]-curve[curve.length-2])*align));

export default join;
