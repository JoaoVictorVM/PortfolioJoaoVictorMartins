import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export function NowSection() {
  const { home } = useI18n();
  const { now } = home;
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={cn("section-fade py-20", isVisible && "visible")}
    >
      <Container className="text-text space-y-6">
        <h2 className="text-lg">{now.title}</h2>
        {now.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={cn(
              "text-appear",
              index === 0 ? "delay-300" : "delay-350",
              isVisible && "visible",
            )}
          >
            {paragraph}
          </p>
        ))}
      </Container>
    </section>
  );
}
