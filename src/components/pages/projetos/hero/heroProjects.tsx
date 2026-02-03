export function HeroProjects() {
  return (
    <section
      className="min-h-[50vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[var(--cor-escuro-7)] via-[var(--cor-escuro-7)] to-[var(--cor-escuro-4)]"
      aria-label="Título da página de projetos"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] tracking-wider">
          <span className="bg-gradient-to-br from-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
            PROJETOS
          </span>
        </h1>
        <p className="text-[var(--cor-branca)] mt-2 md:mt-3 text-sm md:text-lg">
          De sites rápidos a sistemas complexos
        </p>
      </div>
    </section>
  );
}
