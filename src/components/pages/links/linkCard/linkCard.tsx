import { LinkCardProps } from "../../../../types/linkCard";

const variants = {
  dark: "bg-[var(--cor-escuro-1)]",
  light: "bg-[var(--cor-branca)]",
  gradient:
    "bg-gradient-to-br from-[var(--cor-escuro-6)] via-[var(--cor-escuro-6)] to-[var(--cor-escuro-7)]",
};

export function LinkCard({
  children,
  href,
  variant = "dark",
  download,
  external,
  fullWidth,
}: LinkCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
            w-full
            ${fullWidth ? "" : "max-w-md"}
            rounded-full
            p-3
            border border-[var(--line-color)]
            shadow-2xl
            hover:scale-[1.02]
            transition
            ${variants[variant]}
        `}
    >
      {children}
    </Wrapper>
  );
}
