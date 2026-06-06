# Victor Vicente

**Engenheiro de Software**
Campo Grande, MS, Brasil

[GitHub](https://github.com/victoravicente) · [LinkedIn](https://www.linkedin.com/in/victor-0-vicente/) · victorantoniovicente@gmail.com

---

Desenvolvedor backend com quase sete anos de experiência em uma cooperativa financeira, construindo desde portais web até gateways de integração corporativa. Comecei como estagiário desenvolvendo aplicações fullstack em ReactJS e Node.js, passei por dados e BI, e fui gradualmente migrando automações de RPA convencionais para sistemas integrados por APIs. Hoje trabalho com Java/Spring Boot e Python/Django no desenvolvimento de soluções de integração e orquestração de processos em produção.

Graduando em Engenharia de Software pela UFMS, com formação técnica em Informática pelo IFMS.

---

## Experiência

**Sicredi Campo Grande MS** — 6 anos e meio

**Assistente de Desenvolvimento de Software** *(mai/2024 - presente)*
Desenvolvimento de automações e integrações utilizando Python, Java/Spring Boot e UiPath. Participação em projetos de API Gateway corporativo, orquestração de processos de negócio e portal analítico para gestores de carteira.

**Assistente de Processos** *(fev/2023 - mai/2024)*
Ponto focal de desenvolvimento de RPA e Workflow no time de processos. Evolução das automações de scripts de tela para sistemas integrados por APIs REST.

**Desenvolvedor Full Stack** *(jun/2021 - fev/2023)*
Análise de dados e dashboards em Power BI; desenvolvimento de automações em UiPath e Power Automate (Desktop e Web).

**Estagiário Desenvolvedor Full Stack** *(set/2019 - jun/2021)*
Desenvolvimento de portal de base de conhecimento interno em ReactJS e Node.js.

---

## Projetos

### API Gateway Corporativo
*Java 21 · Spring Boot 3 · HashiCorp Vault · HashiCorp Consul · mTLS · Micrometer · Swagger/OpenAPI*

Gateway centralizado entre sistemas internos e APIs externas da cooperativa. Gerencia autenticação mTLS, rotação de segredos via Vault, configuração distribuída via Consul e observabilidade via Spring Actuator e Micrometer. Elimina a replicação de lógica de autenticação em cada sistema consumidor e permite absorver mudanças de contrato de APIs externas sem impacto nas aplicações internas.

---

### Orquestrador de Processos (integra-fluid)
*Python · Django · REST APIs · HashiCorp Vault · FLUID BPM · Jira · OCR*

Camada de orquestração que integra a plataforma de BPM interna (FLUID) com APIs externas via Gateway. Encapsula fluxos multi-etapa como criação de issues no Jira com upload de documentos e análise OCR em chamadas HTTP únicas e atômicas. Cada execução é registrada em banco para rastreamento e métricas de automação. O sistema consumidor faz um único POST e recebe o resultado final; toda a orquestração de 3 a 4 chamadas encadeadas fica transparente para ele.

---

### Portal de Propensão
*Next.js 14 · TypeScript · Tailwind CSS · Databricks SQL Warehouse · LLM*

Portal interno para gestores de carteira da cooperativa. Consome tabela analítica do Databricks com scores de propensão de compra de associados, carregada via cache server-side com TTL de 24h e paginação em batches de 3.000 registros. Permite filtrar, ordenar e visualizar associados por carteira, segmento e produto, exibindo quais produtos cada associado já possui e quais tem maior propensão de adquirir. Inclui integração com agente de IA para análise de crédito sob demanda.

---

### Portal de Base de Conhecimento
*ReactJS · Node.js*

Primeira aplicação desenvolvida na cooperativa (como estagiário): repositório centralizado de documentos, relatórios e informações relevantes para as equipes internas.

---

## Stack

**Backend:** Java 21, Spring Boot 3, Python, Django, Flask, FastAPI, Node.js
**Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
**Dados:** Databricks, PySpark, SQL, MongoDB, Firebase
**Infraestrutura:** Docker, Kubernetes, HashiCorp Vault, HashiCorp Consul
**RPA:** UiPath, Power Automate
**Ferramentas:** Git, Azure DevOps, REST APIs, Swagger/OpenAPI, DBeaver, Postman

---

## Educação

**Bacharelado em Engenharia de Software** — UFMS *(previsão 2025)*
**Técnico em Informática** — IFMS