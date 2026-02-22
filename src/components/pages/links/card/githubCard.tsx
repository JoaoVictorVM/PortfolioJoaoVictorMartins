import { LinkCard } from "../linkCard/linkCard"
import { Github } from 'lucide-react';

export function GithubCard() {
    return (
        <LinkCard href="https://github.com/JoaoVictorVM" external variant="light">
            <div className="h-full w-full flex items-center">
                <div className="w-[45%] sm:w-[30%] flex justify-center">
                    <div className="flex flex-col items-start">
                        <Github className="w-15 h-15 text-[var(--color-dark)]" />
                    </div>
                </div>

                <div>
                    <p>Veja meus repositórios no <span className="text-[var(--cor-primaria-1)]">GitHub</span><br />e explore meus <span className="text-[var(--cor-primaria-1)]">projetos</span></p>
                </div>
            </div>
        </LinkCard>
    )
}