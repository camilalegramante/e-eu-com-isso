// Contexto do Congresso eleito em 2026 (mandato a partir de 2027).
// Nº de cadeiras por partido: Câmara dos Deputados / TSE (100% apuradas), via BBC;
// Senado: g1 (TSE + composição informada pelo Senado).
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
  // Senado 2027, por partido (soma = 81): 54 eleitos em 2026 + 27 com mandato
  // até 2031, já com substituições previstas (g1, 08/10/2026). Pode mudar até
  // a posse (2º turno estadual, decisões judiciais). Campo igual ao da Câmara.
  senado2027: [
    { sigla: "PL", cadeiras: 28, campo: "flavio", obs: "partido de Flávio" },
    { sigla: "PT", cadeiras: 9, campo: "lula", obs: "partido de Lula" },
    { sigla: "MDB", cadeiras: 8, campo: "dividido" },
    { sigla: "PP", cadeiras: 6, campo: "flavio" },
    { sigla: "União Brasil", cadeiras: 6, campo: "flavio" },
    { sigla: "PSD", cadeiras: 5, campo: "neutro" },
    { sigla: "Republicanos", cadeiras: 5, campo: "flavio" },
    { sigla: "PSB", cadeiras: 4, campo: "lula" },
    { sigla: "Novo", cadeiras: 3, campo: "flavio" },
    { sigla: "Podemos", cadeiras: 2, campo: "flavio" },
    { sigla: "PSDB", cadeiras: 2, campo: "neutro" },
    { sigla: "PDT", cadeiras: 1, campo: "lula" },
    { sigla: "REDE", cadeiras: 1, campo: "lula" },
    { sigla: "Sem partido", cadeiras: 1 },
  ] as PartidoCamara[],
  fontes: [
    {
      titulo:
        "BBC News Brasil — Composição da nova Câmara (Câmara dos Deputados / TSE)",
      url: "https://www.bbc.com/portuguese/articles/cw054z5n04e9o",
    },
    {
      titulo: "g1 — Composição do Senado de 2027 por partido",
      url: "https://g1.globo.com/politica/eleicoes/2026/noticia/2026/10/08/composicao-senado-2027.ghtml",
    },
    {
      titulo: "Poder360 — Lista completa dos 81 senadores eleitos para 2027",
      url: "https://www.poder360.com.br/poder-eleicoes-2026/leia-a-lista-completa-dos-81-senadores-eleitos-para-2027/",
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

// Deputados e senadores de 2027 de partidos fora dos dois campos (MDB, PSD,
// PSDB etc.) que declararam apoio individual no 2º turno. Critérios:
// - mandato federal a partir de 2027 (eleito ou senador até 2031);
// - partido sem campo definido na lista da Casa (senão já está na soma);
// - fala do próprio parlamentar, conferida na fonte. A usuária aprovou
//   também casos no limite: quem falou em nome do partido, quem assinou
//   nota coletiva e quem teve o vídeo de apoio só resumido pela fonte.
//   Foto, elogio ou apoio só do partido, sem o nome da pessoa, não contam.
// A lista não é completa. Cada nome é aprovado antes de entrar.
export interface ApoioIndividual {
  nome: string;
  partido: string; // mesma sigla usada em camara2027/senado2027
  uf: string;
  casa: "camara" | "senado";
  campo: "flavio" | "lula";
  /** Trecho da declaração, como a fonte registra. */
  fala?: string;
  /** Sem fala própria (ex.: assinou nota coletiva): o que a fonte relata. */
  registro?: string;
  data: string; // YYYY-MM-DD, ou YYYY-MM se a fonte não traz o dia
  fonte: { titulo: string; url: string };
}

export const APOIOS_INDIVIDUAIS: ApoioIndividual[] = [
  {
    nome: "Leonaldo Paranhos",
    partido: "PSD",
    uf: "PR",
    casa: "camara",
    campo: "flavio",
    fala: "nós queremos ação, trabalho e ganhar as eleições para o Flávio Bolsonaro",
    data: "2026-10",
    fonte: { titulo: "Política News Cascavel", url: "https://politicanewscascavel.com.br/paranhos-abre-comite-de-apoio-a-flavio-bolsonaro-em-cascavel" },
  },
  {
    nome: "Sérgio Souza",
    partido: "MDB",
    uf: "PR",
    casa: "camara",
    campo: "flavio",
    fala: "Nós estamos de cabeça na campanha de Flávio Bolsonaro.",
    data: "2026-10-14",
    fonte: { titulo: "Site do deputado", url: "https://deputadosergiosouza.com.br/sergio-souza-reforca-apoio-a-flavio-bolsonaro-em-encontro-nacional-do-mdb/" },
  },
  {
    nome: "Célio Silveira",
    partido: "MDB",
    uf: "GO",
    casa: "camara",
    campo: "flavio",
    fala: "decidi apoiar Flávio Bolsonaro para presidente da República.",
    data: "2026-10-05",
    fonte: { titulo: "Jornal Democrático", url: "https://jornaldemocratico.com.br/eleicoes-2026/diego-sorgatto-e-celio-silveira-declaram-apoio-a-flavio-bolsonaro-no-segundo-turno/" },
  },
  {
    nome: "Lucas do Vale",
    partido: "PSD",
    uf: "GO",
    casa: "camara",
    campo: "flavio",
    fala: "No segundo turno, a gente vai caminhar com Flávio, unidos",
    data: "2026-10-05",
    fonte: { titulo: "Jornal Somos", url: "https://jornalsomos.com.br/brasil/detalhe/paulo-e-lucas-do-vale-destacam-forca-politica-de-rio-verde-e-declaram-apoio-a-flavio-bolsonaro" },
  },
  {
    nome: "Luciano Vieira",
    partido: "PSDB",
    uf: "RJ",
    casa: "camara",
    campo: "flavio",
    fala: "Vamos juntos com Flávio por que temos certeza de que é o melhor nome para o Brasil e especialmente para o Rio.",
    data: "2026-10-09",
    fonte: { titulo: "Agenda do Poder", url: "https://agendadopoder.com.br/apos-neutralidade-no-primeiro-turno-irmaos-vieira-anunciam-apoio-a-flavio-bolsonaro-e-mobilizam-sao-joao-de-meriti/" },
  },
  {
    nome: "Rafael Pezenti",
    partido: "MDB",
    uf: "SC",
    casa: "camara",
    campo: "flavio",
    fala: "A eleição para deputado terminou. Agora temos uma nova missão: tirar o PT do poder e eleger Flávio Bolsonaro.",
    data: "2026-10-08",
    fonte: { titulo: "Com Sérgio Oliveira", url: "https://www.comsergiooliveira.com/2026/10/08/rafael-pezenti-quase-dobra-a-votacao-e-sera-a-unica-cadeira-do-mdb-de-sc-na-camara-federal/" },
  },
  {
    nome: "Lucas Redecker",
    partido: "PSD",
    uf: "RS",
    casa: "camara",
    campo: "flavio",
    fala: "aprovamos uma nota no sentido de que o PSD do Rio Grande do Sul, através das suas bancadas, vai apoiar o Senador Flávio Bolsonaro",
    data: "2026-10-14",
    fonte: { titulo: "Câmara dos Deputados (discurso)", url: "https://www.camara.leg.br/internet/SitaqWeb/TextoHTML.asp?etapa=5&nuDiscurso=1&nuSessao=164.2026&nuQuarto=5466823&nuOrador=1&nuInsercao=1&dtHorarioQuarto=14:52&sgFaseSessao=BC&Data=14/10/2026&txApelido=Lucas%20Redecker&txFaseSessao=Breves%20Comunica%C3%A7%C3%B5es&txTipoSessao=Ordin%C3%A1ria%20-%20CD&dtHoraQuarto=14:52&txEtapa=%C3%8Dntegra%20do%20Discurso" },
  },
  {
    nome: "Baleia Rossi",
    partido: "MDB",
    uf: "SP",
    casa: "camara",
    campo: "flavio",
    fala: "Definimos por essa indicação com entusiasmo",
    registro: "Falou como presidente nacional do MDB, ao formalizar o apoio do partido a Flávio.",
    data: "2026-10-13",
    fonte: { titulo: "Congresso em Foco", url: "https://www.congressoemfoco.com.br/noticia/123219/rachado-mdb-nacional-formaliza-apoio-a-campanha-de-flavio-bolsonaro" },
  },
  {
    nome: "Alceu Moreira",
    partido: "MDB",
    uf: "RS",
    casa: "camara",
    campo: "flavio",
    registro: "Assinou o apoio da bancada do MDB-RS a Flávio, segundo o partido.",
    data: "2026-10-07",
    fonte: { titulo: "MDB-RS", url: "https://mdb-rs.org.br/?eleicoes=2026-noticias-25820" },
  },
  {
    nome: "Juvir Costella",
    partido: "MDB",
    uf: "RS",
    casa: "camara",
    campo: "flavio",
    registro: "Assinou o apoio da bancada do MDB-RS a Flávio, segundo o partido.",
    data: "2026-10-07",
    fonte: { titulo: "MDB-RS", url: "https://mdb-rs.org.br/?eleicoes=2026-noticias-25820" },
  },
  {
    nome: "Vilmar Zanchin",
    partido: "MDB",
    uf: "RS",
    casa: "camara",
    campo: "flavio",
    registro: "Assinou o apoio da bancada do MDB-RS a Flávio, segundo o partido.",
    data: "2026-10-07",
    fonte: { titulo: "MDB-RS", url: "https://mdb-rs.org.br/?eleicoes=2026-noticias-25820" },
  },
  {
    nome: "Rafael Prudente",
    partido: "MDB",
    uf: "DF",
    casa: "camara",
    campo: "flavio",
    registro: "Declarou apoio a Flávio (número 22) em vídeo, segundo o site. A fala exata não foi publicada.",
    data: "2026-10-20",
    fonte: { titulo: "Famosos da Política", url: "https://www.famososdapolitica.com.br/2026/10/rafael-prudente-destaca-participacao-no.html" },
  },
  {
    nome: "Carlos Sampaio",
    partido: "PSD",
    uf: "SP",
    casa: "camara",
    campo: "flavio",
    registro: "Em entrevista, confirmou que vai se engajar na campanha de Flávio no 2º turno, segundo a rádio.",
    data: "2026-10-06",
    fonte: { titulo: "Jovem Pan News Campinas", url: "https://jovempannewscampinas.com.br/noticias/politica/em-entrevista-a-pan-news-campinas-carlos-sampaio-anuncia-apoio-a-flavio-bolsonaro-pl-e-admite-voltar-a-disputar-a-prefeitura-de-campinas.html" },
  },
  {
    nome: "Danrlei",
    partido: "PSD",
    uf: "RS",
    casa: "camara",
    campo: "flavio",
    registro: "Declarou apoio a Flávio nas redes sociais, segundo o site.",
    data: "2026-10-07",
    fonte: { titulo: "Guia Crissiumal", url: "https://guiacrissiumal.com.br/noticias/07-10-2026-Danrlei_declara_apoio_a_Flavio_Bolsonaro_no_segundo_turno_das_eleicoes_presidenciais" },
  },
  {
    nome: "Júnior Lourenço",
    partido: "MDB",
    uf: "MA",
    casa: "camara",
    campo: "flavio",
    registro: "Anunciou alinhamento a Flávio no 2º turno, segundo o site.",
    data: "2026-10-16",
    fonte: { titulo: "Marrapá", url: "https://marrapa.com/2026/10/16/flavio-amplia-apoios-na-bancada-federal-eleita-do-maranhao/" },
  },
  {
    nome: "Gilvan Barros",
    partido: "PSDB",
    uf: "AL",
    casa: "camara",
    campo: "flavio",
    registro: "Declara-se apoiador de Flávio e fez um ato de campanha em Girau do Ponciano, segundo o blog.",
    data: "2026-10-21",
    fonte: { titulo: "7Segundos", url: "https://www.7segundos.com.br/maceio/blogs/2026/10/21/12152-maioria-da-bancada-alagoana-de-federais-pede-voto-para-flavio-bolsonaro" },
  },
  {
    nome: "Julio Garcia",
    partido: "PSD",
    uf: "SC",
    casa: "camara",
    campo: "flavio",
    registro: "Reuniu lideranças do PSD no sul de SC num encontro que oficializou o apoio a Flávio, segundo o jornal.",
    data: "2026-10-17",
    fonte: { titulo: "Folha Regional", url: "https://folharegionalwebtv.com/cotidiano/psd-da-amurel-reune-liderancas-com-julio-garcia-e-confirma-apoio-a-flavio-bolsonaro-193215" },
  },
  {
    nome: "Teresa Surita",
    partido: "MDB",
    uf: "RR",
    casa: "senado",
    campo: "flavio",
    fala: "O meu apoio para esse segundo turno é para o Flávio Bolsonaro",
    data: "2026-10-07",
    fonte: { titulo: "Folha BV", url: "https://www.folhabv.com.br/politica/teresa-surita-desmente-apoio-a-lula-e-declara-voto-em-flavio-bolsonaro-no-2o-turno/" },
  },
  {
    nome: "Plínio Valério",
    partido: "PSDB",
    uf: "AM",
    casa: "senado",
    campo: "flavio",
    fala: "Eu sou eleitor, voto no Flávio Bolsonaro, meus amigos, minha família, todos nós votamos",
    data: "2026-10-20",
    fonte: { titulo: "Rios de Notícias", url: "https://www.riosdenoticias.com.br/plinio-valerio-declara-apoio-a-flavio-bolsonaro-apos-escolher-aliado-de-lula-para-o-governo-do-amazonas/" },
  },
  {
    nome: "Alexandre Guimarães",
    partido: "MDB",
    uf: "TO",
    casa: "senado",
    campo: "flavio",
    fala: "Entendemos ser o melhor caminho para o Brasil neste momento.",
    registro: "Falou em nome do MDB do Tocantins, ao declarar apoio a Flávio.",
    data: "2026-10-13",
    fonte: { titulo: "RR10 Notícias", url: "https://rr10noticias.com.br/mdb-de-alexandre-guimaraes-declara-apoio-a-flavio-bolsonaro-o-melhor-caminho-para-o-brasil-neste-momento/" },
  },
  {
    nome: "Gabriel Nunes",
    partido: "PSD",
    uf: "BA",
    casa: "camara",
    campo: "lula",
    fala: "Agora estamos trabalhando para a reeleição do presidente Lula, uma eleição extremamente apertada, país muito polarizado.",
    data: "2026-10-14",
    fonte: { titulo: "Bahia Notícias", url: "https://www.bahianoticias.com.br/noticia/322447-gabriel-nunes-destaca-rdollar-3-bilhoes-para-ponte-e-reforca-apoio-a-lula" },
  },
  {
    nome: "Carlos Muniz",
    partido: "PSDB",
    uf: "BA",
    casa: "camara",
    campo: "lula",
    fala: "Faz o L",
    registro: "Declarou apoio a Lula no 2º turno em vídeo.",
    data: "2026-10-13",
    fonte: { titulo: "A Tarde", url: "https://atarde.com.br/eleicoes/video-carlos-muniz-declara-apoio-a-lula-no-2-turno-faz-o-l-1405581" },
  },
  {
    nome: "Isnaldo Bulhões Jr.",
    partido: "MDB",
    uf: "AL",
    casa: "camara",
    campo: "lula",
    fala: "Em Alagoas, nada muda. Sempre com Lula.",
    data: "2026-10-09",
    fonte: { titulo: "Agora Alagoas", url: "https://agoraalagoas.com/post/2026/10/09/51354-mdb-de-alagoas-esta-sempre-com-lula-afirma-isnaldo-bulhoes" },
  },
  {
    nome: "Hildo Rocha",
    partido: "MDB",
    uf: "MA",
    casa: "camara",
    campo: "lula",
    fala: "Por esses e outros motivos Hildo Rocha vota Lula, presidente. Lula é 13!",
    data: "2026-10-12",
    fonte: { titulo: "Blog do Marco Aurélio D'Eça", url: "https://www.marcoaureliodeca.com.br/2026/10/12/hildo-rocha-declara-voto-em-lula-no-segundo-turno" },
  },
  {
    nome: "Juscelino Filho",
    partido: "PSDB",
    uf: "MA",
    casa: "camara",
    campo: "lula",
    fala: "Eu estou com o presidente Lula, por coerência, por gratidão, para o Maranhão e o Brasil continuarem avançando",
    data: "2026-10-10",
    fonte: { titulo: "John Cutrim", url: "https://johncutrim.com.br/juscelino-filho-declara-apoio-a-lula-no-segundo-turno-das-eleicoes-2026/" },
  },
  {
    nome: "Delegada Katarina",
    partido: "PSD",
    uf: "SE",
    casa: "camara",
    campo: "lula",
    fala: "Analisando todo cenário, aqui em Sergipe e nacionalmente, meu apoio vai ser para Lula",
    data: "2026-10-16",
    fonte: { titulo: "Fan F1", url: "https://fanf1.com.br/2026/10/16/analisando-todo-cenario-aqui-em-sergipe-e-nacionalmente-meu-apoio-vai-ser-para-lula-declara-deputada-katarina-sobre-2-turno/" },
  },
  {
    nome: "Saullo Vianna",
    partido: "MDB",
    uf: "AM",
    casa: "camara",
    campo: "lula",
    fala: "Esse ato aqui é em apoio à candidatura do Omar para governador, assim como também em apoio à reeleição do presidente Lula",
    data: "2026-10-18",
    fonte: { titulo: "Rede Onda Digital", url: "https://redeondadigital.com.br/politica/saullo-vianna-lula-omar-democracia" },
  },
  {
    nome: "Marcos Aurélio Sampaio",
    partido: "MDB",
    uf: "PI",
    casa: "camara",
    campo: "lula",
    fala: "Lula já fez muito pelo povo brasileiro […] E ainda pode fazer muito mais pelo Brasil e pelo nosso estado!",
    data: "2026-10-16",
    fonte: { titulo: "180graus", url: "https://180graus.com/eleicoes-2026/marcos-aurelio-sampaio-declara-apoio-a-lula-e-convoca-aliados-para-mobilizacao-no-segundo-turno/" },
  },
  {
    nome: "Wilson Martins",
    partido: "PSD",
    uf: "PI",
    casa: "camara",
    campo: "lula",
    fala: "Que caminhada linda, meu povo! O Piauí mostrou que não restam dúvidas, dia 25 é Lula 13!",
    data: "2026-10-20",
    fonte: { titulo: "180graus", url: "https://180graus.com/na-politica/wilson-martins-participa-de-caminhada-em-apoio-a-lula-no-dia-do-piaui-em-teresina/" },
  },
  {
    nome: "Georgiano Neto",
    partido: "PSD",
    uf: "PI",
    casa: "camara",
    campo: "lula",
    fala: "O PSD do Piauí tem lado, tem time. O time aqui é liderado por Rafael, por Wellington e por Lula",
    data: "2026-10-14",
    fonte: { titulo: "180graus", url: "https://180graus.com/eleicoes-2026/georgiano-neto-reforca-apoio-do-psd-no-piaui-a-candidatura-de-lula-no-segundo-turno/" },
  },
  {
    nome: "Vinícius Ferro",
    partido: "MDB",
    uf: "MA",
    casa: "camara",
    campo: "lula",
    fala: "Acredito que o presidente Lula é o mais indicado para continuar esse trabalho no estado do Maranhão",
    data: "2026-10-14",
    fonte: { titulo: "Imirante", url: "https://imirante.com/noticias/sao-luis/2026/10/14/ipolitica-vinicius-ferro-declara-apoio-lula-segundo-turno" },
  },
  {
    nome: "Rafael Brito",
    partido: "MDB",
    uf: "AL",
    casa: "camara",
    campo: "lula",
    registro: "Declara-se apoiador de Lula desde o 1º turno e faz posts sobre a eleição, segundo o blog.",
    data: "2026-10-21",
    fonte: { titulo: "7Segundos", url: "https://www.7segundos.com.br/maceio/blogs/2026/10/21/12152-maioria-da-bancada-alagoana-de-federais-pede-voto-para-flavio-bolsonaro" },
  },
  {
    nome: "Jader Filho",
    partido: "MDB",
    uf: "PA",
    casa: "camara",
    campo: "lula",
    fala: "Foi Lula quem criou o MEI. E agora é Lula, mais uma vez, mostrando que sabe de que lado está: do lado de quem trabalha e quer crescer",
    registro: "Escreveu nas redes; preside o MDB do Pará, que declarou apoio a Lula.",
    data: "2026-10-14",
    fonte: { titulo: "O Liberal", url: "https://www.oliberal.com/eleicoes/mdb-do-para-confirma-apoio-a-lula-no-2-turno-das-eleic-es-2026-1.1182396" },
  },
  {
    nome: "Veneziano Vital do Rêgo",
    partido: "MDB",
    uf: "PB",
    casa: "senado",
    campo: "lula",
    fala: "Eu creio que é possível, que é viável e que é, além de possível, é fundamental para o Brasil a vitória do presidente Lula",
    data: "2026-10-13",
    fonte: { titulo: "Fonte 83", url: "https://fonte83.com.br/politica/veneziano-diz-que-nao-vai-descansar-ate-lula-virar-o-jogo-e-convoca-mobilizacao-para-o-2o-turno/" },
  },
  {
    nome: "Marcelo Castro",
    partido: "MDB",
    uf: "PI",
    casa: "senado",
    campo: "lula",
    fala: "Seguimos juntos, sem deixar ninguém para trás. É Lula 13!",
    data: "2026-10-14",
    fonte: { titulo: "Portal R10", url: "https://www.portalr10.com/blogs-e-colunas/181812/marcelo-castro-reafirma-apoio-a-candidatura-de-lula-no-segundo-turno/" },
  },
  {
    nome: "Renan Filho",
    partido: "MDB",
    uf: "AL",
    casa: "senado",
    campo: "lula",
    fala: "Vamos fazer dessa campanha do presidente Lula o maior movimento popular do próprio povo brasileiro em defesa dos direitos.",
    data: "2026-10-17",
    fonte: { titulo: "Tribuna do Agreste", url: "https://www.tribunadoagreste.com.br/politica/2026/10/17/999476-renan-filho-convoca-populacao-para-ato-com-lula-em-maceio-e-afirma-essa-campanha-e-dos-democratas-contra-o-bolsonarismo" },
  },
  {
    nome: "Helder Barbalho",
    partido: "MDB",
    uf: "PA",
    casa: "senado",
    campo: "lula",
    fala: "Dez diretórios, incluindo o do Pará, declararam apoio ao presidente Lula",
    registro: "Falou em nome dos diretórios do MDB que apoiam Lula.",
    data: "2026-10-14",
    fonte: { titulo: "Gazeta Carajás", url: "https://www.gazetacarajas.com/noticia/helder-mantem-posicao-e-reafirma-apoio-a-lula-no-2-turno" },
  },
  {
    nome: "Omar Aziz",
    partido: "PSD",
    uf: "AM",
    casa: "senado",
    campo: "lula",
    fala: "O segundo voto para presidente é Lula, 13.",
    registro: "Disputa o governo do Amazonas. Se for eleito, deixa o Senado.",
    data: "2026-10-19",
    fonte: { titulo: "BNC Amazonas", url: "https://bncamazonas.com.br/poder/omar-aziz-12/" },
  },
  {
    nome: "Otto Alencar",
    partido: "PSD",
    uf: "BA",
    casa: "senado",
    campo: "lula",
    fala: "escolher aquele que mais fez pela Bahia, que foi sem dúvida nenhuma o presidente Lula",
    data: "2026-10-07",
    fonte: { titulo: "BNews", url: "https://www.bnews.com.br/noticias/politica/otto-alencar-aposta-na-diminuicao-da-abstencao-para-aumentar-votos-de-lula-na-bahia.html" },
  },
  {
    nome: "Júlio César",
    partido: "PSD",
    uf: "PI",
    casa: "senado",
    campo: "lula",
    fala: "nós vamos trabalhar rigorosamente porque o presidente Lula é um homem que orgulha o Brasil",
    data: "2026-10-04",
    fonte: { titulo: "Cidade Verde", url: "https://cidadeverde.com/eleicoes/464114/eleito-senador-julio-cesar-celebra-mandatos-dos-filhos-como-deputados" },
  },
  {
    nome: "Jussara Lima",
    partido: "PSD",
    uf: "PI",
    casa: "senado",
    campo: "lula",
    fala: "Reafirmo meu compromisso com o presidente Lula",
    registro: "Suplente: fica no Senado enquanto Wellington Dias for ministro.",
    data: "2026-10-12",
    fonte: { titulo: "Portal R10", url: "https://www.portalr10.com/blogs-e-colunas/181605/jussara-lima-reafirma-apoio-a-lula-e-defende-uniao-do-time-do-povo/" },
  },
  {
    nome: "Eduardo Braga",
    partido: "MDB",
    uf: "AM",
    casa: "senado",
    campo: "lula",
    fala: "Votar é prova de vida para o INSS, para a aposentadoria e para os benefícios da Previdência Social",
    registro: "Pediu votos para Lula e para Omar Aziz numa mensagem ao eleitor, segundo o portal.",
    data: "2026-10-20",
    fonte: { titulo: "Amazonas1", url: "https://amazonas1.com.br/eduardo-braga-pede-votos-para-omar-aziz-e-lula-no-segundo-turno/" },
  },
];

/** Apoios individuais de uma Casa, separados por candidato. */
export function apoiosIndividuais(casa: ApoioIndividual["casa"]): {
  flavio: ApoioIndividual[];
  lula: ApoioIndividual[];
} {
  const daCasa = APOIOS_INDIVIDUAIS.filter((a) => a.casa === casa);
  return {
    flavio: daCasa.filter((a) => a.campo === "flavio"),
    lula: daCasa.filter((a) => a.campo === "lula"),
  };
}

/** Todos os partidos com cadeira, ordenados do maior para o menor. */
export function camaraOrdenada(): PartidoCamara[] {
  return [...CONGRESSO.camara2027]
    .filter((p) => p.cadeiras > 0)
    .sort((a, b) => b.cadeiras - a.cadeiras);
}

/** Soma de cadeiras por campo de apoio (padrão: Câmara; passe senado2027 para o Senado). */
export function somaPorCampo(lista: PartidoCamara[] = CONGRESSO.camara2027): {
  flavio: number;
  lula: number;
  dividido: number;
  neutro: number;
  outros: number;
} {
  const acc = { flavio: 0, lula: 0, dividido: 0, neutro: 0, outros: 0 };
  for (const p of lista) {
    if (p.campo === "flavio") acc.flavio += p.cadeiras;
    else if (p.campo === "lula") acc.lula += p.cadeiras;
    else if (p.campo === "dividido") acc.dividido += p.cadeiras;
    else if (p.campo === "neutro") acc.neutro += p.cadeiras;
    else acc.outros += p.cadeiras;
  }
  return acc;
}
