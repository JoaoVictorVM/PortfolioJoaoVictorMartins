import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutContent } from "@/features/about/components/AboutContent";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export const Route = createFileRoute("/_site/about")({
  head: () => pageHead({ ...siteConfig.pages.about, path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  const { about, common } = useI18n();
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-16">
      <Container>
        <PageHeader
          title={about.title}
          subtitle={about.subtitle}
          backLabel={common.backToIndex}
        />
        <div
          ref={ref}
          className={cn("content-reveal delay-300", isVisible && "visible")}
        >
          <AboutContent isVisible={isVisible} />
        </div>
      </Container>
    </section>
  );
}
