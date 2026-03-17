import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type HighlightItem = {
  title: string;
  description: string;
  url?: string;
};

const highlightSets = {
  certificates: [
    {
      title: "Front End & UX/UI Design",
      description: "Origamid program centered on CSS, layout and polish.",
    },
  ],
  projects: [
    {
      title: "BikCraft",
      description: "E-commerce de bicicletas elétricas com foco em UI.",
      url: "https://github.com/JoaoVictorVM/BikCraft",
    },
    {
      title: "SWAG Album",
      description: "Showcase Next.js + Tailwind com foco em storytelling.",
      url: "https://github.com/JoaoVictorVM/SWAG",
    },
    {
      title: "Scheduling API",
      description: "API Node.js/Nest.js organizada para agendamentos.",
      url: "https://github.com/JoaoVictorVM/Scheduling-API",
    },
  ],
};

const columnCtas = [
  {
    label: "Todos os Certificados",
    href: "/certificados",
  },
  {
    label: "Todos os Projetos",
    href: "/projetos",
  },
];

function HighlightsColumn({
  title,
  items,
  cta,
  isProject,
}: {
  title: string;
  items: HighlightItem[];
  cta: { label: string; href: string };
  isProject?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-[var(--text-color)]/40">{title}</p>

      <div className="space-y-6">
        {items.map((item) => (
          <article key={item.title} className="space-y-1.5">
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
                  className="text-[var(--text-color)]/30"
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
        <ArrowUpRight size={14} className="text-[var(--text-color)]/30" />
      </Link>
    </div>
  );
}

export function HighlightsSection() {
  return (
    <section className="pt-16">
      <div className="mx-auto max-w-2xl px-4 grid gap-12 md:grid-cols-2">
        <HighlightsColumn
          title="Certificados"
          items={highlightSets.certificates}
          cta={columnCtas[0]}
        />

        <HighlightsColumn
          title="Projetos"
          items={highlightSets.projects}
          cta={columnCtas[1]}
          isProject
        />
      </div>
    </section>
  );
}
