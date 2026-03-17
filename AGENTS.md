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

- ## Contexts and providers implemented
- PreferenceProvider - centralizes language and theme, reads localStorage and prefers-color-scheme, keeps dataset attributes on documentElement, and exposes a usePreference hook for the toggles.
- Header minimalista - consumes the provider, displays the toggles in a single row (language left, logo center, theme right), and keeps the oldheader for reference until the full redesign is complete.

- ## Visual patterns enforced so far
- Narrow containers: main sections use max-w-2xl (or max-w-6xl when needed) with mx-auto and consistent px-4 to avoid a broken layout feel.
- Minimal typography: small headings (text-lg / text-3xl), generous vertical rhythm (space-y-4, py-32), simple lists, and muted text colors from the theme variables.
- Theme variables: variables.css now exposes common tokens (--bg-color, --text-color, --detail-color, --line-color) that update via the PreferenceProvider's data-theme attributes, so header/intro/footer/highlights automatically respect dark/light mode.
- Highlights section: dual columns (certificates + projects) with the final row linking to the respective pages, following the same narrow grid and muted textual rhythm.
- Projects page: title + accordion list where cada projeto abre um detail embaixo e mantém a linha única com o ícone de chevron para indicar que é clicável.
- Projects page: conteúdos e lista dos projetos vivem na mesma grid (coluna do conteúdo) alinhada com o header, enquanto o link “← Home” ocupa a coluna estreita à esquerda com deslocamento horizontal; o accordion continua com botão, linha e `ChevronDown` que exibem os detalhes no clique sem bordas divisórias.
- Pattern for future secondary pages (certificados e semelhantes): mantemos o `max-w-2xl px-4` alinhado ao header para o conteúdo principal e deixamos componentes extras (como botões de navegação lateral) “vazando” do layout com deslocamento horizontal (usando `position: absolute` e `translate-x`) que retorna ao fluxo em telas pequenas.
- Certificates page: o layout segue o mesmo container estreito do header, cada grupo mostra o nome da instituição apenas ao lado do primeiro certificado daquela instituição; as entradas têm 25px de espaçamento vertical, a linha superior do primeiro certificado atravessa toda a coluna da instituição (`border-t` no próprio bloco) e as linhas seguintes ficam deslocadas para a direita (com `ml-[140px]`) para não cortar a coluna da instituição; o hover continua destacando o título e a terceira coluna mostra a data.

## Footer pattern
- Simple centered footer with `max-w-2xl` to match the rest of the page.
- Minimal copy in Portuguese and uppercase timestamp for a calm visual rhythm.
- Social icons centered below the copy so they remain easy to reach without breaking the narrow column.
