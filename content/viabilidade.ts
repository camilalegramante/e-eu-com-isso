import type { Viabilidade } from "@/lib/types";
import { CONGRESSO, somaPorCampo } from "./congresso";

// Leitura de viabilidade por proposta (chave = id da proposta).
// É ANÁLISE, não fato e não nota. Os mesmos quatro critérios valem para todas
// as candidaturas, de forma neutra, com base no que a própria proposta exige.
// O critério "parlamentar" usa SEMPRE as mesmas frases para as duas
// candidaturas (abaixo); só muda o que a proposta exige (ação do governo, lei
// ou PEC). Números vêm de content/congresso.ts. Status editorial: aprovado (revisado em 2026-10-21).

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
    orcamento:
      "Cobrar menos imposto reduz o que entra nos cofres; seria preciso mostrar de onde tirar esse dinheiro sem furar as regras de gastos.",
    parlamentar: `Parte da reforma dos impostos está na Constituição. ${PEC}`,
    institucional:
      "Mudar a forma de cobrar imposto exige ajustar os sistemas da Receita e das fazendas dos estados.",
    juridica:
      "Parte da reforma está na Constituição; mudanças podem ser questionadas na Justiça.",
  },
  "custo-de-vida-lula-reforma-tributaria": {
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
    orcamento:
      "Reduzir encargos sobre o salário pode diminuir o que entra para a Previdência; seria preciso dizer como compensar.",
    parlamentar: `Mudar regras do trabalho exige lei. ${LEI}`,
    institucional:
      "O banco nacional de vagas precisa de um sistema ligado ao RH das empresas.",
    juridica:
      "Mudanças trabalhistas costumam ser questionadas na Justiça do Trabalho e no STF.",
  },
  "emprego-salario-lula-valorizar-trabalho": {
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
    orcamento:
      "Corrigir a tabela do SUS e ampliar serviços é gasto que se repete e depende do orçamento.",
    parlamentar: GOVERNO_E_ORCAMENTO,
    institucional:
      "O maior desafio: depende de internet, sistemas e equipes de saúde no país inteiro.",
    juridica:
      "A ficha digital precisa seguir a LGPD (lei que protege seus dados) e o sigilo médico.",
  },
  "saude-lula-sus-agora-tem-especialistas": {
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
    orcamento:
      "Presídios, tropa de fronteira e mais de 1 milhão de câmeras custam caro e precisam estar no orçamento.",
    parlamentar: `Baixar a idade penal exige mudar a Constituição. ${PEC}`,
    institucional:
      "Depende de acordo e execução junto com as polícias e os governos dos estados.",
    juridica:
      "Há debate na Justiça sobre se a idade penal pode ser mudada mesmo por PEC. O STF já derrubou, em 2006, uma lei que proibia a progressão de regime em crimes hediondos. O reconhecimento facial precisa seguir a LGPD (lei que protege seus dados).",
  },
  "seguranca-lula-susp-ministerio": {
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
    orcamento:
      "Os vales para escola e creche são gasto que se repete e precisam de uma fonte de dinheiro definida.",
    parlamentar: `O vale-educação e o novo jeito de pagar a faculdade dependem de lei. ${LEI}`,
    institucional:
      "Precisa de escolas e creches cadastradas e de fiscalização para os vales funcionarem.",
    juridica:
      "Usar dinheiro público em creche e escola particular pode ser questionado diante do dever do Estado com a escola pública.",
  },
  "educacao-lula-pe-de-meia-creches-ifs": {
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
    orcamento:
      "Juros baixos no financiamento costumam exigir dinheiro do governo (subsídio) previsto no orçamento.",
    parlamentar: `Pode ser tocado pela Caixa e pelo governo. ${GOVERNO_E_ORCAMENTO}`,
    institucional:
      "Reorganizar a Caixa, fazer parcerias e regularizar imóveis exige estrutura e tempo.",
    juridica:
      "A regularização de imóveis precisa seguir as regras de posse e de meio ambiente.",
  },
  "moradia-lula-mcmv-direito-cidade-saneamento": {
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
    orcamento:
      "É mais gestão do que gasto novo, mas melhorar o INSS exige investir em pessoal e sistemas.",
    parlamentar: `O pacote contra fraude pode precisar de medida provisória ou lei. ${LEI}`,
    institucional:
      "Depende de tecnologia e de servidores em número suficiente no INSS.",
    juridica:
      "Mudar os descontos do consignado precisa respeitar contratos e direitos que já existem.",
  },
  "previdencia-lula-fortalecimento-previdencia": {
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
    orcamento:
      "Central da Mulher, creches, vale-creche e abrigos são gasto que se repete e dependem do orçamento.",
    parlamentar: `Muito pode ser feito pelo próprio governo. Fazer agressores cumprirem a pena inteira na prisão exige lei. ${LEI}`,
    institucional:
      "Monitorar agressores e abrir unidades depende dos estados e de estrutura.",
    juridica:
      "A maior parte reforça proteções que já estão na lei. Proibir a saída antecipada da prisão pode ser questionado: o STF já derrubou, em 2006, uma regra parecida para crimes hediondos.",
  },
  "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial": {
    orcamento:
      "Concluir as Casas da Mulher e os Centros de Referência depende de orçamento e de obras.",
    parlamentar: `Muito pode ser feito pelo próprio governo. Tornar obrigatórios os planos de igualdade salarial pode exigir mudar a lei. ${LEI}`,
    institucional:
      "Depende de terminar as obras e de fiscalizar os planos nas empresas.",
    juridica:
      "Apoia-se na Lei de Igualdade Salarial, que já existe. Novas obrigações para as empresas podem ser contestadas na Justiça.",
  },
};

export function getViabilidade(propostaId: string): Viabilidade | undefined {
  return VIABILIDADE[propostaId];
}
