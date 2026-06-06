import { useInView } from "../hooks/useInView";

export function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useInView();

  const transforms = {
    up: "translateY(20px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction] ?? transforms.up,
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
