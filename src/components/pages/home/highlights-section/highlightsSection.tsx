"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { useReveal } from "@/hooks/useReveal";

type HighlightItem = {
  title: string;
  description: string;
  url?: string;
};

type HighlightCopy = {
  certificates: HighlightItem[];
  projects: HighlightItem[];
};

const highlightCopy: Record<string, HighlightCopy> = {
  pt: {
    certificates: [
      {
        title: "Front End & UX/UI Design",
        description:
          "Certificação concluída pela Origamid em 06/02/2026, validando conhecimentos na área.",
      },
      {
        title: "NLW Operator - FullStack",
        description:
          "Certificação concluída pela Rocketseat em 17/03/2026, validando conhecimentos na área.",
      },
    ],
    projects: [
      {
        title: "BikCraft",
        description: "E-commerce de bicicletas elétricas com foco em UI.",
        url: "https://bikcraft-one.vercel.app/",
      },
      {
        title: "Forest Imóveis",
        description: "Site institucional de imobiliária com foco em Tailwind.",
        url: "https://joaovictorvm.github.io/ForestImoveis/",
      },
      {
        title: "Scheduling API",
        description: "API Node.js/Nest.js organizada para agendamentos.",
        url: "https://github.com/JoaoVictorVM/Scheduling-API",
      },
    ],
  },
  en: {
    certificates: [
      {
        title: "Front End & UX/UI Design",
        description:
          "Origamid certification completed on 02/06/2026, confirming practical knowledge.",
      },
      {
        title: "NLW Operator - FullStack",
        description:
          "Rocketseat certification completed on 03/17/2026, confirming practical knowledge.",
      },
    ],
    projects: [
      {
        title: "BikCraft",
        description: "Electric bike e-commerce with a UI-first approach.",
        url: "https://bikcraft-one.vercel.app/",
      },
      {
        title: "Forest",
        description: "Real-estate corporate site built with Tailwind.",
        url: "https://joaovictorvm.github.io/ForestImoveis/",
      },
      {
        title: "Scheduling API",
        description: "Node.js/Nest.js API crafted for appointment flows.",
        url: "https://github.com/JoaoVictorVM/Scheduling-API",
      },
    ],
  },
};

const columnCtas = {
  pt: [
    { label: "Todos os Certificados", href: "/certificados" },
    { label: "Todos os Projetos", href: "/projetos" },
  ],
  en: [
    { label: "All Certificates", href: "/certificados" },
    { label: "All Projects", href: "/projetos" },
  ],
};

function HighlightsColumn({
  title,
  items,
  cta,
  isProject,
  isVisible,
}: {
  title: string;
  items: HighlightItem[];
  cta: { label: string; href: string };
  isProject?: boolean;
  isVisible?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 text-appear diagonal-fade delay-250 ${
        isVisible ? "visible" : ""
      }`}
    >
      <p className="text-sm text-[var(--detail-color)]">{title}</p>

      <div className="space-y-6">
        {items.map((item) => (
          <article
            key={item.title}
            className={`space-y-1.5 text-appear diagonal-fade delay-300 ${
              isVisible ? "visible" : ""
            }`}
          >
            {isProject && item.url ? (
              <Link
                href={item.url}
                className="inline-flex items-center gap-2 font-normal text-[var(--text-color)] underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition underline"
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.title}</span>
                <ArrowUpRight
                  size={14}
                  className="text-[var(--detail-color)]"
                />
              </Link>
            ) : (
              <h3 className="font-normal text-[var(--text-color)]">
                {item.title}
              </h3>
            )}
            <p className="text-sm text-[var(--detail-color)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <Link
        href={cta.href}
        className="inline-flex items-center gap-2 font-normal text-[var(--text-color)] underline-offset-4 decoration-[var(--text-color)]/30 hover:decoration-[var(--text-color)] transition underline"
      >
        <span>{cta.label}</span>
        <ArrowUpRight size={14} className="text-[var(--detail-color)]" />
      </Link>
    </div>
  );
}

export function HighlightsSection() {
  const { language } = usePreference();
  const highlights = highlightCopy[language];
  const [certCta, projectCta] = columnCtas[language];
  const isVisible = useReveal(language);

  return (
    <section
      key={`highlights-${language}`}
      className={`pt-16 section-fade diagonal-fade delay-150 ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="mx-auto max-w-2xl px-4 grid gap-12 md:grid-cols-2">
        <HighlightsColumn
          title={language === "pt" ? "Certificados" : "Certificates"}
          items={highlights.certificates}
          cta={certCta}
          isVisible={isVisible}
        />

        <HighlightsColumn
          title={language === "pt" ? "Projetos" : "Projects"}
          items={highlights.projects}
          cta={projectCta}
          isProject
          isVisible={isVisible}
        />
      </div>
    </section>
  );
}
