
/**
 * @param {number} x
 *        The angle to convert, in radians.
 * @return  {number}
 *        The argument `x`, in gradians.
 */
export function radiansToGradians(x: number): number {
  return x / (Math.PI / 200);
}
