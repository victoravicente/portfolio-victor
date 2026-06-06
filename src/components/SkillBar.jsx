import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

export function SkillBar({ name, level, delay = 0 }) {
  const [ref, visible] = useInView(0.2);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setWidth(level), 100 + delay);
      return () => clearTimeout(timer);
    }
  }, [visible, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-mono text-code-block text-on-surface-variant">{name}</span>
        <span className="font-mono text-code-block text-tertiary">{level}%</span>
      </div>
      <div className="w-full h-px bg-gothic relative">
        <div
          className="absolute top-0 left-0 h-full bg-tertiary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
