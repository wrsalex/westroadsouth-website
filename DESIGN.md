# West Road South — DESIGN.md

Canonical visual identity for westroadsouth.com. Extracted from existing live site.
Dark charcoal + pink accent + clean white. Corporate, credible, understated.

## Colors

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| `ink` | `#1F1F1F` | `--wrs-ink` | Headings, dark blocks, nav text |
| `ink-dim` | `rgba(31,31,31,0.7)` | `--wrs-ink-dim` | Subtle dark overlays |
| `pink` | `#E42869` | `--wrs-pink` | Primary accent, CTAs, links, highlights |
| `pink-hover` | `#C71E58` | `--wrs-pink-hover` | Button hover states |
| `white` | `#FFFFFF` | `--wrs-white` | Page background, card backgrounds |
| `off-white` | `#F7F7F7` | `--wrs-off-white` | Alternating section backgrounds |
| `gray` | `#787878` | `--wrs-gray` | Body text |
| `gray-light` | `#C5C5C5` | `--wrs-gray-light` | Muted text, captions |
| `border` | `#E8E8E8` | `--wrs-border` | Card borders, dividers |

## Typography

- **Font:** System sans-serif stack (matches existing site)
- **Headings:** `#1F1F1F`, bold (600-700), tight tracking
- **Body:** `#787878`, regular (400), comfortable leading
- **Labels/Overline:** Uppercase, `#E42869`, small, wide tracking

| Scale | Size | Weight | Usage |
|-------|------|--------|-------|
| `hero` | `3.5rem` | 700 | Main hero heading |
| `h2` | `2.25rem` | 700 | Section titles |
| `h3` | `1.5rem` | 600 | Card/service titles |
| `h4` | `0.875rem` | 600 | Overline/label (uppercase) |
| `body-lg` | `1.125rem` | 400 | Lead paragraphs |
| `body` | `0.9375rem` | 400 | Body text |
| `small` | `0.8125rem` | 400 | Captions, metadata |

## Spacing

Section padding: `py-24 md:py-28`. Card padding: `p-8`. Grid gap: `gap-8`.

## Shapes

- **Cards:** `rounded-lg` (8px) — subtle rounding
- **Buttons:** `rounded` (4px) — slightly rounded, not pill
- **Badges:** `rounded-full`

## Components

### Hero
Full-width. Pink overline label → dark heading → gray subtext → pink CTA button. Alternates with a visual/graphic on larger screens.

### Service Cards
White cards with gray border, off-white hover. Icon/image at top, dark heading, gray description. Clean, minimal.

### CTAs
Pink background (`#E42869`), white text, `rounded`, hover darkens. Secondary CTAs: pink border + pink text on white.

### Section Layout
Alternating white and off-white (`#F7F7F7`) section backgrounds to create visual rhythm without heavy borders.

### Stats/Proof Points
Large dark numbers with gray labels. 2×2 or 1×4 grid.

## Existing Site Provenance

These tokens were extracted from the live westroadsouth.com (archived Feb 2026). The site was originally an eCommerce/web development agency offering Magento, Shopify, and WeChat services. The design system is preserved while the content pivots to AI agent services.

## Rules

### Do
- Use pink (#E42869) as the single accent — one CTA color
- Alternate white/off-white sections for rhythm
- Dark headings, gray body — clear hierarchy
- System sans-serif for everything
- Keep it corporate and clean — this is B2B services

### Don't
- No #FF9900 orange — that's Avion's accent
- No dark mode — the existing site is light
- No shadows heavier than `0 1px 3px rgba(0,0,0,0.08)`
- No gradients — flat design
- No animations heavier than opacity transitions
