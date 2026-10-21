# Planejamento de desenvolvimento — "E eu com isso?"

> **Status:** proposta para aprovação. Nada foi implementado. Nenhuma dependência instalada.
> **Data do plano:** 2026-10-21.
> **Autor da execução:** uma pessoa (frontend) + Claude Code.
> **Prazo:** 3 dias para MVP publicado.

---

## 0. Contexto eleitoral verificado e suas consequências (LEIA PRIMEIRO)

Verifiquei na web (resultado de busca, **ainda a reconfirmar na fonte oficial**) a situação do ciclo:

- **1º turno:** 4/10/2026.
- **2º turno:** **25/10/2026** — isto é, ~4 dias após a data deste plano.
- A disputa final é entre **duas candidaturas**.

> ⚠️ **Os nomes das candidaturas NÃO estão fixados neste plano.** Eles são **pendência editorial P0** a ser confirmada diretamente no **TSE (DivulgaCandContas)** e nos **planos de governo registrados**, antes de qualquer publicação. O código deve funcionar com os dados preenchidos manualmente, sem nomes "chumbados".

**Consequências que já incorporei no plano:**

1. **Modelo de dados = 2 candidaturas (comparação binária).** Isso reduz drasticamente o volume de conteúdo e torna o MVP viável em 3 dias. O schema continua sendo uma lista (`candidaturas[]`), então suporta N no futuro sem refatoração.
2. **Risco jurídico/temporal (ver Seção I).** Publicar material comparando candidaturas **durante o período de 2º turno** envolve a Lei 9.504/1997 (propaganda eleitoral), regras do TSE e o "dia de silêncio". **Recomendação padrão:** tratar o produto como conteúdo **jornalístico-informativo com fontes**, exibir banner de transparência, e **avaliar publicar a versão plena após 25/10/2026** (quando o risco cai), usando os dias de agora para construir e validar com conteúdo claramente marcado como rascunho/demonstrativo. Decisão final é sua — ver Seção I, Risco #1.
3. **"Histórico de ações anteriores"** é especialmente sensível com candidaturas reais em disputa. Só entra com fonte primária e rótulo explícito; na dúvida, fica fora.

---

# A. Definição do produto

**Resumo.** Aplicação web mobile-first que parte da vida da pessoa (perfil + interesses) e devolve um **relatório personalizado** que compara, por tema, o que cada candidatura **documentou** em seu plano de governo, traduzindo para impactos cotidianos, sempre com fonte e ressalvas. Não recomenda voto.

**Problema.** Programas de governo são longos, técnicos e distantes da rotina. A maioria das pessoas não lê nem compara. O produto traduz documentos em "o que isso muda na minha vida", sem dizer em quem votar.

**Proposta de valor.** *"Você não precisa entender de política. Descubra o que as propostas dos candidatos podem significar para a sua vida."*

**Público-alvo.** Adultos de qualquer faixa, pouco engajados com política, que acham planos de governo difíceis, preferem conteúdo curto/interativo e gostam de compartilhar. Sem pressupor conhecimento de economia/direito.

**Jornada (resumo; detalhe na Seção C).** Landing → Perfil (múltipla escolha) → Interesses (múltipla escolha) → Revisão → Relatório por tema (comparação 2 candidaturas) → Compartilhar (link + Web Share + card).

**Funcionalidades essenciais (MVP).** Landing; onboarding perfil; onboarding interesses; revisão/edição; relatório determinístico por tema; comparação por tema; impactos + condições + incertezas; fontes clicáveis; link compartilhável com estado na URL; responsivo; metadados SEO/OG; estados vazio/erro/carregando; testes das regras críticas (personalização + encode/decode de URL); build + deploy.

**Fora do MVP (explicitamente).** Cadastro/login; backend/DB próprio; IA generativa em tempo real; chatbot; coleta automática de fontes; painel admin; pontuação/compatibilidade/ranking; comentários; push; app nativo. Ver Seção F para o que cortar primeiro.

---

# B. Arquitetura técnica

## B.1. Stack final recomendada (e por quê)

