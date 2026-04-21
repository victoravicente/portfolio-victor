import { Box, Container, Typography, Chip } from "@mui/material";
import { SKILLS } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionLabel>Skills</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}>
            Tecnologias & Ferramentas
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 6, maxWidth: 500 }}>
            Stack técnico construído ao longo de mais de 5 anos de experiência profissional.
          </Typography>
        </FadeIn>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 2 }}>
          {SKILLS.map(({ category, color, items }, i) => (
            <FadeIn key={category} delay={i * 0.08}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  height: "100%",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: `${color}40`,
                    background: `${color}06`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: color }} />
                  <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.9rem", color }}>
                    {category}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        bgcolor: `${color}12`,
                        color: "rgba(255,255,255,0.75)",
                        border: `1px solid ${color}25`,
                        fontSize: "0.75rem",
                        height: 26,
                        "&:hover": { bgcolor: `${color}22` },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
