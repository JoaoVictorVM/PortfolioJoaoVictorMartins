import { Link } from "@tanstack/react-router";

import { useI18n } from "@/shared/hooks/useI18n";

export function Brand() {
  const { header } = useI18n();
  const { identity } = header;

  return (
    <div>
      <Link
        to="/"
        aria-label={identity.homeLabel}
        className="text-text block text-lg"
      >
        {identity.name}
      </Link>
      <ul className="text-detail flex flex-wrap items-center gap-x-2 text-sm font-normal italic">
        {identity.roles.map((role, index) => (
          <li key={role} className="flex items-center gap-x-2">
            {index > 0 && <span aria-hidden="true">&bull;</span>}
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}
