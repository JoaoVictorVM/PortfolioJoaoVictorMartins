import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { Mail } from 'lucide-react';

export function EmailCard() {
    return (
        <LinkCardSmall href="mailto:jvmartinscv@gmail.com?subject=Contato%20com%20desenvolvedor%20João&body=Olá%20João," external variant="light">
            <div className="flex flex-col justify-center items-center">
                <Mail className="w-15 h-15 text-[var(--color-dark)] mb-6" />
                <p className="">Email</p>
            </div>
            
        </LinkCardSmall>
    )
}