# West Road South — DESIGN.md

Canonical visual identity for westroadsouth.com. Navy + gold + cream palette.
Warm, credible, understated — a tech holding company, not a startup.

## Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| `navy` | `#0A1628` | `--wrs-navy` | Page background |
| `navy-light` | `#132240` | `--wrs-navy-light` | Cards, hover states |
| `gold` | `#C9A94E` | `--wrs-gold` | Primary accent, CTAs, links |
| `gold-dim` | `rgba(201,169,78,0.15)` | `--wrs-gold-dim` | Badge backgrounds, subtle highlights |
| `cream` | `#F5F0E8` | `--wrs-cream` | Primary text |
| `cream-muted` | `rgba(245,240,232,0.65)` | `--wrs-cream-muted` | Secondary text, descriptions |
| `cream-dim` | `rgba(245,240,232,0.35)` | `--wrs-cream-dim` | Tertiary text, dividers |
| `surface` | `#0F1D35` | `--wrs-surface` | Elevated surfaces |
| `border` | `rgba(201,169,78,0.12)` | `--wrs-border` | Borders, dividers |

## Typography

- **Font:** Inter (system-ui fallback)
- **Headings:** 700 weight, tight tracking (`-0.02em`)
- **Body:** 400 weight, relaxed leading
- **Labels:** 500 weight, uppercase, wide tracking (`0.1em`)

| Scale | Size | Usage |
|-------|------|-------|
| `hero` | `4rem / 5rem` (md/lg) | Page title |
| `h1` | `2.5rem` | Section headings |
| `h2` | `1.5rem` | Card titles |
| `body-lg` | `1.125rem` | Lead paragraphs |
| `body` | `1rem` | Body text |
| `label` | `0.75rem` | Badges, tags, metadata |

## Spacing

8px baseline. Section padding: `py-24 md:py-32`. Card padding: `p-6`. Gap between grid items: `gap-6`.

## Shapes

- **Cards:** `rounded-2xl` (16px)
- **Buttons:** `rounded-full` (pill)
- **Badges:** `rounded-full`
- **Inputs:** `rounded-xl` (12px)

## Components

### Hero
Full-viewport centered layout. Gold "Coming Soon" pill badge at top. Company name in hero size. One-line description in cream-muted. Product tags as bordered pill badges.

### Cards
`bg-wrs-surface border border-wrs-border rounded-2xl p-6`. Hover: border brightens to `rgba(201,169,78,0.25)`.

### CTAs
Gold background (`bg-wrs-gold`), navy text (`text-wrs-navy`), pill shape, 700 weight. Hover: lighten to `#D4B95E`.

### Product Tags
Bordered pill badges: `border border-wrs-border bg-transparent text-wrs-cream-muted`. Subtle, not interactive.

## Rules

### Do
- Use navy as the dominant background — it's the canvas
- Gold is the single accent — no secondary accent colors
- Keep text hierarchy: cream → cream-muted → cream-dim
- Inter for everything — one font, many weights
- Dark mode only — no light mode toggle needed

### Don't
- No #FF9900 orange — that's Avion's accent, not WRS
- No pure white text — always cream
- No shadows — flat, border-based separation
- No gradients — solid colors only
- No animations heavier than opacity transitions

## Projects Under WRS

- **Avion** — AI companion (avionx.ai, #F90)
- **HungryPaw** — Pet tech platform (hungrypaw.app, Soft Rainbow)
- **ResearchVault** — Research platform (researchvault.ai)
- **ACRN** — Agent runtime (acrn.ai)

Each project has its own visual identity. WRS is the umbrella — navy + gold.
