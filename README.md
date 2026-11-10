<div align="center">

# Solus — Mental Health Platform

**An accessible, privacy-first mental-health support site built with Next.js 16, React 19 and Tailwind CSS 4.**

![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)
![Tests](https://img.shields.io/badge/tests-vitest-6e9f18?logo=vitest&logoColor=white)

</div>

> Solus started as a field-training project at Raya Higher Institute and was later rebuilt from the
> ground up with a feature-based architecture, strict TypeScript, real accessibility work and
> automated tests. See [`docs/REFACTOR_NOTES.md`](docs/REFACTOR_NOTES.md) for what changed and why.

## Features

| Feature | What it does | Interesting engineering |
| --- | --- | --- |
| **Guided breathing** | Box breathing and 4-7-8 with an animated circle and countdown | The timing logic is a pure reducer (`lib/breathing.ts`), unit-tested without fake timers |
| **Private mood check-in** | One tap per day, 7-day chart and average | `useSyncExternalStore` over `localStorage`, tab-synced, SSR-safe, defensive JSON parsing — no data leaves the device |
| **Therapist directory** | Filter by specialty, animated list | Typed content layer; filters expose state with `aria-pressed` and a live-region count |
| **Testimonials** | Accessible carousel | Controls are real buttons with labels; no auto-play |
| **FAQ** | Single-open accordion | WAI-ARIA disclosure pattern, `inert` on collapsed panels, CSS-grid height animation (no JS measuring) |
| **Contact form** | Validated, honeypot-protected | React 19 `useActionState` + Server Action; one validator shared by client and server |
| **Navigation** | Sticky bar with scroll-spy and mobile drawer | `IntersectionObserver` (no scroll listener), focus trap, Esc to close, body-scroll lock |

## Tech stack

- **Next.js 16** (App Router, Server Components by default, Server Actions)
- **React 19**, **TypeScript** in `strict` mode with `noUncheckedIndexedAccess`
- **Tailwind CSS 4** with design tokens declared in CSS (`@theme`)
- **Motion** for animation, globally honouring `prefers-reduced-motion`
- **Vitest** for unit tests, **ESLint** + **Prettier**, **GitHub Actions** CI

## Architecture

```
src/
├── app/                  # Routes, layout, metadata, error/404, sitemap, robots
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # MotionProvider (reduced-motion config)
│   └── ui/               # Button, Section, SectionHeading, Reveal — no business logic
├── features/             # One folder per page section; each owns its UI and local logic
│   ├── toolkit/          # BreathingExercise, MoodCheckIn, mood-store
│   ├── therapists/  testimonials/  faq/  contact/  …
├── content/              # Typed static data (copy lives here, not inside JSX)
├── hooks/                # useActiveSection
├── lib/                  # Pure, framework-free logic + tests (validation, mood, breathing)
└── assets/images/        # Statically imported → automatic sizing, blur and optimisation
```

Key decisions:

1. **Feature folders over type folders.** Everything about the toolkit lives in `features/toolkit`;
   deleting a feature means deleting one folder.
2. **Pure logic in `lib/`.** Anything with rules (validation, streaks, timing) is a plain function
   with tests — components only render state.
3. **Server Components by default.** Only interactive pieces carry `"use client"`; static sections
   (Hero, About, Services, Resources, Footer…) ship no component JavaScript beyond animation wrappers.
4. **Design tokens, not magic values.** Colours come from `@theme` in `globals.css`; there are no
   hex codes in components. Accent colours always pair with dark ink text to keep AA contrast.
5. **Privacy by construction.** The mood tracker never touches the network.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` / `build` / `start` | Develop, build and serve |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest unit tests (`lib/*.test.ts`) |
| `npm run check` | Lint + typecheck + tests in one go |
| `npm run format` | Prettier (with the Tailwind class-sorting plugin) |

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for metadata, sitemap and robots |
| `CONTACT_WEBHOOK_URL` | JSON endpoint that receives `{ name, email, message }` (Formspree, n8n, Make…). Required in production; in development messages are logged to the console |

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered headings, skip link
- Every interactive control is a real `<a>`/`<button>` with a visible focus ring
- Accordion, filters, radio groups and the carousel expose state via ARIA
- Mobile drawer: `role="dialog"`, focus moved in, trapped, restored on close
- Form errors are tied to inputs with `aria-invalid` / `aria-describedby` and announced via live regions
- Decorative illustrations use empty `alt`; meaningful ones are described
- Motion respects `prefers-reduced-motion`

## Security

- Server-side validation of every form field; honeypot against bots
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)
- External links use `rel="noopener noreferrer"`
- No personal phone numbers or private accounts in the repository

## Roadmap

- [ ] Real therapist data source and booking flow (database + auth)
- [ ] Arabic localisation with RTL layout (`next-intl`)
- [ ] Dark theme driven by the existing design tokens
- [ ] Playwright end-to-end tests for the contact flow and navigation
- [ ] Open Graph image generation

## Disclaimer

Solus is a portfolio project, not a medical service. Therapist profiles and testimonials are
illustrative. If you or someone you know is in crisis, contact your local emergency number or a
crisis line immediately.

## Author

**Atef Fawzy** — [GitHub](https://github.com/AtefFawz) · [LinkedIn](https://www.linkedin.com/in/atef-fawzy-b664b630a)
