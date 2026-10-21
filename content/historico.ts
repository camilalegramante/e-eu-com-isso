import type { PontoDeAtencao } from "@/lib/types";

// "O histórico combina com a proposta?" — pontos de atenção por proposta.
// Critérios (iguais para todas as candidaturas):
// - Ação do PRÓPRIO candidato: voto, projeto de lei de autoria dele, ato do
//   governo dele ou declaração pública com registro confiável. Atos de
//   parentes, aliados ou do partido não contam.
// - Relação direta com uma proposta do plano, no mesmo tema.
// - Fonte verificável (oficial e/ou jornalismo profissional), com link.
// - Inclui a justificativa do candidato (outroLado) quando ela existir.
// Mostra fatos lado a lado e uma análise condicional; nunca afirma que "é
// contradição". A lista não é completa: ausência de itens não quer dizer
// coerência.
export const PONTOS_DE_ATENCAO: PontoDeAtencao[] = [
  // ---- Segurança pública (pesquisa de 21/10/2026) ----
  {
    id: "historico-flavio-marcacao-municao",
    propostaId: "seguranca-flavio-brasil-sem-medo",
    oQuePlanoDiz: `Promete "guerra ao crime organizado", tropa na fronteira contra armas e drogas e mais rigor contra as facções.`,
    oQueHistoricoMostra: `Como senador, Flávio defendeu em público a aprovação do projeto de lei 3.723/2019. Na versão aprovada pela Câmara, o projeto acaba com a marcação de lote nas munições vendidas às polícias e às Forças Armadas. Essa marcação já ajudou a polícia a descobrir de onde vieram balas usadas em crimes, como no assassinato da juíza Patrícia Acioli, em 2011. Em março de 2022, ele pediu que a CCJ do Senado votasse o texto sem as mudanças negociadas por outros senadores. O projeto está parado no Senado.`,
    dataAcao: "2022-03",
    tipoAcao: "declaracao",
    porQueChamaAtencao: `A proposta promete combater o crime organizado e o tráfico de armas. A marcação permite saber se uma bala usada num crime foi desviada de uma polícia. Fica a dúvida sobre como acabar com essa marcação combinaria com a promessa.`,
    outroLado: `Em entrevista ao Jornal Nacional (16/10/2026), disse que combater o crime "é muito maior do que qualquer detalhezinho desse em cima de uma cápsula". No debate de 18/10/2026, segundo a Jovem Pan, disse: "Nunca quis tirar nada disso". O relator do projeto no Senado, Marcos do Val, argumentou que a marcação dificulta separar as cápsulas usadas por atiradores esportivos.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 3.723/2019 (tramitação)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/140042",
        tipo: "orgao-publico",
      },
      {
        titulo: "Congresso em Foco — Cartuchos sem registro: entenda projeto citado na sabatina de Flávio",
        url: "https://www.congressoemfoco.com.br/noticia/123345/cartuchos-sem-registro-entenda-projeto-citado-na-sabatina-de-flavio",
        tipo: "jornalismo",
        publicadoEm: "2026-10-17",
      },
      {
        titulo: "Ponte Jornalismo — O \"detalhezinho\" rejeitado por Flávio que ajudou a resolver crimes",
        url: "https://ponte.org/flavio-bolsonaro-rastreio-municoes-crimes/",
        tipo: "jornalismo",
      },
      {
        titulo: "Metrópoles — Flávio chama de \"detalhezinho\" projeto para retirar marcação de munições",
        url: "https://www.metropoles.com/brasil/flavio-chama-de-detalhezinho-projeto-para-retirar-marcacao-de-municoes",
        tipo: "jornalismo",
      },
      {
        titulo: "Jovem Pan — Projeto defendido por Flávio que dificulta identificação de munições contrasta com diretriz da ONU",
        url: "https://jovempan.com.br/politica/projeto-defendido-por-flavio-que-dificulta-identificacao-de-municoes-contrasta-com-diretriz-da-onu/",
        tipo: "jornalismo",
        publicadoEm: "2026-10-20",
      },
    ],
  },
  {
    id: "historico-flavio-homenagens-policiais",
    propostaId: "seguranca-flavio-brasil-sem-medo",
    oQuePlanoDiz: `Promete "guerra ao crime organizado" e tratar facções e milícias como organizações terroristas.`,
    oQueHistoricoMostra: `Como deputado estadual no Rio, Flávio propôs homenagens a dois policiais. Em 2004, uma moção de louvor ao PM Ronald Paulo Alves Pereira, que na época era investigado por uma chacina que matou quatro jovens. Ronald foi preso em 2019 numa operação sobre grilagem de terras e apontado por reportagens como chefe de milícia. Em 2005, a Medalha Tiradentes ao PM Adriano da Nóbrega, que estava preso aguardando julgamento por homicídio. Adriano foi absolvido em 2007. Anos depois, investigações o apontaram como chefe do "Escritório do Crime", grupo de matadores.`,
    dataAcao: "2005",
    tipoAcao: "ato-parlamentar",
    porQueChamaAtencao: `A proposta promete tratar milícias como terrorismo. No caso de Ronald, a investigação já existia quando ele foi homenageado. No caso de Adriano, a ligação com o crime organizado só apareceu depois. Fica a dúvida sobre como Flávio avalia hoje essas escolhas. Não há decisão da Justiça que ligue Flávio a milícias.`,
    outroLado: `Em 2020, Flávio disse que, quando homenageou Adriano e seus colegas, eles "estavam presos injustamente" e "foram absolvidos": "Eu estava certo!". Também disse que homenageou centenas de policiais e que não tem nada a ver com milícia.`,
    fontes: [
      {
        titulo: "Congresso em Foco — Dez fatos que ligam a família Bolsonaro a milicianos",
        url: "https://www.congressoemfoco.com.br/noticia/31921/dez-fatos-que-ligam-a-familia-bolsonaro-a-milicianos",
        tipo: "jornalismo",
        publicadoEm: "2019-12-23",
      },
      {
        titulo: "Congresso em Foco — \"Herói\", \"brilhante\": as vezes que Bolsonaro e Flávio defenderam miliciano morto",
        url: "https://www.congressoemfoco.com.br/governo/heroi-brilhante-as-vezes-que-bolsonaro-e-flavio-defenderam-miliciano-morto/",
        tipo: "jornalismo",
        publicadoEm: "2020-02-16",
      },
      {
        titulo: "Metrópoles — Flávio Bolsonaro diz que Adriano era inocente quando o homenageou",
        url: "https://www.metropoles.com/brasil/politica-br/flavio-bolsonaro-diz-que-adriano-era-inocente-quando-o-homenageou",
        tipo: "jornalismo",
        publicadoEm: "2020-02-20",
      },
    ],
  },
  {
    id: "historico-lula-bloqueio-fundo-seguranca",
    propostaId: "seguranca-lula-susp-ministerio",
    oQuePlanoDiz: `Promete reforçar o programa Brasil Contra o Crime Organizado, com R$ 10 bilhões para estados e cidades, e dar mais papel ao governo federal na segurança.`,
    oQueHistoricoMostra: `Em 2025, o governo Lula bloqueou cerca de R$ 400 milhões do Fundo Nacional de Segurança Pública e R$ 100 milhões do Fundo Penitenciário. Quem contou foi o próprio ministro da Justiça, Ricardo Lewandowski, na CPI do Crime Organizado do Senado, em dezembro de 2025. Bloquear não é cortar de vez: o dinheiro pode ser liberado depois.`,
    dataAcao: "2025",
    tipoAcao: "ato-de-governo",
    porQueChamaAtencao: `A proposta promete mais dinheiro federal contra o crime organizado. Em 2025, o próprio governo segurou parte da verba dessa área. Fica a dúvida sobre como o dinheiro prometido seria protegido de novos bloqueios.`,
    outroLado: `O ministro lembrou que o fundo recebeu R$ 500 milhões a mais no orçamento de 2025, mas disse que isso não basta. Defendeu a PEC da Segurança, proposta pelo governo, para que essa verba não possa mais ser bloqueada.`,
    fontes: [
      {
        titulo: "Agência Senado — Na CPI, Lewandowski defende cooperação nacional e internacional contra o crime",
        url: "https://www12.senado.leg.br/noticias/materias/2025/12/09/na-cpi-lewandowski-defende-cooperacao-nacional-e-internacional-contra-o-crime",
        tipo: "orgao-publico",
        publicadoEm: "2025-12-09",
      },
      {
        titulo: "IstoÉ Dinheiro (Agência Brasil) — Sem dinheiro, mãos estão amarradas para combate ao crime, diz ministro",
        url: "https://istoedinheiro.com.br/sem-dinheiro-maos-estao-amarradas-para-combate-ao-crime-diz-ministro",
        tipo: "jornalismo",
        publicadoEm: "2025-12-09",
      },
      {
        titulo: "Itatiaia — Ministro de Lula reclama de cortes na segurança",
        url: "https://www.itatiaia.com.br/politica/ministro-de-lula-reclama-de-cortes-na-seguranca-sem-dinheiro-nao-e-possivel-combater-crime-organizado/",
        tipo: "jornalismo",
        publicadoEm: "2025-12-09",
      },
    ],
  },

  // ---- Meio ambiente (pesquisa de 21/10/2026) ----
  {
    id: "historico-flavio-reserva-legal",
    propostaId: "meio-ambiente-flavio-desmatamento-ilegal-licenca",
    oQuePlanoDiz: `Promete zerar o desmatamento ilegal até 2029 e pagar a quem preserva mata nativa.`,
    oQueHistoricoMostra: `Em abril de 2019, como senador, Flávio foi um dos autores, com Marcio Bittar, de um projeto de lei que acabava com a "reserva legal": a parte de mata nativa que cada propriedade rural é obrigada a manter. Os donos de terra só teriam de preservar margens de rios, nascentes e encostas. Em agosto de 2019, os próprios autores pediram a retirada do projeto, que nunca foi votado.`,
    dataAcao: "2019-04-16",
    tipoAcao: "projeto-de-lei",
    porQueChamaAtencao: `Sem a reserva legal, derrubar boa parte da mata das fazendas poderia deixar de ser ilegal. Fica a dúvida sobre como essa ideia combinaria com a promessa de zerar o desmatamento ilegal e pagar a quem preserva.`,
    outroLado: `Na época, Flávio disse: "A intenção é devolver ao proprietário rural o direito à sua terra". O projeto foi retirado pelos autores em 2019. Não encontramos explicação pública dele sobre a retirada.`,
    fontes: [
      {
        titulo: "Senado Federal — PL 2.362/2019 (autoria, texto e retirada)",
        url: "https://www25.senado.leg.br/web/atividade/materias/-/materia/136371",
        tipo: "orgao-publico",
        publicadoEm: "2019-04-16",
      },
      {
        titulo: "Congresso em Foco — Projeto de Flávio Bolsonaro elimina reservas florestais em propriedades rurais",
        url: "https://www.congressoemfoco.com.br/meio-ambiente/projeto-de-flavio-bolsonaro-elimina-reservas-florestais-em-propriedades-rurais/",
        tipo: "jornalismo",
        publicadoEm: "2019-04-25",
      },
    ],
  },
  {
    id: "historico-lula-foz-do-amazonas",
    propostaId: "meio-ambiente-lula-desmatamento-liquido-clima",
    oQuePlanoDiz: `Promete aumentar a energia renovável e trocar aos poucos combustíveis fósseis, como gasolina e diesel, por biocombustíveis.`,
    oQueHistoricoMostra: `Em fevereiro de 2025, Lula cobrou em público o Ibama para liberar a Petrobras a procurar petróleo na Foz do Amazonas, no mar do Amapá. Disse que o Ibama parecia "um órgão contra o governo". Em outubro de 2025, o Ibama deu a licença para perfurar um poço de pesquisa na região. A licença é só para pesquisa: produzir petróleo dependeria de novas licenças.`,
    dataAcao: "2025-02-12",
    tipoAcao: "declaracao",
    porQueChamaAtencao: `O plano promete diminuir aos poucos o uso de combustíveis fósseis. Abrir uma nova região para procurar petróleo poderia aumentar a produção desses combustíveis por muitos anos. Fica a dúvida sobre como as duas coisas andariam juntas e em que prazo a troca aconteceria.`,
    outroLado: `Lula disse que "a gente tem que utilizar o dinheiro do petróleo para consolidar a chamada transição energética" e que, "enquanto o mundo precisar, o Brasil não vai jogar fora uma riqueza que pode melhorar a própria vida do povo brasileiro".`,
    fontes: [
      {
        titulo: "Jornal do Comércio (Folhapress) — Lula diz que quer explorar Foz do Amazonas e fala em lenga-lenga do Ibama",
        url: "https://www.jornaldocomercio.com/economia/2025/02/1190949-lula-diz-que-quer-explorar-foz-do-amazonas-e-fala-em-lenga-lenga-do-ibama.html",
        tipo: "jornalismo",
        publicadoEm: "2025-02-12",
      },
      {
        titulo: "Poder360 — Às vésperas da COP30, Lula defende perfuração na Foz do Amazonas",
        url: "https://www.poder360.com.br/poder-governo/as-vesperas-da-cop30-lula-defende-perfuracao-na-foz-do-amazonas/",
        tipo: "jornalismo",
        publicadoEm: "2025-10-24",
      },
    ],
  },

  // ---- Saúde (pesquisa de 21/10/2026) ----
  {
    id: "historico-lula-bloqueio-farmacia-popular",
    propostaId: "saude-lula-sus-agora-tem-especialistas",
    oQuePlanoDiz: `Promete manter o Farmácia Popular com remédios de graça e ampliar os lugares onde se retira o remédio.`,
    oQueHistoricoMostra: `Em julho de 2024, o governo Lula bloqueou parte do Orçamento para cumprir as regras de gastos. Na divisão desse bloqueio, o Farmácia Popular foi o programa mais atingido: R$ 1,7 bilhão ficou bloqueado. Bloquear não é cortar de vez: o dinheiro pode ser liberado depois.`,
    dataAcao: "2024-07",
    tipoAcao: "ato-de-governo",
    porQueChamaAtencao: `A proposta promete manter e ampliar o Farmácia Popular. Em 2024, o próprio governo segurou parte da verba do programa para fechar as contas. Fica a dúvida sobre como o programa seria protegido de novos bloqueios.`,
    outroLado: `O Ministério da Saúde disse: "Não haverá impacto no funcionamento do Farmácia Popular nem na sua projeção de crescimento". Explicou que o bloqueio atingiu uma reserva que seria usada em outra ação e que o valor poderia ser recomposto depois.`,
    fontes: [
      {
        titulo: "Câmara dos Deputados — Decreto nº 12.120, de 30 de julho de 2024 (bloqueio no Orçamento)",
        url: "https://www2.camara.leg.br/legin/fed/decret/2024/decreto-12120-30-julho-2024-796012-publicacaooriginal-172506-pe.html",
        tipo: "legislacao",
        publicadoEm: "2024-07-30",
      },
      {
        titulo: "Poder360 — Bloqueio atinge Farmácia Popular, Auxílio Gás e Pé-de-meia",
        url: "https://www.poder360.com.br/poder-economia/bloqueio-atinge-farmacia-popular-auxilio-gas-e-pe-de-meia/",
        tipo: "jornalismo",
        publicadoEm: "2024-08-09",
      },
      {
        titulo: "Metrópoles — Governo Lula congela R$ 2,2 bi de Auxílio Gás e Farmácia Popular",
        url: "https://www.metropoles.com/brasil/governo-lula-congela-r-22-bi-de-auxilio-gas-e-farmacia-popular",
        tipo: "jornalismo",
        publicadoEm: "2024-08-08",
      },
    ],
  },

  // ---- Custo de vida (pesquisa de 21/10/2026) ----
  {
    id: "historico-flavio-termicas-eletrobras",
    propostaId: "custo-de-vida-flavio-reforma-tributaria",
    oQuePlanoDiz: `Promete deixar a conta de luz mais barata, tirando aos poucos as taxas extras que vêm nela.`,
    oQueHistoricoMostra: `Em junho de 2021, como senador, Flávio votou "Sim" na medida que permitiu privatizar a Eletrobras. O texto aprovado incluiu a contratação obrigatória de 8.000 MW de usinas térmicas a gás. Em 2023, o TCU disse que esse volume "não teve motivação", que não houve estudo oficial sobre o efeito na conta de luz e que a contratação geraria uma cobrança paga pelos consumidores.`,
    dataAcao: "2021-06",
    tipoAcao: "voto",
    porQueChamaAtencao: `A proposta promete tirar aos poucos as taxas extras da conta de luz. O voto de 2021 ajudou a aprovar uma contratação que, segundo o TCU, seria paga pelos consumidores. A privatização era o tema principal da votação; as térmicas eram um trecho do texto. Fica a dúvida sobre como esse custo entraria na promessa de uma conta mais leve.`,
    outroLado: `Não encontramos explicação pública de Flávio sobre esse voto. Na época, o governo e os relatores negaram que o texto aumentaria a conta de luz. As estimativas de custo para o consumidor vêm de entidades do setor, não de cálculo oficial.`,
    fontes: [
      {
        titulo: "Congresso Nacional — Votações da MP 1.031/2021 (Eletrobras)",
        url: "https://www.congressonacional.leg.br/materias/medidas-provisorias/-/mpv/146740/votacoes",
        tipo: "orgao-publico",
        publicadoEm: "2021-06-16",
      },
      {
        titulo: "Agência Senado — Senado aprova MP que desestatiza Eletrobras",
        url: "https://www12.senado.leg.br/noticias/materias/2021/06/17/senado-aprova-mp-que-desestatiza-eletrobras-texto-volta-para-camara",
        tipo: "orgao-publico",
        publicadoEm: "2021-06-17",
      },
      {
        titulo: "TCU — Contratação de energia de reserva na privatização da Eletrobras deverá ser motivada",
        url: "https://portal.tcu.gov.br/imprensa/noticias/contratacao-de-energia-de-reserva-na-privatizacao-da-eletrobras-devera-ser-motivada",
        tipo: "orgao-publico",
        publicadoEm: "2023-01-27",
      },
      {
        titulo: "Money Times (Reuters) — Câmara aprova privatização da Eletrobras; governo nega impacto na tarifa",
        url: "https://www.moneytimes.com.br/camara-aprova-privatizacao-da-eletrobras-governo-nega-impacto-na-tarifa/",
        tipo: "jornalismo",
        publicadoEm: "2021-06-21",
      },
    ],
  },
  {
    id: "historico-lula-carvao-2040",
    propostaId: "custo-de-vida-lula-reforma-tributaria",
    oQuePlanoDiz: `Promete abrir um debate sobre como baratear a conta de luz de casas e empresas.`,
    oQueHistoricoMostra: `Em janeiro de 2025, Lula vetou a contratação obrigatória de usinas a carvão, explicando que isso "impactaria os preços das tarifas de energia". Em novembro de 2025, o governo Lula sancionou outra lei que manteve a compra obrigatória de energia de usinas a carvão até 2040. O trecho foi incluído pelo Congresso; o governo decidiu não vetá-lo.`,
    dataAcao: "2025-11",
    tipoAcao: "ato-de-governo",
    porQueChamaAtencao: `Dez meses depois de vetar a contratação de carvão por causa do custo na conta de luz, o governo manteve uma contratação parecida até 2040. A federação das indústrias de Minas Gerais estima um custo de mais de R$ 1 bilhão por ano (não é cálculo oficial). Fica a dúvida sobre como esse custo entraria no debate prometido sobre a conta de luz.`,
    outroLado: `O ministro de Minas e Energia, Alexandre Silveira, disse que o país "precisa dessas fontes energéticas para dar segurança ao sistema". Na mesma lei, o governo vetou outros trechos que poderiam encarecer a conta de luz.`,
    fontes: [
      {
        titulo: "Câmara dos Deputados — Veto à Lei 15.097/2025 (razões do veto ao carvão)",
        url: "https://www2.camara.leg.br/legin/fed/lei/2025/lei-15097-10-janeiro-2025-796889-veto-174084-pl.html",
        tipo: "legislacao",
        publicadoEm: "2025-01-10",
      },
      {
        titulo: "Poder360 — Governo mantém uso do carvão até 2040 na reforma do setor elétrico",
        url: "https://www.poder360.com.br/poder-energia/governo-mantem-uso-do-carvao-ate-2040-na-reforma-do-setor-eletrico/",
        tipo: "jornalismo",
        publicadoEm: "2025-11-25",
      },
      {
        titulo: "Correio Braziliense — MP do setor elétrico é sancionada (edição impressa, p. A10)",
        url: "https://edicao.correiobraziliense.com.br/correiobraziliense/2025/11/26/13514b/pdf/A10-ECO-2611-DIG.pdf",
        tipo: "jornalismo",
        publicadoEm: "2025-11-26",
      },
    ],
  },
];

export function getPontosDeAtencao(propostaId: string): PontoDeAtencao[] {
  return PONTOS_DE_ATENCAO.filter((p) => p.propostaId === propostaId);
}
