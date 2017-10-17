import { degreesToRadians } from "./deg-to-rad";
import { radiansToGradians } from "./rad-to-grad";

/**
 * @param {number} x
 *        The angle to convert, in degrees.
 * @return  {number}
 *        The argument `x`, in gradians.
 */
export function degreesToGradians(x: number): number {
  const rad = degreesToRadians(x);
  return radiansToGradians(rad);
}
