import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { GameAccordion } from "@/features/games/components/GameAccordion";
import { itchProfileUrl } from "@/features/games/data/games";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export const Route = createFileRoute("/_site/gamedev")({
  head: () => pageHead({ ...siteConfig.pages.games, path: "/gamedev" }),
  component: GameDevPage,
});

function GameDevPage() {
  const { games, common } = useI18n();
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-16">
      <Container>
        <PageHeader
          title={games.title}
          subtitle={games.subtitle}
          backLabel={common.backToIndex}
        />
        <div
          ref={ref}
          className={cn("content-reveal delay-300", isVisible && "visible")}
        >
          <div
            className={cn(
              "text-text fast-fade-up mb-10 space-y-4 delay-300",
              isVisible && "visible",
            )}
          >
            {games.intro.map((paragraph, index) => {
              const isLast = index === games.intro.length - 1;
              return (
                <p key={paragraph}>
                  {paragraph}
                  {isLast && (
                    <>
                      {" "}
                      <a
                        href={itchProfileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-text/30 hover:decoration-text inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
                      >
                        <span>{games.introLink}</span>
                        <ArrowUpRight
                          size={14}
                          aria-hidden
                          className="text-detail"
                        />
                      </a>
                      .
                    </>
                  )}
                </p>
              );
            })}
          </div>
          <GameAccordion />
        </div>
      </Container>
    </section>
  );
}
