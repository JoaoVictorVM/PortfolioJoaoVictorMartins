import Link from "next/link";

export function HeaderContato() {
  return (
    <Link
      href="/contato"
      className="px-4 py-2 text-xs font-medium rounded-full border border-[var(--cor-escuro-4)] hover:bg-white/5 transition"
    >
      Contate-me
    </Link>
  );
}
