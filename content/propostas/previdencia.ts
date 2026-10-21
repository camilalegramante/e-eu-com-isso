import type { Proposta } from "@/lib/types";

// Tema: Previdência e aposentadoria. Linguagem simples.
export const previdencia: Proposta[] = [
  {
    id: "previdencia-flavio-inss-sem-fila-fraudes",
    temaId: "previdencia",
    candidaturaId: "flavio",
    titulo: "Acabar com a fila do INSS e barrar descontos indevidos",
    resumoFiel: `O plano quer digitalizar e organizar melhor o INSS para diminuir a espera, que segundo o texto tinha 3 milhões de pedidos parados no começo de 2026. Promete um novo pacote contra fraudes, parecido com o que o governo Bolsonaro fez em 2019.

Também quer mudar as regras do empréstimo consignado (aquele descontado direto do benefício), com dupla checagem e mais transparência, para que ninguém tire do benefício o que a pessoa não autorizou. O plano lembra que os descontos de associações no benefício já foram proibidos em novembro de 2025.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem é aposentado, pensionista ou está pedindo um benefício poderia esperar menos por uma resposta. E poderia ficar mais difícil tirarem dinheiro do seu benefício sem você autorizar. Depende de a mudança sair do papel.`,
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
  },
  {
    id: "previdencia-lula-fortalecimento-previdencia",
    temaId: "previdencia",
    candidaturaId: "lula",
    titulo: "Fortalecer a aposentadoria e diminuir a espera do INSS",
    resumoFiel: `O plano diz que vai continuar a regra de aumento do salário mínimo acima da inflação. Segundo o texto, essa regra já aumentou o poder de compra de aposentados e pensionistas.

Diz que já está enfrentando a fila do INSS e que quer voltar a avisar o trabalhador por carta quando ele tiver direito a se aposentar. Promete terminar a modernização do atendimento.

Quer formas mais flexíveis de contribuir para quem muda muito de trabalho, incluir a Previdência nas regras do trabalho por aplicativo e buscar novas fontes de dinheiro para a Previdência.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem recebe aposentadoria ou pensão de um salário mínimo poderia manter o poder de compra, se a regra de aumento do mínimo continuar. Poderia haver menos espera no INSS. Quem muda muito de trabalho ou trabalha por aplicativo poderia ter mais proteção da Previdência. Depende de as novas regras saírem.`,
    condicoes: [
      `Mudar o jeito de financiar a Previdência (pode precisar de lei)`,
      `Criar as regras para o trabalho por aplicativo`,
    ],
    incertezas: [
      `O plano não dá valores nem prazos das novas formas de contribuir`,
      `Fala em buscar novas fontes de dinheiro para a Previdência, mas não diz quais`,
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
        titulo: "Continuidade da valorização do salário mínimo",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 74,
      },
      {
        titulo: "O que já foi feito: valorização do salário mínimo",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
    ],
  },
];
