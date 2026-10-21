// Contexto do Congresso eleito em 2026 (mandato a partir de 2027).
// Nº de cadeiras por partido: Câmara dos Deputados / TSE (100% apuradas), via BBC.
// Campo de apoio no 2º turno: Poder360 (bloco de Flávio) e O Povo (listas e nuances).
// Números são FATO atribuído à fonte; a leitura de "mais difícil" é interpretação.

export type CampoApoio = "flavio" | "lula" | "dividido" | "neutro";

export interface PartidoCamara {
  sigla: string;
  cadeiras: number;
  campo?: CampoApoio;
  obs?: string; // usado para os partidos dos próprios candidatos
}

export const CONGRESSO = {
  atualizadoEm: "outubro de 2026",
  // Regras fixas da Constituição.
  regras: {
    camaraTotal: 513,
    camaraMaioria: 257, // maioria simples
    camaraPec: 308, // 3/5 para emenda constitucional
    senadoTotal: 81,
    senadoMaioria: 41,
    senadoPec: 49, // 3/5
  },
  // Partidos que declararam apoio a Flávio no 2º turno (Poder360):
  // PL, União Brasil, PP, Republicanos, Podemos e Novo = 286 deputados / 50 senadores.
  baseFlavio: { camara: 286, senado: 50 },
  // Câmara 2027, por partido (soma = 513). Campo de apoio conforme O Povo/Poder360.
  camara2027: [
    { sigla: "PL", cadeiras: 121, campo: "flavio", obs: "partido de Flávio" },
    { sigla: "PT", cadeiras: 70, campo: "lula", obs: "partido de Lula" },
    { sigla: "União Brasil", cadeiras: 46, campo: "flavio" },
    { sigla: "PSD", cadeiras: 43, campo: "neutro" },
    { sigla: "PP", cadeiras: 41, campo: "flavio" },
    { sigla: "Republicanos", cadeiras: 41, campo: "flavio" },
    { sigla: "MDB", cadeiras: 36, campo: "dividido" },
    { sigla: "Podemos", cadeiras: 27, campo: "flavio" },
    { sigla: "PSB", cadeiras: 15, campo: "lula" },
    { sigla: "PSOL", cadeiras: 14, campo: "lula" },
    { sigla: "PSDB", cadeiras: 11, campo: "neutro" },
    { sigla: "PCdoB", cadeiras: 11, campo: "lula" },
    { sigla: "Novo", cadeiras: 10, campo: "flavio" },
    { sigla: "PV", cadeiras: 7, campo: "lula" },
    { sigla: "PDT", cadeiras: 6, campo: "lula" },
    { sigla: "Avante", cadeiras: 5, campo: "flavio" },
    { sigla: "PRD", cadeiras: 5 },
    { sigla: "Solidariedade", cadeiras: 2 },
    { sigla: "REDE", cadeiras: 1, campo: "lula" },
    { sigla: "Missão", cadeiras: 1 },
    { sigla: "Cidadania", cadeiras: 0 },
  ] as PartidoCamara[],
  // Senado 2027: destaques conhecidos.
  senado2027: { pl: 19, pt: 6 },
  fontes: [
    {
      titulo:
        "BBC News Brasil — Composição da nova Câmara (Câmara dos Deputados / TSE)",
      url: "https://www.bbc.com/portuguese/articles/cw054z5n04e9o",
    },
    {
      titulo:
        "Poder360 — Partidos que apoiam Flávio terão 286 deputados e 50 senadores",
      url: "https://www.poder360.com.br/poder-eleicoes-2026/partidos-que-apoiam-flavio-terao-286-deputados-e-50-senadores/",
    },
    {
      titulo: "O Povo — Quais partidos apoiam Flávio e quais apoiam Lula no 2º turno",
      url: "https://www.opovo.com.br/noticias/politica/eleicoes/2026/10/14/quais-partidos-apoiam-flavio-e-quais-sao-lula-no-2-turno.html",
    },
    {
      titulo:
        "Correio Braziliense — Lula e Flávio e a correlação de forças no Congresso",
      url: "https://blogs.correiobraziliense.com.br/azedo/lula-e-flavio-representam-dois-projetos-de-nacao-que-dividem-o-brasil/",
    },
  ],
};

/** Todos os partidos com cadeira, ordenados do maior para o menor. */
export function camaraOrdenada(): PartidoCamara[] {
  return [...CONGRESSO.camara2027]
    .filter((p) => p.cadeiras > 0)
    .sort((a, b) => b.cadeiras - a.cadeiras);
}

/** Soma de deputados por campo de apoio (cálculo a partir das bancadas). */
export function somaPorCampo(): {
  flavio: number;
  lula: number;
  dividido: number;
  neutro: number;
  outros: number;
} {
  const acc = { flavio: 0, lula: 0, dividido: 0, neutro: 0, outros: 0 };
  for (const p of CONGRESSO.camara2027) {
    if (p.campo === "flavio") acc.flavio += p.cadeiras;
    else if (p.campo === "lula") acc.lula += p.cadeiras;
    else if (p.campo === "dividido") acc.dividido += p.cadeiras;
    else if (p.campo === "neutro") acc.neutro += p.cadeiras;
    else acc.outros += p.cadeiras;
  }
  return acc;
}
