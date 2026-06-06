export const SHOW_CERTS = false;

export const CONTACT = {
  email: "victorantoniovicente@gmail.com",
  github: "https://github.com/victoravicente",
  linkedin: "https://www.linkedin.com/in/victor-0-vicente/",
  year: new Date().getFullYear(),
};

export const SKILL_LAYERS = [
  {
    layer: "LAYER_01",
    category: "BACKEND",
    icon: "dns",
    items: [
      { name: "Java / Spring Boot", level: 90 },
      { name: "Python / Django", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    layer: "LAYER_02",
    category: "FRONTEND",
    icon: "code",
    items: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 82 },
    ],
  },
  {
    layer: "LAYER_03",
    category: "INFRA & DADOS",
    icon: "cloud",
    items: [
      { name: "UiPath / Power Automate", level: 85 },
      { name: "HashiCorp Vault / Consul", level: 82 },
      { name: "Databricks / SQL", level: 80 },
      { name: "Grafana", level: 79 },
      { name: "Docker / Kubernetes", level: 78 },
    ],
  },
];

export const CERTS = [
  { name: "AWS Cloud Practitioner", platform: "Amazon Web Services", year: "2024" },
  { name: "Docker & Kubernetes", platform: "Udemy", year: "2023" },
  { name: "Spring Boot Avançado", platform: "Udemy", year: "2023" },
  { name: "Clean Architecture", platform: "Udemy", year: "2022" },
  { name: "Python para Automação", platform: "Alura", year: "2023" },
  { name: "UiPath Developer", platform: "UiPath Academy", year: "2023" },
];
