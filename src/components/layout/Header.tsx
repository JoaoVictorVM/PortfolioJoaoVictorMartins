import { Brand } from "@/components/layout/Brand";
import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

export function Header() {
  return (
    <header className="header-enter border-line bg-bg border-b">
      <Container>
        <div className="text-text flex items-center justify-between gap-4 py-4 text-xs">
          <Brand />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
