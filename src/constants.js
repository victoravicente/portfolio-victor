export const PERSONAL = {
  name: "Victor Vicente",
  brand: "VICTOR_VICENTE",
  title: "Engenheiro de Software",
  subtitle: "INTEGRAÇÕES · AUTOMAÇÃO · BACKEND",
  location: "Campo Grande, MS · Brasil",
  timezone: "UTC-4",
  email: "victorantoniovicente@gmail.com",
  github: "https://github.com/victoravicente",
  linkedin: "https://www.linkedin.com/in/victor-0-vicente/",
  status: "DISPONÍVEL PARA OPORTUNIDADES",
  year: new Date().getFullYear(),
};

export const NAV_ITEMS = [
  { label: "Sobre", id: "sobre" },
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projetos" },
  { label: "Experiência", id: "experiencia" },
  { label: "Formação", id: "formacao" },
  { label: "Extra", id: "extra" },
];

export const ABOUT = {
  headline: "Engenheiro de software com quase sete anos construindo integrações, automações e portais em ambiente corporativo.",
  paragraphs: [
    "Desenvolvedor backend com trajetória em uma cooperativa financeira — de portais web a gateways de integração corporativa. Comecei como estagiário em aplicações fullstack com ReactJS e Node.js, passei por dados e BI, e migrei gradualmente automações de RPA para sistemas integrados por APIs.",
    "Hoje trabalho com Java/Spring Boot e Python/Django no desenvolvimento de soluções de integração e orquestração de processos em produção. Graduando em Engenharia de Software pela UFMS, com formação técnica em Informática pelo IFMS.",
  ],
  tags: [
    "INTEGRAÇÃO DE APIS",
    "ORQUESTRAÇÃO",
    "AUTOMAÇÃO",
    "BACKEND",
  ],
  focusAreas: [
    {
      id: "01",
      title: "Arquitetura de Integração",
      description: "Design de gateways corporativos, orquestração de processos multi-etapa e encapsulamento de fluxos complexos em chamadas HTTP atômicas.",
    },
    {
      id: "02",
      title: "Migração RPA → APIs",
      description: "Evolução de automações baseadas em scripts de tela para sistemas integrados por APIs REST, aumentando confiabilidade e rastreabilidade.",
    },
    {
      id: "03",
      title: "Observabilidade & Segurança",
      description: "Implementação de mTLS, rotação de segredos via Vault, configuração distribuída via Consul e métricas com Micrometer.",
    },
  ],
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
      { name: "Docker / Kubernetes", level: 78 },
      { name: "HashiCorp Vault / Consul", level: 82 },
      { name: "Databricks / SQL", level: 80 },
      { name: "UiPath / Power Automate", level: 85 },
    ],
  },
];

export const META_COGNITION = [
  {
    id: "01",
    title: "Pensamento Sistêmico",
    description: "Visualizar software como ecossistemas interconectados, onde efeitos de segunda ordem ditam a viabilidade a longo prazo das integrações.",
  },
  {
    id: "02",
    title: "Migração Incremental",
    description: "Substituir automações legadas por APIs de forma gradual, preservando continuidade operacional e reduzindo risco em ambientes de produção.",
  },
  {
    id: "03",
    title: "Documentação Técnica",
    description: "Priorizar registros escritos precisos e contratos OpenAPI para estabelecer fontes permanentes de verdade entre sistemas.",
  },
  {
    id: "04",
    title: "Colaboração Multidisciplinar",
    description: "Atuar como ponto focal entre times de processos, desenvolvimento e negócio para alinhar automações com necessidades reais.",
  },
];

