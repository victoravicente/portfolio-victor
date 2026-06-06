import { CERTS } from "../constants";
import { FadeIn } from "./FadeIn";

export function CertsSection() {
  return (
    <section id="certificados" className="py-12 md:py-16 border-t border-gothic">
      <div className="section-container">
        <FadeIn>
          <div className="border border-gothic bg-surface-container">
            <div className="border-b border-gothic px-6 py-3 flex justify-between items-center bg-background">
              <span className="font-mono text-code-block text-tertiary">
                Registro de Certificações Verificadas
              </span>
              <span className="material-symbols-outlined text-tertiary text-sm">lock</span>
            </div>

            <div className="flex flex-col">
              {CERTS.map((cert, i) => (
                <div
                  key={cert.name}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-background transition-colors group ${
                    i < CERTS.length - 1 ? "border-b border-gothic" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <span className="text-tertiary font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <div>
                      <h3 className="font-sans text-body-main text-primary font-bold">
                        {cert.name}
                      </h3>
                      <div className="font-mono text-code-block text-on-surface-variant mt-1 text-xs">
                        {cert.platform}
                      </div>
                    </div>
                  </div>
                  <span className="font-sans text-label-caps text-tertiary">
                    EMITIDO: {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
