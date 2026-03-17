# AGENTS

## Context
- Rebuilding the portfolio toward a minimal Paco.me-inspired experience with small, reusable components and a strong composition pattern.
- We log each step here so future work can trace the decisions.

## Methodology
1. Organization before implementation - list needed components, containers and states ahead of coding.
2. Clean code and composition - every block contains only the necessary pieces; state and effects move to hooks or providers when the pattern calls for it.
3. Iterations with control - homepage first (header already covered), then secondary routes; nothing gets deleted until the new flow proves stable.

- Toggle de idioma: PT | EN button on the left, default PT. Text remains Portuguese for now, but the toggle prepares the UI for static English versions later.
- Central logo: the same mark from the old header remains centered.
- Theme toggle: button with sun/moon icon on the right; the PreferenceProvider honors the user system preference while allowing overrides.
- Future sections must consume the language and theme contexts (pt/en, dark/light) for consistent behavior.

## Next steps
1. Detail the homepage container widths, typography and spacing that define the new aesthetic.
2. Continue implementing the home content within that grid and typography reference frame.
3. Only after the home is aligned, revisit other routes (projects, links, etc.) and the footer.

## Contexts and providers implemented
- PreferenceProvider - centralizes language and theme, reads localStorage and prefers-color-scheme, keeps dataset attributes on documentElement, and exposes a usePreference hook for the toggles.
- Header minimalista - consumes the provider, displays the toggles in a single row (language left, logo center, theme right), and keeps the oldheader for reference until the full redesign is complete.

## Visual patterns enforced so far
- Narrow containers: main sections use max-w-2xl (or max-w-6xl when needed) with mx-auto and consistent px-4 to avoid a broken layout feel.
- Minimal typography: small headings (text-lg / text-3xl), generous vertical rhythm (space-y-4, py-32), simple lists, and muted text colors from the theme variables.
- Theme variables: variables.css defines --bg-color-dark, --text-color-dark, --detail-color-dark, and --line-color-dark; globals.css watches data-theme to switch backgrounds while keeping smooth transitions.

## Footer pattern
- Simple centered footer with `max-w-2xl` to match the rest of the page.
- Minimal copy in Portuguese and uppercase timestamp for a calm visual rhythm.
- Social icons centered below the copy so they remain easy to reach without breaking the narrow column.
