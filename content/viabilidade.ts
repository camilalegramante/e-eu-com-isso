import type { Viabilidade } from "@/lib/types";
import { CONGRESSO, somaPorCampo } from "./congresso";

// Leitura de viabilidade por proposta (chave = id da proposta).
// É ANÁLISE, não fato e não nota. Os mesmos quatro critérios valem para todas
// as candidaturas, de forma neutra, com base no que a própria proposta exige.
// O critério "parlamentar" usa SEMPRE as mesmas frases para as duas
// candidaturas (abaixo); só muda o que a proposta exige (ação do governo, lei
// ou PEC). As etiquetas usam o vocabulário fixo de lib/types.ts e mostram a
// exigência mais alta citada no texto. Números vêm de content/congresso.ts.

const { regras } = CONGRESSO;
const soma = somaPorCampo();
const somaSenado = somaPorCampo(CONGRESSO.senado2027);

const APOIO = `Os partidos que declararam apoio a Flávio no 2º turno somam cerca de ${soma.flavio} deputados; os que apoiam Lula, cerca de ${soma.lula}. Apoio na eleição não garante voto em cada projeto.`;

const LEI = `Precisa de lei aprovada no Congresso (maioria: ${regras.camaraMaioria} de ${regras.camaraTotal} deputados). ${APOIO}`;

const PEC = `Precisa mudar a Constituição (PEC): ${regras.camaraPec} de ${regras.camaraTotal} deputados e ${regras.senadoPec} de ${regras.senadoTotal} senadores, em duas votações em cada Casa. ${APOIO} No Senado, os que apoiam Flávio somam cerca de ${somaSenado.flavio} senadores; os que apoiam Lula, cerca de ${somaSenado.lula}.`;

const GOVERNO_E_ORCAMENTO = `Boa parte pode ser feita pelo próprio governo, sem lei nova. Mas o dinheiro de cada ano depende do orçamento, que o Congresso aprova. ${APOIO}`;

