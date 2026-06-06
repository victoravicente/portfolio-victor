# portfolio-victor

Portfólio pessoal de Victor Vicente. SPA em React com estética **Gothic Tech Terminal Noir** — interface editorial com elementos de terminal, pensada para apresentar experiência, projetos e stack de forma estruturada.

**Produção:** [victoravicente.github.io/portfolio-victor](https://victoravicente.github.io/portfolio-victor/)

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Runtime | React 18 |
| Build | Vite 8 |
| Estilização | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Deploy | GitHub Pages (`gh-pages`) |
| Linguagem | JavaScript (JSX), sem TypeScript |

Não há roteamento (React Router), gerenciamento de estado global ou biblioteca de UI. O projeto é intencionalmente enxuto: componentes funcionais, dados estáticos e CSS utilitário.

---

## Design System

O visual segue o sistema definido em `new_desing/gothic_tech_terminal_noir/DESIGN.md` e `new_desing/hermes_agent_portfolio_system/DESIGN.md`. Os HTMLs em `new_desing/` são referências estáticas; a implementação React está em `src/`.

### Paleta

| Token | Valor | Uso |
|-------|-------|-----|
| `background` | `#0d1f1a` | Superfície base |
| `primary` / `ivory` | `#e8dcc8` | Texto principal |
| `tertiary` / `mint` | `#9effd9` | Destaques, terminal, estados ativos |
| `accent` / `cta` | `#a65d4a` | Ações secundárias, tags |
| `gothic` | `#1d3d30` | Bordas estruturais |
| `on-surface-variant` | `#6b7a74` | Metadados e texto secundário |
| `surface-container` | `#11231e` | Cards e painéis |
| `terminal-bg` | `#0a1510` | Blocos de terminal |

### Tipografia

- **Playfair Display** — títulos e headlines editoriais
- **DM Sans** — corpo, navegação e labels
- **JetBrains Mono** — paths de terminal, código e metadados

### Princípios de layout

- Grid de 12 colunas no desktop, colapsando para coluna única no mobile
- Profundidade por bordas e camadas tonais, sem sombras pesadas ou glassmorphism
- Raio de borda de 2–4px; containers grandes com cantos retos
- Overlay de ruído fixo (`body::before`) para textura de CRT/pergaminho
- Marcadores de lista no estilo `[01]`, `>` e paths `~/...`

Tokens e utilitários customizados ficam em `tailwind.config.js` e `src/index.css`.

---

## Estrutura do projeto

```
portfolio-victor/
├── index.html
├── vite.config.js          # base path para GitHub Pages
├── tailwind.config.js      # tokens de cor, tipografia e espaçamento
├── postcss.config.js
├── new_desing/             # referências de design (HTML estático + DESIGN.md)
├── meu_curriculo.md        # fonte de conteúdo biográfico
└── src/
    ├── main.jsx
    ├── App.jsx             # composição das seções
    ├── constants.js        # conteúdo estático (nav, experiência, projetos, etc.)
    ├── index.css           # imports, ruído, scrollbar, classes utilitárias
    ├── hooks/
    │   └── useInView.js    # Intersection Observer para animações de entrada
    └── components/
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── SkillsSection.jsx
        ├── ProjectsSection.jsx
        ├── ExperienceSection.jsx
        ├── EducationSection.jsx
        ├── CertsSection.jsx
        ├── ExtraSection.jsx
        ├── Footer.jsx
        ├── FadeIn.jsx
        ├── SectionHeader.jsx
        ├── TerminalCard.jsx
        └── SkillBar.jsx
```

### Fluxo de dados

Todo o conteúdo exibido (textos, experiências, projetos, certificações) vive em `src/constants.js`. Os componentes são majoritariamente presentacionais: importam constantes e renderizam markup. Para alterar biografia ou experiência, edite esse arquivo — não é necessário mexer na estrutura dos componentes.

### Componentes compartilhados

| Componente | Responsabilidade |
|------------|------------------|
| `SectionHeader` | Cabeçalho de seção com path terminal, título e status opcional |
| `TerminalCard` | Container com barra superior estilo janela de terminal |
| `SkillBar` | Barra de progresso animada via `useInView` |
| `FadeIn` | Wrapper com fade + translate disparado por Intersection Observer |

### Seções da página

| ID | Componente | Conteúdo |
|----|------------|----------|
| `#sobre` | `HeroSection` | Bio, metadados do agente, terminal com digitação |
| `#skills` | `SkillsSection` | Camadas de stack + meta-cognição |
| `#projetos` | `ProjectsSection` | Projetos corporativos em cards terminal |
| `#experiencia` | `ExperienceSection` | Timeline estilo ledger |
| `#formacao` | `EducationSection` | Formação acadêmica |
| — | `CertsSection` | Certificações (abaixo de formação) |
| `#extra` | `ExtraSection` | Atividades extracurriculares |
| `#contato` | `Footer` | Links e navegação |

A `Navbar` rastreia a seção visível via `scroll` + `getBoundingClientRect` e faz smooth scroll para os IDs definidos em `NAV_ITEMS`.

---

## Scripts

```bash
npm run dev       # servidor de desenvolvimento (Vite)
npm run build     # build de produção em dist/
npm run preview   # preview local do build
npm run deploy    # publica dist/ no GitHub Pages
```

### Deploy

O `vite.config.js` define `base: '/portfolio-victor/'` para servir corretamente no subpath do GitHub Pages. O script `deploy` usa `gh-pages -d dist`.

---

## Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm

### Adicionar conteúdo

1. Editar `src/constants.js` com os novos dados
2. Se for uma seção nova, criar o componente em `src/components/` e registrá-lo em `App.jsx`
3. Incluir o item em `NAV_ITEMS` se precisar de navegação

### Tailwind CSS 4

A configuração usa a sintaxe v4 em `src/index.css`:

```css
@import "tailwindcss";
@config "../tailwind.config.js";
```

Classes utilitárias que não dependem do config (`.section-container`, `.btn-primary`, etc.) estão definidas diretamente no CSS para evitar conflitos com `@apply` e tokens customizados.

### Referências de design

A pasta `new_desing/` contém mockups HTML por seção (`hermes_agent_*_noir/code.html`) e documentação de tokens (`DESIGN.md`). Servem como referência visual durante refatorações; não são servidos em produção.

---

## Licença

Uso pessoal. Código aberto para consulta e referência.
