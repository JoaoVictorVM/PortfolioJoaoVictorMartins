import { ArrowUpRight } from "lucide-react";
import { AvailabilityBadge } from "./availabilityBadge";
import { SocialLinks } from "./socialLink";
import { CTAButtons } from "./ctaButtons";

interface CTASectionProps {
  email?: string;
  location?: string;
  timezone?: string;
}

export function CtaSection({
  email = "contato@teste.com",
  location = "Brasil (Remoto)",
  timezone = "GMT-3",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Badge de Disponibilidade */}
        <div className="flex mb-5 ml-2">
          <AvailabilityBadge />
        </div>

        {/* Card Principal */}
        <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 overflow-hidden">
          {/* Efeito de gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Vamos criar algo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  incrível
                </span>{" "}
                juntos?
              </h2>

              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Tem um projeto em mente? Estou sempre aberto para discutir
                novas oportunidades de trabalho, seja freelance ou posições
                remotas.
              </p>

              <CTAButtons />
            </div>

            {/* Coluna Direita */}
            <div className="flex flex-col items-start md:items-end gap-6">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 text-white hover:text-violet-400 transition-colors duration-200"
              >
                <span className="text-lg font-medium">{email}</span>
                <ArrowUpRight 
                  size={18} 
                  className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" 
                />
              </a>

              {/* Social Links */}
              <SocialLinks />

              {/* Localização */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gray-500" />
                  {location}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {timezone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}