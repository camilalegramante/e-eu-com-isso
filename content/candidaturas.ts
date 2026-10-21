import type { Candidatura } from "@/lib/types";

// Candidaturas do 2º turno das eleições presidenciais de 2026.
// Fonte primária de cada uma: o respectivo plano de governo (PDF em /public/fontes).
// A ordem alfabética por nome é usada de forma consistente na interface para
// não sugerir preferência. Cores são neutras e equivalentes (não-partidárias).
export const CANDIDATURAS: Candidatura[] = [
  {
    id: "flavio",
    nome: "Flávio Bolsonaro",
    partido: "PL",
    corToken: "neutra-2", // azul
    planoDeGoverno: {
      titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
      url: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl/@@display-file/file/proposta-pl.pdf",
      tipo: "plano-de-governo",
    },
  },
  {
    id: "lula",
    nome: "Lula",
    partido: "PT",
    corToken: "neutra-1", // verde
    planoDeGoverno: {
      titulo: "Programa de Governo — Lula (PT)",
      url: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt/@@display-file/file/proposta-pt.pdf",
      tipo: "plano-de-governo",
    },
  },
];

// Ordem canônica de exibição (estável, alfabética por nome).
export const CANDIDATURAS_ORDENADAS = [...CANDIDATURAS].sort((a, b) =>
  a.nome.localeCompare(b.nome, "pt-BR"),
);
