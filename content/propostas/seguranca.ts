import type { Proposta } from "@/lib/types";

// Tema: Segurança pública. Status "rascunho". Linguagem simples.
export const seguranca: Proposta[] = [
  {
    id: "seguranca-flavio-brasil-sem-medo",
    temaId: "seguranca",
    candidaturaId: "flavio",
    titulo: "Guerra ao crime organizado e penas mais duras",
    resumoFiel: `O plano trata facções como PCC e Comando Vermelho como "narcoterrorismo", quer bloquear o dinheiro delas e criar uma força especial para fechar fronteiras, portos e aeroportos contra o tráfico. Promete construir presídios de segurança máxima, abrir muitas vagas na prisão, baixar de 18 para 16 anos a idade para responder como adulto e endurecer penas. Também quer dobrar o dinheiro federal para segurança e instalar mais de 1 milhão de câmeras com reconhecimento facial.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Poderia haver mais polícia em áreas dominadas pelo crime e nas fronteiras. As penas mais duras e a mudança na idade penal afetariam de perto adolescentes de 14 a 18 anos. Depende de acordo com estados e de aprovação de leis.`,
    condicoes: [
      `Fazer acordos com estados e cidades`,
      `Mudar a Constituição para baixar a idade penal (precisa do Congresso)`,
    ],
    incertezas: [
      `O plano não diz de onde viria todo o dinheiro`,
      `Não detalha prazos nem como as câmeras e a força de fronteira funcionariam`,
    ],
    relevantePara: ["casa-familia", "estudante", "rural", "autonomo-mei"],
    fontes: [
      {
        titulo: "Brasil sem Medo",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 13,
      },
      {
        titulo: "Mais presídios, menos bandidos soltos",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 14,
      },
      {
        titulo: "Menos verbo, mais verba / Muralha Brasileira",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 15,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "seguranca-lula-susp-ministerio",
    temaId: "seguranca",
    candidaturaId: "lula",
    titulo: "Juntar forças contra o crime e criar um Ministério da Segurança",
    resumoFiel: `O plano quer mudar a Constituição (a chamada PEC da Segurança) para a União coordenar melhor a segurança junto com estados e cidades, e criar um Ministério da Segurança Pública. Cita a Lei Antifacção e um programa com R$ 10 bilhões para estados e cidades comprarem equipamentos. Promete manter o controle de armas, usar câmeras na roupa dos policiais e reforçar a fronteira na Amazônia.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `A ideia é a União, os estados e as cidades agirem mais juntos contra o crime. A parte principal depende de o Congresso aprovar a mudança na Constituição.`,
    condicoes: [
      `O Congresso precisa aprovar a PEC da Segurança`,
      `Depende de estados e cidades trabalharem juntos e do uso dos R$ 10 bilhões`,
    ],
    incertezas: [
      `O plano não diz quando a PEC e o novo ministério sairiam`,
      `Não dá para saber, só pelo texto, o tamanho do efeito na violência`,
    ],
    relevantePara: ["casa-familia", "estudante", "rural"],
    fontes: [
      {
        titulo:
          "Proteger a vida com uma segurança pública mais eficiente e integrada",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 26,
      },
      {
        titulo: "Lei Antifacção e Programa Brasil Contra o Crime Organizado",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 27,
      },
      {
        titulo: "Sistema prisional e controle de armas",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 28,
      },
      {
        titulo: "PEC da Segurança Pública e Ministério da Segurança Pública",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 30,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
