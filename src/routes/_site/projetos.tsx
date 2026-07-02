import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/_site/projetos")({
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <Container>
      <h1 className="text-text py-24">Projetos</h1>
    </Container>
  );
}
