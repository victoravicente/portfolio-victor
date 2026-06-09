import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";

export function SkillBar({ name, level, delay = 0 }) {
  const [ref, visible] = useInView(0.2);
  const [displayLevel, setDisplayLevel] = useState(0);
  const { content } = useLanguage();
  const { ui } = content;

  // Mapear nível (0-5) para label descritivo
  const getLevelLabel = () => {
    if (level <= 1) return ui.skillLevelBeginner;
    if (level <= 3) return ui.skillLevelIntermediate;
    return ui.skillLevelAdvanced;
  };

  // Renderizar barra com █ e _ char por char
  const renderBar = (filledCount) => {
    const chars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < filledCount;
      const isLast = i === filledCount - 1 && filledCount > 0;
      const char = isFilled ? "█" : "_";
      
      chars.push(
        <span
          key={i}
          className={isLast ? "skill-cursor" : ""}
        >
          {char}
        </span>
      );
    }
    return chars;
  };

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setDisplayLevel(level), 100 + delay);
      return () => clearTimeout(timer);
    }
  }, [visible, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-baseline">
          <span className="font-mono text-code-block text-on-surface-variant">{name}</span>
          <span className="font-mono text-code-block text-on-surface-variant text-xs">({displayLevel}/5)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-code-block text-tertiary">&gt;</span>
          <span className="font-mono text-code-block text-tertiary transition-all duration-1000 ease-out tracking-widest">
            {renderBar(displayLevel)}
          </span>
          <span className="font-mono text-code-block text-on-surface-variant text-xs whitespace-nowrap">
            {getLevelLabel()}
          </span>
        </div>
      </div>
    </div>
  );
}