| Camada | Escolha | Justificativa curta |
|---|---|---|
| Framework | **Next.js (App Router)** | Rotas dinâmicas + `generateMetadata` dão **OG preview por relatório compartilhado** (crucial p/ WhatsApp). Deploy trivial na Vercel. |
| UI | **React + TypeScript (strict)** | Familiaridade frontend; tipagem protege o modelo editorial. |
| Estilo | **Tailwind CSS** | Velocidade; sem CSS global frágil; ótimo p/ mobile-first. |
| Ícones | **lucide-react** | Leve, consistente, tree-shakeable. |
| Testes unidade | **Vitest + Testing Library** | Rápido; cobre personalização e URL. |
| E2E | **Playwright** | **P1** — só o "happy path". Cortável sob pressão de prazo. |
| Deploy | **Vercel** | Zero-config p/ Next; preview por branch; OG dinâmico opcional. |
| Conteúdo | **Arquivos TS/JSON tipados no Git** | Sem DB; versionado; revisável em PR; migrável depois. |
| Estado | **URL + `useState`/`useReducer` local** | Sem Redux/Zustand. Estado da jornada é pequeno e serializável. |

**Decisões reversíveis que tomei por você (para não travar o início):**
- **Sem biblioteca de formulários** (react-hook-form etc.): seleção múltipla com checkboxes controlados é trivial.
- **Sem lib de animação** no essencial; microinterações via Tailwind/CSS. Framer Motion fica como P2 opcional.
- **OG image:** começar com **imagem OG estática** bem feita; `@vercel/og` dinâmico é **P1**.
- **Fonte tipográfica:** usar `next/font` com uma fonte variável (ex.: Inter + uma display como Fraunces/Sora) **self-hosted via next/font** — sem request externo em runtime.
- **Renderização:** o relatório é **Server Component** que lê `searchParams`, decodifica o perfil e renderiza determinísticamente → bom p/ SEO e OG; a interatividade (acordeões, copiar link) fica em Client Components pequenos.

## B.2. Estrutura de diretórios

```
e-eu-com-isso/
├─ app/
│  ├─ layout.tsx                 # html, fontes (next/font), metadata base
│  ├─ page.tsx                   # Landing
│  ├─ comecar/
│  │  └─ page.tsx                # Onboarding (perfil + interesses + revisão em passos)
│  ├─ relatorio/
│  │  ├─ page.tsx                # Relatório (Server Component, lê searchParams)
│  │  └─ opengraph-image.tsx     # (P1) OG dinâmico por seleção
│  ├─ sobre/
│  │  └─ page.tsx                # Metodologia, fontes, limitações, transparência eleitoral
│  ├─ not-found.tsx
│  └─ global-error.tsx
├─ components/
│  ├─ ui/                        # Button, Card, Chip, Checkbox, Progress, Disclosure…
│  ├─ onboarding/                # ProfileStep, InterestsStep, ReviewStep, Stepper
│  ├─ report/                    # ReportHeader, ThemeCard, CandidateColumn, SourceList, Disclaimer, LabelTag
│  └─ share/                     # ShareBar, CopyLinkButton, WebShareButton
├─ content/
│  ├─ candidaturas.ts            # metadados das candidaturas (sem juízo de valor)
│  ├─ temas.ts                   # catálogo de temas (id, rótulo, ícone)
│  ├─ perfis.ts                  # catálogo de perfis (id, rótulo)
│  ├─ propostas/                 # 1 arquivo por tema: propostas[] por candidatura
│  │  ├─ educacao.ts
│  │  ├─ emprego-salario.ts
│  │  └─ …
│  └─ README.md                  # guia editorial p/ preencher conteúdo
├─ lib/
│  ├─ types.ts                   # interfaces TS do modelo editorial
│  ├─ personalization.ts         # seleção de temas/capítulos a partir do perfil (PURO, testável)
│  ├─ url-state.ts               # encode/decode do estado p/ URL (PURO, testável)
│  └─ catalogs.ts                # listas de perfis/interesses + validação de ids
├─ tests/
│  ├─ personalization.test.ts
│  ├─ url-state.test.ts
│  └─ e2e/ (P1) happy-path.spec.ts
├─ public/
│  └─ og-default.png
├─ CLAUDE.md
├─ PLAN.md
├─ README.md                     # rodar local + publicar
├─ package.json / tsconfig.json / tailwind.config.ts / next.config.ts
└─ .gitignore
```

