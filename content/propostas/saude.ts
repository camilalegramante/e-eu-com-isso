import type { Proposta } from "@/lib/types";

// Tema: Saúde pública. Linguagem simples.
export const saude: Proposta[] = [
  {
    id: "saude-flavio-prontuario-digital-prevencao",
    temaId: "saude",
    candidaturaId: "flavio",
    titulo: "Ficha de saúde digital, menos fila e prevenção",
    resumoFiel: `O plano quer criar uma ficha de saúde digital única, ligada ao CPF. Médicos da rede pública e particular veriam seu histórico, com a sua autorização. Promete usar tecnologia para marcar consultas e exames mais rápido e corrigir a tabela do SUS (quanto o governo paga a hospitais e clínicas).

Também quer ampliar o atendimento perto de casa (Saúde da Família), ampliar exames preventivos e manter a vacinação. Para quem mora longe, promete atendimento por vídeo (telessaúde). Para idosos, pessoas com deficiência e doentes crônicos, promete entrega de remédio em casa.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Pode ficar mais fácil marcar consulta. Você poderia evitar repetir exames, porque o médico veria seu histórico. Quem mora longe poderia ser atendido por vídeo. Isso depende de a tecnologia chegar a cada região.`,
    condicoes: [
      `Haver espaço no orçamento federal (o próprio plano diz que a lei de reajuste da tabela do SUS ficou "presa ao orçamento")`,
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
  },
  {
    id: "saude-lula-sus-agora-tem-especialistas",
    temaId: "saude",
    candidaturaId: "lula",
    titulo: "Reforçar o SUS, diminuir a fila e marcar consulta pelo celular",
    resumoFiel: `O plano quer ampliar o atendimento perto de casa (Saúde da Família). Promete reforçar o programa Agora Tem Especialistas, que já existe, para diminuir a fila de consultas, exames e cirurgias, com uma fila única digital que atende primeiro quem está mais grave.

Quer uma ficha de saúde única para marcar consulta no posto e ver resultado de exame pelo celular, e mais atendimento por vídeo (telessaúde).

Promete manter a Farmácia Popular, que já existe, com remédios de graça, e passar a oferecer nela alguns exames, como os de pressão alta e diabetes. Também quer continuar ampliando a vacinação, inclusive nas escolas.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `A espera por consulta, exame ou cirurgia poderia diminuir. Você poderia marcar consulta no posto e ver exames pelo celular. Isso depende de o dinheiro e as parcerias continuarem.`,
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
        titulo: "Saúde digital e prontuário único",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 35,
      },
      {
        titulo: "Farmácia Popular e vacinação",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 36,
      },
      {
        titulo: "Agora Tem Especialistas",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 37,
      },
      {
        titulo: "Fila única digital",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 38,
      },
    ],
  },
];
