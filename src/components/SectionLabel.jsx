import { Box, Typography } from "@mui/material";
import { ACCENT } from "../constants";

export function SectionLabel({ children }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
      <Box sx={{ width: 32, height: 2, bgcolor: ACCENT, borderRadius: 1 }} />
      <Typography
        sx={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: ACCENT,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