## B.3. Modelos de dados e interfaces TypeScript

Núcleo em `lib/types.ts`. Princípio: **propostas são reutilizadas por tema**; o perfil só **seleciona e enfatiza**, nunca altera fatos.

```ts
export type TipoFonte =
  | 'plano-de-governo'      // registrado no TSE
  | 'legislacao'
  | 'orgao-publico'
  | 'estudo-tecnico'
  | 'jornalismo';

export type TipoAfirmacao =
  | 'proposta-documentada'  // está escrito no documento oficial
  | 'historico'             // ação/decisão anterior documentada
  | 'interpretacao'         // leitura de possível impacto
  | 'previsao-incerta'      // efeito futuro condicional
  | 'nao-localizado';       // não encontramos / não verificado

export type StatusRevisao = 'rascunho' | 'em-revisao' | 'aprovado';

export interface Fonte {
  titulo: string;
  url: string;
  tipo: TipoFonte;
  publicadoEm?: string;     // ISO; contexto/data do documento
  trecho?: string;          // citação curta e fiel (opcional)
}

export interface Candidatura {
  id: string;               // slug estável, ex. 'cand-a'
  nome: string;             // preenchido após verificação TSE
  partido?: string;
  corToken: 'neutra-1' | 'neutra-2'; // cores NÃO partidárias, equivalentes
}

export interface Proposta {
  id: string;
  temaId: string;
  candidaturaId: string;
  titulo: string;
  resumoFiel: string;       // resumo fiel do que o documento diz
  tipoAfirmacao: TipoAfirmacao;
  impactoCotidiano?: string;      // interpretação explicitamente rotulada
  condicoes?: string[];           // o que precisaria acontecer
  incertezas?: string[];          // o que não dá p/ concluir
  relevantePara?: string[];       // ids de perfil que ganham ênfase (NÃO filtro de fatos)
  fontes: Fonte[];                // >=1 obrigatória se tipo != 'nao-localizado'
  statusRevisao: StatusRevisao;
  revisadoEm?: string;            // ISO
}

export interface Tema {
  id: string;               // 'educacao', 'emprego-salario'…
  rotulo: string;
  icone: string;            // nome do ícone lucide
  resumoNeutro?: string;    // 1 linha neutra do que está em disputa no tema
}

export interface PerfilOpcao { id: string; rotulo: string; }

export interface SelecaoUsuario {
  perfis: string[];         // ids
  interesses: string[];     // ids de tema; ['*'] = "quero ver tudo"
}
```

## B.4. Estratégia de conteúdo editorial

- Conteúdo em **TS tipado** (não JSON solto) → autocompletar + erro de compilação se faltar campo obrigatório.
- **1 arquivo por tema** em `content/propostas/`, cada um exportando `Proposta[]` com as 2 candidaturas lado a lado → facilita revisar paridade.
- **Regra de paridade:** todo tema publicado deve ter entrada para **todas** as candidaturas. Se uma não tem proposta localizada, cria-se entrada com `tipoAfirmacao: 'nao-localizado'` (nunca omitir silenciosamente → evita viés).
- Nada é renderizado como "aprovado" sem `statusRevisao: 'aprovado'`; itens `rascunho`/`em-revisao` aparecem só em dev com selo "DEMONSTRATIVO".
- `content/README.md` = checklist editorial (ver Seção D).

## B.5. Estratégia de personalização (pura e testável)

`lib/personalization.ts` expõe funções puras:

```ts
// Quais temas mostrar e em que ordem, a partir da seleção.
selecionarTemas(selecao: SelecaoUsuario, temas: Tema[]): Tema[]

// Dentro de um tema, quais propostas enfatizar p/ o perfil (sem esconder as demais).
ordenarPorRelevancia(propostas: Proposta[], perfis: string[]): Proposta[]
```

Regras: interesses escolhidos definem **quais capítulos** aparecem (`['*']` = todos). Perfil só reordena/destaca via `relevantePara` e gera frases de ênfase ("como você marcou "CLT"…"). **Nunca** remove uma candidatura, nem troca o `resumoFiel`, nem a classificação. Sem seleção → mostra visão geral + convite a escolher (estado vazio útil, não erro).

## B.6. Estratégia de compartilhamento

