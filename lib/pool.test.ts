import { describe, it, expect } from 'vitest'
import { gallonsOval, gallonsRacetrack } from './pool'

describe('pool volume models', () => {
  it('returns 0 gallons for zero depth', () => {
    expect(gallonsOval(30, 15, 0)).toBe(0)
    expect(gallonsRacetrack(30, 15, 0)).toBe(0)
  })

  it('computes ellipse and racetrack volumes within expected range', () => {
    const L = 30
    const W = 15
    const depth = 52 / 12 // 52" wall ≈ 4.33 ft
    const ellipse = gallonsOval(L, W, depth)
    const racetrack = gallonsRacetrack(L, W, depth)

    // Expect close to README examples (~11,496 and ~13,055)
    expect(ellipse).toBeGreaterThan(11000)
    expect(ellipse).toBeLessThan(12000)
    expect(racetrack).toBeGreaterThan(12500)
    expect(racetrack).toBeLessThan(13500)
  })
})

