import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle({ className = "" }) {
  const { content, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={content.ui.langAria}
      className={`font-sans text-label-caps px-3 py-2 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest min-w-[44px] ${className}`}
    >
      {content.ui.langToggle}
    </button>
  );
}
