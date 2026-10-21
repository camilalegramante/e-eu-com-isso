import type { Proposta } from "@/lib/types";

// Tema: Meio ambiente e clima.
// Linguagem simples (ver content/README.md).
// Saneamento (água e esgoto) fica em "moradia"; conta de luz e energia, em
// "custo-de-vida".
export const meioAmbiente: Proposta[] = [
  {
    id: "meio-ambiente-flavio-desmatamento-ilegal-licenca",
    temaId: "meio-ambiente",
    candidaturaId: "flavio",
    titulo: "Zerar o desmatamento ilegal até 2029 e licença ambiental com prazo",
    resumoFiel: `O plano promete zerar o desmatamento ilegal até 2029. Diz que retoma um compromisso assumido no governo Bolsonaro. Promete combater queimadas ilegais e crimes ambientais com satélite, inteligência artificial e dados em tempo real.

O foco da fiscalização seria a grilagem (tomar terra pública de forma ilegal), o garimpo ilegal, a extração ilegal de madeira e o crime organizado. O plano diz que o produtor que cumpre a lei não teria novas obrigações nem custos. E que o morador da floresta, o ribeirinho e o pequeno produtor não seriam tratados como criminosos.

Promete pagar a quem preserva mata nativa e recupera áreas degradadas (pagamento por serviços ambientais). Quer apoiar a bioeconomia (produtos feitos a partir de plantas e animais da floresta) e consolidar o mercado de carbono (sistema em que empresas compram e vendem créditos ligados aos gases que aquecem o planeta).

Quer acabar com tarefas repetidas entre Ibama, Funai e ICMBio. E quer exigir transparência das ONGs que recebem dinheiro de fora do país e entram na Justiça contra a União.

Sobre licença ambiental, promete regras claras e prazos definidos. Se o órgão não responder no prazo, a licença seria concedida. Para grandes obras, propõe regras que não mudem por até 20 anos.

Para o clima, fala em obras contra enchentes, como barragens, diques e drenagem, e em mais alertas da Defesa Civil. E quer que o Brasil esteja, até 2030, entre os principais destinos de investimento em energia solar, eólica, biocombustíveis e hidrogênio verde.`,
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem produz no campo dentro da lei poderia receber por preservar mata, sem novas exigências. Obras e empresas poderiam conseguir licença ambiental mais rápido. O efeito sobre a floresta e o clima dependeria de como a fiscalização e as licenças funcionariam na prática.`,
    condicoes: [
      `A licença dada por falta de resposta e as regras fixas por 20 anos dependeriam de lei aprovada no Congresso`,
      `Fiscalizar e pagar a quem preserva exigiria dinheiro no orçamento e pessoas nos órgãos ambientais`,
    ],
    incertezas: [
      `O plano não diz quanto seria pago a quem preserva nem de onde viria o dinheiro`,
      `Não explica como seriam divididas as tarefas entre Ibama, Funai e ICMBio`,
      `Não é possível saber, só pelo plano, como licenças mais rápidas afetariam a proteção da natureza`,
    ],
    relevantePara: ["rural", "empresario", "casa-familia"],
    fontes: [
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 49,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 50,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 52,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 57,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 58,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 59,
      },
      {
        titulo: "Plano de Governo — Flávio Bolsonaro (PL)",
        url: "/fontes/proposta-flavio.pdf",
        tipo: "plano-de-governo",
        pagina: 63,
      },
    ],
  },
  {
    id: "meio-ambiente-lula-desmatamento-liquido-clima",
    temaId: "meio-ambiente",
    candidaturaId: "lula",
    titulo: "Zerar o desmatamento líquido até 2030 e manter os fundos do clima",
    resumoFiel: `O que o plano diz que já foi feito: um programa para ajudar as cidades com mais desmatamento e uma política para prevenir e controlar o fogo. Também cita a lei que criou o mercado de carbono (sistema em que empresas compram e vendem créditos ligados aos gases que aquecem o planeta).

Diz ainda que o Brasil assumiu a meta de cortar de 59% a 67% desses gases até 2035, em comparação com 2005. E que fundos para o clima, como o Fundo Clima, passaram a movimentar muito mais dinheiro desde 2023.

O que promete para o próximo mandato: zerar o desmatamento líquido até 2030 (o que for derrubado seria compensado pelo que for recuperado). Promete fazer valer o Código Florestal (lei que diz quanto de mata cada propriedade deve manter). E quer destinar terras públicas para áreas de proteção, terras indígenas e quilombolas e assentamentos.

Quer ampliar a fiscalização com satélite e inteligência artificial. E quer conversar com as empresas para rastrear a origem dos produtos (saber se vieram de área desmatada).

Promete manter os fundos do clima e melhorar o pagamento a quem preserva (pagamento por serviços ambientais). Quer incentivar reservas particulares de mata e valorizar os parques nacionais.

Para o clima, promete investir em água e em proteção contra enchentes, e incentivar estados e cidades a criar planos contra o calor extremo. E quer aumentar a energia de fontes renováveis e trocar aos poucos combustíveis fósseis (como gasolina e diesel) por biocombustíveis.`,
    // Uma única entrada por candidatura e tema. Mantida como
    // "proposta-documentada" porque há compromissos para o próximo mandato;
    // o texto separa claramente o que já foi feito.
    tipoAfirmacao: "proposta-documentada",
    impactoCotidiano: `Quem produz no campo poderia ter que mostrar que seus produtos não vêm de área desmatada, se o acordo com as empresas sair. Quem preserva mata poderia receber por isso. Cidades com risco de enchente ou calor forte poderiam receber obras e planos de proteção, dependendo do dinheiro disponível.`,
    condicoes: [
      `Os fundos do clima e a fiscalização precisariam continuar tendo dinheiro`,
      `Rastrear a origem dos produtos dependeria de acordo com as empresas`,
    ],
    incertezas: [
      `O plano não diz quanto seria pago a quem preserva`,
      `Não detalha quais obras contra enchentes seriam feitas nem onde`,
      `Não diz em quanto tempo seria a troca de combustíveis fósseis`,
    ],
    relevantePara: ["rural", "empresario", "casa-familia"],
    fontes: [
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 64,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 69,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 70,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 71,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 72,
      },
      {
        titulo: "Programa de Governo — Lula (PT)",
        url: "/fontes/proposta-lula.pdf",
        tipo: "plano-de-governo",
        pagina: 73,
      },
    ],
  },
];
