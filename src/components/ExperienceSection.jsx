import { Box, Container, Typography, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { EXPERIENCE, ACCENT, ACCENT2 } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function ExperienceSection() {
  return (
    <Box id="experiencia" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionLabel>Experiência</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}>
            Trajetória Profissional
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 6, maxWidth: 500 }}>
            Mais de 5 anos de experiência contínua na mesma instituição, crescendo em responsabilidade e complexidade técnica.
          </Typography>
        </FadeIn>

        <Box sx={{ position: "relative" }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 16, md: 24 },
              top: 8,
              bottom: 8,
              width: 1,
              background: `linear-gradient(to bottom, ${ACCENT}, ${ACCENT2}, transparent)`,
              opacity: 0.3,
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <Box sx={{ display: "flex", gap: { xs: 4, md: 5 }, alignItems: "flex-start" }}>
                  {/* Dot */}
                  <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                    <Box
                      sx={{
                        width: { xs: 32, md: 48 },
                        height: { xs: 32, md: 48 },
                        borderRadius: "50%",
                        border: `2px solid ${exp.current ? ACCENT : "rgba(255,255,255,0.1)"}`,
                        background: exp.current ? `${ACCENT}18` : "rgba(255,255,255,0.03)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <WorkIcon sx={{ fontSize: { xs: 14, md: 18 }, color: exp.current ? ACCENT : "rgba(255,255,255,0.3)" }} />
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      flex: 1,
                      p: { xs: 2.5, md: 3 },
                      borderRadius: "12px",
                      border: `1px solid ${exp.current ? ACCENT + "30" : "rgba(255,255,255,0.06)"}`,
                      background: exp.current ? `${ACCENT}06` : "rgba(255,255,255,0.02)",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5, gap: 1 }}>
                      <Box>
                        <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: exp.current ? ACCENT : "white", mb: 0.25 }}>
                          {exp.role}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                          {exp.company} · {exp.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {exp.current && (
                          <Chip label="Atual" size="small" sx={{ bgcolor: `${ACCENT}18`, color: ACCENT, border: `1px solid ${ACCENT}30`, fontSize: "0.7rem", height: 22 }} />
                        )}
                        <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", whiteSpace: "nowrap" }}>
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {exp.bullets.map((b, j) => (
                        <Typography key={j} component="li" sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7, mb: 0.5 }}>
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </FadeIn>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
