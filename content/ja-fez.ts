import type { AcaoNaDirecao } from "@/lib/types";

// "O candidato já fez algo nessa direção?" — o oposto dos pontos de atenção.
// Critérios (iguais para todas as candidaturas, os mesmos do histórico):
// - Ação do PRÓPRIO candidato: voto, projeto de lei de autoria dele, ato do
//   governo dele ou declaração pública com registro confiável. Atos de
//   parentes, aliados ou do partido não contam.
// - Relação direta com uma proposta do plano, no mesmo tema.
// - Fonte verificável (oficial e/ou jornalismo profissional), com link.
// - Fato, não elogio: diz o que foi feito e o que aconteceu depois, sem
//   afirmar que deu certo se a fonte não mostra isso.
// A lista não é completa. Cada item é aprovado antes de entrar.

const PLANALTO = "https://www.planalto.gov.br/ccivil_03/";

export const ACOES_NA_DIRECAO: AcaoNaDirecao[] = [
  // ---- Lula (pesquisa de 22/10/2026; leis conferidas no site do Planalto) ----
  {
    id: "ja-fez-lula-farmacia-popular",
    propostaId: "saude-lula-sus-agora-tem-especialistas",
    oQuePlanoDiz: `Promete manter a Farmácia Popular, com remédios de graça, e passar a oferecer nela alguns exames.`,
    oQueFez: `Em 2004, Lula sancionou a lei que autorizou a Fiocruz a vender remédios a baixo custo para a população. É a lei que deu origem à Farmácia Popular.`,
    dataAcao: "2004-04-13",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A proposta é manter e ampliar um programa que começou com essa lei, assinada por ele no primeiro mandato.`,
    fontes: [
      {
        titulo: "Lei nº 10.858, de 13 de abril de 2004 (Planalto)",
        url: `${PLANALTO}_ato2004-2006/2004/lei/l10.858.htm`,
        tipo: "legislacao",
        publicadoEm: "2004-04-13",
      },
    ],
  },
  {
    id: "ja-fez-lula-salario-minimo-lei-14663",
    propostaId: "emprego-salario-lula-valorizar-trabalho",
    oQuePlanoDiz: `Promete manter a política de valorização do salário mínimo.`,
    oQueFez: `Em 2023, Lula sancionou a lei que criou uma regra fixa para o aumento do salário mínimo a partir de 2024: a inflação do ano anterior mais o crescimento da economia (PIB) de dois anos antes.`,
    dataAcao: "2023-08-28",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A política que o plano promete manter é a criada por essa lei, no mandato atual.`,
    fontes: [
      {
        titulo: "Lei nº 14.663, de 28 de agosto de 2023 (Planalto)",
        url: `${PLANALTO}_ato2023-2026/2023/lei/l14663.htm`,
        tipo: "legislacao",
        publicadoEm: "2023-08-28",
      },
    ],
  },
  {
    id: "ja-fez-lula-mei",
    propostaId: "empreendedorismo-lula-pequenos-negocios",
    oQuePlanoDiz: `Promete simplificar mais a abertura e a gestão de pequenos negócios.`,
    oQueFez: `Em 2008, Lula sancionou a lei que criou o Microempreendedor Individual (MEI), com um registro mais simples para quem trabalha por conta própria.`,
    dataAcao: "2008-12-19",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O MEI foi criado para facilitar a formalização de pequenos negócios, que é o que a proposta promete aprofundar.`,
    fontes: [
      {
        titulo: "Lei Complementar nº 128, de 19 de dezembro de 2008 (Planalto)",
        url: `${PLANALTO}leis/lcp/lcp128.htm`,
        tipo: "legislacao",
        publicadoEm: "2008-12-19",
      },
    ],
  },
  {
    id: "ja-fez-lula-estatuto-desarmamento",
    propostaId: "seguranca-lula-susp-ministerio",
    oQuePlanoDiz: `Promete manter o controle de armas.`,
    oQueFez: `Em 2003, Lula sancionou o Estatuto do Desarmamento. A lei regula o registro, a posse e a venda de armas e proíbe o porte de arma no país, salvo nos casos que ela prevê.`,
    dataAcao: "2003-12-22",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O controle de armas que a proposta promete manter tem como base essa lei, sancionada no primeiro mandato dele.`,
    fontes: [
      {
        titulo: "Lei nº 10.826, de 22 de dezembro de 2003 (Planalto)",
        url: `${PLANALTO}leis/2003/l10.826.htm`,
        tipo: "legislacao",
        publicadoEm: "2003-12-22",
      },
    ],
  },
  {
    id: "ja-fez-lula-maria-da-penha",
    propostaId: "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial",
    oQuePlanoDiz: `Promete continuar o Pacto contra o feminicídio e diz que reduziu o tempo para sair uma medida protetiva.`,
    oQueFez: `Em 2006, Lula sancionou a Lei Maria da Penha, que criou regras para coibir a violência doméstica contra a mulher, entre elas as medidas protetivas de urgência.`,
    dataAcao: "2006-08-07",
    tipoAcao: "ato-de-governo",
    porQueCombina: `As medidas protetivas citadas no plano foram criadas por essa lei, sancionada por ele.`,
    fontes: [
      {
        titulo: "Lei nº 11.340, de 7 de agosto de 2006 (Planalto)",
        url: `${PLANALTO}_ato2004-2006/2006/lei/l11340.htm`,
        tipo: "legislacao",
        publicadoEm: "2006-08-07",
      },
    ],
  },
  {
    id: "ja-fez-lula-reuni",
    propostaId: "educacao-lula-pe-de-meia-creches-ifs",
    oQuePlanoDiz: `Promete mais vagas em faculdades públicas.`,
    oQueFez: `Em 2007, Lula assinou o decreto que criou o Reuni, programa para ampliar o acesso e a permanência de alunos nas universidades federais.`,
    dataAcao: "2007-04-24",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O Reuni teve o mesmo objetivo que a proposta: mais alunos nas universidades públicas federais.`,
    fontes: [
      {
        titulo: "Decreto nº 6.096, de 24 de abril de 2007 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2007/decreto/d6096.htm`,
        tipo: "legislacao",
        publicadoEm: "2007-04-24",
      },
    ],
  },
  {
    id: "ja-fez-lula-institutos-federais",
    propostaId: "educacao-lula-pe-de-meia-creches-ifs",
    oQuePlanoDiz: `Promete mais institutos federais (escolas públicas de ensino técnico).`,
    oQueFez: `Em 2008, Lula sancionou a lei que criou os Institutos Federais de Educação, Ciência e Tecnologia.`,
    dataAcao: "2008-12-29",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A proposta é ampliar uma rede de escolas criada por essa lei.`,
    fontes: [
      {
        titulo: "Lei nº 11.892, de 29 de dezembro de 2008 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2008/lei/l11892.htm`,
        tipo: "legislacao",
        publicadoEm: "2008-12-29",
      },
    ],
  },
  {
    id: "ja-fez-lula-minha-casa-minha-vida",
    propostaId: "moradia-lula-mcmv-direito-cidade-saneamento",
    oQuePlanoDiz: `Promete manter e ampliar o Minha Casa Minha Vida.`,
    oQueFez: `Em março de 2009, Lula assinou a medida provisória que criou o programa Minha Casa, Minha Vida. Ela virou a Lei nº 11.977, em julho de 2009.`,
    dataAcao: "2009-03-25",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O programa que a proposta promete ampliar foi criado por ele, no segundo mandato.`,
    fontes: [
      {
        titulo: "Medida Provisória nº 459, de 25 de março de 2009 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2009/mpv/459.htm`,
        tipo: "legislacao",
        publicadoEm: "2009-03-25",
      },
      {
        titulo: "Lei nº 11.977, de 7 de julho de 2009 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2009/lei/l11977.htm`,
        tipo: "legislacao",
        publicadoEm: "2009-07-07",
      },
    ],
  },
  {
    id: "ja-fez-lula-paa",
    propostaId: "agricultura-lula-plano-safra-agricultura-familiar",
    oQuePlanoDiz: `Promete manter a ampliação do PAA, programa de compra de alimentos da agricultura familiar pelo governo.`,
    oQueFez: `Em 2003, Lula sancionou a lei que criou o Programa de Aquisição de Alimentos (PAA), para comprar da agricultura familiar e levar comida a quem passa fome.`,
    dataAcao: "2003-07-02",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O programa que a proposta promete ampliar foi criado por essa lei, no primeiro ano de governo dele.`,
    fontes: [
      {
        titulo: "Lei nº 10.696, de 2 de julho de 2003, art. 19 (Planalto)",
        url: `${PLANALTO}leis/2003/l10.696.htm`,
        tipo: "legislacao",
        publicadoEm: "2003-07-02",
      },
    ],
  },
  {
    id: "ja-fez-lula-terra-legal",
    propostaId: "agricultura-lula-plano-safra-agricultura-familiar",
    oQuePlanoDiz: `Promete acelerar a regularização de terras, principalmente no Norte.`,
    oQueFez: `Em 2009, Lula sancionou a lei sobre a regularização de terras ocupadas em áreas da União na Amazônia Legal. A lei veio de uma medida provisória dele.`,
    dataAcao: "2009-06-25",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A lei trata justamente da regularização de terras na região que o plano prioriza.`,
    fontes: [
      {
        titulo: "Lei nº 11.952, de 25 de junho de 2009 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2009/lei/l11952.htm`,
        tipo: "legislacao",
        publicadoEm: "2009-06-25",
      },
    ],
  },
  {
    id: "ja-fez-lula-icmbio",
    propostaId: "meio-ambiente-lula-desmatamento-liquido-clima",
    oQuePlanoDiz: `Promete destinar terras públicas para áreas de proteção.`,
    oQueFez: `Em 2007, Lula sancionou a lei que criou o Instituto Chico Mendes (ICMBio), órgão federal que cuida das unidades de conservação, como parques e reservas.`,
    dataAcao: "2007-08-28",
    tipoAcao: "ato-de-governo",
    porQueCombina: `O órgão criado por essa lei é o que cuida das áreas de proteção federais que a proposta quer ampliar.`,
    fontes: [
      {
        titulo: "Lei nº 11.516, de 28 de agosto de 2007 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2007/lei/l11516.htm`,
        tipo: "legislacao",
        publicadoEm: "2007-08-28",
      },
    ],
  },
  {
    id: "ja-fez-lula-politica-clima",
    propostaId: "meio-ambiente-lula-desmatamento-liquido-clima",
    oQuePlanoDiz: `Cita a meta de cortar de 59% a 67% dos gases que aquecem o planeta até 2035.`,
    oQueFez: `Em 2009, Lula sancionou a Política Nacional sobre Mudança do Clima. A lei fixou como compromisso voluntário do país reduzir entre 36,1% e 38,9% das emissões previstas para 2020.`,
    dataAcao: "2009-12-29",
    tipoAcao: "ato-de-governo",
    porQueCombina: `Foi a primeira lei a dar ao Brasil uma meta de corte de gases. A proposta traz uma meta nova, maior, na mesma linha.`,
    fontes: [
      {
        titulo: "Lei nº 12.187, de 29 de dezembro de 2009 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2009/lei/l12187.htm`,
        tipo: "legislacao",
        publicadoEm: "2009-12-29",
      },
    ],
  },
  {
    id: "ja-fez-lula-lei-do-bem",
    propostaId: "tecnologia-lula-soberania-digital",
    oQuePlanoDiz: `Promete apoiar a inteligência artificial feita por empresas brasileiras.`,
    oQueFez: `Em 2005, Lula sancionou a Lei do Bem, que dá desconto em impostos para empresas que investem em pesquisa e inovação tecnológica.`,
    dataAcao: "2005-11-21",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A lei não fala de inteligência artificial, que era outra realidade em 2005. Mas foi um incentivo para empresas brasileiras investirem em tecnologia, que é a ideia da proposta.`,
    fontes: [
      {
        titulo: "Lei nº 11.196, de 21 de novembro de 2005, art. 17 (Planalto)",
        url: `${PLANALTO}_ato2004-2006/2005/lei/l11196.htm`,
        tipo: "legislacao",
        publicadoEm: "2005-11-21",
      },
    ],
  },
  {
    id: "ja-fez-lula-historia-afro-indigena",
    propostaId: "diversidade-lula-igualdade-racial-inclusao",
    oQuePlanoDiz: `Diz que vai manter o combate ao racismo no centro da sua estratégia.`,
    oQueFez: `Em 2008, Lula sancionou a lei que tornou obrigatório o ensino de história e cultura afro-brasileira e indígena nas escolas.`,
    dataAcao: "2008-03-10",
    tipoAcao: "ato-de-governo",
    porQueCombina: `A lei foi uma medida contra o racismo por meio da escola, na mesma linha do que a proposta diz priorizar.`,
    fontes: [
      {
        titulo: "Lei nº 11.645, de 10 de março de 2008 (Planalto)",
        url: `${PLANALTO}_ato2007-2010/2008/lei/l11645.htm`,
        tipo: "legislacao",
        publicadoEm: "2008-03-10",
      },
    ],
  },

  // ---- Flávio (pesquisa de 22/10/2026; projetos conferidos nos dados
  // abertos do Senado). São projetos de lei: o resultado diz em que pé estão.
  {
    id: "ja-fez-flavio-devolucao-descontos-inss",
    propostaId: "previdencia-flavio-inss-sem-fila-fraudes",
    oQuePlanoDiz: `Promete mudar as regras para que ninguém tire do benefício o que a pessoa não autorizou.`,
    oQueFez: `Em abril de 2025, como senador, Flávio apresentou um projeto de lei para devolver a aposentados e pensionistas os descontos de mensalidades de associações feitos sem autorização no benefício.`,
    dataAcao: "2025-04-29",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto trata do mesmo problema que a proposta quer resolver: dinheiro tirado do benefício sem a pessoa autorizar.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, estava pronto para ser votado numa comissão do Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 1950/2025 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/168298",
        tipo: "orgao-publico",
        publicadoEm: "2025-04-29",
      },
    ],
  },
  {
    id: "ja-fez-flavio-medida-protetiva-imediata",
    propostaId: "direitos-mulheres-flavio-brasil-por-elas",
    oQuePlanoDiz: `Promete mais proteção para mulheres que sofrem violência, como tornozeleira para agressores com medida protetiva.`,
    oQueFez: `Em março de 2026, como senador, Flávio apresentou um projeto de lei para que o delegado possa dar na hora uma medida protetiva em casos de violência doméstica contra a mulher, com conferência posterior de um juiz.`,
    dataAcao: "2026-03-25",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto busca acelerar a proteção da mulher ameaçada, que é o objetivo da proposta.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, aguardava o primeiro encaminhamento no Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 1400/2026 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/173320",
        tipo: "orgao-publico",
        publicadoEm: "2026-03-25",
      },
    ],
  },
  {
    id: "ja-fez-flavio-diagnostico-autismo",
    propostaId: "diversidade-flavio-cuidado-terras-esporte",
    oQuePlanoDiz: `Promete Centros de Referência em Transtorno do Espectro Autista (TEA).`,
    oQueFez: `Em agosto de 2025, como senador, Flávio apresentou um projeto de lei para que o SUS cubra de forma integral e prioritária os exames que ajudam a identificar cedo o autismo.`,
    dataAcao: "2025-08-13",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto e a proposta tratam do atendimento a pessoas autistas no serviço público de saúde.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, aguardava a escolha de um relator no Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 3980/2025 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/169904",
        tipo: "orgao-publico",
        publicadoEm: "2025-08-13",
      },
    ],
  },
  {
    id: "ja-fez-flavio-sem-liberdade-provisoria-hediondos",
    propostaId: "seguranca-flavio-brasil-sem-medo",
    oQuePlanoDiz: `Promete mais rigor contra o crime, como acabar com a progressão de regime.`,
    oQueFez: `Em outubro de 2024, como senador, Flávio apresentou um projeto de lei para proibir a liberdade provisória de quem for preso em flagrante por crime hediondo (os crimes mais graves da lei).`,
    dataAcao: "2024-10-25",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto deixaria presos por crimes graves mais tempo na cadeia, na mesma linha de endurecimento da proposta.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, aguardava a escolha de um relator no Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 4082/2024 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/165920",
        tipo: "orgao-publico",
        publicadoEm: "2024-10-25",
      },
    ],
  },
  {
    id: "ja-fez-flavio-titulo-imovel-urbano",
    propostaId: "moradia-flavio-caixa-casa-propria-saneamento",
    oQuePlanoDiz: `Promete ajudar a regularizar o documento do imóvel.`,
    oQueFez: `Em novembro de 2023, como senador, Flávio apresentou um projeto de lei para dar o título de propriedade a quem mora sem documento em imóvel urbano de até 80 m² em terreno público.`,
    dataAcao: "2023-11-06",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto trata de regularizar o documento da casa, como a proposta promete.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, aguardava a escolha de um relator no Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 5335/2023 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/160817",
        tipo: "orgao-publico",
        publicadoEm: "2023-11-06",
      },
    ],
  },
  {
    id: "ja-fez-flavio-debentures-limitadas",
    propostaId: "empreendedorismo-flavio-minha-primeira-empresa",
    oQuePlanoDiz: `Promete mais crédito para pequenos negócios.`,
    oQueFez: `Em junho de 2020, como senador, Flávio apresentou um projeto de lei para permitir que empresas limitadas (Ltda.) e cooperativas emitam debêntures, títulos usados para pegar dinheiro emprestado com investidores.`,
    dataAcao: "2020-06-16",
    tipoAcao: "projeto-de-lei",
    porQueCombina: `O projeto abriria outra forma de financiamento para empresas menores. A proposta fala em crédito, mas pelos bancos públicos, não por debêntures.`,
    resultado: `Ainda não foi votado. Em 22/10/2026, estava com um relator no Senado.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 3324/2020 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/142510",
        tipo: "orgao-publico",
        publicadoEm: "2020-06-16",
      },
    ],
  },
];

export function getAcoesNaDirecao(propostaId: string): AcaoNaDirecao[] {
  return ACOES_NA_DIRECAO.filter((a) => a.propostaId === propostaId);
}
