import type { Proposta } from "@/lib/types";

// Tema: Direitos das mulheres. Status "rascunho". Linguagem simples.
export const direitosMulheres: Proposta[] = [
  {
    id: "direitos-mulheres-flavio-brasil-por-elas",
    temaId: "direitos-mulheres",
    candidaturaId: "flavio",
    titulo: "Brasil por Elas: proteção, renda e creche",
    resumoFiel: `O plano reúne num programa chamado "Brasil por Elas" várias medidas para mulheres. Cita a Central da Mulher (local e aplicativo) com ajuda jurídica, psicológica, de saúde e de emprego, tornozeleira para monitorar agressores com medida protetiva e juntar os canais de denúncia. Fala também em ajuda para organizar as contas e conseguir crédito, apoio para pôr a casa no nome da mulher, cursos de trabalho e mais creches, com um vale-creche para a rede particular quando faltar vaga.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Mais creche poderia ajudar a mãe a trabalhar ou estudar, e juntar a denúncia com o monitoramento do agressor poderia dar um atendimento mais rápido em casos de violência. Depende da estrutura dos estados e das regras do vale.`,
    condicoes: [
      `Fazer parcerias com estados e cidades para abrir unidades e creches`,
      `Definir o valor e as regras do vale-creche`,
    ],
    incertezas: [
      `O plano não diz de onde viria o dinheiro da rede de cuidado`,
      `Não diz quantas creches ou vales seriam criados`,
    ],
    relevantePara: ["casa-familia", "autonomo-mei", "empresario", "estudante"],
    fontes: [
      {
        titulo: "Tolerância zero para o feminicídio",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 14,
      },
      {
        titulo: "Brasil por Elas / Central da Mulher",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 17,
      },
      {
        titulo: "Aplicativo Central da Mulher / ClarIA",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 18,
      },
      {
        titulo: "Denúncia facilitada / Orientação financeira",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
      {
        titulo: "Casa Segura / Escola Brasil por Elas / Mais Trabalho para Elas",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 20,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial",
    temaId: "direitos-mulheres",
    candidaturaId: "lula",
    titulo: "Mais proteção contra a violência e salário igual para a mulher",
    resumoFiel: `O plano quer continuar o combate ao feminicídio (quando a mulher é morta por ser mulher), citando que já reduziu de 16 para 3 dias o tempo para sair uma medida protetiva. Promete terminar 30 Casas da Mulher Brasileira (vários atendimentos num lugar só) e ampliar as salas de atendimento. Também quer obrigar empresas a corrigir quando pagam menos às mulheres na mesma função e, na saúde, cita mais maternidades, absorvente de graça pela Farmácia Popular e atenção às mães.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Mulheres em situação de violência poderiam achar atendimento mais fácil e rápido, e aos poucos a diferença de salário entre homens e mulheres poderia diminuir. Depende de terminar as obras e de como a fiscalização vai funcionar.`,
    condicoes: [
      `Terminar as Casas da Mulher que estão em obra`,
      `Criar as regras que obrigam as empresas a corrigir o salário`,
    ],
    incertezas: [
      `O plano não dá prazo para terminar as Casas da Mulher`,
      `Não diz que punição a empresa teria se não corrigir o salário`,
    ],
    relevantePara: ["clt", "servidor", "casa-familia", "autonomo-mei", "rural"],
    fontes: [
      {
        titulo: "Pacto de Enfrentamento ao Feminicídio / Casas da Mulher Brasileira",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 21,
      },
      {
        titulo: "Lei de Igualdade Salarial / Mulheres Mil / empreendedorismo feminino",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 22,
      },
      {
        titulo: "Maternidades / Farmácia Popular / Implanon",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 38,
      },
      {
        titulo: "Mortalidade materna e mulheres negras e rurais",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 39,
      },
      {
        titulo: "Obrigatoriedade de planos de ação de igualdade salarial",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 75,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
