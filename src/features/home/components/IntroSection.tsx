import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";
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
      className={cn("section-fade pt-32", isVisible && "visible")}
    >
      <Container className="text-text space-y-8">
        <div className="space-y-2">
          <h1 className="text-lg">{intro.name}</h1>
          <ul className="text-detail list-disc pl-5 text-sm font-normal italic">
            {intro.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

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
              href="/pdf/CV-JoaoVictorVenturaMartins.pdf"
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
