"use client";

import { Moon, Sun } from "lucide-react";
import { usePreference } from "@/context/preferences/PreferenceProvider";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./headerLogo";
import { useReveal } from "@/hooks/useReveal";

const languageOptions = [
  { label: "PT", value: "pt" },
  { label: "EN", value: "en" },
] as const;

function LanguageSwitcher() {
  const { language, setLanguage } = usePreference();

  return (
    <div className="flex items-center gap-1 text-[0.55rem]">
      {languageOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={language === option.value}
          onClick={() => setLanguage(option.value)}
          className={cn(
            "rounded-full px-3 py-1 transition-colors duration-200 cursor-pointer",
            language === option.value
              ? "bg-[var(--text-color)] text-[var(--bg-color)]"
              : "text-[var(--text-color)]/70 hover:text-[var(--text-color)]",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = usePreference();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full border border-[var(--line-color)] p-2 text-[var(--text-color)] transition hover:border-[var(--text-color)] cursor-pointer"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function Header() {
  const { language } = usePreference();
  const isVisible = useReveal(language);

  return (
    <header className="border-b border-[var(--line-color)] bg-[var(--bg-color)]">
      <div className={`mx-auto max-w-2xl px-4 section-fade diagonal-fade delay-100 ${isVisible ? "visible" : ""}`}>
        <div
          className={`flex items-center justify-between gap-4 py-3 text-xs text-[var(--text-color)] text-appear delay-200 ${
            isVisible ? "visible" : ""
          }`}
        >
          <LanguageSwitcher />
          <HeaderLogo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
