import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/certificados")({
  component: CertificadosPage,
});

function CertificadosPage() {
  return (
    <main>
      <h1>Certificados</h1>
    </main>
  );
}
