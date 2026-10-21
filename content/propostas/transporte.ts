import type { Proposta } from "@/lib/types";

// Tema: Transporte público. Linguagem simples.
export const transporte: Proposta[] = [
  {
    id: "transporte-flavio-mobilidade-urbana",
    temaId: "transporte",
    candidaturaId: "flavio",
    titulo: "Bancos públicos para metrô, trens e ônibus elétricos",
    resumoFiel: `O plano diz que muita gente perde horas por dia em ônibus lotado para ir e voltar do trabalho. Promete planejar as cidades para que as pessoas precisem se deslocar menos, com o transporte coletivo como base.

Diz que os bancos públicos vão dar prioridade a empréstimos para linhas de metrô, transporte sobre trilhos e ônibus movidos a eletricidade ou biocombustível. Também fala em parcerias para diminuir o tempo de viagem e em dar preferência a projetos que juntam moradia e infraestrutura.

Fora das cidades, promete criar o Trem do Nordeste, uma linha de trem de passageiros ligando capitais da região.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se novas linhas de metrô, trem ou ônibus forem financiadas e construídas, quem usa transporte coletivo poderia gastar menos tempo no caminho. No Nordeste, o trem de passageiros poderia ser mais uma opção para viajar entre capitais. Isso dependeria de obras que levam anos.`,
    condicoes: [
      `Estados e cidades precisariam apresentar projetos e pedir os empréstimos`,
      `Os bancos públicos precisariam ter dinheiro disponível para essas obras`,
      `O Trem do Nordeste dependeria de projeto, licenças e obra`,
    ],
    incertezas: [
      `O plano não diz quanto dinheiro iria para o transporte nas cidades nem quais linhas seriam feitas`,
      `Não fala sobre o preço da passagem`,
      `Não diz quando o Trem do Nordeste ficaria pronto nem quais capitais ele ligaria`,
    ],
    relevantePara: [
      "clt",
      "servidor",
      "estudante",
      "autonomo-mei",
      "desempregado",
      "primeiro-emprego",
    ],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 51,
      },
    ],
  },
  {
    id: "transporte-lula-mobilidade-urbana",
    temaId: "transporte",
    candidaturaId: "lula",
    titulo: "Continuar investindo em metrô, trens, BRT e ônibus novos",
    resumoFiel: `O plano diz que o tempo perdido no trânsito, o transporte coletivo ruim e as passagens caras pesam na vida de quem mora nas cidades.

O que o plano diz que já foi feito: pelo Novo PAC (programa federal de obras), as obras já previstas vão somar 233 km de metrô, trem e VLT (bonde moderno) e 296 km de corredores só para ônibus (BRT). Também prevê a compra de 3.942 ônibus menos poluentes (Euro 6), 203 ônibus elétricos e 39 veículos sobre trilhos para 144 cidades.

O que promete para o próximo mandato: continuar apoiando obras de transporte coletivo que levam muita gente, como metrô e trem. E trocar aos poucos as frotas por veículos mais modernos e elétricos. Diz ainda que vai focar em ligar melhor as regiões metropolitanas e as cidades médias.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Se as obras previstas forem concluídas, quem mora nas cidades atendidas poderia ter mais linhas de metrô, trem e BRT, e ônibus mais novos. O tempo de viagem poderia cair, mas isso dependeria de cada obra e de cada cidade.`,
    condicoes: [
      `As obras precisariam continuar recebendo dinheiro do orçamento`,
      `Estados e cidades, que cuidam do transporte local, precisariam tocar os projetos`,
    ],
    incertezas: [
      `O plano não diz quanto dinheiro novo iria para o transporte nas cidades nem quais linhas seriam feitas`,
      `Cita as passagens caras como problema, mas não traz proposta sobre o preço da passagem`,
      `Não diz quando as obras ficariam prontas`,
    ],
    relevantePara: [
      "clt",
      "servidor",
      "estudante",
      "autonomo-mei",
      "desempregado",
      "primeiro-emprego",
    ],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 46,
      },
    ],
  },
];
