import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";
import { asset } from "@/shared/lib/asset";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export function IntroSection() {
  const { home } = useI18n();
  const { intro } = home;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="inicio"
      className={cn("section-fade pt-16", isVisible && "visible")}
    >
      <Container className="text-text space-y-8">
        <h1 className="sr-only">{intro.name}</h1>

        <div
          className={cn(
            "text-appear space-y-4 text-base font-normal delay-300",
            isVisible && "visible",
          )}
        >
          <p>{intro.lead}</p>
          <p>
            {intro.summary} {intro.suffix}{" "}
            <a
              href={asset("pdf/CV-JoaoVictorVenturaMartins.pdf")}
              download
              className="decoration-text/30 hover:decoration-text underline underline-offset-4 transition-colors"
            >
              {intro.resumeLabel}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
