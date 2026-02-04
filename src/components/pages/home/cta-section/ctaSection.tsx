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
  email = "jvmartinscv@gmail.com",
  location = "Brasil (Remoto)",
}: CTASectionProps) {
  return (
    <section id="contato" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex mb-5 ml-2">
          <AvailabilityBadge />
        </div>

        <div className="relative rounded-2xl border border-[var(--cor-escuro-7)] bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cor-primaria-1)]/20 via-[var(--cor-primaria-3)]/10 to-[var(--cor-escuro-5)] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cor-branca)] leading-tight">
                Vamos criar algo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--cor-primaria-1)] via-[var(--cor-primaria-1)] to-[var(--cor-primaria-4)]">
                  incrível
                </span>{" "}
                juntos?
              </h2>

              <p className="text-[var(--cor-cinza-2)] text-base leading-relaxed max-w-md">
                Tem um projeto em mente? Estou sempre aberto para discutir novas
                oportunidades de trabalho, seja freelance ou posições remotas.
              </p>

              <CTAButtons />
            </div>

            <div className="flex flex-col items-start md:items-end gap-6">
              <a
                href={`mailto:${email}?subject=Contato%20com%20desenvolvedor%20João&body=Olá%20João`}
                target="_blank"
                className="group inline-flex items-center gap-2 text-white hover:text-[var(--cor-primaria-3)] transition-colors duration-200"
              >
                <span className="text-lg font-medium">{email}</span>
                <ArrowUpRight
                  size={18}
                  className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>

              <SocialLinks />
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
