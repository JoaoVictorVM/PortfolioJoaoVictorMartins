import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { games } from "@/features/games/data/games";
import { useI18n } from "@/shared/hooks/useI18n";
import { usePreference } from "@/shared/hooks/usePreference";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

const linkClass =
  "inline-flex items-center gap-2 font-normal text-text underline decoration-text/30 underline-offset-4 transition-colors hover:decoration-text";

export function GameDevSection() {
  const { home } = useI18n();
  const { gamedev } = home;
  const { language } = usePreference();
  const { ref, isVisible } = useReveal<HTMLElement>();
  const highlighted = games.slice(0, 2);

  return (
    <section
      ref={ref}
      className={cn("section-fade pb-20", isVisible && "visible")}
    >
      <Container className="text-text space-y-6">
        <h2 className="text-lg">{gamedev.title}</h2>
        <p className={cn("text-appear delay-300", isVisible && "visible")}>
          {gamedev.blurb}
        </p>

        <div
          className={cn(
            "text-appear space-y-4 delay-350",
            isVisible && "visible",
          )}
        >
          {highlighted.map((game) => (
            <article key={game.id} className="space-y-1">
              <h3 className="text-text font-normal">{game.title[language]}</h3>
              <p className="text-detail text-sm">
                {game.description[language]}
              </p>
            </article>
          ))}
        </div>

        <div
          className={cn(
            "text-appear space-y-3 delay-350",
            isVisible && "visible",
          )}
        >
          <p>{gamedev.teaser}</p>
          <Link to="/gamedev" className={linkClass}>
            <span>{gamedev.ctaMore}</span>
            <ArrowUpRight size={14} aria-hidden className="text-detail" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
