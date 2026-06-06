import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle({ className = "" }) {
  const { isLight, toggleTheme } = useTheme();
  const { content } = useLanguage();
  const { ui } = content;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? ui.themeAriaDark : ui.themeAriaLight}
      title={isLight ? ui.themeDark : ui.themeLight}
      className={`font-sans text-label-caps px-3 py-2 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest min-w-[44px] flex items-center justify-center gap-1.5 ${className}`}
    >
      <span className="material-symbols-outlined text-base leading-none">
        {isLight ? "dark_mode" : "light_mode"}
      </span>
      <span className="hidden lg:inline">{isLight ? ui.themeDark : ui.themeLight}</span>
    </button>
  );
}
