export function HeroSectionButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      <a
        href="https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!"
        target="_blank"
        className="py-5 px-9 font-bold bg-[var(--cor-branca)] text-[var(--cor-escuro-1)] hover:bg-[var(--cor-cinza-2)] transition-all duration-300 text-center rounded-full"
      >
        Contratar agora
      </a>
      <a
        href="/projetos"
        className="py-5 px-9 font-bold border-2 border-[var(--cor-primaria-1)] hover:border-[var(--cor-branca)] text-white hover:bg-[var(--cor-primaria-3)]/20 transition-all duration-300 text-center rounded-full"
      >
        Veja meus projetos
      </a>
    </div>
  );
}
