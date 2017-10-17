
/**
 * @param {number} x
 *        The angle to convert, in radians.
 * @return  {number}
 *        The argument `x`, in degrees.
 */
export function radiansToDegrees(x: number): number {
  return x * (180 / Math.PI);
}
