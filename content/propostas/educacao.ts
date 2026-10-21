import type { Proposta } from "@/lib/types";

// Tema: Educação e universidades. Linguagem simples.
export const educacao: Proposta[] = [
  {
    id: "educacao-flavio-alfabetizacao-voucher-tecnico",
    temaId: "educacao",
    candidaturaId: "flavio",
    titulo: "Alfabetizar bem, ensino técnico e vale para escola e creche",
    resumoFiel: `O plano quer ensinar a ler pelo método fônico (ligar cada som à sua letra) e pagar bons alunos para dar reforço aos colegas. O dinheiro para as escolas seria ligado às metas de aprendizagem, sem abandonar as regiões com mais dificuldade. Diz apoiar a escola em tempo integral e quer ampliar as escolas cívico-militares.

Quando faltar vaga na rede pública, a família receberia um vale para matricular o filho em outra escola. Também receberia um vale-creche para usar em creche particular credenciada até surgir vaga pública.

Quer mais ensino técnico no ensino médio, junto com empresas. Na faculdade, o estudante só começaria a pagar o empréstimo quando estivesse empregado, com parcela de acordo com o salário.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `A família poderia ter mais opções de escola e creche quando faltasse vaga pública. O jovem poderia sair do ensino médio já com uma profissão. Depende de como os vales seriam pagos e das parcerias com empresas.`,
    condicoes: [
      `Dependeria de aprovação no Congresso e de dinheiro no orçamento para os vales e o novo empréstimo da faculdade`,
      `Ter escolas e creches particulares cadastradas para aceitar o vale`,
    ],
    incertezas: [
      `O plano não diz o valor dos vales nem quem teria direito`,
      `Não diz o prazo exato nem a partir de qual salário a pessoa começaria a pagar a faculdade`,
    ],
    relevantePara: ["estudante", "casa-familia", "primeiro-emprego", "rural"],
    fontes: [
      {
        titulo: "Creche garantida para toda criança (vale-creche)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
      {
        titulo: "Ensinar de verdade",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 34,
      },
      {
        titulo: "Alfabetização, reforço, escolas cívico-militares e tempo integral",
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
  },
  {
    id: "educacao-lula-pe-de-meia-creches-ifs",
    temaId: "educacao",
    candidaturaId: "lula",
    titulo: "Pé-de-Meia, mais creches e vagas em faculdades e institutos",
    resumoFiel: `O plano quer manter e reforçar o Pé-de-Meia, programa que já existe e ajuda jovens pobres do ensino médio a não largar a escola por falta de dinheiro.

Promete apoiar estados e cidades para ter mais creches e mais escolas de tempo integral. Quer chegar à meta de 80% das crianças alfabetizadas na idade certa.

Também quer mais institutos federais (escolas públicas de ensino técnico), mais vagas em faculdades públicas e mais apoio com moradia e alimentação para quem está na faculdade.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Jovens no ensino médio poderiam seguir recebendo a bolsa para não largar os estudos. Famílias poderiam achar vaga em creche com mais facilidade. Depende do ritmo das obras e de o dinheiro continuar.`,
    condicoes: [
      `Dependeria de manter o dinheiro dos programas no orçamento todo ano`,
      `Dependeria de terminar as obras de creches, institutos e universidades`,
    ],
    incertezas: [
      `O plano não diz o valor futuro do Pé-de-Meia nem as regras exatas para receber`,
      `Não dá prazo para as obras nem para chegar à meta de 80%`,
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
  },
];
