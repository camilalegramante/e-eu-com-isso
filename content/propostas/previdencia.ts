import type { Proposta } from "@/lib/types";

// Tema: Previdência e aposentadoria. Status "rascunho". Linguagem simples.
export const previdencia: Proposta[] = [
  {
    id: "previdencia-flavio-inss-sem-fila-fraudes",
    temaId: "previdencia",
    candidaturaId: "flavio",
    titulo: "Acabar com a fila do INSS e barrar descontos indevidos",
    resumoFiel: `O plano quer digitalizar e organizar melhor o INSS para diminuir a espera, que segundo o texto tinha 3 milhões de pedidos parados no começo de 2026. Promete reforçar o combate a fraudes e a descontos tirados do benefício sem a pessoa autorizar, com mais conferência e transparência no empréstimo consignado (aquele descontado direto do benefício).`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem é aposentado, pensionista ou está pedindo um benefício poderia esperar menos por uma resposta. E ficaria mais difícil tirarem dinheiro do seu benefício sem você deixar. Depende de a mudança sair do papel.`,
    condicoes: [
      `Reorganizar a gestão do INSS, com dinheiro para isso`,
      `Criar as regras do pacote contra fraude (pode precisar do Congresso)`,
    ],
    incertezas: [
      `O plano não dá prazo nem meta de redução da fila`,
      `Não dá para saber se bastaria para acabar com a fila`,
    ],
    relevantePara: ["aposentado"],
    fontes: [
      {
        titulo: "INSS sem fila",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 26,
      },
      {
        titulo: "O lado dos aposentados: fim das fraudes",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 72,
      },
      {
        titulo: "Governança do consignado do INSS",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 73,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "previdencia-lula-fortalecimento-previdencia",
    temaId: "previdencia",
    candidaturaId: "lula",
    titulo: "Fortalecer a aposentadoria e diminuir a espera do INSS",
    resumoFiel: `O plano promete reforçar a Previdência e facilitar o acesso, lembrando que o aumento do salário mínimo também sobe as aposentadorias. Fala em reduzir a espera do INSS, avisar o trabalhador por carta quando ele tiver direito a se aposentar, e criar formas mais fáceis de contribuir para quem trabalha de forma instável, como autônomos e quem trabalha por aplicativo.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem recebe aposentadoria ou pensão poderia manter o poder de compra e esperar menos no INSS. Autônomos e trabalhadores de aplicativo poderiam ter mais facilidade para manter a aposentadoria. Depende de as novas regras saírem.`,
    condicoes: [
      `Mudar o jeito de financiar a Previdência (pode precisar de lei)`,
      `Criar as regras para o trabalho por aplicativo`,
    ],
    incertezas: [
      `O plano não dá valores nem prazos das novas formas de contribuir`,
      `Não diz de onde viria o dinheiro extra para a Previdência`,
    ],
    relevantePara: ["aposentado", "autonomo-mei"],
    fontes: [
      {
        titulo: "Fortalecimento da Previdência Social",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 77,
      },
      {
        titulo: "Valorização do salário mínimo e benefícios",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
      {
        titulo: "Pejotização e responsabilidades previdenciárias",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 74,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
