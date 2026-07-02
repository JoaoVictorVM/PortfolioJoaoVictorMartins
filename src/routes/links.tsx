import { createFileRoute } from "@tanstack/react-router";
import { LinkTree } from "@/features/links/components/LinkTree";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

function LinksPage() {
  return (
    <main className="min-h-screen">
      <LinkTree />
    </main>
  );
}
