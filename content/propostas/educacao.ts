import type { Proposta } from "@/lib/types";

// Tema: Educação e universidades. Status "rascunho". Linguagem simples.
export const educacao: Proposta[] = [
  {
    id: "educacao-flavio-alfabetizacao-voucher-tecnico",
    temaId: "educacao",
    candidaturaId: "flavio",
    titulo: "Alfabetizar bem, ensino técnico e vale para escola e creche",
    resumoFiel: `O plano quer focar em alfabetizar as crianças no começo da escola e ligar o dinheiro das escolas aos resultados de aprendizagem. Promete um vale para a família usar em escola ou creche particular quando faltar vaga na rede pública, ampliar o ensino técnico junto com empresas e mudar o jeito de pagar a faculdade: o aluno só começaria a pagar depois de empregado.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `A família poderia ter mais opções de escola e creche quando faltasse vaga pública, e o jovem poderia sair do ensino médio já com uma profissão. Depende de como os vales seriam pagos e das parcerias com empresas.`,
    condicoes: [
      `O Congresso e o orçamento precisam liberar os vales e o novo financiamento da faculdade`,
      `Ter escolas e creches particulares cadastradas para aceitar o vale`,
    ],
    incertezas: [
      `O plano não diz o valor dos vales nem quem teria direito`,
      `Não explica os prazos do novo jeito de pagar a faculdade`,
    ],
    relevantePara: ["estudante", "casa-familia", "primeiro-emprego", "rural"],
    fontes: [
      {
        titulo: "Escola Brasil por Elas e creche garantida",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 20,
      },
      {
        titulo: "Creche garantida para toda criança",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
      {
        titulo: "Ensinar de verdade",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 35,
      },
      {
        titulo: "Preparar para o trabalho que existe",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 36,
      },
      {
        titulo: "Ensino superior e financiamento estudantil",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 37,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "educacao-lula-pe-de-meia-creches-ifs",
    temaId: "educacao",
    candidaturaId: "lula",
    titulo: "Pé-de-Meia, mais creches e vagas em faculdades e institutos",
    resumoFiel: `O plano quer manter e reforçar o Pé-de-Meia, uma bolsa que paga o estudante do ensino médio para continuar estudando. Promete mais creches e escolas de tempo integral, a meta de alfabetizar mais crianças na idade certa, mais institutos federais (ensino técnico gratuito) e mais vagas e apoio (moradia e alimentação) para quem está na faculdade.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Jovens no ensino médio poderiam seguir recebendo a bolsa para não largar os estudos, e famílias poderiam achar vaga em creche com mais facilidade. Depende do ritmo das obras e de o dinheiro continuar.`,
    condicoes: [
      `Manter o dinheiro dos programas todo ano`,
      `Terminar as obras de creches, institutos e universidades`,
    ],
    incertezas: [
      `O plano não diz o valor futuro do Pé-de-Meia nem quem terá direito`,
      `Não garante que as metas serão cumpridas no prazo`,
    ],
    relevantePara: ["estudante", "casa-familia", "primeiro-emprego", "rural"],
    fontes: [
      {
        titulo: "Resgate do Ministério da Educação e o Pé-de-Meia",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 13,
      },
      {
        titulo: "Juventude, Pé-de-Meia e ensino superior",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 24,
      },
      {
        titulo: "Garantir o direito à educação para transformar vidas e o país",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 30,
      },
      {
        titulo: "Alfabetização, creches e educação em tempo integral",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 31,
      },
      {
        titulo: "Pé-de-Meia, institutos federais e professores",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 32,
      },
      {
        titulo: "Financiamento do ensino superior e institutos federais",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 33,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
