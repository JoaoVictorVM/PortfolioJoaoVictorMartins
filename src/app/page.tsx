import { HighlightsSection } from "@/components/pages/home/highlights-section/highlightsSection";
import { IntroSection } from "@/components/pages/home/intro-section/introSection";
import { ConnectSection } from "@/components/pages/home/connect-section/connectSection";
import { NowSection } from "@/components/pages/home/now-section/nowSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroSection />
      <HighlightsSection />
      <NowSection />
      <ConnectSection />
    </main>
  );
}
