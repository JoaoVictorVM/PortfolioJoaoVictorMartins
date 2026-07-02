import { Container } from "@/components/layout/Container";
import { useI18n } from "@/shared/hooks/useI18n";

export function Footer() {
  const t = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-line bg-bg border-t">
      <Container>
        <div className="text-detail flex items-center justify-between py-4 text-sm">
          <span>{t.footer.location}</span>
          <span>{year}</span>
        </div>
      </Container>
    </footer>
  );
}
