import { SKILL_LAYERS } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { SkillBar } from "./SkillBar";

export function SkillsSection() {
  const { content } = useLanguage();
  const { sections, metaCognition, ui } = content;

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          path={sections.skills.path}
          title={sections.skills.title}
          status={ui.operational}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          {SKILL_LAYERS.map((layer, layerIdx) => (
            <FadeIn key={layer.layer} delay={layerIdx * 0.1} className="col-span-1 md:col-span-4">
              <div className="border border-gothic bg-background flex flex-col h-full group hover:border-tertiary transition-colors duration-500">
                <div className="border-b border-gothic p-4 flex items-center justify-between">
                  <span className="font-sans text-label-caps text-primary uppercase tracking-widest">
                    {layer.layer} :: {layer.category}
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-sm">{layer.icon}</span>
                </div>
                <div className="p-6 flex flex-col gap-8 flex-grow">
                  {[...layer.items]
                    .sort((a, b) => b.level - a.level)
                    .map((skill, i) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
                    ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <section className="border border-gothic bg-background p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-gothic opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-gothic opacity-20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-4">
                <span className="font-sans text-label-caps text-accent mb-4 block uppercase tracking-widest">
                  {ui.metaCognitionLabel}
                </span>
                <h3 className="font-display text-headline-md text-primary leading-tight">
                  {ui.metaCognitionTitle}
                  <br />
                  <span className="italic text-on-surface-variant">{ui.metaCognitionSubtitle}</span>
                </h3>
                <p className="font-sans text-body-main text-on-surface-variant mt-6 border-l-2 border-accent pl-4">
                  {ui.metaCognitionIntro}
                </p>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {metaCognition.map((item) => (
                  <div key={item.id} className="group cursor-default">
                    <div className="flex items-baseline gap-3 border-b border-gothic pb-2 mb-3 group-hover:border-tertiary transition-colors">
                      <span className="font-mono text-code-block text-tertiary">[{item.id}]</span>
                      <h4 className="font-display text-headline-md text-primary text-2xl">{item.title}</h4>
                    </div>
                    <p className="font-sans text-body-main text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </section>
  );
}
