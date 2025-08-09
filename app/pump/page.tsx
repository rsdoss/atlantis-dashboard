import { PumpIcon } from '@/components/icons'
import { Stat } from '@/components/Stat'

export default function PumpPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs in layout replace Back button */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-100">
          <PumpIcon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="hero">Pump</h1>
          <div className="text-slate-600 dark:text-slate-300">Proline / Waterway Hi‑Flo II — SD‑10‑1‑N (0.95 THP)</div>
        </div>
      </div>

      {/* Overview */}
      <section className="card p-6">
        <h2 className="section">Overview</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Above‑ground, single‑speed pump with rotatable wet end and large clear‑lid strainer basket. Corrosion‑resistant
          thermoplastic housing. Use a GFCI‑protected outlet and place on a level, dry, ventilated pad near the pool water level.
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Stat label="Make/Model" value={<span>Hi‑Flo II SD‑10‑1‑N</span>} />
          <Stat label="Total HP" value={<span>0.95 THP</span>} />
          <Stat label="Voltage" value={<span>115 V</span>} hint="GFCI required" />
          <Stat label="Typical Flow" value={<span>60–75 GPM</span>} hint="Through 1½″ plumbing" />
          <Stat label="Unions" value={<span>1½″ in / 2″ out</span>} />
          <Stat label="Wet End" value={<span>Top or Side</span>} hint="Rotatable discharge" />
        </div>
      </section>

      {/* Safety callouts */}
      <section className="p-4 rounded-xl border border-amber-300/60 dark:border-amber-600/50 bg-amber-50 dark:bg-amber-900/20">
        <div className="text-sm font-semibold text-amber-900 dark:text-amber-200">Safety</div>
        <ul className="mt-1 text-sm list-disc pl-5 text-amber-900 dark:text-amber-100">
          <li>Use a GFCI‑protected 115 V outlet; bond/ground per code.</li>
          <li>Never run the pump without water; prime before powering on.</li>
          <li>Do not open the lid on a pressurized system; power off and relieve pressure first.</li>
          <li>Winter: keep the skimmer bottom opening unblocked so trapped water can drain; maintain water level below the skimmer per your pool manual.</li>
        </ul>
      </section>

      {/* Installation & Plumbing */}
      <section className="card p-6">
        <h2 className="section">Installation & Plumbing</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li><span className="badge mr-2">Location</span>Solid, level base; dry, ventilated placement; GFCI‑protected 115 V outlet.</li>
          <li><span className="badge mr-2">Orientation</span>Rotate the wet end so the discharge suits your pad (horizontal/vertical).</li>
          <li><span className="badge mr-2">Connections</span>Skimmer → 1½″ suction union; Pump → Filter via 2″ discharge union; use unions for service.</li>
        </ul>
      </section>

      {/* Startup / Priming */}
      <section className="card p-6">
        <h2 className="section">Startup / Priming</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-6 text-slate-700 dark:text-slate-200">
          <li>Fill the strainer basket with water; inspect/clean lid O‑ring; hand‑tighten the lid.</li>
          <li>Open all valves; set the filter to Filter; power on.</li>
          <li>Expect stable flow within 30–45 seconds. If not, power off and re‑prime (check for air leaks and water level).</li>
          <li>Bleed air at the filter’s air‑relief until a steady stream, then close.</li>
        </ol>
      </section>

      {/* Routine Operation */}
      <section className="card p-6">
        <h2 className="section">Routine Operation</h2>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-200">
          <li><span className="badge mr-2">Daily runtime</span>8–10 h typical; 4–6 h in cool shoulder seasons; 10–12 h during peak heat/heavy use.</li>
          <li><span className="badge mr-2">Water level</span>Never run dry; ensure consistent water level at the skimmer.</li>
        </ul>
      </section>

      {/* Maintenance */}
      <section className="card p-6">
        <h2 className="section">Maintenance</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">Weekly</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Empty & rinse the pump basket; check for cracks.</li>
              <li>Quick visual for leaks at unions/lid; listen for unusual noise.</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">Monthly / Quarterly</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Lubricate pump‑lid O‑ring (silicone‑based only); replace if cracked/flattened.</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">Seasonal</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Adjust daily runtime targets (cool vs. hot months).</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="text-sm font-semibold">Closing / Freeze Protection</div>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>Drain pump & hoses; store basket (and motor if possible) indoors.</li>
              <li>Disconnect hoses at the pool; keep the skimmer bottom opening unplugged so trapped water can drain.</li>
              <li>Maintain winter water level below the skimmer as specified in your pool manual.</li>
              <li><span className="font-medium">Do not</span> run the pump without water.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="card p-6">
        <h2 className="section">Troubleshooting</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Won’t prime / loses prime</div>
            <p className="mt-1">Check water level at skimmer, lid O‑ring seal, and suction‑side unions for air leaks; re‑fill basket and re‑prime.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Noisy (gravelly / whine)</div>
            <p className="mt-1">Possible cavitation or bearing wear; look for clogged basket, low water level, closed/partially closed valves, or suction leaks. Power down before inspection.</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Drips at unions/lid</div>
            <p className="mt-1">Reseat and hand‑tighten; inspect/replace O‑rings; apply appropriate lubricant (no petroleum).</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
            <div className="font-semibold">Overheating / tripping GFCI</div>
            <p className="mt-1">Verify voltage supply, dry/ventilated location, unobstructed cooling; never cover the motor; contact an electrician if persistent.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
