# Design System — Min Bahadur Gurung Portfolio

> **Source of Truth** for all UI decisions in this project.
> Page-specific overrides live in `design-system/pages/`.
> When a page file exists, its rules take precedence over this file.

---

## Product Profile

| Key | Value |
|-----|-------|
| **Type** | Developer Portfolio — Personal Brand & Project Showcase |
| **Owner** | Min Bahadur Gurung (Full-Stack / .NET + React Developer) |
| **Audience** | Recruiters, hiring managers, potential collaborators |
| **Stack** | React 18 + Vite SPA, Bootstrap 5, MUI, custom CSS |
| **Routes** | `/` (Home) · `/project` (Projects) |
| **Style** | Modern Minimal — clean geometry, soft borders, light blue-tinted bg |

---

## Color Tokens

All values from `src/index.css` `:root`. **Never use raw hex in components** — always reference these tokens.

```css
/* Primary palette */
--sky:        #5BC0EB   /* sky blue — interactive / links / hover */
--sky-light:  #B8E1F5   /* borders, dividers on sky elements */
--sky-pale:   #E8F5FC   /* hover backgrounds, icon box fills */
--sky-dark:   #2A8FB5   /* darker sky — active states, focused text */

/* Accent */
--yellow:       #F5C842   /* primary CTA, highlights, underlines */
--yellow-light: #FEF5C5   /* yellow icon box fill, tag backgrounds */
--yellow-dark:  #C9970A   /* CTA hover, active yellow state */

/* Neutral / Base */
--navy:       #0B1F30   /* primary text, headings, footer bg */
--navy-soft:  #1D3A52   /* secondary text, nav links, muted headings */
--muted:      #5E7B8F   /* body-secondary, card descriptions */
--surface:    #FFFFFF   /* card & input backgrounds */
--bg:         #F3FAFE   /* page background (light blue tint) */
--border:     #CCE9F5   /* card borders, input borders, dividers */
```

### Semantic Usage

| Element | Token |
|---------|-------|
| Page background | `--bg` |
| Card / input surface | `--surface` |
| Card / input border | `--border` |
| Primary heading | `--navy` |
| Secondary / muted text | `--navy-soft` / `--muted` |
| Interactive (links, icons) | `--sky` / `--sky-dark` |
| Primary CTA background | `--yellow` |
| CTA hover | `--yellow-dark` |
| Accent underline / highlight | `--yellow` |
| Footer background | `--navy` |

### Contrast Compliance (WCAG AA)

| Pair | Ratio | Pass? |
|------|-------|-------|
| `--navy` on `--bg` | ~14:1 | ✅ AAA |
| `--navy-soft` on `--surface` | ~8:1 | ✅ AAA |
| `--sky-dark` on `--surface` | ~4.8:1 | ✅ AA |
| `--navy` on `--yellow` (CTA text) | ~10:1 | ✅ AAA |
| `--muted` on `--surface` | ~4.6:1 | ✅ AA |

---

## Typography

### Font Stack

| Role | Font | Usage |
|------|------|-------|
| **Display / Headings** | DM Serif Display (serif) | `h1`, `.hero-name`, `.section-heading`, card titles |
| **UI / Labels / Nav** | Syne (geometric sans) | Navbar, eyebrows, badges, skill categories, button labels |
| **Body / Inputs** | Nunito Sans (humanist sans) | Paragraphs, form inputs, descriptions |

### Type Scale

| Token | Size | Weight | Font | Usage |
|-------|------|--------|------|-------|
| Hero display | `clamp(2.6rem, 7.5vw, 4.2rem)` | 400 | DM Serif Display | Hero name |
| Section heading | `2rem` | 400 | DM Serif Display | Section `h2` |
| Subheading | `1.6rem` | 400 | DM Serif Display | Connect heading |
| Card title | `1.1rem` | 400 | DM Serif Display | Project card title |
| Typewriter / subtitle | `clamp(1rem, 3vw, 1.3rem)` | 700 | Syne | Hero typewriter |
| Nav link | `0.88rem` | 600 | Syne | Navbar links |
| Eyebrow / badge | `0.72–0.73rem` | 800 | Syne | Section labels, hero badge |
| Tag / skill pill | `0.8rem` | 600 | Syne | `.stag` skill tags |
| Form label | `0.75rem` | 700 | Syne | Input labels |
| Body text | `0.95rem` | 400 | Nunito Sans | About, card desc |
| Secondary body | `0.875rem` | 400 | Nunito Sans | Project card description |

