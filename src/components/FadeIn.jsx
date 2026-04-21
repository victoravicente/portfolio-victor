import { Box } from "@mui/material";
import { useInView } from "../hooks/useInView";

export function FadeIn({ children, delay = 0, direction = "up" }) {
  const [ref, visible] = useInView();
  const transforms = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    none: "none",
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}
