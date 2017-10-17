import { gradiansToRadians } from "./grad-to-rad";
import { radiansToDegrees } from "./rad-to-deg";

/**
 * @param {number} x
 *        The angle to convert, in gradians.
 * @return  {number}
 *        The argument `x`, in degrees.
 */
export function gradiansToDegrees(x: number): number {
  const rad = gradiansToRadians(x);
  return radiansToDegrees(rad);
}