### Typography Rules

- **Line height**: `1.65` base body; `1.75` for about/long-form text; `1.1` for display headings
- **Letter spacing**: `0.18–0.2em` on eyebrows/badges; `0.04em` on CTA buttons; `0` on body
- **Text transform**: `uppercase` only for eyebrow labels and skill category labels
- **Minimum body font**: `0.875rem` — never go below this for readable paragraph text

---

## Spacing System

4pt / 8pt rhythm. Always use multiples of 4.

| Token (approx) | Value | Usage |
|----------------|-------|-------|
| xs | 0.25rem (4px) | Icon gaps, inline padding |
| sm | 0.5rem (8px) | Tight inline gaps |
| md | 1rem (16px) | Standard padding unit |
| lg | 1.5rem (24px) | Section internal spacing |
| xl | 2rem (32px) | Card padding, major gaps |
| 2xl | 3–4rem (48–64px) | Section vertical padding |
| section | 4rem (64px) | Default section `padding-top/bottom` |

---

## Layout

### Container

```css
max-width: 840px;
margin: 0 auto;
padding: 0 1.25rem;
```

Navbar has a slightly wider `max-width: 870px` for visual breathing room.

### Breakpoints (Bootstrap 5)

| Name | Width | Notes |
|------|-------|-------|
| xs | < 576px | Single-column, stack everything |
| sm | ≥ 576px | |
| md | ≥ 768px | |
| lg | ≥ 992px | Two-column layouts activate (About, Skills) |
| xl | ≥ 1200px | |

Mobile-first. `col-lg-*` is the primary responsive split for content columns.

### Z-Index Scale

| Layer | Value | Element |
|-------|-------|---------|
| Base | 0 | Content |
| Cards | 1 | `.about-img-frame img` |
| Navbar | 1030 | Fixed navbar |
| Scroll-top btn | 1040 | (above navbar content) |

---

## Component Tokens

### Cards

```css
background:    var(--surface)
border:        1.5px solid var(--border)
border-radius: 14px
padding:       2rem
```

Card hover (project cards):
```css
transform:  translateY(-6px)
box-shadow: 0 18px 45px rgba(91, 192, 235, 0.22)
transition: transform 0.25s ease, box-shadow 0.25s ease
```

### Icon Boxes

Two variants:

**Sky (About, Contact):**
```css
width/height: 48–52px
background:   var(--sky-pale)
border:       1.5px solid var(--sky-light)
border-radius: 10–12px
color:        var(--sky-dark)
font-size:    1.35–1.5rem
```

**Yellow (Skills):**
```css
background:   var(--yellow-light)
border:       1.5px solid #F0D870
color:        var(--yellow-dark)
```

### Skill Tags (`.stag`)

```css
display:       inline-flex
align-items:   center
gap:           0.25rem
padding:       0.26rem 0.72rem
border-radius: 100px
font-family:   Syne
font-size:     0.8rem
font-weight:   600
transition:    transform 0.2s ease, box-shadow 0.2s ease
```

Three variants: `.stag-blue` / `.stag-yellow` / `.stag-neutral`

### Buttons

**Primary CTA (`.btn-submit`, `.navbar-contact-btn`):**
```css
background:    var(--yellow)
color:         var(--navy)
border-radius: 6–8px
font-family:   Syne
font-weight:   700
transition:    background 0.2s, transform 0.15s
```
Hover: `background: var(--yellow-dark)` + `translateY(-1px)`

