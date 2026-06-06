import { useLanguage } from "../context/LanguageContext";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function EducationSection() {
  const { content } = useLanguage();
  const { education, sections } = content;

  return (
    <section id="formacao" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          path={sections.education.path}
          title={sections.education.title}
          subtitle={sections.education.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <article className="bg-surface-container border border-gothic p-8 hover:border-tertiary transition-colors duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gothic to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <header className="flex justify-between items-start mb-8 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-code-block text-primary">{edu.degree}</span>
                    <h3 className="font-display text-headline-md text-primary">{edu.full}</h3>
                  </div>
                  <div className="font-sans text-label-caps text-on-surface-variant border border-gothic px-3 py-1 rounded-full whitespace-nowrap">
                    [ {edu.period} ]
                  </div>
                </header>

                <div className="flex flex-col gap-4">
                  <p className="font-sans text-body-main text-on-surface-variant">{edu.note}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="font-sans text-label-caps border border-gothic px-2 py-1 text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