- Estado codificado na **URL** de `/relatorio` via `lib/url-state.ts`: `?p=<perfis>&i=<interesses>` usando **ids curtos** (ex. `p=clt.estud&i=educ.saude`). Sem PII, sem nome/e-mail.
- `decode` **valida** contra os catálogos e **ignora ids desconhecidos** (nunca quebra; cai no estado vazio se tudo inválido).
- Compartilhar: `CopyLinkButton` (clipboard), `WebShareButton` (Web Share API quando `navigator.share` existe), e link direto por tema (`#tema-educacao`).
- OG: `generateMetadata` em `/relatorio` monta título/descrição a partir da seleção decodificada (texto neutro, sem conclusão de voto). Imagem: estática no MVP; dinâmica `@vercel/og` como P1.

## B.7. Estratégia de testes

- **P0 unit (Vitest):** `url-state` (round-trip encode→decode, ids inválidos, vazio) e `personalization` (seleção de temas, `['*']`, ordenação, **garantia de que nenhuma candidatura é omitida**).
- **P0 unit editorial:** teste que percorre o conteúdo e **falha** se: tema publicado sem paridade entre candidaturas; proposta `aprovado` sem `fontes`; URL de fonte malformada.
- **P1 E2E (Playwright):** landing → seleciona → revisa → relatório → copiar link.
- Rodar: `npm run test` (unit) e `npm run test:e2e` (P1).

## B.8. Estratégia de deploy

- **Vercel** conectada ao repo Git. Cada push → preview; `main` → produção.
- `npm run build` precisa passar localmente antes do deploy.
- Variáveis: nenhuma secret no cliente (não há backend). Definir apenas `NEXT_PUBLIC_SITE_URL` p/ montar OG absolutos.
- Domínio: subdomínio `*.vercel.app` no MVP; domínio próprio é P2.

---

# C. UX/UI

## C.1. Telas e objetivos

1. **Landing (`/`)** — comunicar benefício em segundos; CTA "Descobrir o que importa pra mim"; selos "gratuito • sem cadastro • com fontes".
2. **Onboarding (`/comecar`)** — 3 passos num stepper: Perfil → Interesses → Revisão. Sem obrigar seleção; "Pular" permitido.
3. **Relatório (`/relatorio`)** — visão geral neutra + cartões por tema (comparação das 2 candidaturas) + fontes + ressalvas + compartilhar.
4. **Sobre/Metodologia (`/sobre`)** — como escolhemos fontes, o que os rótulos significam, transparência eleitoral e limitações.
5. **404 / erro** — mensagens claras, caminho de volta ao início.

## C.2. Componentes principais

`Button, Card, Chip (seleção múltipla), Checkbox, Stepper/Progress, Disclosure (acordeão "aprofundar"), ThemeCard, CandidateColumn, LabelTag (rótulo de tipo de afirmação), SourceList, Disclaimer, ShareBar`.

**LabelTag** é central: um selo visual por `TipoAfirmacao` (ex.: "Proposta documentada", "Interpretação", "Não localizado") com cor/ícone e `aria-label`. É o que operacionaliza a integridade editorial na interface.

## C.3. Estados vazio / erro / carregando

- **Vazio** (sem interesses): visão geral + "Escolha ao menos um tema para ver a comparação" + botão.
- **Tema sem proposta de uma candidatura:** card mostra coluna com "Não localizamos proposta documentada sobre isto" (rótulo `nao-localizado`) — **não** interpretar como "é contra".
- **Erro** (URL corrompida): cai no estado vazio + aviso leve "não entendemos esse link".
- **Carregando:** relatório é server-render (rápido); skeletons só em componentes client (ex.: OG/preview). Evitar spinners desnecessários.

## C.4. Mobile e navegação

- **Mobile-first.** Cartões empilham; comparação de candidaturas vira **colunas lado a lado em ≥640px** e **empilhada/abas no mobile**. Alvos de toque ≥44px.
- Navegação linear com "voltar/editar" sempre disponível no onboarding; no relatório, índice de temas fixo/colapsável.

## C.5. Direção visual e interação

