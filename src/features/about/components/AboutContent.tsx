import { AboutBlock } from "@/features/about/components/AboutBlock";
import { AboutGameDev } from "@/features/about/components/AboutGameDev";
import { AboutPortrait } from "@/features/about/components/AboutPortrait";
import { AboutTimeline } from "@/features/about/components/AboutTimeline";
import { useI18n } from "@/shared/hooks/useI18n";
import { cn } from "@/shared/lib/cn";

interface AboutContentProps {
  isVisible: boolean;
}

export function AboutContent({ isVisible }: AboutContentProps) {
  const { about } = useI18n();

  return (
    <div className="text-text flex flex-col gap-12">
      <div
        className={cn(
          "fast-fade-up flex flex-col gap-6 delay-300 sm:flex-row sm:items-start sm:gap-8",
          isVisible && "visible",
        )}
      >
        <AboutPortrait alt={about.photoAlt} />
        <div className="space-y-4">
          {about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={cn("text-appear delay-300", isVisible && "visible")}>
        <AboutBlock title={about.timelineTitle}>
          <AboutTimeline entries={about.timeline} />
        </AboutBlock>
      </div>

      <div className={cn("text-appear delay-350", isVisible && "visible")}>
        <AboutBlock title={about.beyondTitle}>
          <AboutGameDev />
        </AboutBlock>
      </div>
    </div>
  );
}
