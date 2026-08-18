import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PostList } from "@/features/blog/components/PostList";
import { siteConfig } from "@/shared/config/site";
import { pageHead } from "@/shared/lib/seo";
import { useI18n } from "@/shared/hooks/useI18n";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

export const Route = createFileRoute("/_site/blog/")({
  head: () => pageHead({ ...siteConfig.pages.blog, path: "/blog" }),
  component: BlogPage,
});

function BlogPage() {
  const { blog, common } = useI18n();
  const { ref, isVisible } = useReveal();

  return (
    <section className="py-16">
      <Container>
        <PageHeader
          title={blog.title}
          subtitle={blog.subtitle}
          backLabel={common.backToIndex}
        />
        <div
          ref={ref}
          className={cn("content-reveal delay-300", isVisible && "visible")}
        >
          <PostList />
        </div>
      </Container>
    </section>
  );
}
