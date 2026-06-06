import { useLanguage } from "../context/LanguageContext";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  const { content } = useLanguage();
  const { projects, sections } = content;

  return (
    <section id="projetos" className="py-20 md:py-32 border-t border-gothic">
      <div className="section-container">
        <SectionHeader
          path={sections.projects.path}
          title={sections.projects.title}
          subtitle={sections.projects.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <article className="border border-gothic bg-surface-container flex flex-col h-full group hover:border-tertiary transition-colors duration-500">
                <div className="border-b border-gothic px-4 py-2 flex items-center justify-between bg-surface-container-high group-hover:border-tertiary transition-colors">
                  <span className="font-mono text-terminal-sm text-tertiary flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">folder_open</span>
                    {project.path}
                  </span>
                  <span className="font-sans text-label-caps text-on-surface-variant border border-gothic px-2 py-0.5 rounded-full">
                    [{project.id}]
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                  <h3 className="font-display text-headline-md text-primary">{project.name}</h3>
                  <p className="font-mono text-terminal-sm text-tertiary">{project.stack}</p>
                  <p className="font-sans text-body-main text-on-surface-variant flex-grow">{project.description}</p>
                  <div className="border-t border-gothic pt-4 mt-auto">
                    <p className="font-mono text-code-block text-on-surface-variant text-sm flex items-start gap-2">
                      <span className="text-tertiary flex-shrink-0">&gt;</span>
                      {project.highlight}
                    </p>
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
