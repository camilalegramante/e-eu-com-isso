import type { Proposta } from "@/lib/types";

// Tema: Emprego e salário. Linguagem simples.
export const empregoSalario: Proposta[] = [
  {
    id: "emprego-salario-flavio-trabalho-que-compensa",
    temaId: "emprego-salario",
    candidaturaId: "flavio",
    titulo: "Baratear a contratação para ter mais carteira assinada",
    resumoFiel: `O plano quer reduzir aos poucos o custo que a empresa tem para manter um funcionário, sem tirar direitos, para que mais gente tenha carteira assinada. Promete contratos mais baratos para jovens de 18 a 24 anos no primeiro emprego e para pessoas com 50 anos ou mais que estão sem trabalho há pelo menos 1 ano.

Quer permitir que empresa e trabalhador combinem direto as condições de trabalho, como horários flexíveis, dentro da lei.

Também promete criar um banco nacional de vagas e deixar quem recebe ajuda do governo voltar ao benefício sem fila depois do seguro-desemprego. Para quem trabalha por aplicativo, diz que vai manter essas oportunidades e proteger esses trabalhadores.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem está sem emprego ou trabalha sem carteira, poderia ficar mais fácil ser contratado. Acordos diretos com a empresa poderiam trazer horários mais flexíveis, mas também mudar condições de trabalho. O efeito dependeria das regras e de como cada acordo for feito.`,
    condicoes: [
      `O Congresso precisa aprovar as novas regras de contratação`,
      `Definir quanto e como o custo da contratação vai cair`,
    ],
    incertezas: [
      `O plano não diz de quanto seria essa redução nem quando`,
      `Não explica como o custo cairia sem tirar direitos (por exemplo, quais taxas pagas pela empresa seriam reduzidas)`,
      `Não detalha como seria a proteção para quem trabalha por aplicativo`,
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
        titulo: "O trabalhador em primeiro lugar (trabalho por aplicativos)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 45,
      },
    ],
  },
  {
    id: "emprego-salario-lula-valorizar-trabalho",
    temaId: "emprego-salario",
    candidaturaId: "lula",
    titulo: "Manter a valorização do salário mínimo e mais proteção no trabalho",
    resumoFiel: `O plano promete manter a política de valorização do salário mínimo. Segundo o plano, essa política deu aumento acima da inflação nos últimos anos e também subiu aposentadorias e o BPC (benefício para idosos e pessoas com deficiência de baixa renda).

Quer acabar com a escala 6x1 (seis dias de trabalho e um de folga) e reduzir a jornada para 40 horas por semana, sem cortar salário. Esse texto já foi aprovado na Câmara e falta o Senado.

Também quer criar regras para quem trabalha por aplicativo e mudar leis trabalhistas que, segundo o plano, deixam o trabalho mais precário. E quer obrigar empresas com diferença de salário entre homens e mulheres a seguir um plano para reduzir essa diferença aos poucos.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem ganha salário mínimo ou recebe aposentadoria ou BPC poderia manter ou aumentar o poder de compra. Quem trabalha por aplicativo poderia passar a ter mais direitos, se uma lei for aprovada. As mudanças na jornada dependem de aprovação no Senado.`,
    condicoes: [
      `Manter a regra atual de aumento do salário mínimo e ter espaço no orçamento`,
      `O Senado precisa aprovar a redução da jornada e o fim da escala 6x1`,
    ],
    incertezas: [
      `O plano não diz a conta exata do aumento do salário mínimo`,
      `Não detalha as regras para o trabalho por aplicativo`,
      `Não diz quais leis trabalhistas seriam mudadas`,
    ],
    relevantePara: [
      "clt",
      "autonomo-mei",
      "desempregado",
      "aposentado",
      "primeiro-emprego",
      "empresario",
    ],
    fontes: [
      {
        titulo: "Combater as desigualdades",
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
        pagina: 75,
      },
      {
        titulo: "Valorizar o trabalho em suas múltiplas formas (continuação)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 77,
      },
    ],
  },
];
