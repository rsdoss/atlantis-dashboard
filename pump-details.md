Pump: Proline / Waterway Hi-Flo II — 0.95 THP (SD-10-1-N)
Type: Above-ground pool pump, single-speed
Motor / Power: 0.95 THP (service factor 1.0 → rated HP = total HP), 115 V, includes ~3-ft NEMA power cord, GFCI required
Wet end: Rotatable (top or side discharge) for tight pads
Materials / Features: Corrosion-resistant thermoplastic housing; clear lid over large strainer basket
Typical flow: ~60–75 GPM through 1½-in plumbing (guideline)
Union sizes: 1½-in suction union, 2-in discharge union
Placement: Level base, near pool water level; keep motor protected from flooding; bond/ground per code
--

Installation & Plumbing (what to track/check)
Location: Solid, level base; GFCI-protected 115 V outlet; dry, ventilated placement. --

Orientation: Rotate wet end so discharge suits your pad (horizontal/vertical). --

Connections: Skimmer → 1½-in suction union; Pump → Filter via 2-in discharge union; use unions for service. --

Startup / Priming (operational checklist)
Fill strainer basket with water; inspect/clean lid O-ring; hand-tighten lid.

Open all valves; set filter to Filter; power on.

You should see stable flow within 30–45 s; if not, power off and re-prime (check for air leaks/water level).

Bleed air at filter’s air-relief until a steady stream, then close.
--

Routine Operation (run-time guidance)
Daily runtime: ~8–10 h typical; 4–6 h in cool shoulder seasons; 10–12 h during peak heat/heavy use.

Never run dry; ensure consistent water level at skimmer.
--

Maintenance (recurring tasks you can schedule)
Weekly:

Empty & rinse pump basket; check for cracks.

Quick visual for leaks at unions / lid; listen for unusual noise. --

Monthly / Quarterly:

Lubricate pump-lid O-ring (silicone-based only); replace if cracked/flattened. --

Seasonal:

Adjust daily runtime targets (cool vs. hot months). --

At closing (freeze protection):

Drain pump & hoses; store basket (and motor if possible) indoors.

Disconnect hoses at the pool; keep skimmer bottom opening unplugged so trapped water can drain; maintain winter water level below skimmer per pool manual.

Do not run pump without water.


Troubleshooting (symptoms → quick actions)
Won’t prime / loses prime:

Check water level at skimmer, lid O-ring seal, and suction-side unions for air leaks; re-fill basket and re-prime. 

Noisy (gravelly / whine):

Possible cavitation or bearing wear; look for clogged basket, low water level, closed/partially closed valves, or suction leaks. Power down before inspection. 

Drips at unions/lid:

Reseat and hand-tighten; inspect/replace O-rings; apply appropriate lubricant (no petroleum).

Overheating / tripping GFCI:

Verify voltage supply, dry/ventilated location, unobstructed cooling; never cover motor; contact electrician if persistent.

Dashboard Fields (suggested schema)
yaml
Copy
Edit
pump:
  make_model: "Proline/Waterway Hi-Flo II SD-10-1-N"
  total_hp: 0.95
  voltage: 115
  unions:
    suction_in: "1.5in"
    discharge_out: "2in"
  flow_gpm_nominal: [60, 75]   # typical through 1.5in plumbing
  wet_end_orientation: "top|side"   # select
  gfci: true
  run_targets_hours:
    cool_season: "4-6"
    normal: "8-10"
    peak_heat: "10-12"
  last_prime_check: null          # date
  last_basket_clean: null         # date
  last_orings_lubed: null         # date
  leak_check_status: "ok|attention"
  noise_check_status: "ok|cavitation|bearing"
  winterized:
    drained: false
    hoses_removed: false
    stored_indoors: false
notes:
  placement: "level base; near water level; protected from flooding"
(Values are straight from your guide and ready for your agent to render as toggles, dates, and badges.)

Safety nuggets to surface in UI
GFCI-protected outlet only; don’t operate a pressurized system with the lid open.

Never run the pump without water; prime first.

For winter: keep skimmer bottom opening unblocked so water can drain; maintain water below skimmer as specified in pool manual.
