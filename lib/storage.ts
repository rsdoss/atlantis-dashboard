'use client'

export type WaterReading = {
  id?: string
  ts: string // ISO date/time
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
    const parsed: WaterReading[] = raw ? JSON.parse(raw) : []
    // Migrate any entries missing an id
    let mutated = false
    const migrated = parsed.map((r) => {
      if (!r.id) {
        mutated = true
        return { ...r, id: genId(r.ts) }
      }
      return r
    })
    if (mutated) {
      window.localStorage.setItem(KEY, JSON.stringify(migrated))
    }
    return migrated
  } catch {
    return []
  }
}

export function saveReading(r: WaterReading) {
  if (typeof window === 'undefined') return
  const all = loadReadings()
  // Update if id exists, else create new at front
  const id = r.id ?? genId(r.ts)
  const existingIdx = all.findIndex(x => x.id === id)
  const next: WaterReading = { ...r, id }
  if (existingIdx >= 0) {
    all[existingIdx] = next
  } else {
    all.unshift(next)
  }
  window.localStorage.setItem(KEY, JSON.stringify(all.slice(0, 1000)))
}

export function deleteReading(id: string) {
  if (typeof window === 'undefined') return
  const all = loadReadings().filter(r => r.id !== id)
  window.localStorage.setItem(KEY, JSON.stringify(all))
}

function genId(seed?: string) {
  const base = seed ? Date.parse(seed).toString(36) : Date.now().toString(36)
  return `${base}-${Math.random().toString(36).slice(2, 8)}`
}
