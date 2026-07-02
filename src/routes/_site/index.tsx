import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

export const Route = createFileRoute("/_site/")({
  component: HomePage,
});

function HomePage() {
  return (
    <Container>
      <h1 className="text-text py-24">Home</h1>
    </Container>
  );
}
