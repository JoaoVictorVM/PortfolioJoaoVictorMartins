import { usePreference } from "@/shared/hooks/usePreference";
import { useI18n } from "@/shared/hooks/useI18n";
import { cn } from "@/shared/lib/cn";
import type { Language } from "@/types/preferences";

const options: { label: string; value: Language }[] = [
  { label: "PT", value: "pt" },
  { label: "EN", value: "en" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = usePreference();
  const t = useI18n();

  return (
    <div className="text-2xs flex items-center gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={language === option.value}
          aria-label={t.header.language[option.value]}
          onClick={() => {
            setLanguage(option.value);
          }}
          className={cn(
            "cursor-pointer rounded-full px-3 py-1 transition-colors duration-200",
            language === option.value
              ? "bg-text text-bg"
              : "text-text/70 hover:text-text",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
