import { Box, Container, Typography, Chip } from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function ExtraSection() {
  const extraColor = "#FFD166";

  return (
    <Box id="extra" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <FadeIn>
          <SectionLabel>Extracurricular</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 6 }}>
            Atividades Extracurriculares
          </Typography>
        </FadeIn>

        <FadeIn>
          <Box
            sx={{
              p: { xs: 3, md: 4.5 },
              borderRadius: "16px",
              border: `1px solid rgba(255,200,0,0.15)`,
              background: "rgba(255,200,0,0.03)",
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { sm: "flex-start" },
              transition: "all 0.3s",
              "&:hover": { borderColor: "rgba(255,200,0,0.3)", background: "rgba(255,200,0,0.05)" },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "12px",
                background: "rgba(255,200,0,0.12)",
                border: "1px solid rgba(255,200,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <PrecisionManufacturingIcon sx={{ color: extraColor, fontSize: 26 }} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center", mb: 1 }}>
                <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: extraColor }}>
                  Equipe de Robótica — IFMS
                </Typography>
                <Chip label="2014 — 2018" size="small" sx={{ bgcolor: "rgba(255,200,0,0.1)", color: extraColor, border: "1px solid rgba(255,200,0,0.2)", fontSize: "0.72rem", height: 22 }} />
              </Box>
              <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1 }}>
                Instituto Federal de Mato Grosso do Sul · Campo Grande, MS
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                <Typography component="li" sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7, mb: 0.5 }}>
                  Participação no desenvolvimento e programação de projetos de robótica durante o ensino técnico.
                </Typography>
                <Typography component="li" sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  Colaboração com equipes multidisciplinares no desenvolvimento, construção e testes de sistemas robóticos.
                </Typography>
              </Box>
            </Box>
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