export const PROJECTS = [
  {
    id: "01",
    name: "API Gateway Corporativo",
    path: "~/projetos/api-gateway",
    stack: "Java 21 · Spring Boot 3 · Vault · Consul · mTLS · Micrometer",
    description:
      "Gateway centralizado entre sistemas internos e APIs externas. Gerencia autenticação mTLS, rotação de segredos via Vault, configuração distribuída via Consul e observabilidade via Actuator e Micrometer.",
    highlight: "Elimina replicação de lógica de autenticação em cada consumidor.",
  },
  {
    id: "02",
    name: "Orquestrador de Processos",
    path: "~/projetos/integra-fluid",
    stack: "Python · Django · REST APIs · Vault · FLUID BPM · Jira · OCR",
    description:
      "Camada de orquestração que integra a plataforma BPM interna com APIs externas via Gateway. Encapsula fluxos multi-etapa em chamadas HTTP únicas e atômicas.",
    highlight: "Cada execução registrada em banco para rastreamento e métricas.",
  },
  {
    id: "03",
    name: "Portal de Propensão",
    path: "~/projetos/portal-propensao",
    stack: "Next.js 14 · TypeScript · Tailwind · Databricks · LLM",
    description:
      "Portal interno para gestores de carteira. Consome tabela analítica do Databricks com scores de propensão, cache server-side com TTL de 24h e paginação em batches de 3.000 registros.",
    highlight: "Integração com agente de IA para análise de crédito sob demanda.",
  },
  {
    id: "04",
    name: "Portal de Base de Conhecimento",
    path: "~/projetos/knowledge-base",
    stack: "ReactJS · Node.js",
    description:
      "Primeira aplicação desenvolvida na cooperativa: repositório centralizado de documentos, relatórios e informações relevantes para equipes internas.",
    highlight: "Desenvolvido durante estágio — marco inicial da trajetória.",
  },
];

export const EXPERIENCE = [
  {
    company: "Sicredi Campo Grande MS",
    role: "Assistente de Desenvolvimento de Software",
    period: "Mai. 2024 — Atual",
    path: "~/usr/local/chronos/2024-presente",
    location: "Campo Grande, MS",
    bullets: [
      "Desenvolvimento de automações e integrações utilizando Python, Java/Spring Boot e UiPath.",
      "Participação em projetos de API Gateway corporativo, orquestração de processos de negócio e portal analítico para gestores de carteira.",
    ],
    current: true,
  },
  {
    company: "Sicredi Campo Grande MS",
    role: "Assistente de Processos",
    period: "Fev. 2023 — Mai. 2024",
    path: "~/usr/local/chronos/2023-2024",
    location: "Campo Grande, MS",
    bullets: [
      "Ponto focal de desenvolvimento de RPA e Workflow no time de processos.",
      "Evolução das automações de scripts de tela para sistemas integrados por APIs REST.",
    ],
  },
  {
    company: "Sicredi Campo Grande MS",
    role: "Desenvolvedor Full Stack",
    period: "Jun. 2021 — Fev. 2023",
    path: "~/usr/local/chronos/2021-2023",
    location: "Campo Grande, MS",
    bullets: [
      "Análise de dados e dashboards em Power BI; desenvolvimento de automações em UiPath e Power Automate.",
    ],
  },
  {
    company: "Sicredi Campo Grande MS",
    role: "Estagiário Desenvolvedor Full Stack",
    period: "Set. 2019 — Jun. 2021",
    path: "~/usr/local/chronos/2019-2021",
    location: "Campo Grande, MS",
    bullets: [
      "Desenvolvimento de portal de base de conhecimento interno em ReactJS e Node.js.",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "UFMS",
    full: "Universidade Federal de Mato Grosso do Sul",
    degree: "Bacharelado em Engenharia de Software",
    period: "2019 — 2025",
    note: "Ênfase em princípios de engenharia de software, arquitetura e desenvolvimento backend.",
    tags: ["ENGENHARIA DE SOFTWARE", "ARQUITETURA", "BACKEND"],
  },
  {
    institution: "IFMS",
    full: "Instituto Federal de Mato Grosso do Sul",
    degree: "Técnico em Informática",
    period: "2014 — 2018",
    note: "Formação técnica com ênfase em programação e sistemas de banco de dados.",
    tags: ["INFORMÁTICA", "PROGRAMAÇÃO", "BANCO DE DADOS"],
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

export const EXTRA = {
  title: "Equipe de Robótica — IFMS",
  period: "2014 — 2018",
  location: "Instituto Federal de Mato Grosso do Sul · Campo Grande, MS",
  path: "~/extracurricular/robotica",
  bullets: [
    "Participação no desenvolvimento e programação de projetos de robótica durante o ensino técnico.",
    "Colaboração com equipes multidisciplinares no desenvolvimento, construção e testes de sistemas robóticos.",
  ],
};
