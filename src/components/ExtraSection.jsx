import { useLanguage } from "../context/LanguageContext";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

export function ExtraSection() {
  const { content } = useLanguage();
  const { extra, sections, ui } = content;

  return (
    <section id="extra" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              {sections.extra.title} <br />
              <span className="text-accent opacity-90">{ui.extraSideQuests}</span>
            </>
          }
          subtitle={sections.extra.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="col-span-1 md:col-span-8">
            <TerminalCard path={extra.path} badge={ui.logFile} icon="folder_open">
              <div className="flex flex-col gap-6 font-mono text-terminal-sm text-primary">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-2">
                  <h3 className="font-display text-headline-lg text-primary">{extra.title}</h3>
                  <span className="font-sans text-label-caps text-tertiary border border-gothic px-3 py-1 rounded-full self-start">
                    {extra.period}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">{extra.location}</p>

                {extra.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <span className="text-tertiary mt-1">[{String(j + 1).padStart(2, "0")}]</span>
                    <p className="text-on-surface-variant text-sm">{bullet}</p>
                  </div>
                ))}

                <div className="mt-4 flex items-center text-tertiary">
                  <span>&gt;</span>
                  <span className="ml-2">{ui.awaitingDirectives}</span>
                  <span className="cursor-blink ml-1 inline-block w-2 h-4 bg-tertiary" />
                </div>
              </div>
            </TerminalCard>
          </FadeIn>

          <FadeIn delay={0.2} className="col-span-1 md:col-span-4">
            <div className="border border-gothic bg-background flex flex-col h-full hover:border-tertiary transition-colors duration-300">
              <div className="border-b border-gothic px-4 py-2 flex items-center bg-surface-container-high">
                <span className="font-mono text-terminal-sm text-tertiary flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">info</span>
                  {ui.extraContextPath}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-6 h-full font-sans text-body-main">
                <div className="border-l border-gothic pl-4 py-1 relative">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-background border border-tertiary" />
                  <h4 className="font-sans text-label-caps text-primary uppercase tracking-widest mb-1">
                    {ui.extraRobotics}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{ui.extraRoboticsDesc}</p>
                </div>
                <div className="border-l border-gothic pl-4 py-1 relative">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-background border border-gothic" />
                  <h4 className="font-sans text-label-caps text-primary uppercase tracking-widest mb-1">
                    {ui.extraCompetitions}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{ui.extraCompetitionsDesc}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
