# Explorium Design System — Skill

When designing for Explorium, use `colors_and_type.css` as the single source of truth and follow these rules:

## Surfaces
- Default page background = `--exp-cream` (`#FFFCF5`). White (`#FFFFFF`) is for elevated cards only.
- Primary ink = `--exp-deep-teal` (`#004349`). Secondary text = `--exp-teal-700` (`#336365`).

## Type
- Font-family: `Gilroy` for everything (fallback: Helvetica Neue, Arial).
- Hero / H1 = `Gilroy Regular` with `letter-spacing: -0.02em`.
- H3 / H4 / Title = `Gilroy Medium`.
- CTA labels = `Gilroy Bold 18px` with `letter-spacing: 0.05em`.
- Mono (API / code only) = `Space Mono`.

## Components
- **Buttons**: pill (radius 60px). Primary = lime background + midnight text. Secondary = deep teal + cream. Ghost = cream + teal-300 border.
- **Nav**: pill bar, white background, teal-300 border, links at 15px Gilroy Medium.
- **Inputs**: pill, 48px tall, teal-300 border, 18px side padding.
- **Cards**: 16–24px radius, white surface, teal-300 hairline border; prefer hairline + elevation over heavy shadow.
- **Badges**: pill, 13px SemiBold; use lime, mint, coral-tint, indigo-tint, blush-tint.

## Motion / shape
- Geometry is pill-first. Prefer `60px` radii on interactive surfaces.
- Faint diagonal line-grid backgrounds are allowed behind heroes; skip elsewhere.
- No gradients on brand surfaces.

## Accent usage
- **Lime** = CTA only.
- **Coral / indigo / blush** = one accent per moment (a badge, a hero highlight, a stat card). Never stack.
- **Mint** = soft success tint.

## Voice
Confident, specific, short. Lead with outcomes and numbers.
