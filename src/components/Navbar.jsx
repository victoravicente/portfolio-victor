import { useState, useEffect, useRef } from "react";
import { CONTACT } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useAnalytics } from "../hooks/useAnalytics";
import { ExportResumeButton } from "./ExportResumeButton";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { content } = useLanguage();
  const { isLight } = useTheme();
  const { trackEvent } = useAnalytics();
  const { personal, nav, ui } = content;
  const [active, setActive] = useState("sobre");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

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

  useEffect(() => {
    if (!mobileOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const scrollTo = (id) => {
    trackEvent("section_navigation", {
      "section": id,
      "device": mobileOpen ? "mobile" : "desktop"
    });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header ref={navRef} className="site-header fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gothic transition-colors duration-350">
      <nav className="relative grid grid-cols-[auto_1fr_auto] items-center w-full h-16 max-w-max-width mx-auto gap-3 xl:gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="brand-mark font-display text-xl sm:text-2xl uppercase text-primary flex items-center gap-2 px-margin-mobile xl:px-0 h-16 min-w-0 shrink-0"
        >
          <span className="material-symbols-outlined text-tertiary text-2xl">terminal</span>
          <span className="hidden sm:inline whitespace-nowrap">{personal.brand}</span>
          <span className="sm:hidden">VV</span>
        </button>

        {isLight ? (
          <ul className="hidden xl:flex nav-cells flex-nowrap overflow-x-auto justify-center px-4">
            {nav.map(({ label, id }) => (
              <li key={id} className="nav-cell flex-shrink-0">
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
          <ul className="hidden xl:flex flex-nowrap items-center justify-center gap-3 px-4">
            {nav.map(({ label, id }) => (
              <li key={id} className="flex-shrink-0">
                <button
                  onClick={() => scrollTo(id)}
                  className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 ${
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

        <div className="flex items-center justify-end gap-1 xl:gap-2 px-margin-mobile xl:px-0 min-w-0 shrink-0">
          <ThemeToggle className="hidden sm:flex h-10" />
          <LanguageToggle className="hidden sm:flex h-10" />
          <div className="hidden xl:block">
            <ExportResumeButton
              className="font-sans text-label-caps h-10 px-2 xl:px-3 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest bg-transparent inline-flex items-center justify-center whitespace-nowrap"
              label={ui.downloadCvPdf}
            />
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            onClick={() => trackEvent("contact_click", {
              "method": "email",
              "location": "navbar"
            })}
            className="hidden xl:inline-flex font-sans text-label-caps h-10 px-2 xl:px-3 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest items-center justify-center whitespace-nowrap"
          >
            {ui.contact}
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-px bg-primary transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="xl:hidden border-t border-gothic bg-background shadow-lg">
          <div className="flex flex-col px-4 py-3 gap-1 max-w-max-width mx-auto">
            <div className="py-2 grid grid-cols-2 gap-2 sm:flex">
              <ThemeToggle className="w-full sm:w-auto h-11" />
              <LanguageToggle className="w-full sm:w-auto h-11" />
            </div>
            {nav.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-3 text-left font-sans text-nav-link uppercase tracking-widest transition-colors ${
                  active === id
                    ? "text-tertiary border-l-2 border-tertiary bg-surface-container-low"
                    : "text-on-surface-variant hover:text-tertiary"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="py-2">
              <ExportResumeButton
                className="w-full font-sans text-label-caps px-4 py-3 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest bg-transparent inline-flex items-center justify-center min-h-11"
                label={ui.downloadCvMobile}
                onExportStart={() => setMobileOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
