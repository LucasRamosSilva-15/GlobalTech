# Globaltech Cabedelo — Next.js

E-commerce e vitrine digital de alta precisão para a **Globaltech Cabedelo**, especializada em iPhones seminovos certificados com 1 ano de garantia, acessórios homologados e assistência técnica expressa em bancada em Intermares (Cabedelo / João Pessoa - PB).

Convertido a partir do protótipo `home.html` e especificações estritas do `DESIGN (1).md`.

---

## 🚀 Tecnologias

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS calibrado com os Design Tokens do `DESIGN (1).md`
- **Tipografia:** Plus Jakarta Sans (Títulos & Display) e Inter (Corpo & Mono-specs) via `next/font/google`
- **Ícones:** Material Symbols Outlined & Lucide Icons
- **Imagens:** Next/Image otimizado com Remote Patterns configurados

---

## 🎨 Design System & Tokens

Os tokens definidos no `DESIGN (1).md` foram mapeados integralmente para o `tailwind.config.ts`:

- **Primary (`#004ac6` / `#2563eb`):** Precision Cobalt Blue (botões principais, estados ativos e call-to-actions)
- **Secondary (`#006398` / `#5bb8fe`):** Electric Azure (badges e destaques secundários)
- **Tertiary (`#006242` / `#007d55`):** Precision Emerald (conversões WhatsApp, estoque ativo, garantias)
- **Surfaces:** Paleta micro-delicada de superfícies (`#fbf8fc`, `#ffffff`, `#f6f2f7`, `#303033`)
- **Spacing:** Grid espacial de 8pt (`margin`: 3rem, `gutter`: 1.5rem, etc.)
- **Tabular Figures:** Preços numéricos formatados com `tabular-nums` para escaneabilidade instantânea.

---

## 📦 Estrutura de Pastas

```
├── public/
│   ├── logo.png             # Logo da Globaltech
│   └── images/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e fontes
│   │   ├── layout.tsx       # Root Layout com fontes Plus Jakarta Sans e Inter
│   │   └── page.tsx         # Página Principal com busca sincronizada
│   ├── components/
│   │   ├── Header.tsx       # Navbar fixa translúcida com banner de status e busca
│   │   ├── Hero.tsx         # Seção Hero com showcase e badges em glassmorphism
│   │   ├── TrustBar.tsx     # Pilares de valor e garantia (4 colunas)
│   │   ├── Catalog.tsx      # Catálogo interativo com filtros e ordenação
│   │   ├── ProductCard.tsx  # Card de produto com cálculo de parcelas e CTA WhatsApp
│   │   ├── TechnicalAssistance.tsx # Banner e simulador interativo de reparos
│   │   ├── StoreLocation.tsx# Localização em Intermares, horários e mapas
│   │   ├── Footer.tsx       # Rodapé corporativo completo com selos
│   │   └── WhatsAppWidget.tsx # Botão flutuante com balão de atendimento
│   ├── data/
│   │   └── products.ts      # Dados estruturados de produtos e serviços
│   └── types/
│       └── index.ts         # Tipos TypeScript
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🛠️ Como Executar

### 1. Instalar Dependências (já instaladas)
```bash
npm install
```

### 2. Iniciar Ambiente de Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Build de Produção
```bash
npm run build
npm run start
```

