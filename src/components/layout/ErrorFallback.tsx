import type { ErrorComponentProps } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";

export function ErrorFallback({ reset }: ErrorComponentProps) {
  const { error } = useI18n();

  return (
    <section className="flex min-h-screen items-center">
      <Container className="text-text space-y-4">
        <h1 className="text-lg">{error.title}</h1>
        <p className="text-detail">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="text-text decoration-text/30 hover:decoration-text cursor-pointer text-sm underline underline-offset-4 transition-colors"
        >
          {error.retry}
        </button>
      </Container>
    </section>
  );
}
