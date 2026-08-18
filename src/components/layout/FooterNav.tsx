import { Link } from "@tanstack/react-router";

import { useI18n } from "@/shared/hooks/useI18n";
import type { Dictionary } from "@/shared/i18n/dictionary";

type FooterNavLabel = keyof Omit<Dictionary["footer"]["nav"], "title">;

interface FooterNavItem {
  to: "/" | "/about" | "/projects" | "/certificates" | "/blog" | "/gamedev";
  label: FooterNavLabel;
}

const rows: readonly (readonly FooterNavItem[])[] = [
  [
    { to: "/gamedev", label: "gamedev" },
    { to: "/about", label: "about" },
    { to: "/", label: "home" },
  ],
  [
    { to: "/blog", label: "blog" },
    { to: "/certificates", label: "certificates" },
    { to: "/projects", label: "projects" },
  ],
];

export function FooterNav() {
  const { footer } = useI18n();

  return (
    <nav aria-labelledby="footer-nav-title">
      <h2 id="footer-nav-title" className="text-text mb-2 text-right text-sm">
        {footer.nav.title}
      </h2>
      {rows.map((row) => (
        <ul
          key={row[0]?.to}
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1"
        >
          {row.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{}}
                className="text-detail hover:text-text transition-colors"
              >
                {footer.nav[item.label]}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
