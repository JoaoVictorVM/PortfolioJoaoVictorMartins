import Link from "next/link";

export function HeaderContato() {
  return (
    <Link
      href="/contato"
      className="px-4 py-2 text-[var(--cor-escuro-1)] text-xs font-bold bg-[var(--cor-branca)] hover:bg-[var(--cor-cinza-2)] transition-all duration-300 text-center rounded-full"
    >
      Entrar em Contato
    </Link>
  );
}
