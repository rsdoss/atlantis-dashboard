import { StructureIcon } from '@/components/icons'

export default function StructurePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <StructureIcon className="h-6 w-6" />
        </div>
        <h1 className="hero">Structure</h1>
      </div>
      <div className="card p-6">
        <p className="text-slate-600 dark:text-slate-300">Placeholder for wall/upright inspections, buttress checks, leveling and site notes.</p>
      </div>
    </div>
  )
}
