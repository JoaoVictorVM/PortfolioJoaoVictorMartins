import { createFileRoute } from "@tanstack/react-router";
import { IntroSection } from "@/features/home/components/IntroSection";
import { HighlightsSection } from "@/features/home/components/HighlightsSection";
import { NowSection } from "@/features/home/components/NowSection";
import { GameDevSection } from "@/features/games/components/GameDevSection";
import { ConnectSection } from "@/features/home/components/ConnectSection";

export const Route = createFileRoute("/_site/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <IntroSection />
      <HighlightsSection />
      <NowSection />
      <GameDevSection />
      <ConnectSection />
    </>
  );
}
