import { LinkCardProps } from "../../../../types/linkCard"

const variants = {
    dark: "bg-[var(--cor-escuro-1)]",
    light: "bg-[var(--cor-branca)]",
    gradient: "bg-gradient-to-br from-[var(--cor-escuro-6)] via-[var(--cor-escuro-6)] to-[var(--cor-escuro-7)]",
}

export function LinkCardSmall({
    children,
    href,
    variant = "dark",
    external,
}: LinkCardProps) {
    const Wrapper = href ? 'a' : 'div'

    return (
        <Wrapper
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`
            w-full
            min-h-[140px]
            rounded-xl
            p-6
            border
            border-white/10
            shadow-2xl
            hover:scale-[1.02]
            transition
            ${variants[variant]}
        `}
        >
            {children}
        </Wrapper>
    )
} 