import type { Proposta } from "@/lib/types";

// Tema: Tecnologia e inteligência artificial. Linguagem simples.
// Ficha digital de saúde e telessaúde ficam em "saude"; INSS digital em "previdencia";
// câmeras com reconhecimento facial em "seguranca".
export const tecnologia: Proposta[] = [
  {
    id: "tecnologia-flavio-estado-digital",
    temaId: "tecnologia",
    candidaturaId: "flavio",
    titulo: "Todos os serviços do governo pela internet e pacotes de conexão",
    resumoFiel: `O plano promete digitalizar 100% dos serviços do Governo Federal que podem ser feitos pela internet. O governo deixaria de pedir documentos que já tem. Uma identidade digital única, ligada ao Gov.br, permitiria que assistentes automáticos indiquem os serviços e benefícios de cada pessoa, inclusive por comando de voz.

Promete garantir pacotes de internet para quem precisa estudar, procurar emprego ou pedir ajuda, com prioridade para mulheres do programa Brasil por Elas. Também quer levar internet a lugares com pouca cobertura, como escolas, áreas rurais e regiões de fronteira, e levar computadores, tablets e internet às escolas.

Quer espalhar a inteligência artificial (IA) entre pequenas e médias empresas e propor uma lei com menos regras para criar e inovar. Diz que os dados do cidadão serão tratados com privacidade e segurança e promete reforçar a proteção contra ataques e fraudes pela internet.

O plano diz que o governo Bolsonaro já fez o leilão do 5G e instalou mais de 21 mil pontos de internet pelo Programa Wi-Fi Brasil.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem resolve coisas no governo poderia fazer mais serviços pelo celular, sem fila e sem levar o mesmo documento de novo. Quem mora em área rural ou tem pouco sinal poderia ganhar acesso à internet. Isso dependeria de quem teria direito aos pacotes e de quando a conexão chegaria a cada lugar.`,
    condicoes: [
      `Ter dinheiro no orçamento para os pacotes de internet e a expansão da rede`,
      `Ligar os sistemas dos órgãos do governo entre si`,
      `O Congresso precisa aprovar a nova lei sobre inovação`,
    ],
    incertezas: [
      `O plano não diz quem teria direito aos pacotes de internet, nem o tamanho deles`,
      `Não diz o que mudaria na lei sobre inovação nem quais regras seriam retiradas`,
      `Não detalha como os dados pessoais seriam protegidos nos assistentes automáticos`,
    ],
    relevantePara: [
      "estudante",
      "autonomo-mei",
      "empresario",
      "aposentado",
      "desempregado",
      "casa-familia",
      "rural",
    ],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 23,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 24,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 25,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 35,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 56,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 57,
      },
    ],
  },
  {
    id: "tecnologia-lula-soberania-digital",
    temaId: "tecnologia",
    candidaturaId: "lula",
    titulo: "Mais internet, IA feita no Brasil e regras para as plataformas",
    resumoFiel: `O plano promete continuar levando os serviços públicos para a internet e melhorar o uso de plataformas como o Gov.br. Segundo o plano, o Gov.br já reúne mais de 5 mil serviços. Também quer criar uma política para ensinar pessoas de todas as idades a usar a internet com senso crítico, combater a desinformação e proteger a privacidade.

Promete levar fibra óptica (cabo de internet rápida) aos 11% dos municípios que ainda não têm e ampliar o 5G no campo, com prioridade para Norte, Nordeste e periferias. Diz que já levou internet adequada a 75% das escolas e quer chegar a todas no próximo mandato.

Quer apoiar a inteligência artificial (IA) feita por empresas brasileiras, criar modelos de IA em português e exigir regras ambientais para os data centers (prédios com muitos computadores). Também quer avançar na regulação das redes sociais contra desinformação e campanhas de ódio, e tornar mais transparentes as decisões tomadas por sistemas automáticos.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem mora no interior, no campo ou na periferia poderia ter internet mais rápida, se a rede chegar até lá. Quem usa redes sociais poderia ver mudanças no que as plataformas mostram ou retiram, dependendo das regras aprovadas. Estudantes poderiam ter internet melhor na escola.`,
    condicoes: [
      `Ter dinheiro do orçamento e do FUST (fundo para levar internet a todo o país) para expandir a rede`,
      `Regras novas para as redes sociais podem precisar de lei aprovada no Congresso`,
      `Empresas de telefonia e internet precisam participar da expansão`,
    ],
    incertezas: [
      `O plano não diz em quanto tempo a fibra óptica e o 5G chegariam a cada região`,
      `Não detalha quais seriam as regras para as redes sociais`,
      `Não diz quanto custaria a política de ensino digital nem como funcionaria`,
    ],
    relevantePara: [
      "estudante",
      "autonomo-mei",
      "empresario",
      "aposentado",
      "desempregado",
      "casa-familia",
      "rural",
    ],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 16,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 17,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 32,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 54,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 55,
      },
    ],
  },
];
