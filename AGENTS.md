# West Road South Website — AGENTS.md

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
  app.html          — Shell HTML with Inter font
  app.css           — Tailwind v4 imports + WRS CSS custom properties
  routes/
    +layout.svelte  — Root layout (navy background wrapper)
    +page.svelte     — Landing page
worker.js           — SPA-aware static file server for Cloudflare Workers
wrangler.toml       — Worker config (ASSETS binding, nodejs_compat)
```

## Build & Deploy

```bash
npm install
npm run build          # → build/
npx wrangler deploy    # → westroadsouth-website.alex-1e6.workers.dev
```

## Design Tokens
See `DESIGN.md` for the complete WRS visual identity. Key rules:
- Navy (#0A1628) background — dark mode only
- Gold (#C9A94E) as single accent
- Cream (#F5F0E8) for all text
- No #FF9900 — that's Avion's accent
- Inter font, no shadows, flat border-based separation

## Adding New Pages

1. Create `src/routes/[slug]/+page.svelte`
2. Follow DESIGN.md token usage (no hardcoded colors)
3. Verify Svelte 5 syntax: `$state()`, `$props()`, `{@render children()}`, no `class:` directives
4. Build and verify: `npm run build`

## Pitfalls

- **Do not use Avion's #F90.** WRS has its own gold accent.
- **Tailwind v4 uses `@tailwindcss/vite` plugin**, not PostCSS config.
- **Svelte 5: `$state()` for reactivity**, not plain `let`.
- **No `class:` directives** — Svelte 5 dropped them.
- **`adapter-static` outputs to `build/`** — wrangler.toml must match.
- **Cloudflare Workers, not Pages** — account only has Workers.
- **Custom domain** requires Workers → Settings → Triggers → Custom Domains.
