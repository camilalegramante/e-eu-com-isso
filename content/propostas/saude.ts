import type { Proposta } from "@/lib/types";

// Tema: Saúde pública. Status "rascunho". Linguagem simples.
export const saude: Proposta[] = [
  {
    id: "saude-flavio-prontuario-digital-prevencao",
    temaId: "saude",
    candidaturaId: "flavio",
    titulo: "Ficha de saúde digital, menos fila e prevenção",
    resumoFiel: `O plano quer criar uma ficha de saúde digital única, ligada ao CPF, para o médico ver o seu histórico em qualquer lugar. Promete usar tecnologia para marcar consultas e exames mais rápido, ampliar o atendimento perto de casa (Saúde da Família), reforçar a prevenção e a vacinação, e levar atendimento por vídeo (telessaúde) e remédio em casa para quem mora longe.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Pode ficar mais fácil marcar consulta e você evitaria repetir exames, porque o médico veria seu histórico. Quem mora longe poderia ser atendido por vídeo. Isso depende de a tecnologia chegar a cada região.`,
    condicoes: [
      `Ter dinheiro para pagar melhor os atendimentos do SUS`,
      `Levar internet e equipamentos para postos e hospitais`,
    ],
    incertezas: [
      `O plano não diz quando nem quanto isso custaria`,
      `Não diz em quais lugares a ficha digital e o atendimento por vídeo começariam`,
    ],
    relevantePara: ["aposentado", "casa-familia", "rural", "autonomo-mei"],
    fontes: [
      {
        titulo: "Saúde digital e prontuário eletrônico único",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 25,
      },
      {
        titulo: "Saúde digital e prontuário eletrônico único (continuação)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 26,
      },
      {
        titulo: "Saúde que cuida antes de a doença chegar",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 37,
      },
      {
        titulo: "Saúde que cuida antes de a doença chegar (continuação)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 38,
      },
      {
        titulo: "Saúde para Elas",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "saude-lula-sus-agora-tem-especialistas",
    temaId: "saude",
    candidaturaId: "lula",
    titulo: "Reforçar o SUS, diminuir a fila e marcar tudo pelo celular",
    resumoFiel: `O plano quer ampliar o atendimento perto de casa (Saúde da Família) e diminuir a fila de consultas, exames e cirurgias com o programa Agora Tem Especialistas, usando uma fila única digital que atende primeiro quem está mais grave. Promete uma ficha de saúde única para ver consultas e exames pelo celular, manter a Farmácia Popular (remédios de graça ou mais baratos) e recuperar a vacinação.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `A espera por consulta, exame ou cirurgia poderia diminuir, e você poderia acompanhar tudo pelo celular. Isso depende de o dinheiro e as parcerias continuarem.`,
    condicoes: [
      `Manter os investimentos e as parcerias com hospitais`,
      `Ligar os sistemas de saúde de estados e cidades`,
    ],
    incertezas: [
      `O plano não dá metas e prazos claros para o próximo mandato`,
      `Não diz em que ritmo isso chegaria ao país todo`,
    ],
    relevantePara: ["aposentado", "casa-familia", "rural", "autonomo-mei"],
    fontes: [
      {
        titulo: "Fortalecer a saúde com equidade, inovação e soberania",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 34,
      },
      {
        titulo: "Fortalecer a saúde (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 35,
      },
      {
        titulo: "Fortalecer a saúde (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 36,
      },
      {
        titulo: "Fortalecer a saúde (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 37,
      },
      {
        titulo: "Fortalecer a saúde (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 38,
      },
      {
        titulo: "Fortalecer a saúde (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 39,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
