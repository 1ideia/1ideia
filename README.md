# 1Ideia — Ecossistema de Inovação Aberta

## 🚀 Sobre o Projeto

**1Ideia** é uma plataforma inovadora que conecta inovadores, investidores e empresas em um ecossistema de inovação aberta. O projeto utiliza design **NeoFuturo Ultra Dark High-Tech** com interface futurista, Agente de IA conversacional e sistema de tokens.

### Características Principais

- ✨ **Design NeoFuturo** — Interface ultra dark com neon cyan, amarelo vibrante e animações fluidas
- 🤖 **Agente de IA** — Fluxo conversacional de 6 passos para estruturar ideias automaticamente
- 📊 **Dashboard Gamificado** — Ranking de inovadores, métricas de ideias e sistema de tokens
- 🔐 **3 Tipos de Ideia** — Coletivas (open), Incrementais (B2B), Inovadoras (deep tech com proteção)
- 🎯 **3 Perfis** — Inovadores, Investidores, Empresas com fluxos personalizados
- 📱 **Responsivo** — Totalmente otimizado para mobile, tablet e desktop

## 📋 Stack Técnico

- **Frontend:** React 19 + TypeScript + Tailwind CSS 4
- **Roteamento:** Wouter (client-side routing)
- **Animações:** Framer Motion
- **UI Components:** shadcn/ui + Radix UI
- **Ícones:** Lucide React
- **Build:** Vite
- **Gerenciador de Pacotes:** pnpm

## 🛠️ Instalação Local

### Pré-requisitos
- Node.js 22+ 
- pnpm 10+

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/1ideia.git
cd 1ideia

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev

# 4. Abra no navegador
# http://localhost:5173
```

## 📁 Estrutura do Projeto

```
1ideia/
├── client/
│   ├── public/              # Favicon, robots.txt, manifest.json
│   ├── src/
│   │   ├── pages/          # Páginas principais (Home, Cadastro, Busca, Dashboard, Termos)
│   │   ├── components/     # Componentes reutilizáveis (Navbar, Footer, NeonCursor)
│   │   ├── contexts/       # ThemeContext (dark/light)
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários
│   │   ├── App.tsx         # Roteamento principal
│   │   ├── index.css       # Design system NeoFuturo
│   │   └── main.tsx        # Entry point React
│   └── index.html          # Template HTML
├── server/                  # Placeholder para backend (Express)
├── shared/                  # Tipos compartilhados
├── package.json            # Dependências
├── vite.config.ts          # Configuração Vite
├── tsconfig.json           # Configuração TypeScript
└── ideas.md                # Documentação de design
```

## 🎨 Design System

### Paleta de Cores
- **Fundo:** `#0a0a0f` (Preto Profundo)
- **Neon Cyan:** `#00f0ff` (Tecnologia, Ação)
- **Amarelo Vibrante:** `#FFD700` (Criatividade, Destaque)
- **Roxo:** `#b000ff` (Inovação, Profundidade)

### Tipografia
- **Títulos:** Orbitron (futurista, sans-serif)
- **Corpo:** Space Mono (técnico, monospace)
- **Logo:** Alfa Slab One (impactante)

### Classes CSS Customizadas
- `.text-neon` — Texto com glow cyan
- `.text-gold` — Texto com glow amarelo
- `.btn-neon` — Botão gradient cyan-roxo
- `.grid-bg` — Fundo com grid animado
- `.glass` — Glassmorphism com blur
- `.neon-pulse` — Animação de pulso neon

## 📄 Páginas Implementadas

| Página | Rota | Funcionalidades |
|--------|------|-----------------|
| **Home** | `/` | Hero, pilares, tipos de ideia, agente IA demo, ranking, monetização |
| **Explorar** | `/busca` | Feed de ideias com filtros, busca, curtidas |
| **Cadastro** | `/cadastro` | Fluxo em 3 etapas (seleção de perfil, formulário, confirmação) |
| **Dashboard** | `/dashboard` | Métricas, abas de ideias/atividade/tokens |
| **Termos** | `/termos` | Documentação legal (LGPD, Timestamp, Tokens) |

## 🚀 Deploy

### Opção 1: Manus (Recomendado)
O projeto foi criado no Manus e pode ser publicado diretamente:
1. Acesse o painel de gerenciamento
2. Clique em **Publish**
3. Configure o domínio `1ideia.com` em **Settings → Domains**

### Opção 2: GitHub Pages
```bash
# Build para produção
pnpm build

# Deploy com gh-pages
npm install --save-dev gh-pages
npx gh-pages -d dist
```

### Opção 3: Vercel
```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 4: Netlify
```bash
# Instale Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## 🔧 Variáveis de Ambiente

Se implementar backend, crie um `.env.local`:

```env
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ENDPOINT=https://seu-analytics.com
VITE_ANALYTICS_WEBSITE_ID=seu-id
```

## 📝 Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Build para produção
pnpm preview      # Preview do build
pnpm check        # Verifica tipos TypeScript
pnpm format       # Formata código com Prettier
```

## 🎯 Próximos Passos (Roadmap)

- [ ] **Backend Real** — Autenticação OAuth, banco de dados, sistema de tokens
- [ ] **Agente IA Funcional** — Integração com LLM (OpenAI/Claude)
- [ ] **Página de Ideia Individual** — Rota `/ideia/:id` com detalhes completos
- [ ] **Notificações** — Sistema de notificações em tempo real
- [ ] **Pagamentos** — Integração com Stripe para compra de tokens
- [ ] **Integração LinkedIn** — Login e compartilhamento via LinkedIn

## 📞 Suporte

Para dúvidas ou sugestões, abra uma **Issue** no GitHub ou entre em contato.

## 📄 Licença

MIT License — Veja LICENSE.md para detalhes

---

**Desenvolvido com ❤️ no Manus**
