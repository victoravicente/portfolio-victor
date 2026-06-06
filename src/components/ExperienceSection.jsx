import { EXPERIENCE } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          path="> ./executar --alvo EXPERIÊNCIA // REGISTRO"
          title="EXPERIÊNCIA"
          subtitle="Registro histórico de implementações, integrações e automações em ambiente corporativo financeiro."
        />

        <div className="relative pl-8 md:pl-12 border-l border-gothic">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="mb-16 md:mb-20 relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-6 w-3 h-3 bg-background border border-tertiary group-hover:bg-tertiary transition-colors duration-300 z-10" />
                <div className="absolute -left-[35px] md:-left-[51px] top-[29px] w-[35px] md:w-[51px] h-px bg-gothic group-hover:bg-tertiary transition-colors duration-300" />

                <div className={`border border-gothic bg-surface-container group-hover:border-tertiary transition-colors duration-300 ${!exp.current ? "opacity-90 group-hover:opacity-100" : ""}`}>
                  <div className="flex justify-between items-center border-b border-gothic px-6 py-2 bg-surface-container-high">
                    <span className="font-mono text-terminal-sm text-tertiary">{exp.path}</span>
                    <span
                      className={`font-sans text-label-caps px-2 py-1 border rounded-full ${
                        exp.current
                          ? "text-background bg-tertiary border-tertiary"
                          : "text-on-surface-variant border-gothic"
                      }`}
                    >
                      {exp.current ? "NÓ ATIVO" : "ARQUIVADO"}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-headline-lg text-primary mb-2">{exp.company}</h3>
                    <h4 className="font-sans text-body-main text-on-surface-variant font-bold mb-2 tracking-wide uppercase">
                      {exp.role}
                    </h4>
                    <p className="font-mono text-terminal-sm text-on-surface-variant mb-6">
                      {exp.location} · {exp.period}
                    </p>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 font-sans text-body-main text-primary">
                          <span className="font-mono text-code-block text-tertiary flex-shrink-0">
                            [{String(j + 1).padStart(2, "0")}]
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          <div className="relative">
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-3 h-3 bg-gothic z-10" />
            <p className="pl-4 font-mono text-terminal-sm text-on-surface-variant">
              [EOF] // FIM DO REGISTRO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
