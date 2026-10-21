import type { Proposta } from "@/lib/types";

// Tema: Custo de vida e impostos. Status "rascunho" — aguardando revisão humana.
// Linguagem simples (ver content/README.md).
export const custoDeVida: Proposta[] = [
  {
    id: "custo-de-vida-flavio-reforma-tributaria",
    temaId: "custo-de-vida",
    candidaturaId: "flavio",
    titulo: "Menos imposto e conta de luz mais barata",
    resumoFiel: `O plano quer mudar a reforma dos impostos que já foi aprovada para cobrar menos imposto sobre as compras do dia a dia. Promete baixar o imposto da conta de luz e dos combustíveis e deixar a conta de luz mais simples, mantendo o desconto (tarifa social) para quem tem menos. Também fala em baratear a comida, melhorando o transporte e o armazenamento das colheitas.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se virar lei, compras, conta de luz e combustível poderiam ficar um pouco mais baratos. Mas isso depende de o Congresso aprovar as mudanças.`,
    condicoes: [
      `O Congresso precisa aprovar as mudanças nos impostos`,
      `Ter dinheiro no orçamento para cobrar menos sem faltar em outras áreas`,
    ],
    incertezas: [
      `O plano não diz quando isso aconteceria`,
      `Não diz de quanto seria a redução dos impostos`,
    ],
    relevantePara: [
      "clt",
      "autonomo-mei",
      "empresario",
      "aposentado",
      "casa-familia",
      "rural",
      "desempregado",
    ],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 30,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 31,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 33,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "custo-de-vida-lula-reforma-tributaria",
    temaId: "custo-de-vida",
    candidaturaId: "lula",
    titulo: "Cesta básica sem imposto e desconto na luz e no gás",
    resumoFiel: `O plano lembra que a reforma dos impostos sobre o consumo já foi aprovada: a cesta básica fica sem esses impostos e as famílias mais pobres recebem parte do imposto de volta (o chamado "cashback"). Também cita menos Imposto de Renda para quem ganha pouco e mais para quem ganha muito. Fala ainda no Luz do Povo (conta de luz de graça para famílias de baixa renda que gastam pouco) e no Gás do Povo (botijão de gás de graça para quem tem menos).`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para famílias de baixa renda, a compra no mercado, a conta de luz e o botijão de gás poderiam pesar menos. Isso depende de os programas seguirem com dinheiro e de regras que ainda vão ser definidas.`,
    condicoes: [
      `Terminar de definir as regras da reforma dos impostos e do dinheiro de volta (cashback)`,
      `Manter o dinheiro dos programas Luz do Povo e Gás do Povo`,
    ],
    incertezas: [
      `O plano não explica direitinho como o dinheiro de volta vai funcionar`,
      `Não diz o valor final dos novos impostos sobre o consumo`,
    ],
    relevantePara: [
      "clt",
      "autonomo-mei",
      "desempregado",
      "aposentado",
      "casa-familia",
      "rural",
      "estudante",
    ],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 11,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 65,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 66,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
