import { StructureIcon } from '@/components/icons'
import { Stat } from '@/components/Stat'

export default function StructurePage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs in layout replace Back button */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <StructureIcon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="hero">Structure</h1>
          <div className="text-slate-600 dark:text-slate-300">Proline Atlantis 15′ × 30′ Oval — frame, care, winter and opening</div>
        </div>
      </div>

      {/* Anatomy & Specs */}
      <section className="card p-6">
        <h2 className="section">Anatomy & Specs</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Key frame components and tolerances for your model.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Stat label="Model" value={<span>Atlantis Oval 15×30</span>} />
          <Stat label="Shape" value={<span>Oval (buttressed)</span>} />
          <Stat label="Wall height" value={<span>52″</span>} hint="Set to your actual" />
          <Stat label="Cove" value={<span>~6″ × 8″</span>} />
          <Stat label="Skimmer" value={<span>Wall‑Saver gasket</span>} hint="6″/12″ models" />
          <Stat label="Tolerances" value={<span>Level/round ≤ 1″</span>} />
        </div>
        <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-200">
          <li><span className="badge mr-2">Wall</span>Steel wall with skimmer/return cutouts; seam bolts with heads to the inside; interior seam taped.</li>
          <li><span className="badge mr-2">Base</span>Curved bottom rails seated into base plates; keep circle true.</li>
          <li><span className="badge mr-2">Top</span>Top plates hook over wall; top rails fasten to plates; one‑piece connectors lock rails.</li>
          <li><span className="badge mr-2">Uprights</span>Vertical columns fasten to base/top plates; tabs face inside.</li>
          <li><span className="badge mr-2">Oval</span>Buttresses and buttress top plates support the straight sides.</li>
          <li><span className="badge mr-2">Liner</span>Overlap, beaded, or V‑bead systems with slotted tubes/retainers on top.</li>
        </ul>
      </section>

      {/* Install / Assembly cues */}
      <section className="card p-6">
        <h2 className="section">Install / Assembly Cues</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li>Uncoil wall into bottom rails with slotted tubes/retainers at the top; place cutouts near the equipment pad.</li>
          <li>Join wall ends with a bolt in every hole, heads inside; tape over the interior seam.</li>
          <li>Level check across multiple directions; correct foundation if more than 1″ out.</li>
          <li>Roundness check: measure across the circle at each base plate; bring all within ±1″.</li>
          <li>When placing top rails, leave screws slightly loose until all rails are on, then push the wall in at uprights, align, and tighten.</li>
          <li>During filling, don’t exceed 12″ water until verticals and top rails are attached.</li>
        </ul>
      </section>

      {/* Routine Structure Care */}
      <section className="card p-6">
        <h2 className="section">Routine Structure Care</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li>Liner: inspect for leaks; patch small punctures.</li>
          <li>Wall & uprights: wash with mild soap; wipe chemical spills immediately.</li>
          <li>Fasteners: re‑coat exposed screw heads with clear outdoor varnish.</li>
          <li>Rust control: inspect each season; touch up scratches and rust with anti‑rust paint.</li>
          <li>Biennial hidden‑rust check: every 2 years, lower water to ~12″ and lift liner edge to inspect inside wall.</li>
          <li>Skimmer/return leaks: check seals and fix leaks immediately to prevent corrosion.</li>
        </ul>
      </section>

      {/* Winterizing */}
      <section className="card p-6">
        <h2 className="section">Winterizing</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-6 text-slate-700 dark:text-slate-200">
          <li>Lower water to about 6″ below the return fitting.</li>
          <li>Disconnect hoses from skimmer and return; drain the skimmer body. Leave the bottom skimmer opening unplugged so rain/snowmelt can drain.</li>
          <li>Frame check: verify joints are tight; ensure the wall hasn’t slipped from the bottom rail; tighten screws/bolts.</li>
          <li>Rust & liner: paint scratches/rust; confirm liner is clipped with coping. Do not remove liner; do not fully drain.</li>
          <li>Patch any liner leaks before freeze.</li>
          <li>Remove ladder and loose accessories; keep skimmer/return faceplates attached and the skimmer lid installed.</li>
          <li>Filter & equipment: disconnect per equipment manuals (see Pump and Filter pages).</li>
          <li>Maintain winter water level: keep ~3″ below the skimmer all winter; pump/siphon excess; keep the skimmer bottom opening clear to drain.</li>
          <li>12″ skimmer models: insert the manufacturer’s winterizing kit (Part No. 1370138) per instructions.</li>
          <li>Covers: if used, do not attach to top rails/connectors/skimmer.</li>
        </ol>
      </section>

      {/* Spring Opening */}
      <section className="card p-6">
        <h2 className="section">Spring Opening</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-6 text-slate-700 dark:text-slate-200">
          <li>Remove any winterizing insert from the skimmer; verify the Wall‑Saver gasket is intact.</li>
          <li>Reconnect return and skimmer hoses; verify unions and gaskets.</li>
          <li>Raise water level to ~2″ below the lowest opening before priming.</li>
          <li>Prime and start circulation; bleed air at the filter until a steady stream, then close.</li>
          <li>Inspect while running: look for seepage at penetrations, top plates, and buttresses; verify wall is seated in bottom rails.</li>
          <li>Touch‑ups: clean rails and re‑varnish any exposed screw heads.</li>
          <li>Record baselines: note starting filter PSI and update structure check dates.</li>
        </ol>
      </section>

      {/* Troubleshooting */}
      <section className="card p-6">
        <h2 className="section">Troubleshooting</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Uneven rail heights / tilted wall</div>
            <p className="mt-1">Re‑check level across multiple directions; correct foundation if more than 1″ out.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Out‑of‑round</div>
            <p className="mt-1">Measure across at each base plate; nudge plates to bring all within 1″; push wall inward at uprights before final tightening.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Drips at skimmer/return</div>
            <p className="mt-1">Inspect Wall‑Saver and faceplate gaskets; re‑seat or replace before corrosion sets in.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Rust spots</div>
            <p className="mt-1">Sand lightly, apply anti‑rust paint, then clear‑coat screw heads.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
