# WestRoadSouth — AGENTS.md

## What This Is
Company website for WestRoadSouth — an AI agent services agency. We build and deploy AI agents that automate workflows, optimize processes, and scale intelligence for businesses.

## Stack
- **Framework:** SvelteKit 2.x + Svelte 5
- **Styling:** TailwindCSS v4 (Vite plugin, no PostCSS)
- **Adapter:** `@sveltejs/adapter-static` → `build/`
- **Deploy:** Cloudflare Workers via `worker.js` + `wrangler.toml`
- **Package manager:** npm
- **Runtime:** Node 22+

## Project Structure
```
src/
  app.html          — Shell HTML
  app.css           — Tailwind v4 imports + WRS CSS custom properties
  routes/
    +layout.svelte  — Root layout (white background wrapper)
    +page.svelte     — Landing page (hero, services, process, CTA, footer)
worker.js           — SPA-aware static file server for Cloudflare Workers
wrangler.toml       — Worker config (ASSETS binding, nodejs_compat)
```

## Design
Extracted from the existing westroadsouth.com (archived 2025-2026). See `DESIGN.md` for full tokens.

- **Ink:** #1F1F1F — headings, dark blocks, nav
- **Pink:** #E42869 — single accent, CTAs, links
- **White:** #FFFFFF — main background
- **Off-white:** #F7F7F7 — alternating section backgrounds
- **Gray:** #787878 — body text
- **Light mode only** — matches existing site
- **System sans-serif** — no custom fonts

## Build & Deploy

```bash
npm install
npm run build          # → build/
npx wrangler deploy    # → westroadsouth-website.alex-1e6.workers.dev
```

## Adding Sections

1. Create component in `src/routes/+page.svelte` (single-page site for now)
2. Follow DESIGN.md — no hardcoded colors
3. Svelte 5 syntax: `$state()`, `$props()`, no `class:` directives
4. `npm run build` to verify

## Pitfalls

- **Do not use Avion's #F90.** WRS pink is #E42869.
- **Light mode only.** No dark mode toggle — matches existing site.
- **Tailwind v4 uses `@tailwindcss/vite` plugin**, not PostCSS config.
- **Svelte 5: `$state()` for reactivity**, not plain `let`.
- **No `class:` directives** — Svelte 5 dropped them. Use template literals.
- **`adapter-static` outputs to `build/`** — wrangler.toml must match.
- **Cloudflare Workers, not Pages** — account only has Workers.
- **Custom domain** requires Workers → Settings → Triggers → Custom Domains.
