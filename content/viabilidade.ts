import type { Viabilidade } from "@/lib/types";

// Leitura de viabilidade por proposta (chave = id da proposta).
// É ANÁLISE, não fato e não nota. Os mesmos quatro critérios valem para todas
// as candidaturas, de forma neutra, com base no que a própria proposta exige.
// O critério "parlamentar" leva em conta a nova bancada (ver content/congresso.ts
// e o painel do Congresso no relatório). Status editorial: rascunho.
export const VIABILIDADE: Record<string, Viabilidade> = {
  // ---- Custo de vida e impostos ----
  "custo-de-vida-flavio-reforma-tributaria": {
    orcamento:
      "Cobrar menos imposto reduz o que entra nos cofres; seria preciso mostrar de onde tirar esse dinheiro sem furar as regras de gastos.",
    parlamentar:
      "A base que apoia Flávio teria maioria na Câmara (291 de 513) para leis comuns, o que ajudaria; mas parte da reforma está na Constituição e pode exigir 3/5 dos votos (308).",
    institucional:
      "Mudar a forma de cobrar imposto exige ajustar os sistemas da Receita e das fazendas dos estados.",
    juridica:
      "Parte da reforma está na Constituição; mudanças podem ser questionadas na Justiça.",
  },
  "custo-de-vida-lula-reforma-tributaria": {
    orcamento:
      "Luz do Povo e Gás do Povo são gasto que se repete todo mês; precisam de dinheiro garantido no orçamento ano após ano.",
    parlamentar:
      "Falta detalhar em leis complementares. Lula tende a um Congresso mais adverso e dependeria de negociar com o Centrão.",
    institucional:
      "Devolver imposto às famílias certas (cashback) depende de um sistema ligado ao Cadastro Único.",
    juridica:
      "Segue regras já aprovadas, então o risco de ser barrado na Justiça é menor.",
  },

  // ---- Emprego e salário ----
  "emprego-salario-flavio-trabalho-que-compensa": {
    orcamento:
      "Reduzir encargos sobre o salário pode diminuir o que entra para a Previdência; seria preciso dizer como compensar.",
    parlamentar:
      "Mudar regras do trabalho exige passar no Congresso; a base que apoia Flávio teria maioria na Câmara (291 de 513), o que facilitaria a negociação.",
    institucional:
      "O banco nacional de vagas precisa de um sistema ligado ao RH das empresas.",
    juridica:
      "Mudanças trabalhistas costumam ser questionadas na Justiça do Trabalho e no STF.",
  },
  "emprego-salario-lula-valorizar-trabalho": {
    orcamento:
      "Aumento real do salário mínimo também sobe aposentadorias e o BPC; esse gasto maior precisa caber nas regras fiscais.",
    parlamentar:
      "Reduzir a jornada mexe na Constituição (precisa de PEC, 308 votos na Câmara). Com um Congresso mais adverso e dependente do Centrão, seria difícil para Lula.",
    institucional:
      "Fiscalizar salário igual entre homens e mulheres exige estrutura no Ministério do Trabalho.",
    juridica:
      "Regras novas para aplicativos e jornada podem ser contestadas na Justiça.",
  },

  // ---- Saúde ----
  "saude-flavio-prontuario-digital-prevencao": {
    orcamento:
      "Pagar melhor os atendimentos do SUS e ampliar serviços é gasto que se repete e depende do orçamento.",
    parlamentar:
      "Boa parte pode ser feita pelo próprio governo, sem lei nova; quando precisar, a base de Flávio teria maioria na Câmara (291 de 513).",
    institucional:
      "O maior desafio: depende de internet, sistemas e equipes de saúde no país inteiro.",
    juridica:
      "A ficha digital precisa seguir a LGPD (lei que protege seus dados) e o sigilo médico.",
  },
  "saude-lula-sus-agora-tem-especialistas": {
    orcamento:
      "Ampliar atendimento e manter a Farmácia Popular é gasto que se repete e depende do orçamento.",
    parlamentar:
      "Boa parte é ação do próprio governo, sem lei nova; quando precisar, Lula tende a um Congresso mais adverso e dependeria de negociação.",
    institucional:
      "Depende de ligar os sistemas de estados e municípios e manter as parcerias com hospitais.",
    juridica:
      "Ver consultas e exames pelo celular precisa seguir a LGPD (proteção de dados).",
  },

  // ---- Segurança ----
  "seguranca-flavio-brasil-sem-medo": {
    orcamento:
      "Presídios, força de fronteira e 1 milhão de câmeras custam caro e precisam estar no orçamento.",
    parlamentar:
      "Baixar a idade penal exige mudar a Constituição: 308 votos na Câmara. A base de Flávio soma cerca de 291 — faltariam uns 17 votos, que precisaria buscar com PSD, PSDB ou MDB; no Senado (precisa de 49) estaria no limite, com cerca de 50.",
    institucional:
      "Depende de acordo e execução junto com as polícias dos estados.",
    juridica:
      "Reconhecimento facial (privacidade/LGPD) e penas como castração química podem ser barrados pela Justiça.",
  },
  "seguranca-lula-susp-ministerio": {
    orcamento:
      "O programa cita R$ 10 bilhões; manter e ampliar depende do orçamento.",
    parlamentar:
      "Criar o Ministério depende da PEC da Segurança (3/5 dos votos: 308 e 49). Com um Congresso mais adverso e dependente do Centrão, seria um caminho especialmente difícil para Lula.",
    institucional:
      "Coordenar União, estados e cidades (SUSP) exige estrutura e cooperação entre todos.",
    juridica:
      "Precisa respeitar as competências de cada estado definidas na Constituição.",
  },

  // ---- Educação ----
  "educacao-flavio-alfabetizacao-voucher-tecnico": {
    orcamento:
      "Vales para a rede particular são gasto que se repete e precisam de uma fonte de dinheiro definida.",
    parlamentar:
      "O vale-educação e o novo jeito de pagar a faculdade dependem de lei; a base que apoia Flávio teria maioria na Câmara (291 de 513) para tentar aprovar.",
    institucional:
      "Precisa de rede particular cadastrada e de fiscalização para os vales funcionarem.",
    juridica:
      "Vale para escola particular pode ser questionado diante do dever do Estado com a escola pública.",
  },
  "educacao-lula-pe-de-meia-creches-ifs": {
    orcamento:
      "Pé-de-Meia, creches e mais institutos são gasto que se repete e dependem do orçamento.",
    parlamentar:
      "Boa parte segue por ação do próprio governo; o maior limite é o dinheiro. Para leis novas, Lula tende a um Congresso mais adverso.",
    institucional:
      "Depende de terminar obras e de acordo com estados e municípios.",
    juridica:
      "Risco jurídico baixo: segue programas que já existem.",
  },

  // ---- Moradia ----
  "moradia-flavio-caixa-casa-propria-saneamento": {
    orcamento:
      "Juros baixos no financiamento costumam exigir dinheiro do governo (subsídio) previsto no orçamento.",
    parlamentar:
      "Pode ser tocado pela Caixa e pelo governo; metas grandes dependem de recursos aprovados no Congresso, onde a base de Flávio teria maioria na Câmara (291 de 513).",
    institucional:
      "Reorganizar a Caixa, fazer parcerias e regularizar imóveis exige estrutura e tempo.",
    juridica:
      "A regularização de imóveis precisa seguir as regras de posse e de meio ambiente.",
  },
  "moradia-lula-mcmv-direito-cidade-saneamento": {
    orcamento:
      "Minha Casa Minha Vida com juros baixos para quem ganha menos depende de subsídio e de orçamento todo ano.",
    parlamentar:
      "Muito é feito pelo próprio governo; o limite maior é o orçamento, que depende do Congresso — mais adverso a Lula, segundo as fontes.",
    institucional:
      "Depende de acordo com estados e cidades e de dar conta das obras.",
    juridica:
      "Usar terrenos da União precisa seguir as regras de uso desses imóveis.",
  },

  // ---- Previdência ----
  "previdencia-flavio-inss-sem-fila-fraudes": {
    orcamento:
      "É mais gestão do que gasto novo, mas melhorar o INSS exige investir em pessoal e sistemas.",
    parlamentar:
      "O pacote contra fraude pode precisar de medida provisória ou lei; a base de Flávio teria maioria na Câmara (291 de 513) para aprovar.",
    institucional:
      "Depende de tecnologia e de servidores em número suficiente no INSS.",
    juridica:
      "Mudar os descontos do consignado precisa respeitar contratos e direitos que já existem.",
  },
  "previdencia-lula-fortalecimento-previdencia": {
    orcamento:
      "Facilitar a contribuição e manter benefícios mexe nas contas da Previdência; precisa de fonte de dinheiro.",
    parlamentar:
      "Mudar o financiamento pode exigir lei. Lula tende a um Congresso mais adverso e dependeria de negociar com o Centrão.",
    institucional:
      "Diminuir a fila depende de pessoal e de sistemas no INSS.",
    juridica:
      "As novas formas de contribuir precisam respeitar as regras da Constituição sobre Previdência.",
  },

  // ---- Direitos das mulheres ----
  "direitos-mulheres-flavio-brasil-por-elas": {
    orcamento:
      "Central da Mulher, creches e vale são gasto que se repete e dependem do orçamento.",
    parlamentar:
      "Muito pode ser feito pelo próprio governo; quando precisar de lei ou verba, a base de Flávio teria maioria na Câmara (291 de 513).",
    institucional:
      "Monitorar agressores e abrir unidades depende dos estados e de estrutura.",
    juridica:
      "Risco jurídico baixo: reforça proteções que já estão na lei.",
  },
  "direitos-mulheres-lula-pacto-feminicidio-igualdade-salarial": {
    orcamento:
      "Concluir as Casas da Mulher e as maternidades depende de orçamento e de obras.",
    parlamentar:
      "Obrigar a corrigir salário desigual depende de detalhar a lei que já existe; para avanços novos, Lula tende a um Congresso mais adverso.",
    institucional:
      "Depende de terminar as obras e de fiscalização que funcione de verdade.",
    juridica:
      "Risco jurídico baixo: apoia-se em leis já aprovadas.",
  },
};

export function getViabilidade(propostaId: string): Viabilidade | undefined {
  return VIABILIDADE[propostaId];
}
