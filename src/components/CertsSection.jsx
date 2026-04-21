import { Box, Container, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CERTS } from "../constants";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function CertsSection() {
  return (
    <Box id="certificados" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionLabel>Certificados</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 2 }}>
            Cursos & Certificações
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 6, maxWidth: 500 }}>
            Aprendizado contínuo em tecnologias e boas práticas de engenharia.
          </Typography>
        </FadeIn>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 2 }}>
          {CERTS.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s",
                  "&:hover": { borderColor: `${cert.color}40`, background: `${cert.color}08`, transform: "translateY(-3px)" },
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <VerifiedIcon sx={{ color: cert.color, fontSize: 20 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 500, fontSize: "0.88rem", color: "white", mb: 0.25, lineHeight: 1.3 }}>
                    {cert.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                    {cert.platform} · {cert.year}
                  </Typography>
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
