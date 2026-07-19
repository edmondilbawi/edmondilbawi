"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect
} from "react";
import { translations, type V2Translations } from "@/data/i18n";

type LanguageContextValue = {
  language: "en";
  t: V2Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const englishLanguageContext: LanguageContextValue = {
  language: "en",
  t: translations.en
};

export function V2LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.localStorage.removeItem("edmond-portfolio-language");
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  return (
    <LanguageContext.Provider value={englishLanguageContext}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useV2Language() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useV2Language must be used within V2LanguageProvider.");
  }

  return context;
}
