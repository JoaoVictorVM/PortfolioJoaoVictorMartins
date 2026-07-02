import type { Language } from "@/types/preferences";

const pt = {
  skipToContent: "Pular para o conteúdo",
  header: {
    home: "Início",
    theme: {
      toLight: "Ativar modo claro",
      toDark: "Ativar modo escuro",
    },
    language: {
      pt: "Mudar para português",
      en: "Mudar para inglês",
    },
  },
  footer: {
    location: "Cabo Verde - MG 37880-000",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  skipToContent: "Skip to content",
  header: {
    home: "Home",
    theme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    language: {
      pt: "Switch to Portuguese",
      en: "Switch to English",
    },
  },
  footer: {
    location: "Cabo Verde - MG, Brazil",
  },
};

export const dictionary: Record<Language, Dictionary> = { pt, en };
