import type { Proposta } from "@/lib/types";

// Tema: Empreendedorismo. Linguagem simples.
export const empreendedorismo: Proposta[] = [
  {
    id: "empreendedorismo-flavio-minha-primeira-empresa",
    temaId: "empreendedorismo",
    candidaturaId: "flavio",
    titulo: "Menos papelada e crédito pela Caixa para quem quer abrir um negócio",
    resumoFiel: `O plano diz que a Lei de Liberdade Econômica, de 2019, já dispensou alvarás e licenças para atividades de baixo risco. Promete levar essa facilidade para todos os estados e municípios e fazer um "revogaço" (revisão e corte de regras antigas) para reduzir a papelada de quem já tem negócio.

Para quem está começando, promete criar o programa Minha Primeira Empresa. Ele teria menos burocracia para abrir e formalizar o negócio, cursos e orientação pelo Sistema S (Sebrae, Senac e outros) e crédito e serviços da Caixa.

Também promete crédito e orientação para pequenos negócios pela rede da Caixa e apoio para pequenas e médias empresas venderem para fora do país, via BNDES e Apex-Brasil. Cita o programa Ganha-Ganha, de adesão voluntária, em que formalizar um negócio ou manter as contas em dia ajudaria a conseguir crédito e juros menores.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem quer abrir ou formalizar um pequeno negócio, poderia ficar mais rápido e barato tirar a empresa do papel. O acesso a crédito na Caixa poderia ficar mais fácil, mas dependeria das regras e dos juros de cada linha, que o plano não informa.`,
    condicoes: [
      `Estados e municípios precisariam adotar as regras mais simples, pois boa parte das licenças é deles`,
      `A Caixa precisaria ter dinheiro e linhas de crédito próprias para pequenos negócios`,
    ],
    incertezas: [
      `O plano não diz quais regras seriam cortadas no "revogaço"`,
      `Não informa valores, juros ou prazos do crédito do Minha Primeira Empresa`,
      `Não menciona o MEI nem o Simples Nacional (regime de imposto mais simples para pequenas empresas)`,
    ],
    relevantePara: ["autonomo-mei", "empresario", "desempregado", "primeiro-emprego"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 27,
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
        pagina: 46,
      },
    ],
  },
  {
    id: "empreendedorismo-lula-pequenos-negocios",
    temaId: "empreendedorismo",
    candidaturaId: "lula",
    titulo: "Mais crédito com garantia e menos burocracia para pequenos negócios",
    resumoFiel: `O plano diz que, no mandato atual, programas como Acredita, Pronampe, Procred 360 e Desenrola Pequenos Negócios ampliaram o crédito para pequenas empresas. Segundo o plano, também foram criados a plataforma MEI Conta Com a Gente (orientação gratuita de contadores) e o Contrata+ Brasil (para vender ao governo), e a faixa de faturamento do MEI foi elevada.

Promete simplificar mais a abertura e a gestão de negócios, ampliar as compras do governo de pequenas empresas e garantir "tratamento tributário justo" para elas na reforma tributária.

Também promete continuar usando fundos garantidores (fundos públicos que cobrem parte do risco do empréstimo) para facilitar o crédito e ampliar o Brasil Mais Produtivo, com crédito para digitalização. Para autônomos e pequenos empreendedores, fala em crédito, cursos, assistência técnica e mais proteção da Previdência.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Para quem tem MEI ou pequena empresa, poderia ficar mais fácil conseguir empréstimo com juros menores, porque o governo cobriria parte do risco. Também poderia ser mais fácil vender para o governo. O efeito dependeria do dinheiro disponível nos fundos e das regras de cada programa.`,
    condicoes: [
      `Ter dinheiro no orçamento para manter e ampliar os fundos garantidores`,
      `Definir na regulamentação da reforma tributária como ficam as pequenas empresas`,
    ],
    incertezas: [
      `O plano não diz o que seria um "tratamento tributário justo" nem o que mudaria no Simples Nacional (regime de imposto mais simples para pequenas empresas)`,
      `Não informa valores, juros ou metas novas de crédito`,
      `Não detalha como seria a proteção da Previdência para autônomos`,
    ],
    relevantePara: ["autonomo-mei", "empresario", "desempregado", "primeiro-emprego"],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 57,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 58,
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
