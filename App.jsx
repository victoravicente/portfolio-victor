import { useState, useEffect, useRef } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  Chip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";

const ACCENT = "#00E5FF";
const ACCENT2 = "#7C4DFF";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: ACCENT },
    secondary: { main: ACCENT2 },
    background: { default: "#070B14", paper: "#0D1117" },
    text: { primary: "#E8EDF5", secondary: "#8892A4" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #070B14; }
        ::-webkit-scrollbar-thumb { background: ${ACCENT}44; border-radius: 4px; }
        * { box-sizing: border-box; }
        ::selection { background: ${ACCENT}33; }
      `,
    },
  },
});

const NAV_ITEMS = [
  { label: "Sobre", id: "sobre", icon: <PersonIcon fontSize="small" /> },
  { label: "Skills", id: "skills", icon: <CodeIcon fontSize="small" /> },
  { label: "Experiência", id: "experiencia", icon: <WorkIcon fontSize="small" /> },
  { label: "Formação", id: "formacao", icon: <SchoolIcon fontSize="small" /> },
  { label: "Certificados", id: "certificados", icon: <VerifiedIcon fontSize="small" /> },
  { label: "Extracurricular", id: "extra", icon: <EmojiEventsIcon fontSize="small" /> },
];

const EXPERIENCE = [
  {
    company: "Sicredi",
    role: "Assistente de Desenvolvimento de Software",
    period: "Mai. 2024 — Atual",
    location: "Campo Grande, MS",
    bullets: [
      "Desenvolvimento de automações e soluções backend com Python e UiPath, focadas em eficiência e escalabilidade.",
      "Arquitetura de integrações via APIs, substituindo automações legadas e aumentando a confiabilidade.",
    ],
    current: true,
  },
  {
    company: "Sicredi",
    role: "Assistente de Processos (RPA e Workflow)",
    period: "Fev. 2023 — Mai. 2024",
    location: "Campo Grande, MS",
    bullets: [
      "Implantação e padronização de RPA com UiPath e Power Automate (Desktop/Web).",
      "Migração de bots para integrações via API e estruturação da base técnica.",
    ],
  },
  {
    company: "Sicredi",
    role: "Desenvolvedor Full Stack",
    period: "Jun. 2021 — Fev. 2023",
    location: "Campo Grande, MS",
    bullets: [
      "Desenvolvimento de sistemas internos, dashboards e indicadores (Power BI), atuando em backend e frontend.",
    ],
  },
  {
    company: "Sicredi",
    role: "Desenvolvedor Full Stack — Estágio",
    period: "Set. 2019 — Jun. 2021",
    location: "Campo Grande, MS",
    bullets: [
      "Desenvolvimento de aplicação web com React + Node.js e apoio a dados e dashboards.",
    ],
  },
];

const SKILLS = [
  {
    category: "Back-end",
    color: ACCENT,
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Node.js", "Python", "Go"],
  },
  {
    category: "Front-end",
    color: "#FF6B9D",
    items: ["React", "React Native", "HTML5", "CSS3", "SASS", "LESS"],
  },
  {
    category: "Databases",
    color: "#FFD166",
    items: ["SQL", "PL/SQL", "Oracle", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    color: "#06D6A0",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Git"],
  },
  {
    category: "Arquitetura",
    color: ACCENT2,
    items: ["Clean Code", "SOLID", "Software Architecture", "JUnit", "Mockito"],
  },
  {
    category: "Metodologias",
    color: "#FF9F1C",
    items: ["Scrum", "Kanban", "Agile", "UiPath", "Power Automate"],
  },
];

const EDUCATION = [
  {
    institution: "UFMS",
    full: "Universidade Federal de Mato Grosso do Sul",
    degree: "Bacharelado em Engenharia de Software",
    period: "Mar. 2019 — Dez. 2025",
    note: "Ênfase em princípios de engenharia de software, arquitetura e desenvolvimento backend.",
  },
  {
    institution: "IFMS",
    full: "Instituto Federal de Mato Grosso do Sul",
    degree: "Técnico em Informática",
    period: "Jan. 2014 — Jan. 2018",
    note: "Formação técnica com ênfase em programação e sistemas de banco de dados.",
  },
];

const CERTS = [
  { name: "AWS Cloud Practitioner", platform: "Amazon Web Services", year: "2024", color: "#FF9900" },
  { name: "Docker & Kubernetes", platform: "Udemy", year: "2023", color: "#A435F0" },
  { name: "Spring Boot Avançado", platform: "Udemy", year: "2023", color: "#A435F0" },
  { name: "Clean Architecture", platform: "Udemy", year: "2022", color: "#A435F0" },
  { name: "Python para Automação", platform: "Alura", year: "2023", color: "#00C86F" },
  { name: "UiPath Developer", platform: "UiPath Academy", year: "2023", color: "#FA4616" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, direction = "up" }) {
  const [ref, visible] = useInView();
  const transforms = { up: "translateY(32px)", left: "translateX(-32px)", right: "translateX(32px)", none: "none" };
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

function SectionLabel({ children }) {
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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [drawer, setDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          {NAV_ITEMS.map(({ label, id, icon }) => (
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
                {icon}
                {label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

function HeroSection() {
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
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <Box sx={{ position: "absolute", top: "20%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`, zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT2}18 0%, transparent 70%)`, zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 760 }}>
          <Box
            sx={{
              display: "inline-flex", alignItems: "center", gap: 1,
              px: 2, py: 0.75, mb: 3,
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
              display: "flex", flexWrap: "wrap", gap: 2,
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
                  display: "flex", alignItems: "center", gap: 1,
                  px: 2.5, py: 1.25,
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

function SkillsSection() {
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

function ExperienceSection() {
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

function EducationSection() {
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
                    px: 2, py: 0.5, mb: 2,
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

function CertsSection() {
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
                    width: 44, height: 44, borderRadius: "10px",
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
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

function ExtraSection() {
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
                width: 56, height: 56, borderRadius: "12px",
                background: "rgba(255,200,0,0.12)",
                border: "1px solid rgba(255,200,0,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <PrecisionManufacturingIcon sx={{ color: "#FFD166", fontSize: 26 }} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, alignItems: "center", mb: 1 }}>
                <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#FFD166" }}>
                  Equipe de Robótica — IFMS
                </Typography>
                <Chip label="2014 — 2018" size="small" sx={{ bgcolor: "rgba(255,200,0,0.1)", color: "#FFD166", border: "1px solid rgba(255,200,0,0.2)", fontSize: "0.72rem", height: 22 }} />
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

function Footer() {
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertsSection />
      <ExtraSection />
      <Footer />
    </ThemeProvider>
  );
}
