import type { Proposta } from "@/lib/types";

// Tema: Direitos trabalhistas. Linguagem simples.
// Complementa "emprego-salario" (contratação, salário mínimo, jornada, aplicativos);
// aqui entram sindicatos, reforma trabalhista, fiscalização e fraudes.
export const direitosTrabalhistas: Proposta[] = [
  {
    id: "direitos-trabalhistas-flavio-sindicatos-reforma-2017",
    temaId: "direitos-trabalhistas",
    candidaturaId: "flavio",
    titulo: "Sindicatos, reforma trabalhista de 2017 e revisão de regras",
    resumoFiel: `O plano diz que o país precisa se posicionar contra o que chama de "República Sindical": quando os interesses dos dirigentes de sindicatos ficam acima dos interesses dos trabalhadores. Critica a unicidade sindical (regra que permite só um sindicato por categoria em cada região) e projetos que dão mais espaço aos sindicatos de servidores públicos.

Defende a reforma trabalhista de 2017, que acabou com o imposto sindical obrigatório, e critica tentativas de rever pontos dela. Também defende que acordos entre trabalhador e empresa possam valer mais que algumas regras da lei (o "negociado sobre o legislado").

Promete ainda uma ampla revisão das normas abaixo da lei (como portarias e regulamentos) na área trabalhista, entre outras, para cortar excesso de regras. Não diz quais regras seriam mudadas nem que medidas tomaria em relação aos sindicatos.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem tem carteira assinada, os acordos feitos direto com a empresa poderiam ganhar mais peso, e o papel do sindicato nessas conversas poderia diminuir. O efeito no dia a dia dependeria de quais regras fossem mudadas, o que o plano não detalha.`,
    condicoes: [
      `Mudanças nas regras dos sindicatos e dos acordos de trabalho dependeriam de lei aprovada no Congresso`,
      `A revisão de portarias e regulamentos dependeria de decisões do próprio governo`,
    ],
    incertezas: [
      `O plano não diz que medidas concretas tomaria em relação aos sindicatos`,
      `Não diz se quer mudar a unicidade sindical, que está na Constituição`,
      `Não diz quais regras trabalhistas seriam revistas ou cortadas`,
    ],
    relevantePara: ["clt", "servidor", "empresario"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 44,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 45,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 69,
      },
    ],
  },
  {
    id: "direitos-trabalhistas-lula-fiscalizacao-sindicatos",
    temaId: "direitos-trabalhistas",
    candidaturaId: "lula",
    titulo: "Mais fiscalização, combate a fraudes e fortalecimento dos sindicatos",
    resumoFiel: `O plano promete fortalecer a fiscalização do trabalho e combater a pejotização fraudulenta (quando a pessoa é contratada como empresa, o chamado PJ, no lugar da carteira assinada). Promete também reforçar o combate ao trabalho análogo ao escravo e ao trabalho infantil, no campo, na cidade e nas plataformas digitais.

Quer mudar a lei trabalhista para combater fraudes em terceirizações e regras que, segundo o plano, deixam o trabalho mais precário. Quer também que o sindicato volte a acompanhar a homologação (conferência das contas) quando o trabalhador é demitido.

Promete fortalecer a negociação coletiva (acordos entre sindicatos e empresas) e atualizar o sistema sindical, sem detalhar como. Também quer regulamentar a negociação coletiva no serviço público.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem trabalha sem carteira ou como PJ no lugar de um emprego registrado poderia ter mais chance de ter os direitos reconhecidos, se a fiscalização aumentar. Na demissão, o trabalhador poderia voltar a ter ajuda do sindicato para conferir as contas. O efeito dependeria de leis novas e de estrutura para fiscalizar.`,
    condicoes: [
      `O Congresso precisaria aprovar as mudanças na lei trabalhista`,
      `Fiscalizar mais depende de ter auditores e estrutura no Ministério do Trabalho`,
    ],
    incertezas: [
      `O plano não diz quais regras trabalhistas seriam mudadas nem como`,
      `Não detalha como seria a atualização do sistema sindical`,
      `Não diz quanto a fiscalização seria reforçada nem com que dinheiro`,
    ],
    relevantePara: ["clt", "autonomo-mei", "servidor", "empresario", "rural"],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 74,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 75,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 76,
      },
    ],
  },
];
