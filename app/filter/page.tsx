import { FilterIcon } from '@/components/icons'
import { Stat } from '@/components/Stat'

export default function FilterPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs in layout replace Back button */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <FilterIcon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="hero">Filter</h1>
          <div className="text-slate-600 dark:text-slate-300">Waterway ClearWater II — 150 sq ft Cartridge</div>
        </div>
      </div>

      <section className="card p-6">
        <h2 className="section">Overview</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Single‑element cartridge filter for above‑ground pools. High‑strength thermoplastic tank with locking‑ring lid
          and an integrated air‑release valve. The 150 sq ft model has raised outlets for easier plumbing and a compact footprint.
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Stat label="Model" value={<span>ClearWater II</span>} />
          <Stat label="Type" value={<span>Cartridge</span>} />
          <Stat label="Element area" value={<span>150 sq ft</span>} />
          <Stat label="Tank" value={<span>Thermoplastic</span>} />
          <Stat label="Locking ring" value={<span>Yes</span>} />
          <Stat label="Air release" value={<span>Yes</span>} />
        </div>
      </section>

      <section className="p-4 rounded-xl border border-amber-300/60 dark:border-amber-600/50 bg-amber-50 dark:bg-amber-900/20">
        <div className="text-sm font-semibold text-amber-900 dark:text-amber-200">Safety</div>
        <ul className="mt-1 text-sm list-disc pl-5 text-amber-900 dark:text-amber-100">
          <li>Never open a pressurized filter. Vent to 0 PSI first using the air‑release.</li>
          <li>Avoid pressure washers on the cartridge; hose between pleats only.</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="section">Installation & Placement</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li><span className="badge mr-2">Base</span>Level, solid surface; leave vertical clearance for lid removal and space around the tank.</li>
          <li><span className="badge mr-2">Orientation</span>Inlet faces pump discharge; outlet goes to pool return.</li>
          <li><span className="badge mr-2">Unions</span>Use unions on both ports for easy service.</li>
        </ul>
        <div className="mt-4">
          <div className="text-sm font-semibold">Startup / first run</div>
          <ol className="mt-2 space-y-2 list-decimal pl-6 text-slate-700 dark:text-slate-200">
            <li>Open the air‑release knob on the lid.</li>
            <li>Start the pump; when water discharges from the air‑release, close it.</li>
            <li>Record the starting pressure (PSI) on the gauge — this becomes your baseline “clean” pressure.</li>
          </ol>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="section">Cleaning Triggers & Pressure Rules</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-200">
          As debris loads, filter pressure rises. Clean the cartridge when pressure is <span className="font-semibold">+5 PSI</span>
          over your recorded starting pressure.
        </p>
      </section>

      <section className="card p-6">
        <h2 className="section">Cartridge Cleaning — Standard Procedure</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-6 text-slate-700 dark:text-slate-200">
          <li>Shut off the pump. Relieve pressure: open the air‑release until the gauge reads 0 PSI.</li>
          <li>Drain the tank via the drain cap.</li>
          <li>Open the filter: depress the yellow safety latch on the locking ring; rotate counter‑clockwise and remove the lid.</li>
          <li>Rinse the cartridge — hose between the pleats. Avoid pressure washers.</li>
          <li>Deep clean (periodic): soak in a cartridge‑cleaning solution to remove oils; rinse thoroughly.</li>
          <li>Reassemble: inspect/clean/lubricate the lid O‑ring (silicone lube only); refit lid; tighten locking ring.</li>
          <li>Restart: close drain, open valves, start pump; bleed air until a steady stream, then close.</li>
        </ol>
      </section>

      <section className="card p-6">
        <h2 className="section">Maintenance Schedule</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">Intervals</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Rinse cartridge every 3–4 weeks or at +5 PSI over baseline.</li>
              <li>Deep‑clean soak twice per season (or after heavy/oily load).</li>
              <li>Replace cartridge element every 1–3 years (condition dependent).</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">O‑rings & Gauge</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Inspect quarterly; lubricate lid O‑ring every 3 months (silicone only).</li>
              <li>Record both starting PSI and your “clean‑me” PSI (starting + 5).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card p-6">
        <h2 className="section">Winterization</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li>Drain the filter completely; remove the cartridge and store indoors.</li>
          <li>Protect the tank from freezing water to prevent cracking.</li>
          <li>During pool closing, keep the skimmer bottom opening unplugged and water level below the skimmer; disconnect hoses so trapped water can drain.</li>
        </ul>
      </section>

      <section className="card p-6">
        <h2 className="section">Troubleshooting</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">High pressure / low flow</div>
            <p className="mt-1">Cartridge likely loaded — rinse; if still high, deep clean or replace element.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Air in tank (gurgling / spurting)</div>
            <p className="mt-1">Open air‑release until water runs steady; check suction‑side air leaks at pump and unions.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Leaks at lid / drain</div>
            <p className="mt-1">Clean, lube, and reseat O‑ring; hand‑tighten locking ring and drain cap.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Gauge won’t drop to 0 PSI</div>
            <p className="mt-1">Verify air‑release is fully open; if still reading, fix or replace the gauge.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
