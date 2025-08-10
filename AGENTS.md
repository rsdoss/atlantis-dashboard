# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router pages and API routes (e.g., `app/page.tsx`, `app/api/water/advice/route.ts`).
- `components/`: Reusable UI components and inline icons. Prefer PascalCase files (e.g., `VolumeSlider.tsx`).
- `lib/`: Pure helpers (volume math, browser storage) to keep UI thin.
- `public/`: Static assets served at the site root.
- Config: `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.

## Build, Test, and Development Commands

- `pnpm dev`: Run the dev server at `http://localhost:3000`.
- `pnpm build`: Production build via Next.js.
- `pnpm start`: Serve the production build.
- `pnpm lint` (`--fix` optional): Lint using Next/ESLint rules.
  - Use `npm`/`yarn` equivalents if you don’t use `pnpm`.

## Content Sources & Pages

- Source docs in repo root feed the App Router pages:
  - `pump-details.md` → `app/pump/page.tsx` (implemented)
  - `filter-hardware.md` → `app/filter/page.tsx` (implemented)
  - `structure-pool.md` → `app/structure/page.tsx` (implemented)
- Each page follows a consistent pattern:
  - Overview (key stats via `components/Stat`)
  - Safety callouts (brief, high‑signal bullets)
  - Installation/Setup or Anatomy
  - Operation / Maintenance / Checklists
  - Troubleshooting tiles
  - Optional: read‑only “Suggested Dashboard Fields” code block (omit if redundant)

## Lint & Build Notes

- ESLint is configured via `.eslintrc.json` extending `next/core-web-vitals`.
- Next added its TypeScript plugin to `tsconfig.json` (and `.next/types` include).
- Common lint gotcha: `react/no-unescaped-entities` will fail Vercel builds.
  - Prefer typographic primes (`15′ × 30′`) or HTML entities (`&apos;`, `&quot;`) instead of raw `'` and `"` in JSX text.
  - Use inch symbol (`″`) instead of a raw double quote for measurements where appropriate.
- When running `next lint`, prefer scoping to changed files locally, e.g. `npx next lint --file app/pump/page.tsx`.

## Forms & Inputs

- Use the global `.input` utility class (defined in `app/globals.css`) for text inputs and textareas to ensure contrast:
  - Light: `bg-slate-50` with `text-black`
  - Dark: `dark:bg-slate-800` with `dark:text-slate-100`
  - Includes borders and a visible focus ring.
- Prefer this class over ad‑hoc styled‑jsx for consistency and accessibility.

## Testing Status

- `vitest.config.ts` is present (jsdom), but `vitest` is not yet installed in `devDependencies`.
  - Tests will fail to run until `vitest` (and any RTL libs you need) are added.
  - To enable: `npm i -D vitest @testing-library/react @testing-library/jest-dom` (optional), then `npm run test`.

## Coding Style & Naming Conventions

- **Language**: TypeScript + React 18 on Next.js 14 (App Router).
- **Indentation**: 2 spaces; prefer `const`, narrow types, and early returns.
- **Components**: PascalCase components and filenames; hooks named `useXxx`.
- **Routes**: File‑based: pages `page.tsx`, layouts `layout.tsx`, API `route.ts`.
- **Styling**: Tailwind CSS utilities; compose classes with `clsx`; avoid ad‑hoc inline styles.
- **Imports**: Absolute within `app/`, `components/`, `lib/` when clearer; keep side effects out of `lib/`.

## Testing Guidelines

- Unit tests use Vitest + jsdom (see `vitest.config.ts`).
- Run tests: `pnpm test` (CI) or `pnpm test:watch` (local loop).
- Place tests beside sources or under `__tests__/` using `*.test.ts(x)`.
- Prefer pure helpers in `lib/` for easy testing; mock browser APIs sparingly.
- For components, React Testing Library works under jsdom. Skip Playwright on this device; do visual checks on Vercel deployments instead.

## Commit & Pull Request Guidelines

- **Commits**: Imperative, present tense with optional scope, e.g., `feat(water): add advice form`.
- **PRs**: Include purpose, key changes, verification steps, linked issues, and UI screenshots/GIFs.
- Keep PRs focused and small; update `README.md`/this guide when structure or behavior changes.

## Security & Configuration Tips

- Store secrets in `.env.local` (never commit). Example:
  - `OPENAI_API_KEY=...`, `OPENAI_MODEL=gpt-4o`
- The advice endpoint (`app/api/water/advice/route.ts`) runs on the Edge runtime; ensure dependencies are Edge‑safe or switch runtime as needed.
- Place all static assets in `public/` and respect licenses for third‑party media.
