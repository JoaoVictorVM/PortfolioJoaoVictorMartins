import { usePreference } from "@/shared/hooks/usePreference";
import { dictionary, type Dictionary } from "@/shared/i18n/dictionary";

export function useI18n(): Dictionary {
  const { language } = usePreference();
  return dictionary[language];
}
