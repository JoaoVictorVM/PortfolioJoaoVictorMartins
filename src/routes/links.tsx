import { createFileRoute } from "@tanstack/react-router";
import { LinkTree } from "@/features/links/components/LinkTree";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";

export const Route = createFileRoute("/links")({
  head: () => pageHead({ ...siteConfig.pages.links, path: "/links" }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <main className="min-h-screen">
      <LinkTree />
    </main>
  );
}
