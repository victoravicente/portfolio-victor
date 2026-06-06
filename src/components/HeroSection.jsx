import { useEffect, useState } from "react";
import { ABOUT, PERSONAL } from "../constants";
import { FadeIn } from "./FadeIn";

const TERMINAL_LINES = [
  { cmd: "whoami", response: "victor_vicente", delay: 500 },
  { cmd: "cat perfil.json", response: "{ cargo: 'Engenheiro de Software', status: 'Disponível' }", delay: 800 },
  { cmd: "status", response: "[SISTEMA ONLINE] — Pronto para construir.", delay: 600 },
];

function TerminalTyping() {
  const [lines, setLines] = useState([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [phase, setPhase] = useState("idle");
  const [lineIndex, setLineIndex] = useState(0);
  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) {
      setPhase("done");
      return;
    }

    const line = TERMINAL_LINES[lineIndex];
    const startTimer = setTimeout(() => {
      setPhase("typing");
      setCurrentCmd("");
    }, line.delay);

    return () => clearTimeout(startTimer);
  }, [lineIndex]);

  useEffect(() => {
    if (phase !== "typing") return;

    const line = TERMINAL_LINES[lineIndex];
    if (currentCmd.length < line.cmd.length) {
      const timer = setTimeout(() => {
        setCurrentCmd(line.cmd.slice(0, currentCmd.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }

    const responseTimer = setTimeout(() => {
      setLines((prev) => [...prev, { cmd: line.cmd, response: line.response }]);
      setLineIndex((i) => i + 1);
      setPhase("idle");
    }, 300);

    return () => clearTimeout(responseTimer);
  }, [phase, currentCmd, lineIndex]);

  return (
    <div className="font-mono text-code-block text-tertiary flex flex-col gap-2 min-h-[200px]">
      {lines.map((line, i) => (
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
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Terminal lateral */}
          <FadeIn className="lg:col-span-5">
            <aside className="flex flex-col gap-8 lg:pr-8">
              <div className="border border-gothic bg-surface-container-lowest flex flex-col hover:border-tertiary transition-colors duration-300">
                <div className="border-b border-gothic px-4 py-2 flex items-center justify-between bg-surface-container">
                  <div className="font-mono text-code-block text-on-surface-variant flex items-center gap-2">
                    <span className="text-tertiary opacity-70">~</span>
                    <span>/sistema/agentes/victor/metadata.sys</span>
                  </div>
                  <div className="w-2 h-2 bg-tertiary cursor-blink" />
                </div>
                <div className="p-6 font-mono text-code-block flex flex-col gap-4">
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">STATUS</span>
                    <span className="text-tertiary">ONLINE // PRONTO_PARA_TRABALHO</span>
                  </div>
                  <div className="w-full h-px bg-gothic opacity-30" />
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">CLASSE</span>
                    <span>{PERSONAL.title}</span>
                  </div>
                  <div className="w-full h-px bg-gothic opacity-30" />
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">LOCALIZAÇÃO</span>
                    <span>{PERSONAL.location}</span>
                  </div>
                  <div className="w-full h-px bg-gothic opacity-30" />
                  <div>
                    <span className="text-on-surface-variant text-xs block mb-1">DIRETRIZ</span>
                    <span className="text-primary leading-relaxed">{ABOUT.headline}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {ABOUT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gothic rounded-full px-3 py-1 font-sans text-label-caps text-on-surface-variant uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                <span className="border border-tertiary bg-tertiary/10 rounded-full px-3 py-1 font-sans text-label-caps text-tertiary uppercase tracking-wider">
                  APIS_REST
                </span>
              </div>
            </aside>
          </FadeIn>

          {/* Conteúdo editorial */}
          <article className="lg:col-span-7 lg:col-start-6 flex flex-col pt-4 lg:pt-0">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-tertiary mb-6">
                <span className="w-2 h-2 bg-tertiary animate-pulse" />
                <span className="font-sans text-label-caps tracking-widest uppercase">
                  {PERSONAL.status} · {PERSONAL.year}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-display-lg-mobile md:text-display-lg uppercase text-primary mb-6 border-b border-gothic pb-4 inline-block pr-12">
                SOBRE <span className="text-tertiary opacity-50">//</span> O ENGENHEIRO
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="font-display text-headline-md text-primary mb-8 leading-tight max-w-2xl">
                {ABOUT.headline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6 font-sans text-body-main text-on-surface-variant max-w-none mb-12">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={() => scrollTo("projetos")} className="btn-primary">
                  Ver Projetos
                </button>
                <a href={`mailto:${PERSONAL.email}`} className="btn-secondary">
                  Iniciar Contato
                </a>
              </div>
            </FadeIn>

            {/* Terminal interativo */}
            <FadeIn delay={0.6}>
              <div className="w-full bg-terminal-bg border border-gothic flex flex-col mb-16">
                <div className="border-b border-gothic p-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">terminal</span>
                  <span className="font-mono text-code-block text-on-surface-variant">
                    ~/projetos/{PERSONAL.brand.toLowerCase()}
                  </span>
                </div>
                <div className="p-6">
                  <TerminalTyping />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="border-t border-gothic pt-8">
                <h2 className="font-mono text-code-block text-tertiary mb-6 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                  ÁREAS_DE_FOCO_TÉCNICO
                </h2>
                <ul className="space-y-4 font-mono text-code-block">
                  {ABOUT.focusAreas.map((area) => (
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
