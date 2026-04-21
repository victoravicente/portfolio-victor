import { Box, Container, Typography, Divider } from "@mui/material";
import { EDUCATION, ACCENT2 } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function EducationSection() {
  return (
    <Box id="formacao" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionLabel>Formação</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}>
            Formação Acadêmica
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 6, maxWidth: 500 }}>
            Base acadêmica sólida em computação e engenharia de software.
          </Typography>
        </FadeIn>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
          {EDUCATION.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  height: "100%",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: `${ACCENT2}40`, transform: "translateY(-4px)", background: `${ACCENT2}06` },
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    px: 2,
                    py: 0.5,
                    mb: 2,
                    borderRadius: "6px",
                    background: `${ACCENT2}18`,
                    border: `1px solid ${ACCENT2}30`,
                  }}
                >
                  <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: ACCENT2 }}>
                    {edu.institution}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", mb: 0.75 }}>
                  {edu.full}
                </Typography>
                <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "1rem", color: "white", mb: 1 }}>
                  {edu.degree}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: ACCENT2, mb: 2 }}>
                  {edu.period}
                </Typography>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 2 }} />
                <Typography sx={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.7 }}>
                  {edu.note}
                </Typography>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
