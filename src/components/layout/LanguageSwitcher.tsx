import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckCheck, ChevronDown } from "lucide-react";

import { usePreference } from "@/shared/hooks/usePreference";
import { useI18n } from "@/shared/hooks/useI18n";
import { cn } from "@/shared/lib/cn";
import type { Language } from "@/types/preferences";

const options: Language[] = ["pt", "en"];

export function LanguageSwitcher() {
  const { language, setLanguage } = usePreference();
  const t = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger
        aria-label={t.header.language.label}
        className="border-line text-text hover:border-text text-2xs flex h-9 cursor-pointer items-center gap-1 rounded-full border px-3 transition-colors"
      >
        {language.toUpperCase()}
        <ChevronDown
          size={12}
          aria-hidden
          className={cn(
            "shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="border-line bg-bg min-w-36 rounded-lg border p-1 text-xs"
        >
          <DropdownMenu.RadioGroup
            value={language}
            onValueChange={(value) => {
              setLanguage(value as Language);
            }}
          >
            {options.map((option) => (
              <DropdownMenu.RadioItem
                key={option}
                value={option}
                aria-label={t.header.language[option]}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-4 rounded px-3 py-2 transition-colors outline-none",
                  language === option
                    ? "text-text"
                    : "text-detail data-highlighted:text-text",
                )}
              >
                {t.header.language.names[option]}
                <DropdownMenu.ItemIndicator>
                  <CheckCheck size={14} aria-hidden />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
