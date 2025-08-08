# Pool Dashboard POC — Proline Atlantis 15×30 Oval

A modern, responsive dashboard for a specific above‑ground pool (Proline Atlantis 15′ × 30′ oval). Built with Next.js (App Router) and Tailwind CSS. Deploy-ready for Vercel.

> **What works now**
> - Main page with an inline SVG diagram and **live volume estimate** with an adjustable water‑depth slider.
> - Quick navigation to **Water**, **Filter**, **Pump**, and **Structure** sections.
> - **Water** section includes a form to enter dip‑strip/test readings, a local log (stored in `localStorage`), and a stub **advice** API endpoint you can later wire to your LLM.
> - Dark mode toggle. Fully responsive.

## Getting started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # http://localhost:3000
```

### Deploy to Vercel

- Push to a Git repo and import the project at vercel.com
- Framework preset: **Next.js**
- Build command: `next build`
- Output directory: `.next` (default)

## Project structure

```
app/
  page.tsx                 # main page
  water/                   # water section (form + log + advice stub)
  filter/, pump/, structure/  # placeholder sections
  api/water/advice/route.ts  # stubbed LLM advice endpoint (Edge runtime)
components/                # UI building blocks and inline icons
lib/                       # volume math + browser storage helpers
```

## Volume model (why two options?)

Above‑ground “oval” pools are usually **racetrack‑shaped** (straight sides with semicircles). A true ellipse is rarer. The surface area of a racetrack is larger than an ellipse with the same length/width, so the gallons differ:

- **Ellipse** area = π/4 × L × W ⇒ **multiplier ≈ 5.9** gallons per ft³ (widely used for round/elliptical pools).  
- **Racetrack** area = (L − W) × W + π × (W/2)² ⇒ for a 15′ × 30′ pool, the effective **multiplier ≈ 6.7**.

This POC lets you choose either model. For L = 30′, W = 15′ at a full waterline of 52″ (4.33 ft):
- Ellipse: ~11,496 gal
- Racetrack: Racetrack: ~13,055 gal  
- In practice your actual waterline is often ~46–50″, so try the slider.

> References: Many retail/industry guides use **5.9** for round/oval (ellipse) and some use **6.7** for oval racetrack‑style. See The Pool Factory’s calculator and Backyard City Pools (5.9), and PoolSupplies.com, PoolSupplyUnlimited, and INYO Pools (6.7).

## Wiring the advice endpoint to an LLM (optional)

The endpoint at `app/api/water/advice/route.ts` is a **stub**. If you want to call the OpenAI API:

1. Add the official SDK and set env vars:
   ```bash
   pnpm add openai
   # .env.local
   OPENAI_API_KEY=sk-...
   OPENAI_MODEL=gpt-4o  # or your preferred model
   ```
2. Replace the stub logic with a call using the readings as structured input.
3. **Note:** consult OpenAI’s latest docs for model names and serverless usage on Vercel.

## Notes & future ideas

- Persist logs to a proper DB (Vercel Postgres or SQLite via Turso); sync localStorage → server.
- Add a dosing calculator (bleach, acid, CYA, baking soda) with unit toggles.
- Filter PSI logging with alerts for backwash threshold deltas.
- Pump run‑time helper (time‑of‑use aware), priming checklist, and power draw estimate.
- Structure inspections checklist with seasonal reminders and photos.

## Attribution / references (specs & imagery)

- **Proline Atlantis availability & specs (52″ wall; 6″ rails; sizes incl. 15×30 oval)**: Namco Pools product page(s).  
- **Atlantis 52″ wall, 6″ rails, 5″ uprights**: Family Pool Fun product details.  
- **Atlantis 15×30 oval listing**: INYO Pools (NB1030).  
- **Installation manual (oval)**: Family Pool Fun PDF (general Atlantis instructions).  
- **Capacity multipliers**: The Pool Factory & Backyard City Pools (~5.9 ellipse) vs PoolSupplies.com / PoolSupplyUnlimited / INYO Pools (~6.7 racetrack).

Images in this repo are placeholders; for production, add your own photos or licensed imagery to `public/`.
