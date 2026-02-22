import { LinkCard } from "../linkCard/linkCard"
import { Instagram } from 'lucide-react';

export function InstagramdevCard() {
    return (
        <LinkCard href="https://www.instagram.com/dev.joaov/" external variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Instagram className="w-15 h-15 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p><span className="text-[var(--cor-primaria-1)]">Código</span> e <span className="text-[var(--cor-primaria-1)]">desenvolvimento</span>.<br /> <span className="text-[var(--cor-primaria-1)]">Instagram</span> focado em <span className="text-[var(--cor-primaria-1)]">projetos</span></p>
                </div>
            </div>
        </LinkCard>
    )
}