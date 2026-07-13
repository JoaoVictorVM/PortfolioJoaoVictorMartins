import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

interface HighlightItem {
  title: string;
  description: string;
  url?: string;
}

interface HighlightsColumnProps {
  title: string;
  items: HighlightItem[];
  ctaLabel: string;
  ctaTo: "/certificates" | "/projects";
  isProject?: boolean;
  isVisible: boolean;
}

const linkClass =
  "inline-flex items-center gap-2 font-normal text-text underline decoration-text/30 underline-offset-4 transition-colors hover:decoration-text";

function HighlightsColumn({
  title,
  items,
  ctaLabel,
  ctaTo,
  isProject = false,
  isVisible,
}: HighlightsColumnProps) {
  return (
    <div
      className={cn(
        "text-appear flex flex-col gap-6 delay-250",
        isVisible && "visible",
      )}
    >
      <h2 className="text-detail text-sm font-normal">{title}</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <article key={item.title} className="space-y-1.5">
            {isProject && item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                <span>{item.title}</span>
                <ArrowUpRight size={14} aria-hidden className="text-detail" />
              </a>
            ) : (
              <h3 className="text-text font-normal">{item.title}</h3>
            )}
            <p className="text-detail text-sm">{item.description}</p>
          </article>
        ))}
      </div>

      <Link to={ctaTo} className={linkClass}>
        <span>{ctaLabel}</span>
        <ArrowUpRight size={14} aria-hidden className="text-detail" />
      </Link>
    </div>
  );
}

export function HighlightsSection() {
  const { home } = useI18n();
  const { highlights } = home;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn("section-fade pt-16", isVisible && "visible")}
    >
      <Container className="grid gap-12 md:grid-cols-2">
        <HighlightsColumn
          title={highlights.certificatesTitle}
          items={highlights.certificates}
          ctaLabel={highlights.certificatesCta}
          ctaTo="/certificates"
          isVisible={isVisible}
        />
        <HighlightsColumn
          title={highlights.projectsTitle}
          items={highlights.projects}
          ctaLabel={highlights.projectsCta}
          ctaTo="/projects"
          isProject
          isVisible={isVisible}
        />
      </Container>
    </section>
  );
}
