import { Box, Container, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ACCENT } from "../constants";

export function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", mb: 2 }}>
          victor<span style={{ color: ACCENT }}>.</span>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          {[
            { icon: <LaunchIcon />, href: "https://linkedin.com/in/victor-vicente-9b205a192" },
            { icon: <GitHubIcon />, href: "https://github.com/victoravicente" },
            { icon: <EmailIcon />, href: "mailto:victorantoniovicente@gmail.com" },
          ].map(({ icon, href }, i) => (
            <IconButton
              key={i}
              component="a"
              href={href}
              target="_blank"
              rel="noopener"
              sx={{
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                "&:hover": { color: ACCENT, borderColor: ACCENT, background: `${ACCENT}0A` },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
        <Typography sx={{ color: "text.secondary", fontSize: "0.78rem" }}>
          © {new Date().getFullYear()} Victor A. Vicente · Desenvolvido com React + Material UI
        </Typography>
      </Container>
    </Box>
  );
}
