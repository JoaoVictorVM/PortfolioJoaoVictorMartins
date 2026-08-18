import type { Language } from "@/types/preferences";

const locales: Record<Language, string> = {
  pt: "pt-BR",
  en: "en-US",
};

/**
 * Formata uma data ISO (YYYY-MM-DD) no idioma da interface. O horário fixo em
 * meio-dia UTC evita que o fuso do visitante empurre a data para o dia anterior.
 */
export function formatDate(iso: string, language: Language): string {
  const date = new Date(`${iso}T12:00:00Z`);

  return new Intl.DateTimeFormat(locales[language], {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
