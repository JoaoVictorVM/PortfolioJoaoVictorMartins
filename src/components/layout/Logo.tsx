import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="João Victor Ventura Martins — início"
      className="text-text text-lg font-semibold"
    >
      &lt;J/&gt;
    </Link>
  );
}
