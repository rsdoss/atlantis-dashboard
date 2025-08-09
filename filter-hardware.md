# Filter: Waterway ClearWater II — 150 sq ft Cartridge

**Type:** Single‑element cartridge filter for above‑ground pools  
**Model / Element:** ClearWater II, 150 sq ft pleated cartridge  
**Tank:** High‑strength thermoplastic with locking‑ring lid and air‑release valve  
**Notable features:** Raised outlets on the 150 model for easier plumbing; quick‑open locking ring; compact footprint

---

## Installation & Placement (dashboard checklist)
- **Base:** Level, solid surface (patio block or slab). Provide vertical clearance to remove lid and space around tank for inspections.
- **Orientation:** Align the side labeled **“inlet”** toward the pump discharge; outlet goes to pool return.
- **Unions:** Use unions on both ports to simplify service.
- **Startup / first run:**
  1. Open the **air‑release** knob on the lid.
  2. Start the pump; when water discharges from the air‑release, **close** it.
  3. **Record** the **starting pressure (PSI)** on the gauge — this becomes your personal baseline (“clean” pressure).

---

## Cleaning Triggers & Pressure Rules
- As debris loads, filter pressure rises. **Clean the cartridge when pressure is +5 PSI over your recorded starting pressure.**

---

## Cartridge Cleaning — Standard Procedure
1. **Shut off** the pump. **Relieve pressure**: open the air‑release until the gauge reads **0 PSI**.  
2. **Drain** the tank via the drain cap to keep the work area tidy.  
3. **Open** the filter: depress the **yellow safety latch** on the locking ring; rotate counter‑clockwise and remove the lid.  
4. **Rinse** the cartridge: hose **between the pleats**. Avoid pressure washers (they tear fabric).  
5. **Deep clean** (periodic): soak the element in a **cartridge‑cleaning solution** to remove oils; rinse thoroughly.  
6. **Reassemble**: inspect/clean/lubricate the lid **O‑ring** (silicone lube only); refit lid; tighten locking ring.  
7. **Restart**: close drain, open valves, start pump; bleed air until a steady stream, then close.

---

## Maintenance Schedule (typical targets to track)
- **Rinse cartridge:** every **3–4 weeks** or any time pressure rises +5 PSI.
- **Deep‑clean soak:** **twice per season** (or after heavy bather load/oily contamination).
- **Replace cartridge element:** every **1–3 years** (depends on bather load/chemistry and physical condition).
- **Lid O‑ring / gauge check:** inspect quarterly; **lubricate O‑ring** every 3 months; replace if cracked/flattened.
- **Record pressures:** keep **“starting PSI”** and **“clean‑me PSI”** noted on the tank or dashboard.

---

## Winterization (freeze protection)
- **Drain** the filter completely; **remove the cartridge** and **store indoors**.
- Protect the tank from freezing water to prevent cracking.
- Follow overall pool closing guidance so the **skimmer bottom opening stays unplugged** and water level stays below the skimmer; disconnect hoses so trapped water can drain.

---

## Troubleshooting (symptom → checks)
- **High pressure / low flow:** Cartridge is likely loaded — rinse; if still high, perform a deep clean or replace element.
- **Air in tank (gurgling / spurting):** Open air‑release until water runs steady; check suction‑side air leaks at pump and unions.
- **Leaks at lid / drain:** Clean, lube, and reseat O‑ring; hand‑tighten locking ring and drain cap.
- **Gauge won’t drop to 0 PSI when venting:** Verify air‑release is fully open; if still reading, replace/fix gauge.

---

## Dashboard Fields (suggested schema)
```yaml
filter:
  make_model: "Waterway ClearWater II 150"
  type: "cartridge"
  element_area_sqft: 150
  tank_material: "thermoplastic"
  has_locking_ring: true
  has_air_release: true
  starting_pressure_psi: null         # user-recorded baseline after a fresh clean
  clean_delta_psi: 5                  # clean when +5 PSI over baseline
  rinse_interval_weeks: "3-4"
  deep_clean_per_season: 2
  cartridge_replace_years: "1-3"
  last_rinse_date: null
  last_deep_clean_date: null
  last_orings_lubed_date: null
  current_pressure_psi: null
  clean_me_pressure_psi: null         # starting + 5 PSI
  winterized:
    drained: false
    cartridge_removed: false
    stored_indoors: false
notes:
  placement: "level base; clearance above for lid removal; unions on both ports"
  safety: "never open a pressurized filter; vent to 0 PSI; no pressure washers"
```
