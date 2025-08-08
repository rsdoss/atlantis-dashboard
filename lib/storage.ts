'use client'

export type WaterReading = {
  ts: string // ISO
  pH?: number
  FC?: number
  CC?: number
  TA?: number
  CYA?: number
  CH?: number
  TempF?: number
  Notes?: string
}

const KEY = 'pool.water.readings.v1'

export function loadReadings(): WaterReading[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveReading(r: WaterReading) {
  if (typeof window === 'undefined') return
  const all = loadReadings()
  all.unshift(r)
  window.localStorage.setItem(KEY, JSON.stringify(all.slice(0, 1000)))
}
