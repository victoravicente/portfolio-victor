import { useState, useEffect } from "react";
import { NAV_ITEMS, PERSONAL } from "../constants";

export function Navbar() {
  const [active, setActive] = useState("sobre");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      NAV_ITEMS.forEach(({ id }) => {
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
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-gothic">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 max-w-max-width mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-headline-md uppercase tracking-tighter text-primary flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-tertiary text-2xl">terminal</span>
          <span className="hidden sm:inline">{PERSONAL.brand}</span>
          <span className="sm:hidden">VV</span>
        </button>

        <ul className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map(({ label, id }) => (
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

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="hidden md:block font-sans text-label-caps px-4 py-2 border border-gothic hover:border-tertiary hover:text-tertiary transition-colors text-on-surface uppercase tracking-widest"
          >
            Contato
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
            {NAV_ITEMS.map(({ label, id }) => (
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
          </div>
        </div>
      )}
    </header>
  );
}
