'use client'
import { useState } from 'react'
import { saveReading, loadReadings, deleteReading, WaterReading } from '@/lib/storage'
import { WaterIcon } from '@/components/icons'

export default function WaterPage() {
  const [reading, setReading] = useState<WaterReading>(() => newBlankReading())
  const [items, setItems] = useState<WaterReading[]>(loadReadings())
  const [message, setMessage] = useState<string | null>(null)
  const [advice, setAdvice] = useState<string>('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  async function submitAdvice() {
    setMessage('Submitting to advice endpoint…')
    try {
      const res = await fetch('/api/water/advice', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ reading })
      })
      const data = await res.json()
      setAdvice(data.advice ?? 'No advice returned.')
      setMessage(null)
    } catch (e:any) {
      setMessage('Request failed (is the API wired up?)')
    }
  }

  function save() {
    saveReading(reading)
    setItems(loadReadings())
    setMessage(reading.id ? 'Updated.' : 'Saved locally.')
    setTimeout(()=> setMessage(null), 1500)
    resetForm()
  }

  function update(field: keyof WaterReading, value: string) {
    const num = value ? Number(value) : undefined
    setReading(prev => ({ ...prev, [field]: isNaN(num as any) ? undefined : num }))
  }

  function onPickDate(value: string) {
    setReading(prev => ({ ...prev, ts: isoFromLocalDate(value) }))
  }

  function edit(r: WaterReading) {
    setReading(r)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function remove(id: string) {
    deleteReading(id)
    setItems(loadReadings())
    if (selectedId === id) setSelectedId(null)
    if (reading.id === id) resetForm()
  }

  function resetForm() {
    setReading(newBlankReading())
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs in layout replace Back button */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <WaterIcon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="hero">Water</h1>
          <div className="text-slate-600 dark:text-slate-300">Enter dip‑strip or test readings, log them, or request treatment advice.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 lg:col-span-2">
          <h2 className="section">{reading.id ? 'Edit reading' : 'New reading'}</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
            <Field label="Date">
              <input type="date" className="input" value={toDateInput(reading.ts)} onChange={e=> onPickDate(e.target.value)} />
            </Field>
            <Field label="pH" placeholder="7.2–7.8">
              <input type="number" step="0.1" className="input" value={reading.pH ?? ''} onChange={e=>update('pH', e.target.value)}/>
            </Field>
            <Field label="Free Chlorine (ppm)">
              <input type="number" step="0.1" className="input" value={reading.FC ?? ''} onChange={e=>update('FC', e.target.value)}/>
            </Field>
            <Field label="Combined Chlorine (ppm)">
              <input type="number" step="0.1" className="input" value={reading.CC ?? ''} onChange={e=>update('CC', e.target.value)}/>
            </Field>
            <Field label="Total Alkalinity (ppm)">
              <input type="number" step="10" className="input" value={reading.TA ?? ''} onChange={e=>update('TA', e.target.value)}/>
            </Field>
            <Field label="Cyanuric Acid (ppm)">
              <input type="number" step="5" className="input" value={reading.CYA ?? ''} onChange={e=>update('CYA', e.target.value)}/>
            </Field>
            <Field label="Calcium Hardness (ppm)">
              <input type="number" step="10" className="input" value={reading.CH ?? ''} onChange={e=>update('CH', e.target.value)}/>
            </Field>
            <Field label="Water Temp (°F)">
              <input type="number" step="1" className="input" value={reading.TempF ?? ''} onChange={e=>update('TempF', e.target.value)}/>
            </Field>
            <div className="col-span-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Notes</label>
              <textarea className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2"
                        rows={3} value={reading.Notes ?? ''} onChange={e=> setReading(prev => ({...prev, Notes: e.target.value}))}/>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="btn" onClick={save}>{reading.id ? 'Update reading' : 'Save reading'}</button>
            {reading.id && <button className="btn-outline" onClick={resetForm}>Cancel</button>}
            <button className="btn-outline" onClick={submitAdvice}>Get advice (LLM)</button>
            {message && <div className="text-sm text-slate-600 dark:text-slate-300">{message}</div>}
          </div>
          {advice && (
            <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
              <div className="text-sm font-semibold">Advice</div>
              <p className="text-sm mt-1 whitespace-pre-wrap">{advice}</p>
            </div>
          )}
        </div>

        <div className="card p-6">
          <h2 className="section">Recent readings</h2>
          <ol className="mt-3 space-y-3 text-sm">
            {items.length === 0 && <li className="text-slate-500">No readings saved yet.</li>}
            {items.map((r) => (
              <li key={r.id} className="border-b border-slate-200/60 dark:border-slate-700/50 pb-2">
                <button className="font-medium hover:underline underline-offset-2" onClick={()=> setSelectedId(prev => prev === r.id ? null : (r.id || null))}>
                  {new Date(r.ts).toLocaleDateString()} { /* date only for brevity */ }
                </button>
                <div className="text-slate-600 dark:text-slate-400">
                  {r.pH !== undefined && <span className="mr-2">pH {r.pH}</span>}
                  {r.FC !== undefined && <span className="mr-2">FC {r.FC}ppm</span>}
                  {r.CC !== undefined && <span className="mr-2">CC {r.CC}ppm</span>}
                  {r.TA !== undefined && <span className="mr-2">TA {r.TA}</span>}
                  {r.CYA !== undefined && <span className="mr-2">CYA {r.CYA}</span>}
                  {r.CH !== undefined && <span className="mr-2">CH {r.CH}</span>}
                  {r.TempF !== undefined && <span className="mr-2">Temp {r.TempF}°F</span>}
                </div>
                {selectedId === r.id && (
                  <div className="mt-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                    <div className="text-xs uppercase tracking-wide text-slate-500">Details</div>
                    <div className="mt-1 text-slate-700 dark:text-slate-200">
                      <div><span className="badge mr-2">When</span>{new Date(r.ts).toLocaleDateString()}</div>
                      {r.Notes && <div className="mt-1"><span className="badge mr-2">Notes</span><span className="italic">{r.Notes}</span></div>}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="btn-outline" onClick={()=> edit(r)}>Edit</button>
                      {r.id && <button className="btn-outline" onClick={()=> remove(r.id!)}>Delete</button>}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children, placeholder }: { label: string, children: React.ReactNode, placeholder?: string }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</div>
      {children}
      {placeholder && <div className="text-xs text-slate-500 mt-1">{placeholder}</div>}
      <style jsx>{`
        .input{ @apply mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2; }
      `}</style>
    </label>
  )
}

function toDateInput(iso: string) {
  const d = new Date(iso)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function isoFromLocalDate(value: string) {
  if (!value) return new Date().toISOString()
  const [y, m, d] = value.split('-').map(Number)
  const dt = new Date(y, (m || 1) - 1, d || 1)
  return dt.toISOString()
}

function newBlankReading(): WaterReading {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  const iso = new Date(yyyy + '-' + mm + '-' + dd).toISOString()
  return { ts: iso }
}
