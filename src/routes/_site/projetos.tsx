import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectAccordion } from "@/features/projects/components/ProjectAccordion";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";
import { useI18n } from "@/shared/hooks/useI18n";

export const Route = createFileRoute("/_site/projetos")({
  head: () => pageHead({ ...siteConfig.pages.projects, path: "/projetos" }),
  component: ProjetosPage,
});

function ProjetosPage() {
  const { projects, common } = useI18n();

  return (
    <section className="py-24">
      <Container>
        <PageHeader
          title={projects.title}
          subtitle={projects.subtitle}
          backLabel={common.backToIndex}
        />
        <ProjectAccordion />
      </Container>
    </section>
  );
}
