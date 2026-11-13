import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { bg, type Translations } from "./bg";
import { en } from "./en";
import { ro } from "./ro";

export type Language = "bg" | "en" | "ro";

export const LANGUAGES: readonly Language[] = ["bg", "en", "ro"];

const DICTIONARIES: Record<Language, Translations> = { bg, en, ro };
const STORAGE_KEY = "bloombox-language";
const DEFAULT_LANGUAGE: Language = "bg";

function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as readonly string[]).includes(value);
}

function languageFromUrl(): Language | null {
  const pathSegment = window.location.pathname.split("/")[1]?.toLowerCase();
  if (isLanguage(pathSegment)) return pathSegment;
  const queryLang = new URLSearchParams(window.location.search)
    .get("lang")
    ?.toLowerCase();
  return isLanguage(queryLang) ? queryLang : null;
}

function updateUrl(language: Language): void {
  const { pathname, search, hash } = window.location;
  const firstSegment = pathname.split("/")[1]?.toLowerCase() ?? "";
  const isHomeUrl = pathname === "/" || (isLanguage(firstSegment) && pathname.replace(/\/+$/, "") === `/${firstSegment}`);
  if (!isHomeUrl) return; // e.g. /privacy keeps its own path
  try {
    window.history.replaceState(null, "", `/${language}/${search}${hash}`);
  } catch {
    // history API unavailable (e.g. sandboxed frame) - language still switches
  }
}

function detectInitialLanguage(): Language {
  const fromUrl = languageFromUrl();
  if (fromUrl) return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // localStorage unavailable (private mode) - fall through to browser language
  }
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return isLanguage(browser) ? browser : DEFAULT_LANGUAGE;
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);
  const t = DICTIONARIES[language];

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    updateUrl(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore persistence failures
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", t.meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", t.meta.description);
  }, [language, t]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
