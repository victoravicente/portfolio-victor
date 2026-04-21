import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { ACCENT, NAV_ITEMS, theme } from "../constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [drawer, setDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconMap = {
    sobre: <PersonIcon fontSize="small" />,
    skills: <CodeIcon fontSize="small" />,
    experiencia: <WorkIcon fontSize="small" />,
    formacao: <SchoolIcon fontSize="small" />,
    certificados: <VerifiedIcon fontSize="small" />,
    extra: <EmojiEventsIcon fontSize="small" />,
  };

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawer(false);
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          px: { xs: 3, md: 6 },
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          background: scrolled ? "rgba(7,11,20,0.85)" : "transparent",
          borderBottom: scrolled ? `1px solid rgba(0,229,255,0.08)` : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "white",
            cursor: "pointer",
            "& span": { color: ACCENT },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          victor<span>.</span>
        </Typography>

        {isMobile ? (
          <IconButton onClick={() => setDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {NAV_ITEMS.map(({ label, id }) => (
              <Box
                key={id}
                onClick={() => scrollTo(id)}
                sx={{
                  px: 2,
                  py: 0.75,
                  cursor: "pointer",
                  borderRadius: "6px",
                  fontSize: "0.82rem",
                  fontWeight: active === id ? 500 : 400,
                  color: active === id ? ACCENT : "rgba(255,255,255,0.6)",
                  background: active === id ? `${ACCENT}12` : "transparent",
                  transition: "all 0.2s",
                  "&:hover": { color: "white", background: "rgba(255,255,255,0.05)" },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
        PaperProps={{ sx: { width: 280, background: "#0D1117", borderLeft: `1px solid rgba(0,229,255,0.1)` } }}
      >
        <Box sx={{ p: 3, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {NAV_ITEMS.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                onClick={() => scrollTo(id)}
                sx={{
                  borderRadius: "8px",
                  mb: 0.5,
                  gap: 1.5,
                  color: active === id ? ACCENT : "rgba(255,255,255,0.7)",
                  background: active === id ? `${ACCENT}12` : "transparent",
                }}
              >
                {iconMap[id]}
                {label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
