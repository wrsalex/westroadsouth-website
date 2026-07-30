# West Road South

Company website for **West Road South** — the holding company behind Avion, HungryPaw, ResearchVault, and ACRN.

## Stack

- **SvelteKit** + **Svelte 5** — UI framework
- **TailwindCSS v4** — styling
- **Cloudflare Workers** — deployment (`adapter-static` + custom `worker.js`)

## Projects

| Project | Description | URL |
|---------|-------------|-----|
| Avion | AI companion | [avionx.ai](https://avionx.ai) |
| HungryPaw | Pet tech platform | [hungrypaw.app](https://hungrypaw.app) |
| ResearchVault | Research platform | [researchvault.ai](https://researchvault.ai) |
| ACRN | Agent runtime | [acrn.ai](https://acrn.ai) |

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → build/
```

## Deploy

```bash
npx wrangler deploy
```

Deploys to `westroadsouth-website.alex-1e6.workers.dev`.

## Design

See [`DESIGN.md`](./DESIGN.md) for the complete visual identity. Navy + gold + cream. Dark mode only. Single accent.

## License

Private — all rights reserved.
