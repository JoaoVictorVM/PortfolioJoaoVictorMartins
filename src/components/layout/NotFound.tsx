import { Link } from "@tanstack/react-router";
import { Shell } from "@/components/layout/Shell";
import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";

export function NotFound() {
  const { notFound } = useI18n();

  return (
    <Shell>
      <section className="py-24">
        <Container className="text-text space-y-4">
          <p className="text-detail text-sm">{notFound.code}</p>
          <h1 className="text-lg">{notFound.title}</h1>
          <p className="text-detail">{notFound.message}</p>
          <Link
            to="/"
            className="text-text decoration-text/30 hover:decoration-text inline-block text-sm underline underline-offset-4 transition-colors"
          >
            {notFound.backHome}
          </Link>
        </Container>
      </section>
    </Shell>
  );
}
