import { CONTACT } from "../constants";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { content } = useLanguage();
  const { personal, nav, ui } = content;

  const links = [
    { label: "GitHub", href: CONTACT.github },
    { label: "LinkedIn", href: CONTACT.linkedin },
    { label: "Email", href: `mailto:${CONTACT.email}` },
  ];

  return (
    <footer id="contato" className="border-t border-gothic bg-background">
      <div className="section-container py-16 md:py-20 flex flex-col items-center gap-8">
        <h2 className="font-display text-display-lg-mobile text-primary text-center uppercase">
          {ui.footerCta}
        </h2>

        <ul className="flex flex-wrap justify-center gap-6">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-sans text-body-main text-on-surface-variant hover:text-tertiary transition-all duration-200 uppercase tracking-widest"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full border-t border-gothic pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-label-caps text-tertiary text-center md:text-left uppercase tracking-widest">
            © {CONTACT.year} {personal.brand} // {ui.footerLedger}
          </span>

          <nav className="flex flex-wrap justify-center gap-6">
            {nav.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-sans text-label-caps text-on-surface-variant hover:text-primary underline decoration-tertiary hover:-translate-y-0.5 transition-transform uppercase tracking-widest"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
