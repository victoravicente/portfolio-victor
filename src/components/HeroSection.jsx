import { Box, Container, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ACCENT, ACCENT2 } from "../constants";
import { useInView } from "../hooks/useInView";

export function HeroSection() {
  const [ref, visible] = useInView(0.01);

  return (
    <Box
      id="sobre"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: 10,
      }}
    >
      {/* Background grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT2}18 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 760 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.75,
              mb: 3,
              border: `1px solid ${ACCENT}40`,
              borderRadius: "100px",
              background: `${ACCENT}0A`,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: ACCENT, animation: "pulse 2s infinite" }} />
            <Typography sx={{ fontSize: "0.78rem", color: ACCENT, fontWeight: 500, letterSpacing: "0.05em" }}>
              Disponível para oportunidades
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4rem", md: "5.5rem" },
              lineHeight: 1.05,
              mb: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            Victor Vicente
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4rem", md: "5.5rem" },
              lineHeight: 1.05,
              mb: 4,
              color: "transparent",
              WebkitTextStroke: `1px ${ACCENT}80`,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            Engenheiro de Software
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
              lineHeight: 1.8,
              maxWidth: 580,
              mb: 5,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.5s",
            }}
          >
            Backend engineer com mais de 5 anos de experiência construindo sistemas escaláveis e confiáveis com Python, Java e JavaScript. Especialista em arquitetura de APIs e automação inteligente.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.65s",
            }}
          >
            {[
              { icon: <EmailIcon fontSize="small" />, label: "victorantoniovicente@gmail.com", href: "mailto:victorantoniovicente@gmail.com" },
              { icon: <PhoneIcon fontSize="small" />, label: "+55 67 99294-5422", href: "tel:+5567992945422" },
              { icon: <LaunchIcon fontSize="small" />, label: "LinkedIn", href: "https://linkedin.com/in/victor-vicente-9b205a192" },
              { icon: <GitHubIcon fontSize="small" />, label: "GitHub", href: "https://github.com/victoravicente" },
            ].map(({ icon, label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: ACCENT,
                    color: ACCENT,
                    background: `${ACCENT}0A`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {icon}
                {label}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 3,
              opacity: visible ? 1 : 0,
              transition: "all 0.7s ease 0.8s",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.88rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.25)",
                borderLeft: `2px solid ${ACCENT}40`,
                pl: 2,
              }}
            >
              "Construa hoje o mundo em que você teria orgulho de ser lembrado amanhã."
            </Typography>
          </Box>
        </Box>
      </Container>

      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }`}</style>
    </Box>
  );
}
