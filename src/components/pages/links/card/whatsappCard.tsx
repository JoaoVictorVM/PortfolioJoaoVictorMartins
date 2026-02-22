import { LinkCardSmall } from "../linkCard/linkCardSmall"
import { Phone } from 'lucide-react';

export function WhatsappCard() {
    return (
        <LinkCardSmall href="https://wa.me/5535998095841?text=Olá,%20João.%20Queria%20saber%20mais%20sobre%20os%20seus%20trabalhos%20como%20desenvolvedor!" external variant="light">
            <div className="flex flex-col justify-center items-center">
                <Phone className="w-15 h-15 text-[var(--color-dark)] mb-6" />
                <p className="">WhatsApp</p>
            </div>
            
        </LinkCardSmall>
    )
}