export const VIABILIDADE: Record<string, Viabilidade> = {
  // ---- Custo de vida e impostos ----
  "custo-de-vida-flavio-reforma-tributaria": {
    etiquetas: { orcamento: "Reduz arrecadação", parlamentar: "Muda a Constituição" },
    orcamento:
      "Cobrar menos imposto reduz o que entra nos cofres; seria preciso mostrar de onde tirar esse dinheiro sem furar as regras de gastos.",
    parlamentar: `Parte da reforma dos impostos está na Constituição. ${PEC}`,
    institucional:
      "Mudar a forma de cobrar imposto exige ajustar os sistemas da Receita e das fazendas dos estados.",
    juridica:
      "Parte da reforma está na Constituição; mudanças podem ser questionadas na Justiça.",
  },
  "custo-de-vida-lula-reforma-tributaria": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Não definido no plano" },
    orcamento:
      "Baixar a conta de luz ou segurar o preço dos combustíveis pode custar dinheiro público ou mexer nas contas das empresas de energia; o plano não diz como seria pago.",
    parlamentar: `O plano fala em abrir um debate, sem dizer se seria preciso lei nova. Se for, segue a mesma regra: ${LEI}`,
    institucional:
      "Mudar a conta de luz envolve a Aneel (agência que regula a energia) e as empresas do setor. A devolução de imposto (cashback) depende de um sistema ligado ao Cadastro Único.",
    juridica:
      "A reforma dos impostos já foi aprovada; consolidar o que já está na lei tem menos chance de ser contestado. Mudanças na conta de luz precisam respeitar os contratos das empresas de energia.",
  },

  // ---- Emprego e salário ----
  "emprego-salario-flavio-trabalho-que-compensa": {
    etiquetas: { orcamento: "Reduz arrecadação", parlamentar: "Precisa de lei" },
    orcamento:
      "Reduzir encargos sobre o salário pode diminuir o que entra para a Previdência; seria preciso dizer como compensar.",
    parlamentar: `Mudar regras do trabalho exige lei. ${LEI}`,
    institucional:
      "O banco nacional de vagas precisa de um sistema ligado ao RH das empresas.",
    juridica:
      "Mudanças trabalhistas costumam ser questionadas na Justiça do Trabalho e no STF.",
  },
  "emprego-salario-lula-valorizar-trabalho": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Muda a Constituição" },
    orcamento:
      "Aumento do salário mínimo acima da inflação também sobe aposentadorias e o BPC; esse gasto maior precisa caber nas regras de gastos.",
    parlamentar: `Reduzir a jornada mexe na Constituição. Segundo o plano, o texto já foi aprovado na Câmara e falta o Senado (${regras.senadoPec} de ${regras.senadoTotal} senadores). As outras mudanças nas leis do trabalho seguem a regra comum. ${LEI}`,
    institucional:
      "Acompanhar os planos de igualdade salarial nas empresas exige estrutura no Ministério do Trabalho.",
    juridica:
      "Regras novas para aplicativos e jornada podem ser contestadas na Justiça.",
  },

  // ---- Saúde ----
  "saude-flavio-prontuario-digital-prevencao": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Corrigir a tabela do SUS e ampliar serviços é gasto que se repete e depende do orçamento.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "O maior desafio: depende de internet, sistemas e equipes de saúde no país inteiro.",
    juridica:
      "A ficha digital precisa seguir a LGPD (lei que protege seus dados) e o sigilo médico.",
  },
  "saude-lula-sus-agora-tem-especialistas": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Ampliar atendimento e manter a Farmácia Popular é gasto que se repete e depende do orçamento.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Depende de ligar os sistemas de estados e municípios e manter as parcerias com hospitais.",
    juridica:
      "Marcar consulta e ver exames pelo celular precisa seguir a LGPD (lei que protege seus dados).",
  },

  // ---- Segurança ----
  "seguranca-flavio-brasil-sem-medo": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Muda a Constituição" },
    orcamento:
      "Presídios, tropa de fronteira e mais de 1 milhão de câmeras custam caro e precisam estar no orçamento.",
    parlamentar: `Baixar a idade penal exige mudar a Constituição. ${PEC}`,
    institucional:
      "Depende de acordo e execução junto com as polícias e os governos dos estados.",
    juridica:
      "Há debate na Justiça sobre se a idade penal pode ser mudada mesmo por PEC. O STF já derrubou, em 2006, uma lei que proibia a progressão de regime em crimes hediondos. O reconhecimento facial precisa seguir a LGPD (lei que protege seus dados).",
  },
  "seguranca-lula-susp-ministerio": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Muda a Constituição" },
    orcamento:
      "O programa cita R$ 10 bilhões; manter e ampliar depende do orçamento.",
    parlamentar: `Criar o Ministério depende de aprovar a PEC da Segurança, já enviada ao Congresso. ${PEC}`,
    institucional:
      "Coordenar União, estados e cidades exige estrutura e cooperação entre todos.",
    juridica:
      "Precisa respeitar o que a Constituição deixa a cargo de cada estado na segurança.",
  },

  // ---- Educação ----
  "educacao-flavio-alfabetizacao-voucher-tecnico": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Os vales para escola e creche são gasto que se repete e precisam de uma fonte de dinheiro definida.",
    parlamentar: `O vale-educação e o novo jeito de pagar a faculdade dependem de lei. ${LEI}`,
    institucional:
      "Precisa de escolas e creches cadastradas e de fiscalização para os vales funcionarem.",
    juridica:
      "Usar dinheiro público em creche e escola particular pode ser questionado diante do dever do Estado com a escola pública.",
  },
  "educacao-lula-pe-de-meia-creches-ifs": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Pé-de-Meia, creches e mais institutos são gasto que se repete e dependem do orçamento.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Depende de terminar obras e de acordo com estados e municípios.",
    juridica:
      "Continua programas que já existem e estão previstos em lei.",
  },

  // ---- Moradia ----
  "moradia-flavio-caixa-casa-propria-saneamento": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Juros baixos no financiamento costumam exigir dinheiro do governo (subsídio) previsto no orçamento.",
    parlamentar: `Pode ser tocado pela Caixa e pelo governo. ${GOVERNO_E_ORCAMENTO}`,
    institucional:
      "Reorganizar a Caixa, fazer parcerias e regularizar imóveis exige estrutura e tempo.",
    juridica:
      "A regularização de imóveis precisa seguir as regras de posse e de meio ambiente.",
  },
  "moradia-lula-mcmv-direito-cidade-saneamento": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Minha Casa Minha Vida com juros baixos para quem ganha menos depende de subsídio e de orçamento todo ano.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Depende de acordo com estados e cidades e de dar conta das obras.",
    juridica:
      "Usar terrenos da União precisa seguir as regras de uso desses imóveis.",
  },

  // ---- Previdência ----
  "previdencia-flavio-inss-sem-fila-fraudes": {
    etiquetas: { orcamento: "Pouco gasto novo", parlamentar: "Precisa de lei" },
    orcamento:
      "É mais gestão do que gasto novo, mas melhorar o INSS exige investir em pessoal e sistemas.",
    parlamentar: `O pacote contra fraude pode precisar de medida provisória ou lei. ${LEI}`,
    institucional:
      "Depende de tecnologia e de servidores em número suficiente no INSS.",
    juridica:
      "Mudar os descontos do consignado precisa respeitar contratos e direitos que já existem.",
  },
  "previdencia-lula-fortalecimento-previdencia": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Precisa de lei" },
    orcamento:
      "Novas formas de contribuir e novas fontes de dinheiro mexem nas contas da Previdência; o plano não diz quais seriam.",
    parlamentar: `Mudar o financiamento da Previdência e as regras do trabalho por aplicativo exige lei. ${LEI}`,
    institucional:
      "Diminuir a fila depende de pessoal e de sistemas no INSS.",
    juridica:
      "As novas formas de contribuir precisam respeitar as regras da Constituição sobre Previdência.",
  },

  // ---- Direitos das mulheres ----
  "direitos-mulheres-flavio-brasil-por-elas": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Central da Mulher, creches, vale-creche e abrigos são gasto que se repete e dependem do orçamento.",
    parlamentar: `Muito pode ser feito pelo próprio governo. Fazer agressores cumprirem a pena inteira na prisão exige lei. ${LEI}`,
    institucional:
      "Monitorar agressores e abrir unidades depende dos estados e de estrutura.",
    juridica:
      "A maior parte reforça proteções que já estão na lei. Proibir a saída antecipada da prisão pode ser questionado: o STF já derrubou, em 2006, uma regra parecida para crimes hediondos.",
  },
  "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Concluir as Casas da Mulher e os Centros de Referência depende de orçamento e de obras.",
    parlamentar: `Muito pode ser feito pelo próprio governo. Tornar obrigatórios os planos de igualdade salarial pode exigir mudar a lei. ${LEI}`,
    institucional:
      "Depende de terminar as obras e de fiscalizar os planos nas empresas.",
    juridica:
      "Apoia-se na Lei de Igualdade Salarial, que já existe. Novas obrigações para as empresas podem ser contestadas na Justiça.",
  },

  // ---- Direitos trabalhistas ----
  "direitos-trabalhistas-flavio-sindicatos-reforma-2017": {
    etiquetas: { orcamento: "Pouco gasto novo", parlamentar: "Precisa de lei" },
    orcamento:
      "Mudar regras de sindicatos e de acordos de trabalho quase não gera gasto novo.",
    parlamentar: `Revisar portarias pode ser feito pelo governo. Dar mais peso aos acordos ou mudar regras dos sindicatos exige lei. ${LEI}`,
    institucional:
      "Revisar portarias e regulamentos trabalhistas exige trabalho técnico no Ministério do Trabalho.",
    juridica:
      "A unicidade sindical está na Constituição. Mudanças nas regras do trabalho costumam ser questionadas na Justiça do Trabalho e no STF.",
  },
  "direitos-trabalhistas-lula-fiscalizacao-sindicatos": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Reforçar a fiscalização exige mais auditores do trabalho e estrutura, um gasto que se repete; o plano não diz o valor.",
    parlamentar: `Reforçar a fiscalização pode ser feito pelo governo. Mudar a lei trabalhista e regulamentar a negociação no serviço público exige lei. ${LEI}`,
    institucional:
      "Depende de ter auditores do trabalho em número suficiente para fiscalizar campo, cidade e plataformas.",
    juridica:
      "Mudanças na lei trabalhista e nas regras dos sindicatos costumam ser questionadas na Justiça do Trabalho e no STF.",
  },
  // ---- Meio ambiente e clima ----
  "meio-ambiente-flavio-desmatamento-ilegal-licenca": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Fiscalizar com satélite, pagar a quem preserva e fazer obras contra enchentes são gastos que se repetem e dependem do orçamento.",
    parlamentar: `Dar a licença quando o órgão não responde no prazo e fixar regras por até 20 anos dependem de lei. ${LEI}`,
    institucional:
      "Depende de pessoas e sistemas no Ibama, no ICMBio e nos órgãos de licença dos estados. Reorganizar as tarefas entre Ibama, Funai e ICMBio exige mudar a estrutura desses órgãos.",
    juridica:
      "A Constituição exige estudo de impacto para obras que podem causar dano grave à natureza; licença dada por falta de resposta pode ser questionada na Justiça. Exigências sobre ONGs precisam respeitar a liberdade de associação.",
  },
  "meio-ambiente-lula-desmatamento-liquido-clima": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Fiscalizar com satélite, pagar a quem preserva e fazer obras contra enchentes são gastos que se repetem e dependem do orçamento. Parte do dinheiro viria de fundos que já existem, como o Fundo Clima.",
    parlamentar: `A maior parte pode ser feita pelo governo. Mas o plano também fala em reconhecer em lei um tipo de recuperação da natureza (restauração biocultural), o que exige lei. ${LEI}`,
    institucional:
      "Depende de pessoas e sistemas no Ibama e no ICMBio e de acordo com estados e cidades. Rastrear a origem dos produtos exige sistemas ligados às empresas.",
    juridica:
      "Destinar terras públicas e regularizar áreas costuma gerar disputas na Justiça sobre quem é dono da terra. Exigir rastreamento das empresas precisa ter base em lei.",
  },
  // ---- Agricultura e alimentação ----
  "agricultura-flavio-seguro-titulo-irrigacao": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "O governo paga parte do Seguro Rural, e obras de irrigação custam caro; os dois precisam de dinheiro no orçamento todo ano.",
    parlamentar: `Reorganizar dívidas do campo costuma exigir lei ou medida provisória aprovada pelo Congresso. O seguro, a titulação e a irrigação podem ser tocados pelo governo, com dinheiro do orçamento. ${LEI}`,
    institucional:
      "Entregar títulos de terra depende da estrutura do Incra (órgão federal que cuida das terras rurais). Parte das licenças de água para irrigação é dada pelos estados.",
    juridica:
      "A Constituição liga o direito de propriedade à função social da terra; regras novas sobre propriedade podem ser questionadas na Justiça. A titulação precisa seguir as leis ambientais.",
  },
  "agricultura-lula-plano-safra-agricultura-familiar": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Juros mais baixos no Plano Safra, compras do PAA e Garantia-Safra são gasto que se repete e dependem do orçamento.",
    parlamentar: `Plano Safra, PAA e reforma agrária já existem e são tocados pelo governo. O plano não diz se o instrumento contra grandes perdas de safra precisaria de lei. ${GOVERNO_E_ORCAMENTO}`,
    institucional:
      "Depende do Incra (órgão federal que cuida da reforma agrária), da assistência técnica no campo e de estados e municípios para as compras de alimentos.",
    juridica:
      "A reforma agrária segue regras da Constituição; desapropriações e titulações de terra costumam ser questionadas na Justiça.",
  },
  // ---- Transporte público ----
  "transporte-flavio-mobilidade-urbana": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Ação do governo" },
    orcamento:
      "Empréstimos de bancos públicos e obras de trem custam caro; o plano não diz quanto iria para o transporte nas cidades nem quanto custaria o Trem do Nordeste.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Metrô e ônibus são cuidados por estados e cidades; eles teriam de fazer os projetos e as obras. O trem entre capitais exige projeto, licenças e acordo entre vários estados.",
    juridica:
      "Obras grandes precisam de licença ambiental e de contratos que podem ser questionados na Justiça.",
  },
  "transporte-lula-mobilidade-urbana": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Ação do governo" },
    orcamento:
      "As obras do Novo PAC dependem de dinheiro do orçamento todos os anos; o plano não diz quanto dinheiro novo iria para o transporte nas cidades.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Metrô e ônibus são cuidados por estados e cidades; eles teriam de tocar os projetos e as obras com apoio federal.",
    juridica:
      "Obras grandes precisam de licença ambiental e de contratos que podem ser questionados na Justiça.",
  },
  // ---- Empreendedorismo ----
  "empreendedorismo-flavio-minha-primeira-empresa": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Não definido no plano" },
    orcamento:
      "Crédito pela Caixa e cursos pelo Sistema S custam dinheiro ou exigem recursos dos bancos públicos; o plano não diz quanto nem de onde viria.",
    parlamentar: `O plano não diz se o Minha Primeira Empresa e o "revogaço" precisariam de lei nova. Parte pode ser feita pelo governo; se precisar de lei, segue a regra comum: ${LEI}`,
    institucional:
      "Boa parte das licenças é de estados e municípios, que precisariam aderir. A Caixa precisaria adaptar sua rede e seus sistemas para atender pequenos negócios.",
    juridica:
      "Cortar regras exige cuidado para não retirar exigências de saúde, segurança ou meio ambiente; mudanças podem ser questionadas na Justiça.",
  },
  "empreendedorismo-lula-pequenos-negocios": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Não definido no plano" },
    orcamento:
      "Os fundos garantidores e as linhas de crédito usam dinheiro público, que depende do orçamento de cada ano; o plano não diz quanto seria.",
    parlamentar: `O plano não diz se as mudanças precisariam de lei nova. Os programas de crédito podem ser feitos pelo governo; mudanças nos impostos das pequenas empresas exigem lei. Se for preciso, segue a regra comum: ${LEI}`,
    institucional:
      "Depende dos bancos públicos, dos fundos garantidores e de plataformas como o Contrata+ Brasil funcionando para pequenos negócios.",
    juridica:
      "Mudanças nos impostos das pequenas empresas precisam seguir a reforma tributária, que já está na Constituição e em lei.",
  },
  // ---- Tecnologia e inteligência artificial ----
  "tecnologia-flavio-estado-digital": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Pagar pacotes de internet e levar rede a lugares com pouco sinal é gasto que se repete e depende do orçamento; o plano não diz quanto custaria.",
    parlamentar: `Digitalizar serviços pode ser feito pelo governo, mas a nova lei sobre inovação precisa passar no Congresso. ${LEI}`,
    institucional:
      "Exige ligar os sistemas de muitos órgãos ao Gov.br e ter internet nas regiões mais distantes, com apoio das empresas de telefonia.",
    juridica:
      "Usar dados de cada pessoa para indicar serviços precisa seguir a LGPD (lei que protege seus dados).",
  },
  "tecnologia-lula-soberania-digital": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Levar fibra óptica e 5G e investir em IA e supercomputadores é gasto que se repete; o plano cita o FUST (fundo para levar internet a todo o país), mas não diz quanto custaria.",
    parlamentar: `Ampliar a internet e os serviços digitais pode ser feito pelo governo, mas regras novas para as redes sociais costumam exigir lei. ${LEI}`,
    institucional:
      "Exige ligar os sistemas dos órgãos ao Gov.br, criar estrutura para a política de ensino digital e contar com as empresas de telefonia para expandir a rede.",
    juridica:
      "Regras para redes sociais podem ser questionadas na Justiça por causa da liberdade de expressão. O uso de dados precisa seguir a LGPD (lei que protege seus dados).",
  },
  // ---- Cultura e lazer ----
  "cultura-flavio-esporte-e-raizes": {
    etiquetas: { orcamento: "Custo não informado", parlamentar: "Precisa de lei" },
    orcamento:
      "O plano conta com dinheiro de empresas, estados e municípios para o esporte, mas não diz quanto custaria nem quanto viria de cada parte. Restaurar o patrimônio histórico também depende do orçamento.",
    parlamentar: `O programa nas escolas pode ser feito pelo governo. Mudar as leis de incentivo à cultura e as regras das competições pode exigir lei. ${LEI}`,
    institucional:
      "Levar times e competições às escolas exige acordo com estados, municípios e empresas. Mudar as leis de incentivo exige ajustar o trabalho do Ministério da Cultura.",
    juridica:
      "Regras sobre quem pode competir na categoria feminina podem ser questionadas na Justiça. Muitas competições também seguem regras das próprias confederações esportivas.",
  },
  "cultura-lula-cultura-e-esporte": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "Manter e ampliar Pontos de Cultura, Bolsa Atleta, bibliotecas e Arenas é gasto que se repete e depende do orçamento de cada ano.",
    parlamentar: `Boa parte dos programas já existe e pode continuar pelo governo. A regulação do streaming e a lei de direito autoral na internet exigem lei. ${LEI}`,
    institucional:
      "Depende do Ministério da Cultura, do Ministério do Esporte e de parcerias com estados e municípios para construir e manter os espaços.",
    juridica:
      "Regular o streaming e o uso de obras por inteligência artificial mexe com empresas estrangeiras e pode ser questionado na Justiça.",
  },
  // ---- Diversidade e inclusão ----
  "diversidade-flavio-cuidado-terras-esporte": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Precisa de lei" },
    orcamento:
      "A ajuda para adaptar casas, os centros de autismo e as vagas para idosos são gastos que se repetem; o plano não diz quanto custariam.",
    parlamentar: `Os programas para idosos e pessoas com deficiência podem ser feitos pelo governo. Mudar as regras de uso das terras indígenas e quilombolas deve exigir lei; o plano não detalha. ${LEI}`,
    institucional:
      "Os centros e as vagas para idosos dependem de parcerias com estados, municípios e organizações sociais. As mudanças nas terras envolvem a Funai e o Incra.",
    juridica:
      "As terras indígenas têm proteção especial na Constituição; mudanças no uso delas costumam ser levadas ao STF.",
  },
  "diversidade-lula-igualdade-racial-inclusao": {
    etiquetas: { orcamento: "Gasto contínuo", parlamentar: "Ação do governo" },
    orcamento:
      "Ampliar Centros-Dia, atendimento em casa e centros de reabilitação são gastos que se repetem; o plano não diz quanto custariam.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "Titular terras quilombolas e demarcar terras indígenas são processos longos, que dependem do Incra, da Funai e de estudos técnicos. O atendimento em casa e os Centros-Dia dependem das prefeituras.",
    juridica:
      "Demarcações e titulações costumam ser contestadas na Justiça, inclusive pela discussão sobre o marco temporal (regra que discute a data de ocupação da terra). As cotas já estão na lei.",
  },
};

export function getViabilidade(propostaId: string): Viabilidade | undefined {
  return VIABILIDADE[propostaId];
}
