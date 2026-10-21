import type { Proposta } from "@/lib/types";

// Tema: Diversidade e inclusão. Linguagem simples.
// Políticas para mulheres ficam no tema "direitos-mulheres".
export const diversidade: Proposta[] = [
  {
    id: "diversidade-flavio-cuidado-terras-esporte",
    temaId: "diversidade",
    candidaturaId: "flavio",
    titulo: "Apoio a idosos e pessoas com deficiência e autonomia nas terras indígenas",
    resumoFiel: `O plano não tem uma parte só sobre diversidade. As medidas sobre o tema aparecem nas áreas de cuidado, esporte, cultura e terras.

Para idosos, promete o programa Casa Segura para Envelhecer, com ajuda para famílias de menor renda adaptarem a casa. Também promete um aplicativo de companhia com alertas de perigo e mais instituições de longa permanência (casas que acolhem idosos).

Para pessoas com deficiência e com doenças raras, diz que as políticas vão envolver todas as áreas do governo. Promete Centros de Referência em Transtorno do Espectro Autista e incentivo ao paradesporto, com busca de talentos desde a base.

Para povos indígenas e quilombolas, promete autonomia para decidirem sobre atividades produtivas em suas terras, respeitando as regras ambientais. Prevê indenização quando houver limites ao uso da terra.

Na cultura, cita a miscigenação e a mistura de culturas como motivo de orgulho.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Famílias de menor renda com idosos poderiam ter ajuda para adaptar a casa, e famílias com pessoas autistas poderiam ter um centro de atendimento mais perto. Para indígenas e quilombolas, poderia mudar o que é permitido produzir nas suas terras. Tudo depende de regras e valores que o plano não detalha.`,
    condicoes: [
      `Ter dinheiro no orçamento para os programas de idosos e os centros de autismo`,
      `Parcerias com estados e municípios para abrir os serviços`,
      `Mudar as regras de uso das terras indígenas e quilombolas`,
    ],
    incertezas: [
      `O plano não diz quantas famílias seriam atendidas nem quanto custaria`,
      `Não explica quais atividades produtivas seriam liberadas nas terras`,
      `Não diz como seriam calculadas as indenizações`,
      `O plano não traz propostas específicas sobre combate ao racismo ou para a população LGBTQIA+`,
    ],
    relevantePara: ["aposentado", "casa-familia", "rural"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 39,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 40,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 41,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 50,
      },
    ],
  },
  {
    id: "diversidade-lula-igualdade-racial-inclusao",
    temaId: "diversidade",
    candidaturaId: "lula",
    titulo: "Combate ao racismo, terras tradicionais e apoio a idosos e pessoas com deficiência",
    resumoFiel: `O plano diz que vai manter o combate ao racismo no centro da sua estratégia. Promete avançar na regulamentação do Estatuto da Igualdade Racial e continuar as cotas para pessoas negras no serviço público. Segundo o plano, as cotas mudaram o perfil das universidades e passaram a incluir quilombolas no atual mandato.

Para quilombolas, promete continuar e acelerar a titulação de territórios (o documento que reconhece a terra da comunidade). Para indígenas, promete seguir com a demarcação de terras e a retirada de invasores quando necessário, e implantar a Universidade Indígena.

Para idosos, promete ampliar os Centros-Dia, as vagas públicas em instituições de longa permanência (casas que acolhem idosos) e o atendimento em casa pelo SUS. Segundo o plano, esse atendimento em casa (PADI Brasil) já existe em 2.655 municípios.

Para pessoas com deficiência, promete manter o programa Viver sem Limites, fiscalizar mais as cotas de contratação nas empresas e abrir mais centros de reabilitação. Também diz que vai considerar gênero, orientação sexual e raça ao criar políticas, para atender as pessoas LGBTQIAP+.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem cuida de um idoso poderia ter mais acesso a Centros-Dia e a atendimento em casa. Pessoas com deficiência poderiam encontrar mais vagas de emprego, se a fiscalização das cotas aumentar. Comunidades quilombolas e indígenas poderiam ter suas terras reconhecidas mais rápido, mas isso depende de processos longos.`,
    condicoes: [
      `Ter dinheiro no orçamento para ampliar os serviços`,
      `Parcerias com municípios para os Centros-Dia e o atendimento em casa`,
      `Concluir os processos de titulação e demarcação de terras`,
    ],
    incertezas: [
      `O plano não diz quantas terras seriam tituladas ou demarcadas nem em que prazo`,
      `Não detalha o que mudaria na regulamentação do Estatuto da Igualdade Racial`,
      `Não diz quais ações concretas seriam feitas para a população LGBTQIAP+`,
    ],
    relevantePara: [
      "aposentado",
      "casa-familia",
      "rural",
      "estudante",
      "servidor",
      "clt",
    ],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 20,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 22,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 23,
      },
    ],
  },
];
