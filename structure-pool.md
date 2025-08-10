# Structure: Proline Atlantis 15' × 30' Oval — Frame, Care & Seasonal Procedures

**Applies to:** Atlantis Oval above‑ground pool (your model). This file is structured for your dashboard agent to map fields and render checklists.

---

## 1) Anatomy & Specs (what the frame consists of)
- **Pool wall:** Steel wall with skimmer/return cutouts; seam bolted and **bolt heads face inside**; seam covered with 2" duct tape. 
- **Base system:** Curved **bottom rails** seated into **base plates**.
- **Top system:** **Top plates** hook over the wall; **top rails** fasten to top plates (leave loose until all rails are placed, then align and tighten); **one‑piece top connectors** lock over adjacent rails.
- **Uprights:** Also called **vertical columns**; fasten to base plates and top plates (tabs to the **inside** of the column).
- **Oval‑specific:** **Buttresses** and buttress top plates support the straight sides on ovals.
- **Liner options:** Overlap, Beaded, or V‑Bead liner systems with slotted tubes/retainers at the wall top.
- **Cove:** A compacted earth/sand cove **~6" high × 8" wide** around the inside wall base.
- **Skimmer protection:** **Wall‑Saver** gasket for 6" or 12" skimmers (not used for 14"), inserted around the skimmer cutout to prevent corrosion and leaks.
- **Critical tolerances:** Wall must be **level within 1"** across diameter, and roundness checked so base‑plate measurements are all within **±1"**. During filling, don’t exceed **12" water** until verticals and top rails are attached.

> These details are straight from the manual; see your owner PDF for illustrations.

---

## 2) Install/Assembly cues you might want in UI (reference)
Use these in helper tooltips or a “build notes” panel:
- Uncoil wall into bottom rails with **slotted tubes/retainers** on top as you go; place skimmer/return cutouts near the equipment pad.
- **Join wall ends** with a bolt in every hole, heads inside, then **tape over** inside seam.
- **Level check:** string + line level across multiple directions; fix foundation if off by >1".
- **Roundness check:** measure across the circle at **each base plate**; nudge base plates to bring measurements within 1".
- When placing top rails, **leave screws slightly loose** until all rails are on, then push the wall in at each upright to settle to a perfect circle, align rails, and **tighten**.
- After finishing, **fill to 2" below the lowest opening** and then follow your skimmer install.

---

## 3) Routine Structure Care (recurring tasks)
- **Liner:** Inspect regularly for leaks; small punctures can be patched.
- **Wall & uprights:** Wash periodically with **mild soap**; avoid abrasives/harsh chemicals. Wipe **chemical spills immediately**.
- **Fasteners:** Re‑coat showing screw heads with **clear outdoor varnish**.
- **Rust control:** Inspect metal each season; touch up scratches and rust with **anti‑rust paint**.
- **Biennial hidden‑rust check:** Every **2 years**, lower water to **~12"** depth and lift liner edge to inspect inside of wall for concealed rust.
- **Skimmer/return leaks:** Check seal areas; **fix leaks immediately** (they accelerate wall corrosion).

---

## 4) Winterizing Procedure (pool‑specific)
Create a checklist from this and tie it to dates/temperatures in your app.

**End‑of‑season steps:**
1) **Lower water** to about **6" below the return fitting**.
2) **Disconnect hoses** from skimmer and return; **drain the skimmer body**. Leave the **bottom skimmer opening UNPLUGGED** so rain/snowmelt drains through.
3) **Frame check:** Verify joints are tight; ensure the wall hasn’t slipped out of the bottom rail; tighten screws/bolts.
4) **Rust & liner:** Paint scratches/rust; confirm liner is clipped in with coping; **do not remove liner** and **do not fully drain** (empty pools can collapse).
5) **Leak check:** Patch any liner leaks before freeze.
6) **Accessories:** Remove ladder and loose accessories; leave skimmer and return faceplates attached. Keep the **skimmer lid installed**.
7) **Filter & equipment:** Disconnect filter per its manual; winterize pump/filter/hoses separately (already in your other pages).
8) **Maintain winter water level:** Keep water **at least ~3" below the skimmer opening all winter**. If water rises (rain/snow), **pump/siphon** back down so it doesn’t enter the skimmer. Keep the **skimmer’s bottom opening clear** to drain.
9) **12" skimmer models:** Insert the manufacturer’s **Pool Winterizing Kit (Part No. 1370138)** into the skimmer (trim foam or wedge as needed), per the illustrated instructions.
10) **Covers:** If you use a cover, **do not attach** it to top rails/connectors/skimmer.

