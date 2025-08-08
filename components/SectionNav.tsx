import Link from 'next/link'
import { ChevronRight, FilterIcon, PumpIcon, StructureIcon, WaterIcon } from './icons'

function Item({ href, title, desc, icon }: { href: string, title: string, desc: string, icon: React.ReactNode }) {
  return (
    <Link href={href} className="group block card p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          {icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{desc}</div>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
      </div>
    </Link>
  )
}

export function SectionNav() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Item
        href="/water"
        title="Water"
        desc="Log dipstick readings, dosing calculator, treatment advice"
        icon={<WaterIcon className="h-6 w-6" />}
      />
      <Item
        href="/filter"
        title="Filter"
        desc="Media, pressure, backwash, maintenance intervals"
        icon={<FilterIcon className="h-6 w-6" />}
      />
      <Item
        href="/pump"
        title="Pump"
        desc="Run schedule, priming checklist, performance"
        icon={<PumpIcon className="h-6 w-6" />}
      />
      <Item
        href="/structure"
        title="Structure"
        desc="Wall, uprights, buttresses, leveling, inspections"
        icon={<StructureIcon className="h-6 w-6" />}
      />
    </div>
  )
}
