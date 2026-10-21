import type { Proposta } from "@/lib/types";

// Tema: Custo de vida e impostos. Status "aprovado" (revisado em 2026-10-21).
// Linguagem simples (ver content/README.md).
export const custoDeVida: Proposta[] = [
  {
    id: "custo-de-vida-flavio-reforma-tributaria",
    temaId: "custo-de-vida",
    candidaturaId: "flavio",
    titulo: "Menos imposto e conta de luz mais barata",
    resumoFiel: `O plano quer rever a reforma dos impostos que já foi aprovada. A ideia é cobrar menos imposto sobre o que se produz e se compra.

Promete baixar o imposto da conta de luz e dos combustíveis. Quer deixar a conta de luz mais simples, tirando aos poucos as taxas extras que vêm nela. E quer manter o desconto na luz para quem tem menos (tarifa social).

Para a comida ficar mais barata, fala em melhorar o transporte das colheitas, guardar mais safra em armazéns e ampliar o seguro de quem planta (Seguro Rural).`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se as mudanças forem aprovadas, compras, conta de luz e combustível poderiam ficar mais baratos. O plano não diz quanto.`,
    condicoes: [
      `O Congresso precisa aprovar as mudanças nos impostos`,
      `O governo precisaria ter dinheiro para cobrar menos imposto sem faltar em outras áreas`,
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
      "estudante",
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
        pagina: 32,
      },
    ],
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
  {
    id: "custo-de-vida-lula-reforma-tributaria",
    temaId: "custo-de-vida",
    candidaturaId: "lula",
    titulo: "Debater luz mais barata e proteger o preço dos combustíveis",
    resumoFiel: `O que o plano diz que já foi feito: a reforma dos impostos sobre as compras foi aprovada. A cesta básica vai ficar sem esses impostos. E os mais pobres vão receber parte do imposto de volta (o chamado "cashback").

Diz também que quem ganha muito passou a pagar mais Imposto de Renda, e quem ganha pouco, menos.

Cita dois programas que já existem. O Luz do Povo dá luz de graça para famílias do Cadastro Único (a lista do governo de famílias de baixa renda) que gastam até 80 kWh por mês. O Gás do Povo dá botijão de gás de graça para famílias de baixa renda.

O que promete para o próximo mandato: abrir um debate sobre como baratear a conta de luz de casas e empresas. E continuar agindo para que, quando o preço sobe lá fora, isso não chegue ao combustível aqui. Também fala em consolidar a reforma dos impostos.`,
    // Uma única entrada por candidatura e tema (ver lib/personalization.ts).
    // Mantida como "proposta-documentada" porque há compromissos para o
    // próximo mandato; o texto separa claramente o que já foi feito.
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se o Luz do Povo e o Gás do Povo forem mantidos, famílias de baixa renda poderiam continuar recebendo essa ajuda. Sobre a conta de luz, o plano só promete um debate. Não dá para saber se ela ficaria mais barata, nem quanto.`,
    condicoes: [
      `Dependeria de como a reforma dos impostos for aplicada nos próximos anos`,
      `Os programas Luz do Povo e Gás do Povo precisariam continuar tendo dinheiro no orçamento`,
    ],
    incertezas: [
      `O plano não explica como o dinheiro de volta (cashback) vai funcionar`,
      `O plano fala em "debate" sobre baratear a luz, sem dizer o que seria feito`,
      `O plano não diz claramente se vai manter ou ampliar o Luz do Povo e o Gás do Povo`,
    ],
    relevantePara: [
      "clt",
      "autonomo-mei",
      "empresario",
      "aposentado",
      "casa-familia",
      "rural",
      "desempregado",
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
        pagina: 48,
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
    statusRevisao: "aprovado",
    revisadoEm: "2026-10-21",
  },
];