---

## 5) Spring Opening (operational steps for your app)
These steps are derived from the manual’s “Fill your Pool with Water” and “Maintaining your Pool” sections and the reverse of winterizing:
1) **Remove** any winterizing insert from the skimmer (if used) and verify the **Wall‑Saver gasket** is intact.
2) **Reconnect** return and skimmer hoses; verify unions/gaskets.
3) **Raise water level** to about **2" below the lowest opening** (usually skimmer) before priming the system.
4) **Prime & start circulation:** Follow your pump priming steps; **bleed air** at the filter until a steady stream, then close.
5) **Inspect while running:** Check for seepage at wall penetrations, top plates, buttresses; verify the wall is not displaced from bottom rails.
6) **Structure touch‑ups:** Clean handprints/chemicals from rails; re‑varnish any exposed screw heads.
7) **Record baselines:** Note **starting filter PSI**, update “structure checks” dates, and log any repairs.

---

## 6) Dashboard Fields (suggested schema)
```yaml
structure:
  model: "Atlantis Oval 15x30"
  shape: "oval"
  wall_height_in: 48 # or 52; set actual
  liner_type: "overlap|beaded|v-bead"
  cove_dimensions_in:
    height: 6
    width: 8
  skimmer_size_in: 6 # or 12 or 14 (14" does not use Wall-Saver gasket)
  wall_saver_gasket_installed: true
  tolerances:
    level_within_in: 1
    round_within_in: 1
  last_level_check: null        # date
  last_roundness_check: null    # date
  seam_bolts_checked: null      # date
  screw_heads_varnished: null   # date
  rust_check:
    last_date: null
    next_due: null
    biennial_hidden_wall_check_due: null
  liner:
    last_leak_inspection: null
    leak_status: "ok|patched|attention"
  winter:
    closed_date: null
    water_level_target_below_skimmer_in: 3
    hoses_removed: false
    skimmer_bottom_open: false
    accessories_removed: false
    filter_disconnected: false
    winterizing_kit_installed: false
  opening:
    opening_date: null
    hoses_reconnected: false
    raised_to_2in_below_opening: false
    primed_and_bled: false
    structure_inspected_running: false
notes:
  assembly:
    - "Bolt heads face inside; tape over interior seam"
    - "Leave top-rail screws loose until all rails installed, then align, push wall in at uprights, tighten"
    - "Don’t exceed 12" water before verticals/top rails are attached"
  safety:
    - "Never open a pressurized filter; vent to 0 PSI first"
    - "Do not drain pool for winter; do not remove liner"
    - "Do not attach winter cover to top rails/connectors/skimmer"
```

---

## 7) Quick Troubleshooting (structure‑centric)
- **Uneven top rail heights / wall appears tilted:** Re‑check **level** across multiple directions; correct foundation if >1" out.
- **Out‑of‑round (gaps inconsistent at base plates):** Measure across at each base plate; nudge base plates to bring all within 1"; push wall inward at uprights to settle circle before final tightening.
- **Drips at skimmer/return:** Inspect **Wall‑Saver gasket** and faceplate gaskets; re‑seat or replace before corrosion sets in.
- **Rust spots:** Sand lightly, apply **anti‑rust paint**, then clear coat screw heads.

---

## 8) To‑Do Hooks for your Agent
- Auto‑set reminders for: seasonal rust check, biennial hidden‑wall inspection, pre‑winter water‑level checks, and post‑opening baseline logging (filter PSI, structure date stamps).
- Expose toggles for winter/ opening states so UI can switch checklists contextually.
