import { useState, useEffect } from "react";
import { CONTACT } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { ExportResumeButton } from "./ExportResumeButton";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { content } = useLanguage();
  const { isLight } = useTheme();
  const { personal, nav, ui } = content;
  const [active, setActive] = useState("sobre");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      nav.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="site-header fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gothic transition-colors duration-350">
      <nav className="flex justify-between items-stretch w-full h-16 max-w-max-width mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="brand-mark font-display text-headline-md uppercase tracking-tighter text-primary flex items-center gap-2 px-margin-mobile md:pl-margin-desktop md:pr-6 shrink-0"
        >
          <span className="material-symbols-outlined text-tertiary text-2xl">terminal</span>
          <span className="hidden sm:inline">{personal.brand}</span>
          <span className="sm:hidden">VV</span>
        </button>

        {isLight ? (
          <ul className="hidden md:flex nav-cells flex-1 justify-center">
            {nav.map(({ label, id }) => (
              <li key={id} className="nav-cell">
                <button
                  onClick={() => scrollTo(id)}
                  className={`nav-cell-btn ${active === id ? "is-active" : ""}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="hidden md:flex gap-8 items-center flex-1 justify-center">
            {nav.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`font-sans text-nav-link uppercase tracking-widest transition-colors duration-300 ${
                    active === id
                      ? "text-primary font-bold border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-tertiary"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2 md:gap-3 px-margin-mobile md:pr-margin-desktop shrink-0">
          <ThemeToggle className="hidden sm:flex" />
          <LanguageToggle className="hidden sm:flex" />
          <div className="hidden md:block">
            <ExportResumeButton
              className="font-sans text-label-caps px-4 py-2 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest bg-transparent"
              label={ui.downloadCvPdf}
            />
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden md:block font-sans text-label-caps px-4 py-2 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest"
          >
            {ui.contact}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-gothic bg-background">
          <div className="flex flex-col p-4 gap-1 max-w-max-width mx-auto">
            <div className="px-4 py-2 flex gap-2 flex-wrap">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            {nav.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-3 text-left font-sans text-nav-link uppercase tracking-widest transition-colors ${
                  active === id
                    ? "text-tertiary border-l-2 border-tertiary"
                    : "text-on-surface-variant hover:text-tertiary"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="px-4 py-2">
              <ExportResumeButton
                className="w-full font-sans text-label-caps px-4 py-3 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest bg-transparent text-left"
                label={ui.downloadCvMobile}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
