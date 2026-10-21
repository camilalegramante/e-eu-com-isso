# Guia editorial — conteúdo de "E eu com isso?"

Este diretório contém **todo o conteúdo político** da aplicação, separado da interface.
Nada aqui é gerado em tempo real. Cada item é extraído de uma fonte primária,
resumido com fidelidade e **revisado manualmente** antes de ir ao ar.

## Arquivos

- `candidaturas.ts` — candidaturas comparadas e o plano de governo (fonte primária) de cada uma.
- `temas.ts` — catálogo de temas (interesses) e quais têm conteúdo revisado.
- `perfis.ts` — opções de perfil do onboarding.
- `propostas/<tema>.ts` — propostas por tema, com as duas candidaturas lado a lado.
- `propostas/index.ts` — agrega tudo.

As fontes primárias (PDFs dos planos) ficam em `/public/fontes/` e são
referenciadas por URL + número de página.

## Fluxo de revisão (obrigatório)

Toda proposta nasce `statusRevisao: "rascunho"`. Ela só pode virar `"aprovado"`
depois que uma pessoa confirmar os 7 critérios abaixo. Itens não aprovados
**não aparecem** em produção (só em desenvolvimento, com selo "DEMONSTRATIVO").

### Checklist por proposta

1. A candidatura e o documento foram verificados? (plano registrado no TSE / `/public/fontes`)
2. `resumoFiel` reflete o documento **sem distorcer** e sem adjetivos de valor?
3. `tipoAfirmacao` está correto?
   - `proposta-documentada`: está escrito no plano.
   - `historico`: ação/decisão anterior documentada.
   - `interpretacao`: leitura de possível impacto (nossa, rotulada).
   - `previsao-incerta`: efeito futuro condicional.
   - `nao-localizado`: não encontramos proposta documentada sobre o tema.
4. Há **≥ 1 fonte** com URL e página corretas (quando `tipoAfirmacao != "nao-localizado"`)?
5. `impactoCotidiano`, `condicoes` e `incertezas` usam linguagem condicional
   ("poderia", "dependeria de", "o plano não especifica")?
6. **Paridade:** o tema foi preenchido para **todas** as candidaturas? Quando uma
   não trata do assunto, cria-se entrada `nao-localizado` — nunca se omite em silêncio
   nem se infere posição a partir da ausência.
7. `statusRevisao: "aprovado"` e `revisadoEm` preenchidos (YYYY-MM-DD).

Um teste automatizado (`tests/conteudo.test.ts`) falha se: um item `aprovado`
não tiver fonte; uma fonte tiver URL malformada; um tema publicado não tiver
paridade entre as candidaturas.

## Template de proposta

```ts
{
  id: "custo-flavio-tributaria",
  temaId: "custo-de-vida",
  candidaturaId: "flavio",
  titulo: "Correção da reforma tributária",
  resumoFiel:
    "O plano afirma que ... (resumo fiel, sem adjetivos).",
  tipoAfirmacao: "proposta-documentada",
  impactoCotidiano:
    "Para quem ..., isso poderia significar ... (interpretação).",
  condicoes: ["Dependeria de aprovação no Congresso", "..."],
  incertezas: ["O plano não especifica prazos nem valores", "..."],
  relevantePara: ["clt", "autonomo-mei"],
  fontes: [
    {
      titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
      url: "/fontes/proposta-flavio.pdf",
      tipo: "plano-de-governo",
      pagina: 71,
    },
  ],
  statusRevisao: "rascunho",
  revisadoEm: "2026-10-21",
}
```

## Princípios inegociáveis

- Não inventar propostas, números, citações, páginas, URLs ou fontes.
- Não transformar possibilidade em certeza.
- Não concluir que a ausência de uma proposta significa que a candidatura é contra.
- Mesmo tratamento (detalhe, selos, fontes) para todas as candidaturas.
- A personalização só escolhe o que mostrar e enfatiza — nunca altera os fatos.
