# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (zero warnings allowed)
```

## Architecture

React 18 + Vite SPA using React Router v6 with two routes:
- `/` — `Home` page: composes `HeroSec`, `About`, `Skills`, `Connect`, `Contact` sections in order
- `/project` — `Project` page: renders `ProjectCard` components

`App.jsx` is the root — it wraps everything in `BrowserRouter`, renders `Navbar` and `Footer` outside the routes (persistent), and includes `ScrollToTop` (scroll-to-top button, not route scroll reset).

## Styling

Mixed approach: Bootstrap 5 (imported globally in `App.jsx`) + MUI (`@mui/material` with `@emotion`) + custom CSS in `App.css` and `index.css`. Component-level styles are done with inline styles or Bootstrap/MUI utility classes — there are no CSS Modules or Tailwind.

## Key Libraries

- `react-simple-typewriter` — animated typewriter effect in `HeroSec`
- `react-icons` — icon library used across components
- `sweetalert2` — alert/modal dialogs (used in `Contact` for form feedback)
- `react-bootstrap` — Bootstrap components as React wrappers
