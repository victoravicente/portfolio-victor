import { createContext, useContext, useEffect, useState } from "react";
import { en } from "../i18n/locales/en";
import { pt } from "../i18n/locales/pt";

const locales = { pt, en };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem("portfolio-locale");
    return saved === "en" ? "en" : "pt";
  });

  const content = locales[locale];

  useEffect(() => {
    localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  const toggleLocale = () => setLocale((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LanguageContext.Provider value={{ locale, content, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
