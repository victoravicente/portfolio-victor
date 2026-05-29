import { createTheme } from "@mui/material";

// Dark Academia Digital Theme Colors
export const ACCENT = "#7ac47a";           // Verde-hortelã
export const ACCENT2 = "#c97e6b";          // Terracota
export const VERDE_FLORESTA = "#1a3d2e";   // Verde-floresta escuro
export const CREME = "#e8dcc8";            // Creme/marfim
export const CREME_ESCURO = "#a69b8a";    // Creme mais escuro para text secondary

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: ACCENT },
    secondary: { main: ACCENT2 },
    background: { default: "#0d1f1a", paper: "#132b24" },
    text: { primary: CREME, secondary: CREME_ESCURO },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { 
      fontFamily: "'Playfair Display', serif", 
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    h2: { 
      fontFamily: "'Playfair Display', serif", 
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
    },
    h3: { 
      fontFamily: "'Playfair Display', serif", 
      fontWeight: 700,
    },
    h4: { 
      fontFamily: "'DM Sans', sans-serif", 
      fontWeight: 600 
    },
    h5: { 
      fontFamily: "'DM Sans', sans-serif", 
      fontWeight: 600 
    },
    h6: { 
      fontFamily: "'DM Sans', sans-serif", 
      fontWeight: 600 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1f1a; }
        ::-webkit-scrollbar-thumb { background: ${ACCENT}66; border-radius: 4px; }
        * { box-sizing: border-box; }
        ::selection { background: ${ACCENT}40; color: #0d1f1a; }
      `,
    },
  },
});

export const NAV_ITEMS = [
  { label: "Sobre", id: "sobre" },
  { label: "Skills", id: "skills" },
  { label: "Experiência", id: "experiencia" },
  { label: "Formação", id: "formacao" },
  { label: "Certificados", id: "certificados" },
  { label: "Extracurricular", id: "extra" },
];

export const EXPERIENCE = [
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

export const SKILLS = [
  {
    category: "Back-end",
    color: ACCENT,
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Node.js", "Python", "Go"],
  },
  {
    category: "Front-end",
    color: "#d97a7a",
    items: ["React", "React Native", "HTML5", "CSS3", "SASS", "LESS"],
  },
  {
    category: "Databases",
    color: "#d4a574",
    items: ["SQL", "PL/SQL", "Oracle", "MongoDB"],
  },
  {
    category: "DevOps & Cloud",
    color: "#6dd97a",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Git"],
  },
  {
    category: "Arquitetura",
    color: ACCENT2,
    items: ["Clean Code", "SOLID", "Software Architecture", "JUnit", "Mockito"],
  },
  {
    category: "Metodologias",
    color: "#d4a574",
    items: ["Scrum", "Kanban", "Agile", "UiPath", "Power Automate"],
  },
];

export const EDUCATION = [
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

export const CERTS = [
  { name: "AWS Cloud Practitioner", platform: "Amazon Web Services", year: "2024", color: "#FF9900" },
  { name: "Docker & Kubernetes", platform: "Udemy", year: "2023", color: "#A435F0" },
  { name: "Spring Boot Avançado", platform: "Udemy", year: "2023", color: "#A435F0" },
  { name: "Clean Architecture", platform: "Udemy", year: "2022", color: "#A435F0" },
  { name: "Python para Automação", platform: "Alura", year: "2023", color: "#00C86F" },
  { name: "UiPath Developer", platform: "UiPath Academy", year: "2023", color: "#FA4616" },
];
