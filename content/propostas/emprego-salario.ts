import type { Proposta } from "@/lib/types";

// Tema: Emprego e salário. Status "rascunho". Linguagem simples.
export const empregoSalario: Proposta[] = [
  {
    id: "emprego-salario-flavio-trabalho-que-compensa",
    temaId: "emprego-salario",
    candidaturaId: "flavio",
    titulo: "Baratear a contratação para ter mais carteira assinada",
    resumoFiel: `O plano quer reduzir aos poucos o custo que a empresa tem para manter um funcionário, sem tirar direitos, para que mais gente consiga trabalho com carteira assinada. Promete contratos mais baratos para jovens de 18 a 24 anos no primeiro emprego e para pessoas com 50 anos ou mais que estão sem trabalho há muito tempo. Também quer deixar o acordo entre empresa e trabalhador valer mais e criar um banco nacional de vagas.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem está sem emprego ou trabalha sem carteira, pode ficar mais fácil ser contratado. Por outro lado, negociar direto com a empresa pode mudar a jornada e os benefícios, e o resultado depende da força de cada um para negociar.`,
    condicoes: [
      `O Congresso precisa aprovar as novas regras de contratação`,
      `Definir quanto e como o custo da contratação vai cair`,
    ],
    incertezas: [
      `O plano não diz de quanto seria essa redução nem quando`,
      `Não detalha quais direitos poderiam mudar na prática`,
    ],
    relevantePara: [
      "clt",
      "desempregado",
      "primeiro-emprego",
      "autonomo-mei",
      "empresario",
    ],
    fontes: [
      {
        titulo: "Trabalho que compensa",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 43,
      },
      {
        titulo: "Trabalho que compensa (continuação)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 44,
      },
      {
        titulo: "Negócio próprio",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 45,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
  {
    id: "emprego-salario-lula-valorizar-trabalho",
    temaId: "emprego-salario",
    candidaturaId: "lula",
    titulo: "Aumento real do salário mínimo e mais proteção no trabalho",
    resumoFiel: `O plano promete continuar dando ao salário mínimo um aumento acima da inflação todo ano, o que também sobe aposentadorias e o BPC (benefício para idosos e pessoas com deficiência de baixa renda). Quer reduzir a jornada e acabar com a escala 6x1 (seis dias de trabalho e um de folga) sem cortar salário, se o Senado aprovar. Também fala em criar regras para quem trabalha por aplicativo e em fazer as empresas pagarem salários iguais a homens e mulheres na mesma função.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem ganha salário mínimo ou recebe benefício pode manter ou aumentar o poder de compra. Quem trabalha por aplicativo pode passar a ter mais direitos. As mudanças na jornada dependem de aprovação no Senado.`,
    condicoes: [
      `Ter espaço no orçamento e definir a regra de aumento do salário mínimo`,
      `O Senado precisa aprovar a redução da jornada e o fim da escala 6x1`,
    ],
    incertezas: [
      `O plano não diz a conta exata do aumento do salário mínimo`,
      `Não detalha as regras para o trabalho por aplicativo`,
    ],
    relevantePara: [
      "clt",
      "autonomo-mei",
      "desempregado",
      "aposentado",
      "primeiro-emprego",
    ],
    fontes: [
      {
        titulo: "Combater as desigualdades",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 18,
      },
      {
        titulo: "Combater as desigualdades (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 19,
      },
      {
        titulo: "Valorizar o trabalho em suas múltiplas formas",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 73,
      },
      {
        titulo: "Valorizar o trabalho em suas múltiplas formas (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 74,
      },
      {
        titulo: "Valorizar o trabalho em suas múltiplas formas (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 77,
      },
    ],
    statusRevisao: "rascunho",
    revisadoEm: "2026-10-21",
  },
];
