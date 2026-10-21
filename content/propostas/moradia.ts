import type { Proposta } from "@/lib/types";

// Tema: Moradia e financiamento. Status "rascunho". Linguagem simples.
export const moradia: Proposta[] = [
  {
    id: "moradia-flavio-caixa-casa-propria-saneamento",
    temaId: "moradia",
    candidaturaId: "flavio",
    titulo: "Casa própria pela Caixa e mais água e esgoto",
    resumoFiel: `O plano quer transformar a Caixa num "banco da prosperidade", juntando num só lugar crédito, ajuda para organizar as contas e o financiamento da casa. Promete retomar o Casa Verde e Amarela, com meta de 2,5 milhões de casas e os menores juros possíveis, ajudar a regularizar o documento do imóvel (de preferência no nome da mulher) e acelerar a chegada de água tratada e esgoto, inclusive no campo.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem paga aluguel ou mora em casa sem documento poderia ter mais chance de financiar a casa e conseguir a escritura. Famílias sem água e esgoto poderiam ser atendidas. Depende de como a Caixa e as parcerias seriam montadas.`,
    condicoes: [
      `Montar de fato o novo papel da Caixa`,
      `Fazer parcerias e ter dinheiro para as casas e o saneamento`,
    ],
    incertezas: [
      `O plano não diz de onde viria o dinheiro nem o prazo das 2,5 milhões de casas`,
      `Não diz quem teria direito ao financiamento`,
    ],
    relevantePara: ["casa-familia", "autonomo-mei", "rural"],
    fontes: [
      {
        titulo: "A CAIXA como Banco da Prosperidade",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 46,
      },
      {
        titulo: "A casa própria",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 47,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "moradia-lula-mcmv-direito-cidade-saneamento",
    temaId: "moradia",
    candidaturaId: "lula",
    titulo: "Minha Casa Minha Vida e melhoria das periferias",
    resumoFiel: `O plano quer manter e ampliar o Minha Casa Minha Vida para várias faixas de renda, com foco em quem ganha menos, e melhorar a qualidade das casas. Cita usar imóveis e terrenos do governo para moradia e para regularizar o documento de quem já mora no local, o programa Periferia Viva (urbanizar favelas) e continuar investindo em água tratada e esgoto, dando prioridade às periferias.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Famílias de renda baixa e média poderiam ter mais acesso ao financiamento da casa, e quem mora em área irregular poderia conseguir o documento do imóvel. Depende do dinheiro do programa e de acordo com estados e cidades.`,
    condicoes: [
      `Aprovar o orçamento e manter os programas`,
      `Depende de estados e cidades para obras de saneamento e urbanização`,
    ],
    incertezas: [
      `O plano não detalha as regras da nova faixa para a classe média`,
      `Não dá prazo final para levar água e esgoto a todos`,
    ],
    relevantePara: ["casa-familia", "clt", "autonomo-mei", "desempregado", "rural"],
    fontes: [
      {
        titulo: "Fortalecer o direito à cidade",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 44,
      },
      {
        titulo: "Minha Casa Minha Vida",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 45,
      },
      {
        titulo: "Periferia Viva e saneamento",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 46,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
