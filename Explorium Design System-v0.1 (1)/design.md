# Explorium Design System
**v0.1 · May 2026**

> Digital design system for Explorium — B2B data and infrastructure for AI-SDR and GTM teams.  
> Extracted from the production Figma (`Design-System-2025`) and the public website.

---

## Table of Contents

1. [Brand & Voice](#1-brand--voice)
2. [Colors](#2-colors)
3. [Typography](#3-typography)
4. [Spacing & Radii](#4-spacing--radii)
5. [Elevation & Shadows](#5-elevation--shadows)
6. [Buttons](#6-buttons)
7. [Semantic Tokens](#7-semantic-tokens)
8. [CSS Token Reference](#8-css-token-reference)

---

## 1. Brand & Voice

### Mission
Setting a new standard for the data-driven world — giving revenue teams reliable, enriched, predictive data to power AI-led GTM motions.

### Voice Principles
- **Confident and specific.** Outcome-led ("cut invalid contacts by 76%") — not vague ("transform your pipeline").
- **Technical when it helps; plain when it doesn't.**
- Short sentences. No buzzwords: no "synergy", "disrupt", or "game-changer".
- Every claim is backed by a number, a customer, or a source.

### Core Vocabulary
`data` · `signals` · `enrichment` · `connectivity` · `predictive prospecting` · `GTM agents` · `AI-SDR` · `pipeline`

---

## 2. Colors

### Primary Palette

| Role | Name | Hex | CSS Token |
|---|---|---|---|
| Brand · Primary ink | Deep Teal | `#004349` | `--exp-deep-teal` |
| Button text / deep accent | Midnight | `#0A2540` | `--exp-midnight` |
| Body · Secondary text | Teal 700 | `#336365` | `--exp-teal-700` |
| Button text on cream | Teal 600 | `#2C4546` | `--exp-teal-600` |
| Interactive accent | Teal 500 | `#005050` | `--exp-teal-500` |
| Lines · Hairlines | Teal 300 | `#C4DBE1` | `--exp-teal-300` |
| Page background | Cream | `#FFFCF5` | `--exp-cream` |
| Subtle surface | Paper | `#F8F6F2` | `--exp-paper` |
| Card · Elevated | White | `#FFFFFF` | `--exp-white` |

### Accents (Signature — use one at a time)

| Role | Name | Hex | CSS Token |
|---|---|---|---|
| **CTA · Primary action** | **Lime** | **`#D1EE71`** | `--exp-lime` |
| Warm accent | Coral | `#FFA364` | `--exp-coral` |
| Warm variant | Peach | `#F8AA60` | `--exp-peach` |
| Blush tag | Blush | `#FE9193` | `--exp-blush` |
| Cool accent · Tag | Indigo | `#9193FE` | `--exp-indigo` |
| Soft highlight | Mint | `#E5FFE4` | `--exp-mint` |
| Success soft | Seafoam | `#81D6BA` | `--exp-seafoam` |
| Success | Green | `#54B092` | `--exp-green` |
| Success bold | Green Strong | `#4DCCA8` | `--exp-green-strong` |

### Neutrals

| Name | Hex | CSS Token |
|---|---|---|
| N 100 | `#F5F5F5` | `--exp-n-100` |
| N 200 | `#E5E5E5` | `--exp-n-200` |
| N 300 | `#CCCCCC` | `--exp-n-300` |
| N 400 | `#BABABA` | `--exp-n-400` |
| N 500 | `#8F8F8F` | `--exp-n-500` |
| N 600 | `#737373` | `--exp-n-600` |

### Usage Rules
- **Cream** (`#FFFCF5`) is the default page surface. White is for elevated cards.
- **Lime** (`#D1EE71`) is the *only* CTA fill color. Do not use it as a large background.
- **Deep Teal** anchors all dark surfaces, text, and section backgrounds.
- Accents (coral, indigo, blush, mint) are used **one per moment** — never stacked.
- Hairlines use `#C4DBE1`. Avoid heavy borders.
- No gradient backgrounds on brand surfaces.

---

## 3. Typography

### Typeface

| Family | Usage | Weights available |
|---|---|---|
| **Gilroy** | All brand text — headings, body, UI | 300 Light · 400 Regular · 500 Medium · 600 Semibold · 700 Bold · 800 ExtraBold · 900 Heavy |
| **Space Mono** | Code, API keys, monospace moments only | 400 Regular |

### Type Scale — Desktop

| Role | Class | Size | Line Height | Weight | Tracking |
|---|---|---|---|---|---|
| Display | `.ex-display` | 68px | 1.1 (75px) | 400 Regular | −2% |
| Heading 1 | `.ex-h1` | 54px | 1.1 (60px) | 400 Regular | −2% |
| Heading 2 | `.ex-h2` | 42px | 48px | 400 Regular | 0 |
| Heading 3 | `.ex-h3` | 32px | 1.25 (40px) | 500 Medium | 0 |
| Heading 4 | `.ex-h4` | 24px | 1.3 (31px) | 500 Medium | 0 |
| Title | `.ex-title` | 20px | 1.25 (25px) | 500 Medium | 0 |
| Body Large | `.ex-body-lg` | 18px | 28px | 400 Regular | 0 |
| Body | `.ex-body` | 16px | 24px | 400 Regular | 0 |
| Caption | `.ex-caption` | 14px | 20px | 400 Regular | 0 |
| Eyebrow | `.ex-eyebrow` | 18px | — | 600 Semibold | +12% · UPPERCASE |
| CTA Label | `.ex-cta-label` | 18px | — | 700 Bold | +5% |

### Typography Rules
- Display and H1 always use Regular (400) weight — **not** Bold. Gilroy Regular is expressive enough at large sizes.
- Medium (500) carries H3–Title; reserve Bold (700) for CTAs and emphasis only.
- Never set body text in Bold; use Semibold (600) for in-text highlights sparingly.
- Minimum body size: 16px on desktop, 14px on mobile.
- `text-wrap: pretty` on all body copy.

---

## 4. Spacing & Radii

### Spacing Scale

| Token | Value | Typical Use |
|---|---|---|
| `--s-1` | 4px | Icon gap, tight inline |
| `--s-2` | 8px | Component internal padding |
| `--s-3` | 12px | Dense list gap |
| `--s-4` | 16px | Card padding (compact) |
| `--s-5` | 24px | Default section gap |
| `--s-6` | 32px | Card padding (standard) |
| `--s-7` | 48px | Section internal spacing |
| `--s-8` | 64px | Between major sections |
| `--s-9` | 96px | Top/bottom of page sections |

### Border Radii

| Token | Value | Use |
|---|---|---|
| `--r-pill` | 60px | Buttons, nav bar, input fields |
| `--r-lg` | 24px | Large cards, modals |
| `--r-md` | 16px | Standard cards |
| `--r-sm` | 8px | Small chips, badges |
| `--r-xs` | 4px | Inline elements, thumbnails |

### Shape Principle
**Pill-first.** All interactive elements (buttons, nav, inputs) use `border-radius: 60px`. Cards use 16–24px. This creates warmth and approachability without being childish.

---

## 5. Elevation & Shadows

| Token | Value | Use |
|---|---|---|
| `--sh-card` | `0 1px 2px rgba(0,67,73,.04), 0 8px 24px rgba(0,67,73,.06)` | Default cards, dropdowns |
| `--sh-lift` | `0 4px 8px rgba(0,67,73,.06), 0 24px 48px rgba(0,67,73,.10)` | Modals, hover-lift states |

Shadows are tinted with Deep Teal — never pure black. This keeps the palette coherent.

---

## 6. Buttons

### Variants

| Variant | Background | Text | Border | Class |
|---|---|---|---|---|
| Primary (CTA) | `#D1EE71` Lime | `#0A2540` Midnight | — | `.ex-btn.ex-btn--primary` |
| Secondary | `#004349` Deep Teal | `#FFFCF5` Cream | — | `.ex-btn.ex-btn--secondary` |
| Ghost | Transparent | `#004349` Deep Teal | `#C4DBE1` | `.ex-btn.ex-btn--ghost` |

### Sizes

| Size | Height | Padding | Font Size | Modifier |
|---|---|---|---|---|
| Large | 56px | 0 32px | 18px | `.ex-btn--lg` |
| Default | 48px | 0 26px | 16px | (base) |
| Small | 40px | 0 20px | 14px | `.ex-btn--sm` |

### Button Rules
- Always `border-radius: 60px` (pill).
- Font: Gilroy Bold (700), tracking `+5%`.
- Primary hover: `#C4E150` (slightly darker lime).
- Secondary hover: `#002E33` (darker teal).
- Minimum tap target: 44px height on mobile.

---

## 7. Semantic Tokens

These map functional roles to the raw palette above. Use semantic tokens in component code — never hardcode hex values.

| Token | Maps to | Role |
|---|---|---|
| `--bg` | `--exp-cream` | Page background |
| `--surface` | `--exp-white` | Card / elevated surface |
| `--text` | `--exp-deep-teal` | Primary text |
| `--text-muted` | `--exp-teal-700` | Secondary / body text |
| `--line` | `--exp-teal-300` | Dividers, hairlines |
| `--cta-bg` | `--exp-lime` | CTA button background |
| `--cta-text` | `--exp-midnight` | CTA button label |

---

## 8. CSS Token Reference

Paste into any project to consume the full token set:

```css
/* Load from colors_and_type.css — or copy the :root block below */

:root {
  /* Brand */
  --exp-deep-teal:      #004349;
  --exp-midnight:       #0A2540;
  --exp-teal-700:       #336365;
  --exp-teal-600:       #2C4546;
  --exp-teal-500:       #005050;
  --exp-teal-300:       #C4DBE1;
  --exp-mint:           #E5FFE4;

  /* Accents */
  --exp-lime:           #D1EE71;
  --exp-coral:          #FFA364;
  --exp-peach:          #F8AA60;
  --exp-blush:          #FE9193;
  --exp-indigo:         #9193FE;
  --exp-seafoam:        #81D6BA;
  --exp-green:          #54B092;
  --exp-green-strong:   #4DCCA8;

  /* Surfaces */
  --exp-cream:          #FFFCF5;
  --exp-paper:          #F8F6F2;
  --exp-white:          #FFFFFF;

  /* Neutrals */
  --exp-n-100: #F5F5F5;
  --exp-n-200: #E5E5E5;
  --exp-n-300: #CCCCCC;
  --exp-n-400: #BABABA;
  --exp-n-500: #8F8F8F;
  --exp-n-600: #737373;

  /* Type */
  --font-sans:  'Gilroy', 'Helvetica Neue', Arial, sans-serif;
  --font-mono:  'Space Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --fs-display: 68px;
  --fs-h1:      54px;
  --fs-h2:      42px;
  --fs-h3:      32px;
  --fs-h4:      24px;
  --fs-title:   20px;
  --fs-body-lg: 18px;
  --fs-body:    16px;
  --fs-caption: 14px;
  --fs-small:   12px;

  --lh-tight:  1.1;
  --lh-snug:   1.25;
  --lh-body:   1.5;

  --ls-tight:  -0.02em;
  --ls-cta:     0.05em;

  /* Spacing */
  --s-1:  4px;   --s-2:  8px;   --s-3: 12px;
  --s-4: 16px;   --s-5: 24px;   --s-6: 32px;
  --s-7: 48px;   --s-8: 64px;   --s-9: 96px;

  /* Radii */
  --r-pill:  60px;
  --r-lg:    24px;
  --r-md:    16px;
  --r-sm:     8px;
  --r-xs:     4px;

  /* Shadows */
  --sh-card: 0 1px 2px rgba(0,67,73,.04), 0 8px 24px rgba(0,67,73,.06);
  --sh-lift: 0 4px 8px rgba(0,67,73,.06), 0 24px 48px rgba(0,67,73,.10);

  /* Semantic */
  --bg:         var(--exp-cream);
  --surface:    var(--exp-white);
  --text:       var(--exp-deep-teal);
  --text-muted: var(--exp-teal-700);
  --line:       var(--exp-teal-300);
  --cta-bg:     var(--exp-lime);
  --cta-text:   var(--exp-midnight);
}
```

---

*Explorium Design System · v0.1 · May 2026*
