import { FadeIn } from "./FadeIn";

export function SectionHeader({ path, title, subtitle, status }) {
  return (
    <FadeIn>
      <header className="border-b border-gothic pb-8 mb-12 md:mb-16 relative">
        <div className="absolute -left-6 top-2 hidden md:flex items-center">
          <div className="w-2 h-2 bg-tertiary animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {path && (
              <span className="font-mono text-code-block text-tertiary mb-2 block opacity-70">
                {path}
              </span>
            )}
            <h2 className="font-display text-display-lg-mobile md:text-display-lg text-primary tracking-tighter uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-body-main text-on-surface-variant max-w-2xl mt-4">
                {subtitle}
              </p>
            )}
          </div>
          {status && (
            <div className="flex items-center gap-2 font-mono text-code-block text-on-surface-variant">
              <span className="w-3 h-3 bg-tertiary animate-pulse border border-gothic" />
              <span>{status}</span>
            </div>
          )}
        </div>
      </header>
    </FadeIn>
  );
}
