import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/layout/NotFound";
import { siteConfig } from "@/shared/config/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: siteConfig.pages.notFound.title },
      { name: "description", content: siteConfig.pages.notFound.description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFound,
});
