import type { Proposta } from "@/lib/types";

// Tema: Cultura e lazer. Linguagem simples.
export const cultura: Proposta[] = [
  {
    id: "cultura-flavio-esporte-e-raizes",
    temaId: "cultura",
    candidaturaId: "flavio",
    titulo: "Esporte nas escolas e mudanças nas leis de incentivo à cultura",
    resumoFiel: `No esporte, o plano promete criar o programa Escola de Campeões, com parcerias com empresas, para levar times, treinos fora do horário de aula e competições às escolas. Também fala em mais apoio ao esporte para pessoas com deficiência, em melhorar as bolsas para atletas e em buscar mais patrocínio de empresas, estados e municípios.

O plano diz que a categoria feminina, da base ao alto rendimento, deve ser disputada só por atletas do sexo feminino.

Na cultura, promete aperfeiçoar as leis de incentivo à cultura (o plano não diz quais) para corrigir o que chama de distorções, apoiar outras regiões do país e alcançar artistas pouco conhecidos. Também fala em preservar o patrimônio histórico, como centros históricos, obras e acervos. O texto é curto e não dá detalhes de como isso seria feito.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Estudantes de escola pública poderiam ter mais esporte com times e competições, se as parcerias com empresas acontecerem. Artistas e projetos culturais de fora dos grandes centros poderiam ter mais chance de apoio, mas isso dependeria das novas regras de incentivo.`,
    condicoes: [
      `Encontrar empresas dispostas a financiar o esporte nas escolas`,
      `Mudar as regras das leis de incentivo à cultura, o que pode exigir lei`,
      `Ter dinheiro no orçamento para restaurar o patrimônio histórico`,
    ],
    incertezas: [
      `O plano não diz quais distorções seriam corrigidas nas leis de incentivo`,
      `Não diz quantas escolas teriam o programa nem quando`,
      `Não diz quanto dinheiro iria para cultura e esporte`,
    ],
    relevantePara: ["estudante", "autonomo-mei", "casa-familia"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 40,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 41,
      },
    ],
  },
  {
    id: "cultura-lula-cultura-e-esporte",
    temaId: "cultura",
    candidaturaId: "lula",
    titulo: "Manter e ampliar o apoio à cultura e ao esporte",
    resumoFiel: `Na cultura, o plano promete melhorar a Lei Aldir Blanc e a Lei Rouanet e espalhar mais o dinheiro pelas regiões do país. Diz que vai continuar investindo em bibliotecas, espaços culturais e Pontos de Cultura (grupos culturais da comunidade que recebem apoio do governo), além de obras para restaurar o patrimônio histórico.

Para o cinema, promete continuar defendendo no Congresso uma lei para regular o streaming (filmes e séries pela internet). Também quer uma lei para que artistas sejam pagos quando plataformas digitais e a inteligência artificial usarem suas obras. E quer levar mais atividades de arte para as escolas.

No esporte, promete ampliar o Bolsa Atleta, manter o patrocínio de empresas estatais e criar a Universidade do Esporte, que já foi aprovada pelo Congresso. Também quer apoiar mais Arenas Brasil (espaços para praticar esporte) e realizar a Copa do Mundo de Futebol Feminino no Brasil.

Segundo o plano, o governo atual já recriou o Ministério da Cultura, chegou a 16 mil Pontos e Pontões de Cultura, reajustou o Bolsa Atleta e começou a apoiar 500 Arenas Brasil.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem mora em bairros da periferia ou em cidades menores poderia ter mais bibliotecas, espaços culturais e quadras por perto, se os investimentos continuarem. Artistas e atletas poderiam ter mais acesso a apoio do governo, dependendo do orçamento de cada ano.`,
    condicoes: [
      `Ter dinheiro no orçamento para manter e ampliar os programas`,
      `O Congresso precisa aprovar a lei do streaming e a lei de direito autoral na internet`,
    ],
    incertezas: [
      `O plano não diz o que muda nas leis Aldir Blanc e Rouanet`,
      `Não diz quantas novas Arenas, bibliotecas ou Pontos de Cultura seriam criados`,
      `Não diz quanto dinheiro iria para cultura e esporte`,
    ],
    relevantePara: ["estudante", "autonomo-mei", "casa-familia"],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 40,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 41,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 42,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 43,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 44,
      },
    ],
  },
];
