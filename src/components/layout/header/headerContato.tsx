import Link from "next/link";

export function HeaderContato() {
  return (
    <Link
      href="/contato"
      className="px-4 py-2 border-2 border-[var(--cor-escuro-4)] text-white text-xs hover:bg-[var(--cor-escuro-5)]/90 transition-all duration-300 text-center rounded-full"
    >
      Contate-me
    </Link>
  );
}
