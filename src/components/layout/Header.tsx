import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

export function Header() {
  return (
    <header className="header-enter border-line bg-bg border-b">
      <Container>
        <div className="text-text flex items-center justify-between gap-4 py-3 text-xs">
          <LanguageSwitcher />
          <Logo />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}
