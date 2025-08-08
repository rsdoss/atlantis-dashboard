import { PoolDiagram } from '@/components/PoolDiagram'
import { SectionNav } from '@/components/SectionNav'
import { Stat } from '@/components/Stat'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="hero">Proline Atlantis — 15' × 30' Oval</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              A modern home dashboard for your specific pool. Click a section to drill in,
              or adjust the depth slider to refine the live volume estimate.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Footprint" value={<span>15′ × 30′</span>} />
            <Stat label="Wall height" value={<span>52″</span>} hint="Typical for this model" />
            <Stat label="Shape" value={<span>Oval (buttressed)</span>} />
          </div>
        </div>
      </section>

      <PoolDiagram />

      <section>
        <h2 className="section mb-3">Sections</h2>
        <SectionNav />
      </section>
    </div>
  )
}
