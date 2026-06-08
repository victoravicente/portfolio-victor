import { useEffect, useState } from "react";
import { CONTACT } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import { ExportResumeButton } from "./ExportResumeButton";
import { FadeIn } from "./FadeIn";
import { TerminalDots } from "./TerminalCard";

function TerminalTyping({ lines }) {
  const [output, setOutput] = useState([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [phase, setPhase] = useState("idle");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    setOutput([]);
    setCurrentCmd("");
    setPhase("idle");
    setLineIndex(0);
  }, [lines]);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setPhase("done");
      return;
    }

    const line = lines[lineIndex];
    const startTimer = setTimeout(() => {
      setPhase("typing");
      setCurrentCmd("");
    }, line.delay);

    return () => clearTimeout(startTimer);
  }, [lineIndex, lines]);

  useEffect(() => {
    if (phase !== "typing") return;

    const line = lines[lineIndex];
    if (currentCmd.length < line.cmd.length) {
      const timer = setTimeout(() => {
        setCurrentCmd(line.cmd.slice(0, currentCmd.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }

    const responseTimer = setTimeout(() => {
      setOutput((prev) => [...prev, { cmd: line.cmd, response: line.response }]);
      setLineIndex((i) => i + 1);
      setPhase("idle");
    }, 300);

    return () => clearTimeout(responseTimer);
  }, [phase, currentCmd, lineIndex, lines]);

  return (
    <div className="font-mono text-code-block text-tertiary flex flex-col gap-2 min-h-[200px]">
      {output.map((line, i) => (
        <div key={i}>
          <div>
            <span className="text-on-surface-variant">&gt; </span>
            {line.cmd}
          </div>
          <div className="text-on-surface-variant mb-2">{line.response}</div>
        </div>
      ))}
      {phase === "typing" && (
        <div>
          <span className="text-on-surface-variant">&gt; </span>
          {currentCmd}
          <span className="cursor-blink inline-block w-2 h-4 bg-tertiary align-middle ml-0.5" />
        </div>
      )}
      {phase === "done" && (
        <div>
          <span className="text-on-surface-variant">&gt; </span>
          <span className="cursor-blink inline-block w-2 h-4 bg-tertiary align-middle" />
        </div>
      )}
    </div>
  );
}

export function HeroSection() {
  const { content } = useLanguage();
  const { personal, about, terminal, ui } = content;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <FadeIn className="lg:col-span-5">
            <aside className="flex flex-col gap-8 lg:pr-8">
              <div className="terminal-card bg-surface-container-lowest">
                <div className="terminal-header">
                  <div className="font-mono text-code-block text-on-surface-variant flex items-center gap-3 min-w-0">
                    <TerminalDots />
                    <span className="text-tertiary opacity-70 shrink-0">~</span>
                    <span className="truncate">{ui.metadataPath}</span>
                  </div>
                  <div className="w-2 h-2 cursor-blink shrink-0" />
                </div>
                <div className="p-6 font-mono text-code-block flex flex-col gap-4">
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">{ui.labels.status}</span>
                    <span className="text-tertiary">{ui.statusOnline}</span>
                  </div>
                  <div className="w-full h-px bg-gothic opacity-30" />
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">{ui.labels.class}</span>
                    <span>{personal.title}</span>
                  </div>
                  <div className="w-full h-px bg-gothic opacity-30" />
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">{ui.labels.directive}</span>
                    <span className="text-primary leading-relaxed">{about.headline}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gothic rounded-full px-3 py-1 font-sans text-label-caps text-on-surface-variant uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                <span className="border border-tertiary bg-tertiary/10 rounded-full px-3 py-1 font-sans text-label-caps text-tertiary uppercase tracking-wider">
                  {ui.apisRest}
                </span>
              </div>
            </aside>
          </FadeIn>

          <article className="lg:col-span-7 lg:col-start-6 flex flex-col pt-4 lg:pt-0">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-tertiary mb-6">
                <span className="w-2 h-2 bg-tertiary animate-pulse" />
                <span className="font-sans text-label-caps tracking-widest uppercase">
                  {personal.status} · {CONTACT.year}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-primary mb-6 border-b border-gothic pb-4 inline-block sm:pr-12 break-words">
                {ui.aboutTitle} <span className="text-tertiary opacity-50">//</span> {ui.aboutSubtitle}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-display text-headline-md text-primary mb-8 leading-tight max-w-2xl">
                {about.headline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6 font-sans text-body-main text-on-surface-variant max-w-none mb-12">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-16">
                <button onClick={() => scrollTo("projetos")} className="btn-primary">
                  {ui.viewProjects}
                </button>
                <ExportResumeButton />
                <a href={`mailto:${CONTACT.email}`} className="btn-secondary">
                  {ui.initiateContact}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="terminal-card bg-terminal-bg mb-16">
                <div className="terminal-header">
                  <div className="flex items-center gap-3 min-w-0">
                    <TerminalDots />
                    <span className="material-symbols-outlined text-on-surface-variant text-sm shrink-0">terminal</span>
                    <span className="font-mono text-code-block text-on-surface-variant truncate">{ui.terminalPath}</span>
                  </div>
                </div>
                <div className="p-6">
                  <TerminalTyping lines={terminal} />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="border-t border-gothic pt-8">
                <h2 className="font-mono text-code-block text-tertiary mb-6 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                  {ui.focusAreasTitle}
                </h2>
                <ul className="space-y-4 font-mono text-code-block">
                  {about.focusAreas.map((area) => (
                    <li key={area.id} className="flex items-start gap-4 group">
                      <span className="text-tertiary group-hover:text-primary transition-colors mt-0.5">
                        [{area.id}]
                      </span>
                      <div>
                        <span className="block text-primary mb-1">{area.title}</span>
                        <span className="text-on-surface-variant text-sm">{area.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </article>
        </div>
      </div>
    </section>
  );
}
