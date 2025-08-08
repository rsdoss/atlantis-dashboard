import { FilterIcon } from '@/components/icons'

export default function FilterPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <FilterIcon className="h-6 w-6" />
        </div>
        <h1 className="hero">Filter</h1>
      </div>
      <div className="card p-6">
        <p className="text-slate-600 dark:text-slate-300">Placeholder for filter media, PSI log, backwash helper, etc.</p>
      </div>
    </div>
  )
}