- **Editorial e moderno:** tipografia expressiva (display + texto), muito branco, hierarquia forte, cartões com profundidade sutil.
- **Cores neutras e equivalentes** p/ as candidaturas (`neutra-1`/`neutra-2` — ex.: dois tons frios/neutros), **jamais** cores de partido. Paleta base com bom contraste (AA).
- Microinterações: estados de foco visíveis, transições curtas em acordeões/chips. Sem animação pesada.
- Acessibilidade: navegação por teclado completa, foco visível, `aria` nos selos e acordeões, contraste AA, textos alternativos.

---

# D. Modelo editorial

**Estrutura dos dados políticos:** ver `Proposta`/`Fonte` na Seção B.3.

**Critérios de inclusão/publicação (checklist por item):**
1. A candidatura e o documento foram **verificados no TSE** (plano de governo registrado) ou em fonte primária equivalente?
2. `resumoFiel` reflete o documento **sem distorcer** (sem adjetivos de valor)?
3. `tipoAfirmacao` está correto? (documentada ≠ interpretação ≠ previsão ≠ histórico ≠ não-localizado)
4. Há **≥1 fonte** com URL que abre no documento/trecho correto?
5. `impactoCotidiano`/`condicoes`/`incertezas` estão **rotulados como interpretação** e usam linguagem condicional ("poderia", "dependeria de")?
6. **Paridade:** o mesmo tema foi preenchido para **todas** as candidaturas (inclusive `nao-localizado`)?
7. `statusRevisao = 'aprovado'` e `revisadoEm` preenchido?

**Fatos × interpretações × previsões:** operacionalizado por `tipoAfirmacao` + `LabelTag` na UI. Interpretação e previsão nunca aparecem sem selo e sem linguagem condicional.

**Ausência de proposta comparável:** usar `nao-localizado` com texto padrão; proibido inferir posição a partir do silêncio do documento.

**Revisões/correções:** campo `revisadoEm`; histórico fica no Git (um PR por lote de conteúdo). `content/README.md` traz o checklist e um template de proposta.

**Evitar conteúdo inventado por IA:** a IA só **extrai/resume/organiza**; todo item nasce `rascunho`, precisa de URL verificável e só vira `aprovado` por revisão humana (você). Teste automatizado barra `aprovado` sem fonte. Nenhuma geração factual em runtime.

---

# E. Cronograma de três dias

> Meta forte: **fluxo completo navegável com conteúdo DEMONSTRATIVO ao fim do Dia 1.** Dia 2 = conteúdo real + compartilhamento + polimento. Dia 3 = revisão editorial, testes, acessibilidade, deploy.

### DIA 1 — Esqueleto + jornada ponta a ponta (com dados de exemplo)

