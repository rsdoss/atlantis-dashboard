/**
 * Volume estimates for a 15' × 30' above‑ground oval.
 * Two models:
 *  - 'ellipse' uses area = π/4 × L × W  ⇒ multiplier ~ 5.9 gal/ft³
 *  - 'racetrack' (straight sides + semicircles) is closer for most AG ovals;
 *     for L=30, W=15 the effective multiplier is ~6.7.
 */

export function gallonsOval(L_ft: number, W_ft: number, depth_ft: number) {
  const gallonsPerCubicFoot = 7.48
  const area = Math.PI/4 * L_ft * W_ft
  return area * depth_ft * gallonsPerCubicFoot
}

export function gallonsRacetrack(L_ft: number, W_ft: number, depth_ft: number) {
  const gallonsPerCubicFoot = 7.48
  const r = W_ft / 2
  const rectLen = Math.max(L_ft - 2*r, 0)
  const area = (rectLen * W_ft) + Math.PI * r * r
  return area * depth_ft * gallonsPerCubicFoot
}
