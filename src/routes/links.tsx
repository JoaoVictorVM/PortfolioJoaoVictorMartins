import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

function LinksPage() {
  return (
    <main>
      <h1>Links</h1>
    </main>
  );
}
