import { describe, it, expect, beforeEach } from 'vitest'
import { loadReadings, saveReading, type WaterReading } from './storage'

describe('browser storage helpers', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns [] when no data present', () => {
    expect(loadReadings()).toEqual([])
  })

  it('persists and returns readings (most recent first)', () => {
    const a: WaterReading = { ts: '2024-01-01T00:00:00.000Z', pH: 7.4 }
    const b: WaterReading = { ts: '2024-01-02T00:00:00.000Z', FC: 3 }
    saveReading(a)
    saveReading(b)
    const all = loadReadings()
    expect(all[0]).toMatchObject(b)
    expect(all[1]).toMatchObject(a)
  })
})

