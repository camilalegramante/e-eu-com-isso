import type { Proposta } from "@/lib/types";

// Tema: Agricultura e alimentação.
// Linguagem simples (ver content/README.md).
export const agricultura: Proposta[] = [
  {
    id: "agricultura-flavio-seguro-titulo-irrigacao",
    temaId: "agricultura",
    candidaturaId: "flavio",
    titulo: "Seguro Rural, título da terra e mais irrigação",
    resumoFiel: `O plano quer ampliar o Seguro Rural e criar formas de reorganizar as dívidas dos produtores. Também fala em buscar acordos com Estados Unidos, China e Europa contra sanções aos produtos do Brasil.

Promete apoiar a produção de adubo (fertilizante) no Brasil, usando minerais como potássio e fosfato. Segundo o plano, hoje o país compra de fora a maior parte do adubo que usa.

Sobre a terra, diz que o governo Bolsonaro emitiu mais de 450 mil títulos de imóveis rurais. Promete retomar esse ritmo e entregar o documento da terra ao pequeno proprietário. Também promete reforçar a proteção do direito de propriedade.

Quer ampliar a área irrigada, com polos no Matopiba (região entre Maranhão, Tocantins, Piauí e Bahia) e no semiárido do Nordeste. Promete simplificar a outorga (licença para usar a água na irrigação), que hoje leva em média 24 meses. Fala ainda em ligar quem procura trabalho às vagas no campo, e em deixar quem recebe benefício social voltar a ele se o trabalho acabar.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem planta, um seguro maior e o título da terra poderiam facilitar o acesso a crédito e diminuir o prejuízo em uma safra ruim. Se o adubo feito no Brasil ficar mais barato, isso poderia ajudar no preço da comida, mas depende de muitos outros fatores. O plano não diz valores nem prazos.`,
    condicoes: [
      `O Seguro Rural e as obras de irrigação precisariam de dinheiro no orçamento`,
      `Reorganizar as dívidas do campo dependeria de regras aprovadas pelo governo e pelo Congresso`,
      `Produzir mais adubo no país dependeria de investimento de empresas`,
    ],
    incertezas: [
      `O plano não diz quanto o Seguro Rural seria ampliado`,
      `Não diz quantos títulos de terra seriam entregues nem em quanto tempo`,
      `Não fala sobre crédito para a agricultura familiar nem sobre combate à fome`,
    ],
    relevantePara: ["rural", "empresario", "casa-familia", "desempregado"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 53,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 54,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 55,
      },
    ],
  },
  {
    id: "agricultura-lula-plano-safra-agricultura-familiar",
    temaId: "agricultura",
    candidaturaId: "lula",
    titulo: "Plano Safra, agricultura familiar e reforma agrária",
    resumoFiel: `O que o plano diz que já foi feito: o Brasil saiu do Mapa da Fome (levantamento da ONU sobre a fome no mundo). O plano atribui isso ao Bolsa Família, ao salário mínimo, à merenda escolar e às compras de alimentos da agricultura familiar pelo governo (PAA). Diz também que o crédito do Pronaf (crédito para a agricultura familiar) foi recorde todos os anos.

O que promete para a agricultura familiar: continuar ampliando o Plano Safra da Agricultura Familiar, com prioridade para alimentos da cesta básica. Manter crédito especial para jovens, mulheres e cooperativas, e simplificar o pedido com ferramentas digitais. Manter a ampliação do PAA e reforçar o Garantia-Safra (ajuda a quem perde a safra por seca ou excesso de chuva) e o seguro rural.

Sobre a terra: continuar a reforma agrária, assentando famílias acampadas. Acelerar a regularização de terras, principalmente no Norte, e a titulação de territórios quilombolas. Também promete ampliar as cisternas em regiões secas.

Para o agronegócio: ampliar os recursos do Plano Safra, com juros compatíveis com a atividade. Criar um programa para proteger o campo dos efeitos do clima, com mais áreas irrigadas. E fortalecer o seguro rural e a Embrapa (empresa pública de pesquisa agropecuária).`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem é agricultor familiar, o crédito do Pronaf, as compras do PAA e o Garantia-Safra poderiam continuar e crescer. Para quem compra comida, o efeito no preço dependeria da produção e de muitos outros fatores. O plano não diz valores nem prazos.`,
    condicoes: [
      `O Plano Safra, o PAA e o Garantia-Safra precisariam de dinheiro no orçamento todo ano`,
      `A reforma agrária e a regularização de terras dependeriam da estrutura do Incra (órgão federal que cuida da reforma agrária)`,
      `O novo instrumento contra grandes perdas de safra ainda seria discutido com o setor`,
    ],
    incertezas: [
      `O plano não diz de quanto seria o aumento do Plano Safra`,
      `Não diz quantas famílias seriam assentadas nem em quanto tempo`,
      `Não detalha como funcionaria o programa contra os efeitos do clima`,
    ],
    relevantePara: ["rural", "empresario", "casa-familia", "desempregado"],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 58,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 59,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 60,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 61,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 62,
      },
    ],
  },
];
