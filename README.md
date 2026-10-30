# Globaltech Cabedelo — Acessórios & Assistência Técnica

Vitrine digital e sistema de consulta de alta precisão para a **Globaltech Cabedelo**, loja física especializada em acessórios homologados para smartphones e assistência técnica expressa em bancada laboratorial localizada em Intermares (Cabedelo / João Pessoa - PB).

Projeto desenvolvido em **Next.js 16** com **React 19**, **TypeScript** e **Tailwind CSS**, seguindo rigorosamente as diretrizes e tokens do `DESIGN (1).md`.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Linguagem:** TypeScript (Strict Typing)
- **Estilização:** Tailwind CSS com Design Tokens Material Design 3 calibrados
- **Motor de Animações:** [Framer Motion](https://www.framer.com/motion/) (Física orgânica com springs e curvas `cubic-bezier(0.16, 1, 0.3, 1)`)
- **Tipografia:** Plus Jakarta Sans (Títulos & Display) e Inter (Corpo de texto e dados técnicos) via `next/font/google`
- **Ícones:** Google Material Symbols Outlined
- **Otimização de Mídia:** `next/image` com remote patterns e carregamento prioritário

---

## 📱 Estrutura e Funcionalidades da Aplicação

### 1. Página Inicial (`/`)
- **Cabeçalho com Navegação Inteligente (`Header.tsx`):**
  - Barra de status com funcionamento da bancada e endereço local.
  - Navegação desktop com indicador de seção ativa (*ScrollSpy*).
  - Atalho de teclado instantâneo (`⌘K` / `Ctrl+K`) para focar na busca.
  - Menu mobile fluido com transição sanfona contínua via `AnimatePresence`.
  - Botão de consultoria e atendimento direto no WhatsApp.

- **Vitrine Principal (`Hero.tsx`):**
  - Apresentação de impacto destacando acessórios e assistência técnica expressa.
  - Showcase com efeito visual de levitação e halo de iluminação contínua.

- **Pilares de Confiança (`TrustBar.tsx`):**
  - 4 pilares: Garantia Real, Bancada Especializada, Pronta Entrega Local e Compra 100% Segura.
  - Efeito cascata e microinterações ao passar o mouse.

- **Catálogo de Acessórios & Seminovos (`Catalog.tsx` & `ProductCard.tsx`):**
  - **Medidor Superior de Carga:** Exibe a quantidade de produtos carregados vs. total em estoque com barra de progresso animada.
  - **Filtros por Categoria:** Pílulas com amortecimento elástico (Carregadores Turbo, Capas & Cases, Fones & Áudio, Películas, Cabos, Power Banks e Seminovos).
  - **Ordenação Dinâmica:** Menor preço, maior preço, mais populares e recentes.
  - **Paginação Progressiva:** Botão "Carregar Mais Produtos" sem travamento ou oscilação de layout.
  - **Modal de Detalhes:** Visualização técnica detalhada com acionamento para compra via WhatsApp pré-formatada por modelo/SKU.

- **Laboratório de Assistência Técnica (`TechnicalAssistance.tsx`):**
  - Status em tempo real da bancada com checklist de inspeção em 30 etapas.
  - **Simulador Interativo de Reparo:** Seleção de marca e tipo de defeito (Troca de Tela, Troca de Bateria, Conector de Carga, Câmera ou Placa) com estimativa de tempo e valor em tempo real.
  - Botão direto para cálculo formal de orçamento online.

- **Localização & Retirada (`StoreLocation.tsx`):**
  - Informações de atendimento presencial em Intermares, horários da loja e rota no Google Maps.

- **Rodapé Corporativo (`Footer.tsx`):**
  - Links institucionais, políticas de garantia formal balcão e canais de contato.

- **Widget Flutuante WhatsApp (`WhatsAppWidget.tsx`):**
  - Botão com levitação contínua e balão pop-up interativo para suporte imediato.

---

### 2. Tabela Comparativa de Preços (`/catalogo-tabela`)
- **Página de Inventário Técnico Completo:**
  - Tabela responsiva com todos os produtos e acessórios disponíveis.
  - Ordenação por coluna (Nome, Categoria, Memória, Saúde da Bateria e Preço à Vista).
  - Filtro exclusivo para itens de pronta entrega.
  - Suporte nativo à impressão e exportação em PDF (`window.print()`).
  - Modal integrado com especificações completas de cada item.

---

## 📁 Estrutura de Diretórios

```
├── public/
│   ├── logo.png                     # Identidade visual da Globaltech
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── catalogo-tabela/
│   │   │   └── page.tsx             # Tabela comparativa e inventário técnico
│   │   ├── tabela/
│   │   │   └── page.tsx             # Alias de rota para a tabela
│   │   ├── globals.css              # Reset, fontes e scroll padding
│   │   ├── layout.tsx               # Root Layout com fontes e metadados
│   │   └── page.tsx                 # Página Principal (Home)
│   ├── components/
│   │   ├── animations/
│   │   │   └── Motion.tsx           # Utilitários de física, variants e ScrollReveal
│   │   ├── Header.tsx               # Barra de navegação e menu mobile
│   │   ├── Hero.tsx                 # Banner de destaque e vitrine
│   │   ├── TrustBar.tsx             # Grid de garantias e credenciais
│   │   ├── Catalog.tsx              # Grid de produtos, filtros e botão de carregar mais
│   │   ├── ProductCard.tsx          # Card de produto com microinterações
│   │   ├── TechnicalAssistance.tsx  # Laboratório técnico e simulador de reparo
│   │   ├── StoreLocation.tsx        # Dados de localização e mapas
│   │   ├── Footer.tsx               # Rodapé corporativo
│   │   └── WhatsAppWidget.tsx       # Widget flutuante de atendimento
│   ├── data/
│   │   └── products.ts              # Base de dados estruturada de produtos e serviços
│   └── types/
│       └── index.ts                 # Definições de tipos TypeScript
├── tailwind.config.ts               # Paleta de cores e tokens de design
├── tsconfig.json                    # Configuração do TypeScript
├── next.config.mjs                  # Configurações do Next.js e Turbopack
└── package.json
```

---

## 🛠️ Comandos de Execução

### 1. Instalação das Dependências
```bash
npm install
```

### 2. Executar em Modo de Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` ou a porta designada no seu navegador.

### 3. Gerar Build de Produção
```bash
npm run build
```

### 4. Iniciar Servidor de Produção
```bash
npm run start
```
