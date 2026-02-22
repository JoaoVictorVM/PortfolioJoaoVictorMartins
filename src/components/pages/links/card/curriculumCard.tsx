import { LinkCard } from "../linkCard/linkCard"
import { FileUser } from 'lucide-react';

export function CurriculumCard() {
    return (
        <LinkCard href="/pdf/CV-JoaoVictorVenturaMartins.pdf" download variant="light">

            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <FileUser className="w-15 h-15 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Baixe meu <span className="text-[var(--cor-primaria-1)]">Currículo</span><br/>e conheça minha trajetória</p>
                </div>
            </div>

        </LinkCard>
    )
}