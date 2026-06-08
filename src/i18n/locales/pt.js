export const pt = {
  personal: {
    name: "Victor Vicente",
    brand: "VICTOR_VICENTE",
    title: "Engenheiro de Software",
    status: "DISPONÍVEL PARA OPORTUNIDADES",
  },
  nav: [
    { label: "Sobre", id: "sobre" },
    { label: "Skills", id: "skills" },
    { label: "Projetos", id: "projetos" },
    { label: "Experiência", id: "experiencia" },
    { label: "Formação", id: "formacao" },
    { label: "Extra", id: "extra" },
  ],
  ui: {
    contact: "Contato",
    viewProjects: "Ver Projetos",
    downloadCv: "Baixar CV",
    downloadCvPdf: "CV PDF",
    downloadCvMobile: "Baixar CV (PDF)",
    generatingPdf: "Gerando PDF...",
    downloadCvRetry: "Tentar novamente",
    initiateContact: "Iniciar Contato",
    footerCta: "Vamos trabalhar juntos.",
    footerLedger: "REGISTRO_CRIPTOGRAFADO",
    langToggle: "EN",
    langAria: "Alternar para inglês",
    themeLight: "Modo claro",
    themeDark: "Modo escuro",
    themeAriaLight: "Ativar modo claro",
    themeAriaDark: "Ativar modo escuro",
    activeNode: "NÓ ATIVO",
    archived: "ARQUIVADO",
    eofLedger: "[EOF] // FIM DO REGISTRO",
    operational: "STATUS: OPERACIONAL",
    awaitingDirectives: "Aguardando novas diretrizes",
    logFile: "ARQUIVO_LOG",
    statusOnline: "ONLINE // PRONTO_PARA_TRABALHO",
    metadataPath: "/sistema/agentes/victor/metadata.sys",
    terminalPath: "~/projetos/victor_vicente",
    apisRest: "APIS_REST",
    aboutTitle: "SOBRE",
    aboutSubtitle: "O ENGENHEIRO",
    focusAreasTitle: "ÁREAS_DE_FOCO_TÉCNICO",
    metaCognitionLabel: "META_COGNIÇÃO",
    metaCognitionTitle: "Modelos Mentais",
    metaCognitionSubtitle: "& Competências",
    metaCognitionIntro:
      "A proficiência técnica constrói a estrutura, mas os frameworks metacognitivos definem sua integridade. Paradigmas operacionais para navegar restrições complexas de engenharia.",
    extraSideQuests: "// MISSÕES PARALELAS",
    extraContextPath: "~/contexto.log",
    extraRobotics: "Robótica Educacional",
    extraRoboticsDesc: "Primeiro contato com programação de hardware e trabalho em equipe técnica.",
    extraCompetitions: "Competições",
    extraCompetitionsDesc: "Desenvolvimento, construção e testes de sistemas robóticos em eventos do IFMS.",
    labels: { status: "STATUS", class: "CLASSE", directive: "DIRETRIZ" },
  },
  terminal: [
    { cmd: "whoami", response: "victor_vicente", delay: 500 },
    { cmd: "cat perfil.json", response: "{ cargo: 'Engenheiro de Software', status: 'Disponível' }", delay: 800 },
    { cmd: "status", response: "[SISTEMA ONLINE] — Pronto para construir.", delay: 600 },
  ],
  about: {
    headline:
      "Engenheiro de software com mais de sete anos construindo integrações, automações e portais em ambiente corporativo.",
    paragraphs: [
      "Desenvolvedor backend com trajetória em uma cooperativa financeira — de portais web a gateways de integração corporativa. Comecei como estagiário em aplicações fullstack com ReactJS e Node.js, passei por dados e BI, e migrei gradualmente automações de RPA para sistemas integrados por APIs.",
      "Hoje trabalho com Java/Spring Boot e Python/Django no desenvolvimento de soluções de integração e orquestração de processos em produção. Graduando em Engenharia de Software pela UFMS, com formação técnica em Informática pelo IFMS.",
    ],
    tags: ["INTEGRAÇÃO DE APIS", "ORQUESTRAÇÃO", "AUTOMAÇÃO", "BACKEND"],
    focusAreas: [
      {
        id: "01",
        title: "Arquitetura de Integração",
        description:
          "Design de gateways corporativos, orquestração de processos multi-etapa e encapsulamento de fluxos complexos em chamadas HTTP atômicas.",
      },
      {
        id: "02",
        title: "Migração RPA → APIs",
        description:
          "Evolução de automações baseadas em scripts de tela para sistemas integrados por APIs REST, aumentando confiabilidade e rastreabilidade.",
      },
      {
        id: "03",
        title: "Observabilidade & Segurança",
        description:
          "Implementação de mTLS, rotação de segredos via Vault, configuração distribuída via Consul e métricas com Micrometer.",
      },
    ],
  },
  sections: {
    skills: {
      path: "~/perfil/metricas.sh",
      title: "SKILLS // CAPACIDADE",
    },
    projects: {
      path: "~/projetos/registro.sh",
      title: "PROJETOS // ARQUIVO",
      subtitle:
        "Registro de implementações arquiteturais, integrações e portais desenvolvidos em ambiente corporativo.",
    },
    experience: {
      path: "> ./executar --alvo EXPERIÊNCIA // REGISTRO",
      title: "EXPERIÊNCIA",
      subtitle:
        "Registro histórico de implementações, integrações e automações em ambiente corporativo financeiro.",
    },
    education: {
      path: "~/registros/credenciais",
      title: "FORMAÇÃO // CREDENCIAIS",
      subtitle: "Registro imutável de formação acadêmica formal. Verificado e documentado.",
    },
    extra: {
      title: "EXTRACURRICULAR",
      subtitle:
        "Atividades desenvolvidas fora do escopo profissional principal — colaboração multidisciplinar e experimentação técnica.",
    },
  },
  metaCognition: [
    {
      id: "01",
      title: "Pensamento Sistêmico",
      description:
        "Visualizar software como ecossistemas interconectados, onde efeitos de segunda ordem ditam a viabilidade a longo prazo das integrações.",
    },
    {
      id: "02",
      title: "Migração Incremental",
      description:
        "Substituir automações legadas por APIs de forma gradual, preservando continuidade operacional e reduzindo risco em ambientes de produção.",
    },
    {
      id: "03",
      title: "Documentação Técnica",
      description:
        "Priorizar registros escritos precisos e contratos OpenAPI para estabelecer fontes permanentes de verdade entre sistemas.",
    },
    {
      id: "04",
      title: "Colaboração Multidisciplinar",
      description:
        "Atuar como ponto focal entre times de processos, desenvolvimento e negócio para alinhar automações com necessidades reais.",
    },
  ],
  projects: [
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
  ],
  experience: [
    {
      company: "Sicredi",
      role: "Desenvolvedor",
      period: "Mai. 2024 — Atual",
      path: "~/usr/local/chronos/2024-presente",
      bullets: [
        "Desenvolvimento de automações e integrações utilizando Python, Java/Spring Boot e UiPath.",
        "Participação em projetos de API Gateway corporativo, orquestração de processos de negócio e portal analítico para gestores de carteira.",
      ],
      current: true,
    },
    {
      company: "Sicredi",
      role: "Desenvolvedor",
      period: "Fev. 2023 — Mai. 2024",
      path: "~/usr/local/chronos/2023-2024",
      bullets: [
        "Ponto focal de desenvolvimento de RPA e Workflow no time de processos.",
        "Evolução das automações de scripts de tela para sistemas integrados por APIs REST.",
      ],
    },
    {
      company: "Sicredi",
      role: "Desenvolvedor",
      period: "Jun. 2021 — Fev. 2023",
      path: "~/usr/local/chronos/2021-2023",
      bullets: [
        "Análise de dados e dashboards em Power BI; desenvolvimento de automações em UiPath e Power Automate.",
      ],
    },
    {
      company: "Sicredi",
      role: "Desenvolvedor",
      period: "Set. 2019 — Jun. 2021",
      path: "~/usr/local/chronos/2019-2021",
      bullets: [
        "Desenvolvimento de portal de base de conhecimento interno em ReactJS e Node.js.",
      ],
    },
  ],
  education: [
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
  ],
  extra: {
    title: "Equipe de Robótica — IFMS",
    period: "2014 — 2018",
    location: "Instituto Federal de Mato Grosso do Sul",
    path: "~/extracurricular/robotica",
    bullets: [
      "Participação no desenvolvimento e programação de projetos de robótica durante o ensino técnico.",
      "Colaboração com equipes multidisciplinares no desenvolvimento, construção e testes de sistemas robóticos.",
    ],
  },
  resume: {
    filename: "Victor_Vicente_Curriculo.pdf",
    summary: "Resumo",
    experience: "Experiência Profissional",
    experienceSpan: "Set. 2019 — Atual · 6+ anos",
    projects: "Projetos",
    education: "Formação Acadêmica",
    skills: "Competências Técnicas",
    stackGroups: [
      { label: "Backend", items: ["Java 21", "Spring Boot 3", "Python", "Django", "Node.js"] },
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      {
        label: "Dados & Infra",
        items: ["Databricks", "SQL", "Docker", "Kubernetes", "Vault", "Consul", "Grafana"],
      },
      { label: "Ferramentas", items: ["Git", "REST APIs", "Swagger/OpenAPI", "UiPath", "Power Automate"] },
    ],
  },
};
