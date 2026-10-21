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
];

export function getPontosDeAtencao(propostaId: string): PontoDeAtencao[] {
  return PONTOS_DE_ATENCAO.filter((p) => p.propostaId === propostaId);
}
