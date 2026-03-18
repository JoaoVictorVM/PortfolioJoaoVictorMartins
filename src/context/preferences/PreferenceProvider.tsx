"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "pt" | "en";
export type ThemeMode = "dark" | "light";

interface PreferenceContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const PreferenceContext = createContext<PreferenceContextValue | null>(null);

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

export function PreferenceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === "pt" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.theme = theme;

    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.dataset.language = language;

    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "pt" ? "en" : "pt"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme,
      toggleLanguage,
    }),
    [language, theme],
  );

  return (
    <PreferenceContext.Provider value={value}>
      {children}
    </PreferenceContext.Provider>
  );
}

export function usePreference() {
  const context = useContext(PreferenceContext);

  if (!context) {
    throw new Error("usePreference must be used inside PreferenceProvider.");
  }

  return context;
}
