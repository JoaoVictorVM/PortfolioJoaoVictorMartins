import { LinkCard } from "../linkCard/linkCard"

export function PortfolioCard() {
    return (
        <LinkCard href="/" external variant="gradient">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col text-[var(--cor-primaria-1)]">
                        <h2 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
                        PORT
                        </h2>
                        <h2 className="block text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)] bg-clip-text text-transparent">
                        FÓLIO
                        </h2>
                    </div>
                </div>

                <div>
                    <p className="text-[var(--cor-branca)]">Explore meus <span className="text-[var(--cor-primaria-1)]">projetos</span> e<br />minha atuação <span className="text-[var(--cor-primaria-1)]">profissional</span></p>
                </div>
            </div>
        </LinkCard>
    )
}