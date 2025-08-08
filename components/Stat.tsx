import { ReactNode } from 'react'

export function Stat({ label, value, hint }: { label: string, value: ReactNode, hint?: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
      <div className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
    </div>
  )
}
