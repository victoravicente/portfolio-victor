# Instruções para Executar o Código

Este documento fornece instruções para executar o projeto de portfólio pessoal desenvolvido com React e Vite.

## Pré-requisitos

- Node.js instalado (versão 16 ou superior recomendada)
- npm ou yarn instalado
- Conta no GitHub com repositório configurado para GitHub Pages

## Instalação

1. Clone ou baixe o repositório do projeto.
2. Navegue até a pasta raiz do projeto no terminal.
3. Execute o comando para instalar as dependências:

   ```
   npm install
   ```

   Se o pacote `gh-pages` não estiver instalado, adicione-o como dependência de desenvolvimento:

   ```
   npm install --save-dev gh-pages
   ```

## Executando o Projeto

Para executar o projeto em modo de desenvolvimento:

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite. Abra o navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

## Build para Produção

Para criar uma versão otimizada para produção:

```
npm run build
```

Os arquivos de build serão gerados na pasta `dist`.

## Preview da Build

Para visualizar a versão de produção localmente:

```
npm run preview
```

Isso servirá os arquivos da pasta `dist` em um servidor local.

## Deploy no GitHub Pages

1. Certifique-se de que o repositório está configurado no GitHub e que o branch principal (geralmente `main` ou `master`) está atualizado.
2. Execute o build:

   ```
   npm run build
   ```

3. Execute o deploy:

   ```
   npm run deploy
   ```

   Isso publicará o conteúdo da pasta `dist` no branch `gh-pages` do repositório.

4. No GitHub, vá para as configurações do repositório > Pages, e certifique-se de que a fonte está definida como "Deploy from a branch" e o branch é `gh-pages`.

5. O site estará disponível em: `https://victoravicente.github.io/portfolio-victor/`

Nota: O `vite.config.js` já está configurado com `base: '/portfolio-victor/'` para funcionar corretamente no GitHub Pages.

## Estrutura do Projeto

- `src/`: Código fonte da aplicação React
- `public/`: Arquivos estáticos
- `vite.config.js`: Configuração do Vite
- `package.json`: Dependências e scripts do projeto

## Tecnologias Utilizadas

- React 18
- Vite
- Material-UI (@mui/material)
- Emotion (para estilização)
- gh-pages (para deploy)