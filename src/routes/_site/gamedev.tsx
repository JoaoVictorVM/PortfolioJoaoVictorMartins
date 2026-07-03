import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { GameAccordion } from "@/features/games/components/GameAccordion";
import { itchProfileUrl } from "@/features/games/data/games";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";
import { useI18n } from "@/shared/hooks/useI18n";

export const Route = createFileRoute("/_site/gamedev")({
  head: () => pageHead({ ...siteConfig.pages.games, path: "/gamedev" }),
  component: GameDevPage,
});

function GameDevPage() {
  const { games, common } = useI18n();

  return (
    <section className="py-24">
      <Container>
        <PageHeader
          title={games.title}
          subtitle={games.subtitle}
          backLabel={common.backToIndex}
        />
        <div className="text-text mb-10 space-y-4">
          {games.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            href={itchProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-text decoration-text/30 hover:decoration-text inline-flex items-center gap-2 font-normal underline underline-offset-4 transition-colors"
          >
            <span>{games.itchCta}</span>
            <ArrowUpRight size={14} aria-hidden className="text-detail" />
          </a>
        </div>
        <GameAccordion />
      </Container>
    </section>
  );
}
