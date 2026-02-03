import Link from "next/link";

interface CTAButtonsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTAButtons({
  primaryText = "Contratar agora",
  primaryHref = "https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!",
  secondaryText = "Veja meus projetos",
  secondaryHref = "/projetos",
}: CTAButtonsProps) {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={primaryHref}
        target="_blank"
        className="inline-flex items-center gap-2 py-4 px-7 font-bold bg-[var(--cor-branca)] text-[var(--cor-escuro-1)] hover:bg-[var(--cor-cinza-2)] transition-all duration-300 text-center rounded-full"
      >
        {primaryText}
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex items-center py-4 px-7 font-bold border-2 border-[var(--cor-primaria-1)] hover:border-[var(--cor-branca)] text-white hover:bg-[var(--cor-primaria-3)]/20 transition-all duration-300 text-center rounded-full"
      >
        {secondaryText}
      </Link>
    </div>
  );
}
