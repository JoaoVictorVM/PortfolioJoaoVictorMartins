import Image from "next/image";

interface FooterLogoProps {
  description?: string;
}

export function FooterLogo({
  description = "Joao Victor Ventura Martins, profissional pronto para criar o melhor projeto que você já teve",
}: FooterLogoProps) {
  return (
    <div className="space-y-4">
      {/* Logo - substitua pelo seu componente de logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">
            <span className="text-[var(--cor-primaria-1)]">&lt;</span>
            <span className="text-[var(--cor-primaria-1)]">J</span>
            <span className="text-[var(--cor-primaria-1)]">/&gt;</span>
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}