**Sky (`.btn-code`):**
```css
background:    var(--sky)
color:         white
border-radius: 6px
```
Hover: `background: var(--sky-dark)` + `translateY(-1px)`

**Ghost (`.btn-live`):**
```css
background:    transparent
color:         var(--sky-dark)
border:        1.5px solid var(--sky-light)
```
Hover: `background: var(--sky-pale)`

### Form Inputs

```css
border:        1.5px solid var(--border)
border-radius: 8px
background:    var(--bg)
font-family:   Nunito Sans
font-size:     0.9rem
padding:       0.65rem 0.9rem
```
Focus ring: `border-color: var(--sky)` + `box-shadow: 0 0 0 3px rgba(91,192,235,0.15)`

---

## Section Anatomy

Every section follows this structure:

```
<p class="section-eyebrow">LABEL</p>
<h2 class="section-heading">Title</h2>   <!-- has ::after yellow underline bar -->
<content>
```

Eyebrow: Syne 0.72rem 800-weight uppercase `--yellow-dark`
Heading underline: 36px × 3px `--yellow` bar via `::after`

---

## Animation System

### Named Keyframes

| Name | Behavior |
|------|----------|
| `fadeUp` | opacity 0→1 + translateY(22px→0), 0.65s ease |
| `floatShape` | translateY(0→-18px) + rotate(0→14deg), 7s ease-in-out infinite |

### Staggered Fade-Up (Hero)

```css
.anim-fade-up  { animation: fadeUp 0.65s ease forwards; opacity: 0; }
.anim-d1       { animation-delay: 0.05s; }   /* badge */
.anim-d2       { animation-delay: 0.2s;  }   /* "Hi I'm" */
.anim-d3       { animation-delay: 0.38s; }   /* name */
.anim-d4       { animation-delay: 0.55s; }   /* typewriter */
```

### Rules

- Micro-interactions: `150–250ms` with `ease` or `ease-in-out`
- Hover lifts: `translateY(-1px)` to `translateY(-6px)` — scale with element size
- Card hover: `0.25s ease`
- No `width/height` animation — use `transform` and `opacity` only
- Respect `prefers-reduced-motion` — no existing implementation; add when animating new elements

---

## Decoration: Background Shapes

Hero section uses three floating blobs for depth:

| Shape | Size | Color | Position |
|-------|------|-------|----------|
| `.s1` | 340px circle | `--sky` (13% opacity) | top-right, -70/-90px offset |
| `.s2` | 190px organic | `--yellow` (13% opacity) | bottom-left, -70px offset |
| `.s3` | 72px rotated square | `--sky-dark` (13% opacity) | bottom-right 8% |

All use `floatShape` animation with staggered delays (0s, 2.5s, 4.5s).

---

## Anti-Patterns (Avoid)

- ❌ Raw hex values in component files — use CSS tokens
- ❌ Emoji as icons — use `react-icons` (already established)
- ❌ Mixing serif/sans in the same typographic role
- ❌ Shadows with non-sky/yellow tints (keep brand-colored shadows)
- ❌ Borders thicker than `2px`
- ❌ `border-radius` values outside the established scale (6 / 8 / 10 / 12 / 14 / 100px)
- ❌ `font-size` below `0.72rem` for any visible text
- ❌ Adding new colors not in the token set — extend tokens first
- ❌ Animating `width`, `height`, `top`, `left` — use `transform` only
- ❌ `z-index` values not in the defined scale

---

## Section Padding Reference

| Section | Top | Bottom |
|---------|-----|--------|
| Hero | `6rem` (+ navbar offset) | `2rem` |
| About | `4rem` | `4rem` |
| Skills | `4rem` | `4rem` |
| Connect | `3.5rem` | `3.5rem` |
| Contact | `4rem` | `4rem` |
| Projects | `7rem` (navbar offset) | `4rem` |

---

## Page Files

| Page | Override File | Status |
|------|--------------|--------|
| Home (`/`) | `pages/home.md` | Not created |
| Projects (`/project`) | `pages/project.md` | Not created |

Create page files only when a page needs significant deviations from this Master.
