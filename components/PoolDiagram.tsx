'use client'
import { useMemo, useState } from 'react'
import { gallonsOval, gallonsRacetrack } from '@/lib/pool'
import clsx from 'clsx'

export function PoolDiagram() {
  const [depthInches, setDepthInches] = useState(48) // actual water depth, adjustable
  const [mode, setMode] = useState<'racetrack' | 'ellipse'>('racetrack')

  const gallons = useMemo(() => {
    const depthFeet = depthInches / 12
    return mode === 'racetrack' ?
      gallonsRacetrack(30, 15, depthFeet) : gallonsOval(30, 15, depthFeet)
  }, [depthInches, mode])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="card p-6 lg:col-span-2">
        <h2 className="section">Pool overview</h2>
        <div className="mt-4 relative">
          <div className="aspect-[2/1] w-full rounded-xl bg-gradient-to-b from-brand-200/70 to-brand-300/60 dark:from-brand-900/40 dark:to-brand-700/40 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-center">
            {/* Simple, resolution-independent diagram */}
            <svg viewBox="0 0 600 300" className="w-[95%] h-[85%]">
              {/* Outer wall (racetrack shape) */}
              <defs>
                <clipPath id="waterClip">
                  <path d="M75,30 h450 a45,45 0 0 1 45,45 v150 a45,45 0 0 1 -45,45 h-450 a45,45 0 0 1 -45,-45 v-150 a45,45 0 0 1 45,-45 z" />
                </clipPath>
              </defs>
              <path d="M75,30 h450 a45,45 0 0 1 45,45 v150 a45,45 0 0 1 -45,45 h-450 a45,45 0 0 1 -45,-45 v-150 a45,45 0 0 1 45,-45 z"
                    fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-800 dark:text-slate-200"/>
              {/* water level */}
              <g clipPath="url(#waterClip)">
                <rect x="0" y={300 - (depthInches/52)*260 - 10} width="600" height="400"
                      className={clsx('transition-all duration-300',
                        'fill-brand-400/80 dark:fill-brand-500/70')} />
                {/* subtle ripples */}
                <g className="opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <path key={i} d={`M0 ${110 + i*30} Q 150 ${120 + i*30}, 300 ${110 + i*30} T 600 ${110 + i*30}`}
                      stroke="white" strokeWidth="2" fill="none" />
                  ))}
                </g>
              </g>
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <label className="block">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200">Water depth (in)</div>
              <input type="range" min={40} max={52} step={1} value={depthInches}
                     onChange={(e)=> setDepthInches(parseInt(e.target.value))}
                     className="w-full" />
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{depthInches}"</div>
            </label>
            <label className="block">
              <div className="text-sm font-medium text-slate-700 dark:text-slate-200">Volume model</div>
              <select className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2"
                      value={mode} onChange={(e)=> setMode(e.target.value as any)}>
                <option value="racetrack">Oval with straight sides</option>
                <option value="ellipse">True ellipse</option>
              </select>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Oval w/ straight sides matches most above‑ground ovals.
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="card p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Estimated water volume</div>
          <div className="mt-1 text-3xl font-bold">
            {gallons.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-base font-semibold">gal</span>
          </div>
          <div className="text-xs text-slate-500 mt-2">
            Calculated from 30' × 15' footprint. Depth slider lets you set actual water line.
          </div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-slate-600 dark:text-slate-300">Specs</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><span className="badge">Model</span> Proline Atlantis (oval)</li>
            <li><span className="badge">Size</span> 15' × 30'</li>
            <li><span className="badge">Wall height</span> 52"</li>
            <li><span className="badge">Top rail</span> ~6"</li>
            <li><span className="badge">Supports</span> Buttress (oval)</li>
          </ul>
          <div className="text-xs text-slate-500 mt-3">
            Specs compiled from retailer documentation; verify against your invoice/owner literature.
          </div>
        </div>
      </div>
    </div>
  )
}
