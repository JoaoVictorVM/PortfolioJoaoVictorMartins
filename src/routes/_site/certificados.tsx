import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/_site/certificados")({
  component: CertificadosPage,
});

function CertificadosPage() {
  return (
    <Container>
      <h1 className="text-text py-24">Certificados</h1>
    </Container>
  );
}
