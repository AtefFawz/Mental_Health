# Architecture Notes

## 1. Application composition

The App Router layer stays intentionally small. `src/app/layout.tsx` owns document metadata, global styles, and the persistent shell. `src/app/page.tsx` composes the landing-page feature sections in reading order. Loading, error, and not-found states are separate route boundaries.

## 2. Feature ownership

`src/features/landing/` owns the landing-page experience. Each section is isolated in `components/sections/`; editorial content is stored in `data/content.ts`. Sections can be changed or replaced without creating imports between unrelated sections.

Shared elements live outside the feature:

- `components/layout/`: global header and footer.
- `components/ui/`: reusable presentation primitives such as `SectionHeading`.
- `components/motion/`: reusable animation primitives such as `Reveal`.
- `lib/`: site-wide settings and navigation configuration.

## 3. Server and client boundaries

The route and most content sections are Server Components. Client Components are used only when browser interaction is necessary:

- `SiteHeader`: active-section observation and mobile-menu state.
- `Reveal`: viewport-based animation.
- `HeroSection`: entry animation and reduced-motion preference.
- `ContactSection`: clipboard interaction.

This keeps browser JavaScript scoped to the parts that need it.

## 4. Motion strategy

All motion uses the `motion` package through `motion/react`; the project does not mix the old `framer-motion` import path with the newer package path. Scroll reveals run once, entrance transitions are short, and continuous motion is decorative only. `useReducedMotion` and the CSS reduced-motion media query provide a less animated experience when requested by the operating system.

## 5. Navigation behavior

The header observes the page's major section landmarks with `IntersectionObserver`. The section in the reading band becomes active, and that state is reflected on desktop and mobile links through both visual styling and `aria-current`. The mobile menu is state-driven rather than being opened by direct DOM class mutation.

## 6. Content integrity and product boundaries

This repository is a front-end educational concept. It intentionally does not imply that appointments, a therapist directory, chat, accounts, or clinical care are available. Unverified testimonials and partner claims were removed. The FAQ and footer state the product boundary clearly.

## 7. Styling system

`globals.css` contains design tokens, global typography, components, layout rules, and responsive breakpoints. Color values and spacing are centralized as CSS custom properties. The project uses its own CSS system and no longer carries unused Tailwind or Material UI dependencies.
