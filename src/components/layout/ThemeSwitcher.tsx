import { Moon, Sun } from "lucide-react";
import { usePreference } from "@/shared/hooks/usePreference";
import { useI18n } from "@/shared/hooks/useI18n";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = usePreference();
  const t = useI18n();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? t.header.theme.toLight : t.header.theme.toDark}
      onClick={toggleTheme}
      className="border-line text-text hover:border-text flex size-9 cursor-pointer items-center justify-center rounded-full border transition-colors"
    >
      <span key={theme} className="theme-icon-enter inline-flex">
        {isDark ? (
          <Sun size={16} aria-hidden />
        ) : (
          <Moon size={16} aria-hidden />
        )}
      </span>
    </button>
  );
}
