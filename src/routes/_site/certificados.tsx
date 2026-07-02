import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertificateList } from "@/features/certificates/components/CertificateList";
import { useI18n } from "@/shared/hooks/useI18n";

export const Route = createFileRoute("/_site/certificados")({
  component: CertificadosPage,
});

function CertificadosPage() {
  const { certificates, common } = useI18n();

  return (
    <section className="py-24">
      <Container>
        <PageHeader
          title={certificates.title}
          subtitle={certificates.subtitle}
          backLabel={common.backToIndex}
        />
        <CertificateList />
      </Container>
    </section>
  );
}
