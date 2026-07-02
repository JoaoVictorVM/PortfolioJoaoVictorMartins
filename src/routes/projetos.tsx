import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projetos")({
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <main>
      <h1>Projetos</h1>
    </main>
  );
}
