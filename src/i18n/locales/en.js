export const en = {
  personal: {
    name: "Victor Vicente",
    brand: "VICTOR_VICENTE",
    title: "Software Engineer",
    status: "OPEN TO OPPORTUNITIES",
  },
  nav: [
    { label: "About", id: "sobre" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projetos" },
    { label: "Experience", id: "experiencia" },
    { label: "Education", id: "formacao" },
    { label: "Extra", id: "extra" },
  ],
  ui: {
    contact: "Contact",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    downloadCvPdf: "CV PDF",
    downloadCvMobile: "Download CV (PDF)",
    generatingPdf: "Generating PDF...",
    downloadCvRetry: "Try again",
    initiateContact: "Get in Touch",
    footerCta: "Let's work together.",
    footerLedger: "ENCRYPTED_LEDGER",
    langToggle: "PT",
    langAria: "Switch to Portuguese",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    themeAriaLight: "Enable light mode",
    themeAriaDark: "Enable dark mode",
    activeNode: "ACTIVE NODE",
    archived: "ARCHIVED",
    eofLedger: "[EOF] // END OF LEDGER",
    operational: "STATUS: OPERATIONAL",
    awaitingDirectives: "Awaiting new directives",
    logFile: "LOG_FILE",
    statusOnline: "ONLINE // READY_FOR_WORK",
    metadataPath: "/system/agents/victor/metadata.sys",
    terminalPath: "~/projects/victor_vicente",
    apisRest: "REST_APIS",
    aboutTitle: "ABOUT",
    aboutSubtitle: "THE ENGINEER",
    focusAreasTitle: "TECHNICAL_FOCUS_AREAS",
    metaCognitionLabel: "META_COGNITION",
    metaCognitionTitle: "Mental Models",
    metaCognitionSubtitle: "& Competencies",
    metaCognitionIntro:
      "Technical proficiency builds the structure, but metacognitive frameworks define its integrity. Operational paradigms for navigating complex engineering constraints.",
    extraSideQuests: "// SIDE QUESTS",
    extraContextPath: "~/context.log",
    extraRobotics: "Educational Robotics",
    extraRoboticsDesc: "First exposure to hardware programming and technical teamwork.",
    extraCompetitions: "Competitions",
    extraCompetitionsDesc: "Development, construction and testing of robotic systems at IFMS events.",
    skillLevelBeginner: "Beginner",
    skillLevelIntermediate: "Intermediate",
    skillLevelAdvanced: "Advanced",
    labels: { status: "STATUS", class: "CLASS", directive: "DIRECTIVE" },
  },
  terminal: [
    { cmd: "whoami", response: "victor_vicente", delay: 500 },
    { cmd: "cat profile.json", response: "{ role: 'Software Engineer', status: 'Available' }", delay: 800 },
    { cmd: "status", response: "[SYSTEM ONLINE] — Ready to build.", delay: 600 },
  ],
  about: {
    headline:
      "Software engineer with more than seven years building integrations, automations and portals in a corporate environment.",
    paragraphs: [
      "Backend developer with a trajectory at a financial cooperative — from web portals to corporate integration gateways. Started as an intern on fullstack applications with ReactJS and Node.js, moved through data and BI, and gradually migrated RPA automations to API-integrated systems.",
      "Today I work with Java/Spring Boot and Python/Django developing integration and process orchestration solutions in production. Software Engineering undergraduate at UFMS, with a technical degree in IT from IFMS.",
    ],
    tags: ["API INTEGRATION", "ORCHESTRATION", "AUTOMATION", "BACKEND"],
    focusAreas: [
      {
        id: "01",
        title: "Integration Architecture",
        description:
          "Design of corporate gateways, multi-step process orchestration and encapsulation of complex flows into atomic HTTP calls.",
      },
      {
        id: "02",
        title: "RPA → API Migration",
        description:
          "Evolution from screen-script automations to REST API-integrated systems, increasing reliability and traceability.",
      },
      {
        id: "03",
        title: "Observability & Security",
        description:
          "Implementation of mTLS, secret rotation via Vault, distributed configuration via Consul and metrics with Micrometer.",
      },
    ],
  },
  sections: {
    skills: {
      path: "~/profile/metrics.sh",
      title: "SKILLS // CAPACITY",
    },
    projects: {
      path: "~/projects/registry.sh",
      title: "PROJECTS // ARCHIVE",
      subtitle:
        "Record of architectural implementations, integrations and portals built in a corporate environment.",
    },
    experience: {
      path: "> ./execute --target EXPERIENCE // LEDGER",
      title: "EXPERIENCE",
      subtitle:
        "Historical record of implementations, integrations and automations in a financial corporate environment.",
    },
    education: {
      path: "~/records/credentials",
      title: "EDUCATION // CREDENTIALS",
      subtitle: "Immutable record of formal academic training. Verified and documented.",
    },
    extra: {
      title: "EXTRACURRICULAR",
      subtitle:
        "Activities outside the main professional scope — multidisciplinary collaboration and technical experimentation.",
    },
  },
  metaCognition: [
    {
      id: "01",
      title: "Systems Thinking",
      description:
        "Viewing software as interconnected ecosystems where second-order effects dictate long-term integration viability.",
    },
    {
      id: "02",
      title: "Incremental Migration",
      description:
        "Replacing legacy automations with APIs gradually, preserving operational continuity and reducing risk in production.",
    },
    {
      id: "03",
      title: "Technical Documentation",
      description:
        "Prioritizing precise written records and OpenAPI contracts to establish permanent sources of truth between systems.",
    },
    {
      id: "04",
      title: "Multidisciplinary Collaboration",
      description:
        "Acting as a focal point between process, development and business teams to align automations with real needs.",
    },
  ],
  projects: [
    {
      id: "01",
      name: "Corporate API Gateway",
      path: "~/projects/api-gateway",
      stack: "Java 21 · Spring Boot 3 · Vault · Consul · mTLS · Micrometer",
      description:
        "Centralized gateway between internal systems and external APIs. Manages mTLS authentication, secret rotation via Vault, distributed configuration via Consul and observability via Actuator and Micrometer.",
      highlight: "Eliminates authentication logic replication in each consumer.",
    },
    {
      id: "02",
      name: "Process Orchestrator",
      path: "~/projects/integra-fluid",
      stack: "Python · Django · REST APIs · Vault · FLUID BPM · Jira · OCR",
      description:
        "Orchestration layer integrating the internal BPM platform with external APIs via Gateway. Encapsulates multi-step flows into single atomic HTTP calls.",
      highlight: "Each execution logged in database for tracking and metrics.",
    },
    {
      id: "03",
      name: "Propensity Portal",
      path: "~/projects/propensity-portal",
      stack: "Next.js 14 · TypeScript · Tailwind · Databricks · LLM",
      description:
        "Internal portal for portfolio managers. Consumes Databricks analytical table with propensity scores, server-side cache with 24h TTL and pagination in 3,000-record batches.",
      highlight: "AI agent integration for on-demand credit analysis.",
    },
    {
      id: "04",
      name: "Knowledge Base Portal",
      path: "~/projects/knowledge-base",
      stack: "ReactJS · Node.js",
      description:
        "First application developed at the cooperative: centralized repository of documents, reports and relevant information for internal teams.",
      highlight: "Built during internship — starting milestone of the journey.",
    },
  ],
  experience: [
    {
      company: "Sicredi",
      role: "Developer",
      period: "May 2024 — Present",
      path: "~/usr/local/chronos/2024-present",
      bullets: [
        "Development of automations and integrations using Python, Java/Spring Boot and UiPath.",
        "Participation in corporate API Gateway, business process orchestration and analytical portal projects for portfolio managers.",
      ],
      current: true,
    },
    {
      company: "Sicredi",
      role: "Developer",
      period: "Feb. 2023 — May 2024",
      path: "~/usr/local/chronos/2023-2024",
      bullets: [
        "Focal point for RPA and Workflow development in the processes team.",
        "Evolution from screen-script automations to REST API-integrated systems.",
      ],
    },
    {
      company: "Sicredi",
      role: "Developer",
      period: "Jun. 2021 — Feb. 2023",
      path: "~/usr/local/chronos/2021-2023",
      bullets: [
        "Data analysis and Power BI dashboards; automation development with UiPath and Power Automate.",
      ],
    },
    {
      company: "Sicredi",
      role: "Developer",
      period: "Sep. 2019 — Jun. 2021",
      path: "~/usr/local/chronos/2019-2021",
      bullets: [
        "Development of internal knowledge base portal with ReactJS and Node.js.",
      ],
    },
  ],
  education: [
    {
      institution: "UFMS",
      full: "Federal University of Mato Grosso do Sul",
      degree: "Bachelor's in Software Engineering",
      period: "2019 — 2025",
      note: "Focus on software engineering principles, architecture and backend development.",
      tags: ["SOFTWARE ENGINEERING", "ARCHITECTURE", "BACKEND"],
    },
    {
      institution: "IFMS",
      full: "Federal Institute of Mato Grosso do Sul",
      degree: "IT Technician",
      period: "2014 — 2018",
      note: "Technical training focused on programming and database systems.",
      tags: ["INFORMATION TECHNOLOGY", "PROGRAMMING", "DATABASES"],
    },
  ],
  extra: {
    title: "Robotics Team — IFMS",
    period: "2014 — 2018",
    location: "Federal Institute of Mato Grosso do Sul",
    path: "~/extracurricular/robotics",
    bullets: [
      "Participation in robotics project development and programming during technical education.",
      "Collaboration with multidisciplinary teams in development, construction and testing of robotic systems.",
    ],
  },
  resume: {
    filename: "Victor_Vicente_Resume.pdf",
    summary: "Summary",
    experience: "Professional Experience",
    experienceSpan: "Sep. 2019 — Present · 6+ years",
    projects: "Projects",
    education: "Education",
    skills: "Technical Skills",
    stackGroups: [
      { label: "Backend", items: ["Java 21", "Spring Boot 3", "Python", "Django", "Node.js"] },
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      {
        label: "Data & Infra",
        items: ["Databricks", "SQL", "Docker", "Kubernetes", "Vault", "Consul", "Grafana"],
      },
      { label: "Tools", items: ["Git", "REST APIs", "Swagger/OpenAPI", "UiPath", "Power Automate"] },
    ],
  },
};
