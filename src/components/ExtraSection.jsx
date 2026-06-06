import { EXTRA } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { TerminalCard } from "./TerminalCard";

export function ExtraSection() {
  return (
    <section id="extra" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              EXTRACURRICULAR <br />
              <span className="text-accent opacity-90">// MISSÕES PARALELAS</span>
            </>
          }
          subtitle="Atividades desenvolvidas fora do escopo profissional principal — colaboração multidisciplinar e experimentação técnica."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <FadeIn className="col-span-1 md:col-span-8">
            <TerminalCard path={EXTRA.path} badge="ARQUIVO_LOG" icon="folder_open">
              <div className="flex flex-col gap-6 font-mono text-terminal-sm text-primary">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-2">
                  <h3 className="font-display text-headline-lg text-primary">{EXTRA.title}</h3>
                  <span className="font-sans text-label-caps text-tertiary border border-gothic px-3 py-1 rounded-full self-start">
                    {EXTRA.period}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">{EXTRA.location}</p>

                {EXTRA.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <span className="text-tertiary mt-1">[{String(j + 1).padStart(2, "0")}]</span>
                    <p className="text-on-surface-variant text-sm">{bullet}</p>
                  </div>
                ))}

                <div className="mt-4 flex items-center text-tertiary">
                  <span>&gt;</span>
                  <span className="ml-2">Aguardando novas diretrizes</span>
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
                  ~/contexto.log
                </span>
              </div>
              <div className="p-6 flex flex-col gap-6 h-full font-sans text-body-main">
                <div className="border-l border-gothic pl-4 py-1 relative">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-background border border-tertiary" />
                  <h4 className="font-sans text-label-caps text-primary uppercase tracking-widest mb-1">
                    Robótica Educacional
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Primeiro contato com programação de hardware e trabalho em equipe técnica.
                  </p>
                </div>
                <div className="border-l border-gothic pl-4 py-1 relative">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-background border border-gothic" />
                  <h4 className="font-sans text-label-caps text-primary uppercase tracking-widest mb-1">
                    Competições
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Desenvolvimento, construção e testes de sistemas robóticos em eventos do IFMS.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
