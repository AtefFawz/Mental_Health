# Refactor notes

What was found in the original codebase, and what replaced it.

## Bugs fixed

| # | Problem in v0 | Fix |
| - | --- | --- |
| 1 | Imported `framer-motion`, which wasn't in `package.json` (the build would fail); other files used `motion/react` | One animation library (`motion/react`) |
| 2 | `page.tsx` awaited a fake 2-second `setTimeout` on every request | Removed; the page is statically rendered |
| 3 | Navbar scroll-spy looped over **all** `<section>` nodes on every scroll event and broke with nested sections; the same `ref` was attached to two elements | `IntersectionObserver` hook over a fixed id list; separate refs |
| 4 | Whole page wrapped in one giant `<section>`; no `<main>`, no skip link | Proper landmarks, skip link, one `h1` |
| 5 | Resources "Explore" buttons used white text on yellow/teal/pink (fails contrast) | Dark ink on accent colours |
| 6 | Invalid colour values: `"#BFDBFE "`, `"#1E3A8A."` (trailing spaces/dots); WhatsApp URL with a trailing space | Removed with the personal social links; tokens live in CSS |
| 7 | FAQ had `+` icons but nothing opened; contact form had no submit handler and duplicate `id="standard-basic"` | Accessible accordion; real form with validation and a Server Action |
| 8 | Dead buttons everywhere ("Get Started", "Learn more", "Join the Community", footer links) | Every CTA now goes somewhere real, or is labelled "Coming soon" |
| 9 | `alt` texts such as `"Image2"` and `"[object Object]"` (from `` `${BackImage}` ``) | Meaningful alt text, or `alt=""` for decoration |
| 10 | `whileInView={{ x: 1 }}` typo; `w-1/0`, `min-px-7`, `lg-text-3xl`, `md-h-md` (non-existent classes) | Removed; layouts rewritten with valid utilities |
| 11 | Hover `scale-150` on the institute photo overflowed its card | Contained, subtle zoom |
| 12 | `Faq.css` with a stray `.plus { background: red; padding: 10rem }` | Deleted |
| 13 | 404 page in Arabic on an English site, with a "back to home" button that called `router.back()` | English copy, real link to `/` |
| 14 | `error.tsx` had no way to recover | `reset()` button and error logging |
| 15 | Body font forced to Arial, overriding the loaded Geist font; grey `#d5d5d5` background | Geist + Fraunces via `next/font`, warm canvas colour |
| 16 | Typo "likeI'm" in a testimonial; copyright "© [2025]" | Fixed; year computed |
| 17 | `target="blank"` (not `_blank`) without `rel` | `_blank` + `noopener noreferrer` |
| 18 | Personal phone number, Facebook, Instagram and WhatsApp published in the public repo | Removed; contact details centralised in `lib/site.ts` |

## Architecture changes

- **Folder structure**: type-based (`components/home`, `components/data`, `ui/`) → feature-based
  (`features/*`, `components/ui`, `content`, `lib`, `hooks`).
- **Naming**: the "Therapists" component actually rendered testimonials → now `Testimonials`;
  a real `Therapists` directory was added. Inconsistent casing (`Faq/`, `faq.png`, `Illustration_10`) →
  consistent kebab-case assets.
- **Dependencies**: removed `@mui/material`, `@mui/icons-material`, `@emotion/*` (≈ hundreds of KB for
  four icons and a text field) → `react-icons` (tree-shaken) and native form controls.
- **Typing**: removed `React.ComponentType<any>`; strict mode + `noUncheckedIndexedAccess`;
  path alias fixed (`@/*` → `src/*`).
- **Content**: copy and data extracted from JSX into typed modules under `src/content`.
- **Styling**: one source of truth for colours (`@theme`), no repeated hex codes or per-component CSS files.
- **Motion**: `viewport once`, global `reducedMotion="user"`, no layout animation on static content.

## New

Breathing exercise · private mood check-in · therapist directory with filters · accessible FAQ ·
validated contact form (Server Action) · SEO metadata, sitemap, robots, favicon · security headers ·
unit tests · CI workflow · Prettier + Tailwind class sorting.
