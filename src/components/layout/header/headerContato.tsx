import Link from "next/link";
import SocialIcons from "./SocialIcon";

export function HeaderContato() {
  return (
    <div className="flex items-center gap-3">
      <SocialIcons />
      <Link
        href="https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!"
        target="_blank"
        className="px-4 py-2 text-[var(--cor-escuro-1)] text-xs font-bold bg-[var(--cor-branca)] hover:bg-[var(--cor-cinza-2)] transition-all duration-300 text-center rounded-full"
      >
        Entrar em Contato
      </Link>
    </div>
  );
}