**1.1 Bootstrap do projeto**
- Objetivo: Next+TS+Tailwind+lucide+Vitest rodando.
- Arquivos: `package.json`, `tsconfig.json` (strict), `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `.gitignore`, init git.
- Resultado: `npm run dev` abre; `npm run build` passa.
- Concluído quando: build limpo, sem erro de TS/lint.
- Testes: `npm run build`.
- Risco/alt: se Playwright atrasar, adiar p/ Dia 3 (P1).

**1.2 Tipos + catálogos + conteúdo demonstrativo**
- Arquivos: `lib/types.ts`, `lib/catalogs.ts`, `content/temas.ts`, `content/perfis.ts`, `content/candidaturas.ts` (2 candidaturas placeholder "Candidatura A/B"), 2–3 `content/propostas/*.ts` marcados `rascunho`/"DEMONSTRATIVO".
- Concluído: compila; catálogos batem com os tipos.
- Testes: `npm run build`.

**1.3 Onboarding (perfil → interesses → revisão)**
- Arquivos: `app/comecar/page.tsx`, `components/onboarding/*`, `components/ui/*` (Chip/Checkbox/Stepper).
- Resultado: seleção múltipla funciona, "Quero ver tudo", pular, editar; ao final navega p/ `/relatorio` com estado.
- Concluído: dá p/ ir do passo 1 ao 3 e avançar.
- Testes: manual + (1.x) unit depois.

**1.4 URL-state + Relatório mínimo**
- Arquivos: `lib/url-state.ts`, `app/relatorio/page.tsx`, `lib/personalization.ts`, `components/report/*`.
- Resultado: `/relatorio?p=…&i=…` renderiza temas selecionados com cartões comparando A/B (dados demo), com `LabelTag`, fontes placeholder e ressalvas.
- Concluído: **jornada inteira navegável**; recarregar a URL reproduz o relatório.
- Testes: manual ponta a ponta; `npm run build`.

### DIA 2 — Conteúdo real, compartilhamento e polimento

**2.1 Verificação editorial das candidaturas (BLOQUEANTE)**
- Objetivo: confirmar no **TSE** as 2 candidaturas do 2º turno e localizar os **planos de governo**. Preencher `candidaturas.ts`.
- Concluído: nomes/partidos corretos + URLs dos planos salvas.
- Risco: se não confirmar a tempo → manter "Candidatura A/B" + banner "conteúdo demonstrativo" e **não** publicar como real (ver Seção I #1/#2).

**2.2 Conteúdo real por tema (lotes pequenos, revisados)**
- Objetivo: preencher 4–6 temas prioritários com propostas reais, paridade e fontes; marcar `aprovado` só após sua revisão.
- Arquivos: `content/propostas/*.ts`.
- Concluído: temas prioritários `aprovado` com ≥1 fonte cada e paridade.
- Testes: teste editorial (B.7) passa.

**2.3 Compartilhamento + SEO/OG**
- Arquivos: `components/share/*`, `generateMetadata` em `/relatorio` e `layout`, `public/og-default.png`, `app/sobre/page.tsx`.
- Concluído: copiar link, Web Share, preview OG estático; `/sobre` com metodologia e transparência eleitoral.
- Testes: validar OG com um debugger; testar link em um app de mensagens real.

**2.4 Polimento visual + estados + acessibilidade base**
- Arquivos: `components/ui/*`, `components/report/*`, `not-found.tsx`, `global-error.tsx`.
- Concluído: responsivo mobile/desktop; estados vazio/erro; foco por teclado; contraste AA nos principais.

### DIA 3 — Revisão, testes, acessibilidade e deploy

**3.1 Testes automatizados** — `url-state`, `personalization`, teste editorial; (P1) E2E happy-path. Concluído: `npm run test` verde.
**3.2 Passada de acessibilidade** — teclado em toda a jornada, labels/aria, contraste; checklist Seção H.
**3.3 Revisão editorial final** — rodar checklist D em todo item `aprovado`; qualquer dúvida → rebaixar p/ `nao-localizado` ou remover.
**3.4 Deploy Vercel + verificação em produção** — build, deploy, testar OG e jornada no domínio real, em mobile. Concluído: URL pública navegável + checklist H completo.
**3.5 Decisão de publicação eleitoral** — aplicar a decisão da Seção I #1 (publicar pleno vs. manter demonstrativo até 25/10).

---

# F. Backlog priorizado

**P0 (indispensável):** bootstrap; tipos+catálogos; onboarding (perfil/interesses/revisão); url-state + validação; relatório determinístico por tema (comparação 2 candidaturas); `LabelTag` + ressalvas + fontes; conteúdo real revisado de ≥4 temas com paridade; copiar link + estado na URL; responsivo; estados vazio/erro; metadados básicos + OG estático; testes `url-state`/`personalization`/editorial; README + deploy.

**P1 (importante, simplificável):** Web Share API; `/sobre` completo; OG dinâmico (`@vercel/og`); E2E Playwright; microinterações; temas 5–8; card visual por tema.

**P2 (pós-MVP):** domínio próprio; mais temas/candidaturas; animações (Framer Motion); i18n de rótulos; modo escuro; analytics anônimo; export PDF.

**Ordem de corte sob pressão (corta de cima p/ baixo):** OG dinâmico → E2E → Web Share (deixa só copiar link) → temas extras (ficar em 4) → microinterações → `/sobre` enxuto (vira seção da landing). **Nunca cortar:** fontes, rótulos de tipo de afirmação, paridade, validação de URL, revisão editorial.

---

# G. Estratégia de uso do Claude Code (prompts em ordem)

> Copie/cole um por vez. Cada um tem escopo fechado e critérios de aceite. Regra geral em todos: *"Não reescreva arquivos funcionais sem necessidade; mostre o que mudou; rode build/testes e corrija erros introduzidos antes de concluir."*

**Prompt 1 — Bootstrap**
> Inicialize um projeto Next.js (App Router) + TypeScript strict + Tailwind + lucide-react + Vitest/Testing Library, seguindo a estrutura de diretórios de `PLAN.md` B.2. Configure `next/font` self-hosted (Inter + uma display). Crie `app/layout.tsx` e uma `app/page.tsx` placeholder. Aceite: `npm run dev` e `npm run build` passam sem erros de TS; lint limpo. Não crie conteúdo político ainda. Rode o build e corrija antes de concluir.

**Prompt 2 — Tipos, catálogos e conteúdo DEMONSTRATIVO**
> Implemente `lib/types.ts` exatamente conforme `PLAN.md` B.3. Crie `content/temas.ts`, `content/perfis.ts` (listas de A.jornada etapas 2 e 3), `content/candidaturas.ts` com 2 candidaturas placeholder ("Candidatura A"/"Candidatura B", corToken neutra-1/neutra-2) e 3 arquivos em `content/propostas/` com dados **marcados como DEMONSTRATIVO** e `statusRevisao: 'rascunho'`. Crie `lib/catalogs.ts` com helpers de validação de ids. Aceite: compila; cada proposta demonstrativa tem ≥1 fonte fake claramente rotulada. Não marque nada como `aprovado`.

**Prompt 3 — Onboarding**
> Implemente `/comecar` com stepper Perfil→Interesses→Revisão usando os catálogos. Seleção múltipla (chips/checkbox), opção "Quero ver tudo" nos interesses, possibilidade de pular e de editar. Ao concluir, navegue para `/relatorio` com o estado. Componentes em `components/onboarding` e `components/ui`. Aceite: dá p/ percorrer os 3 passos por teclado e mouse; "voltar/editar" funciona; nenhuma seleção é obrigatória.

**Prompt 4 — URL-state (com teste) **
> Implemente `lib/url-state.ts` com `encode(selecao): string` e `decode(searchParams): SelecaoUsuario`, usando ids curtos, sem PII. `decode` valida contra os catálogos e descarta ids desconhecidos. Escreva `tests/url-state.test.ts` cobrindo round-trip, ids inválidos e vazio. Aceite: `npm run test` passa; nunca lança exceção em input ruim.

**Prompt 5 — Personalização (com teste)**
> Implemente `lib/personalization.ts` (`selecionarTemas`, `ordenarPorRelevancia`) conforme B.5, puro e sem efeitos colaterais. Garanta que nenhuma candidatura seja omitida e que `resumoFiel`/`tipoAfirmacao` nunca sejam alterados. Escreva `tests/personalization.test.ts`, incluindo o caso `['*']` e a garantia de paridade. Aceite: testes passam.

**Prompt 6 — Relatório**
> Implemente `/relatorio` como Server Component que lê `searchParams`, decodifica e renderiza visão geral neutra + `ThemeCard` por tema comparando as 2 candidaturas em colunas (empilhadas no mobile). Inclua `LabelTag` por `tipoAfirmacao`, `SourceList`, bloco de condições/incertezas e `Disclaimer`. Estado vazio útil quando não há interesses. Aceite: `/relatorio?p=…&i=…` reproduz o relatório ao recarregar; nenhuma candidatura é escondida; itens não-`aprovado` só aparecem em dev com selo DEMONSTRATIVO.

**Prompt 7 — Compartilhamento + SEO/OG**
> Implemente `components/share` (copiar link; Web Share quando disponível) e `generateMetadata` em `/relatorio` (título/descrição neutros a partir da seleção). Adicione OG estático em `public/og-default.png` e metadados base no `layout`. Aceite: copiar link funciona; preview OG aparece num validador; nenhuma PII na URL ou nos metadados.

**Prompt 8 — Teste editorial + estados + acessibilidade**
> Escreva um teste que percorre `content/` e falha se: tema publicado sem paridade entre candidaturas; item `aprovado` sem `fontes`; URL de fonte malformada. Implemente `not-found.tsx`, `global-error.tsx` e revise foco/aria/contraste nos componentes principais. Aceite: testes passam; jornada navegável por teclado.

**Prompt 9 — `/sobre` + README + preparação de deploy**
> Crie `/sobre` (metodologia, significado dos rótulos, transparência eleitoral e limitações) e `README.md` (rodar local + publicar na Vercel + como adicionar conteúdo via `content/README.md`). Aceite: `npm run build` passa; README reproduzível.

**Prompt 10 (P1) — E2E**
> Adicione Playwright e um `tests/e2e/happy-path.spec.ts`: landing → selecionar perfil+interesses → revisar → relatório → copiar link. Aceite: `npm run test:e2e` passa localmente.

---

# H. Validação e lançamento (checklists)

**Funcional:** jornada landing→compartilhar completa; recarregar `/relatorio` reproduz; conteúdo bate com a seleção; nenhum dado inventado quando falta; personalização não muda o sentido das propostas.
**Editorial:** todo item `aprovado` tem fonte que abre no doc certo; rótulos de tipo corretos; paridade entre candidaturas; linguagem condicional nas interpretações; banner de transparência/período eleitoral; `revisadoEm` preenchido.
**Acessibilidade:** teclado em toda a jornada; foco visível; contraste AA; aria em selos/acordeões; alt em imagens; `lang="pt-BR"`.
**Privacidade:** sem cadastro; sem PII na URL; estado validado; sem secrets no cliente; explicação de qualquer storage/analytics.
**SEO/Compartilhamento:** title/description/OG/twitter; preview testado em app de mensagens real; URLs canônicas.
**Build/Deploy:** `npm run build` e `npm run test` verdes; deploy Vercel; jornada e OG verificados em produção no mobile.
**Métricas mínimas do MVP:** jornada concluível por um usuário leigo sem ajuda; links abrem em outro dispositivo; preview aparece no WhatsApp; 0 erros críticos no console.

---

# I. Riscos e mitigação

1. **Período eleitoral / jurídico (CRÍTICO e específico deste ciclo).** 2º turno em 25/10. Publicar comparação de candidaturas reais agora pode esbarrar na Lei 9.504/97 e em regras do TSE. *Mitigação/decisão padrão:* construir e validar nos próximos dias com dados "DEMONSTRATIVO"; só publicar conteúdo real após verificação TSE e, preferencialmente, com banner de transparência; **avaliar liberar a versão plena após 25/10/2026**. Decisão final sua — ver topo do plano.
2. **Conteúdo político não verificado.** *Mitigação:* pipeline `rascunho→em-revisao→aprovado`, teste que barra `aprovado` sem fonte, revisão humana obrigatória, `nao-localizado` em vez de inferência.
3. **Escopo excessivo.** *Mitigação:* comparação binária (2 candidaturas), 4 temas no mínimo, ordem de corte da Seção F.
4. **Erros de interpretação.** *Mitigação:* `tipoAfirmacao` + `LabelTag`, linguagem condicional, separar `resumoFiel` de `impactoCotidiano`.
5. **Dependência de APIs.** *Mitigação:* nenhuma API em runtime; tudo estático.
6. **Deploy.** *Mitigação:* Vercel zero-config; subir esqueleto cedo (Dia 1) p/ validar pipeline.
7. **Falta de tempo p/ testar.** *Mitigação:* testes focados nas 3 regras críticas; E2E é P1 cortável.
8. **Compartilhamento quebrado em mensageria.** *Mitigação:* testar OG real no Dia 2; estático primeiro (dinâmico é P1).
9. **Complexidade técnica.** *Mitigação:* sem estado global/DB/form lib; funções puras testáveis; componentes pequenos.

---

## Pendências que dependem de você (decisões de produto)

- **Decisão de publicação eleitoral** (I#1): publicar versão real agora (com ressalvas) **ou** manter demonstrativo até 25/10? (Recomendo a 2ª.)
- **Confirmação das candidaturas no TSE** (2.1) — bloqueante para conteúdo real.
- **Lista final de temas prioritários** para os 4–6 primeiros (sugiro: Emprego e salário, Custo de vida e impostos, Saúde, Educação — ajustáveis).

Fontes consultadas para o contexto eleitoral: [Eleição presidencial no Brasil em 2026 — Wikipédia](https://pt.wikipedia.org/wiki/Elei%C3%A7%C3%A3o_presidencial_no_Brasil_em_2026), [CNN Portugal — resultados](https://cnnportugal.iol.pt/mundo/eleicoesbrasil2026/resultados). **Ambas precisam ser reconfirmadas no TSE antes de publicar qualquer dado real.**
