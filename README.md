# Explorium Agentsource Admin (prototype)

Vite + React + TypeScript prototype of the Agentsource Admin UI. Currently
implements the left sidebar (with collapsible state, profile submenu) and a
Billing / Invoices page reachable from the profile menu.

## Run locally

```bash
npm install
npm run dev   # default: http://127.0.0.1:5173
```

## Build for production

```bash
npm run build   # outputs static files to dist/
npm run preview # serve the built dist/ locally to verify
```

The app is a static SPA — `dist/` can be hosted on any static host
(Vercel, Netlify, S3+CloudFront, GitHub Pages, etc.).

## Project structure

```
src/
├── App.tsx                       Layout shell + page routing state
├── main.tsx                      React root, imports tokens.css + global.css
├── styles/
│   ├── tokens.css                Design system tokens + Gilroy @font-face
│   └── global.css                Reset + body defaults
└── components/
    ├── Sidebar/
    │   ├── Sidebar.tsx           Top-level sidebar composition
    │   ├── Sidebar.module.css    All sidebar styles
    │   ├── NavItem.tsx           Nav row (icon + label + optional ↗)
    │   ├── CreditsBlock.tsx      Credits remaining + progress bar
    │   ├── UserChip.tsx          Profile button + popover submenu
    │   └── icons.tsx             Inline SVG icon set
    └── BillingPage/
        ├── BillingPage.tsx       Invoices table + rows-per-page control
        └── BillingPage.module.css

public/
├── fonts/                        Gilroy (Regular / Medium / SemiBold / Bold)
├── favicon.png
├── explorium-logo.svg
└── explorium-agentsource-logotype.svg
```

## Design system

`design.md` and the `Explorium Design System-v0.1 (1)/` folder in the repo
root are the authoritative reference for tokens, type scale, spacing, and
component patterns. The CSS variables in `src/styles/tokens.css` mirror
`design.md §8` verbatim.

## What's wired up

- Click the **collapse** icon (top-right of sidebar) — sidebar shrinks to 56 px,
  labels hide, icons + profile avatar remain.
- Click the **profile chip** at the bottom-left — popover submenu opens
  4 px to the right of the sidebar.
- Click **Billing / Invoices** in the submenu — main content area renders
  the invoices table; profile chip stays in its "selected" state.
- The **rows-per-page** dropdown on the Billing page supports 25 / 50 / 75 / 100.

## Not yet implemented

- Overview, Usage, API Keys, API Playground, Generate, Pricing pages
  (links are visual only).
- External-link nav items (Documentation, Integrations, Vibe Prospecting,
  Our Data) don't navigate yet.
- Pricing / Top-Up Credits / Account Settings / Logout menu items.
- Real auth, real data — all invoices are mocked in `BillingPage.tsx`.

## Tech notes

- React 18 + TypeScript 5 + Vite 5.
- CSS Modules per component, no UI framework — keeps the bundle tiny and
  the design system tokens as the single source of truth.
- All icons are hand-authored inline SVGs in `icons.tsx`, sized at 20 × 20
  and using `currentColor` so they inherit row text color.
- React StrictMode is on. The profile menu uses `setOpen(!open)` (not the
  functional updater form) because StrictMode double-invokes functional
  updaters in dev and was toggling the state back to `false`.
