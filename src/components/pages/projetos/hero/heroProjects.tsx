export function HeroProjects() {
    return (
        <section
            className="min-h-[50vh] flex flex-col items-center justify-center px-4 bg-[var(--cor-escuro-1)]"
            aria-label="Título da página de projetos"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                    PROJETOS
                </h1>
                <p className="text-white/80 mt-2 md:mt-3 text-sm md:text-base">
                    De sites rápidos a sistemas complexos
                </p>
            </div>
        </section>
    );
}