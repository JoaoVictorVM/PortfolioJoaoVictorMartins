import { LinkCard } from "../linkCard/linkCard"
import { Instagram } from 'lucide-react';

export function InstagramCard() {
    return (
        <LinkCard href="https://www.instagram.com/jvvmartins.s/" external variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Instagram className="w-15 h-15 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Conheça meu <span className="text-[var(--cor-primaria-1)]">Instagram</span>. <span className="text-[var(--cor-primaria-1)]">Conteúdos</span><br />e <span className="text-[var(--cor-primaria-1)]">aprendizados</span> compartilhados</p>
                </div>
            </div>
        </LinkCard>
    )
}