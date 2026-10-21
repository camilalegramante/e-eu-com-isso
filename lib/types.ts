// Modelo editorial de "E eu com isso?".
// Regra central: o conteúdo factual (resumoFiel, tipoAfirmacao, fontes) é
// separado da apresentação. A personalização nunca altera estes campos.

export type TipoFonte =
  | "plano-de-governo" // documento registrado no TSE
  | "legislacao"
  | "orgao-publico"
  | "estudo-tecnico"
  | "jornalismo";

export type TipoAfirmacao =
  | "proposta-documentada" // está escrito no documento oficial
  | "historico" // ação/decisão anterior documentada
  | "interpretacao" // leitura de possível impacto
  | "previsao-incerta" // efeito futuro condicional
  | "nao-localizado"; // não encontramos proposta documentada sobre o tema

export type StatusRevisao = "rascunho" | "em-revisao" | "aprovado";

export type CorToken = "neutra-1" | "neutra-2";

export interface Fonte {
  titulo: string;
  url: string;
  tipo: TipoFonte;
  /** Data/contexto do documento, em ISO (YYYY-MM-DD) quando conhecida. */
  publicadoEm?: string;
  /** Citação curta e fiel ao documento (opcional). */
  trecho?: string;
  /** Página do PDF do plano de governo, quando a fonte for o próprio plano. */
  pagina?: number;
}

export interface Candidatura {
  id: string; // slug estável
  nome: string;
  partido: string;
  corToken: CorToken;
  /** Fonte primária: o plano de governo registrado. */
  planoDeGoverno: Fonte;
}

export interface Proposta {
  id: string;
  temaId: string;
  candidaturaId: string;
  titulo: string;
  /** Resumo fiel do que o documento diz, sem adjetivos de valor. */
  resumoFiel: string;
  tipoAfirmacao: TipoAfirmacao;
  /** Interpretação explicitamente rotulada do possível impacto cotidiano. */
  impactoCotidiano?: string;
  /** O que precisaria acontecer para o efeito se concretizar. */
  condicoes?: string[];
  /** O que não é possível concluir com as informações disponíveis. */
  incertezas?: string[];
  /** Perfis que ganham ênfase (NÃO filtra fatos nem candidaturas). */
  relevantePara?: string[];
  /** >= 1 fonte obrigatória quando tipoAfirmacao != 'nao-localizado'. */
  fontes: Fonte[];
  statusRevisao: StatusRevisao;
  /** Data da última revisão editorial, em ISO. */
  revisadoEm?: string;
}

// Leitura de viabilidade de uma proposta (análise, NÃO fato e NÃO nota).
// Mesmos quatro critérios para todas as candidaturas. Cada campo é opcional e
// escrito em linguagem simples. Nunca vira pontuação nem ranking.
export interface Viabilidade {
  /** Precisa de dinheiro previsto no orçamento / fonte de custeio. */
  orcamento?: string;
  /** Precisa de apoio e votação no Congresso. */
  parlamentar?: string;
  /** Precisa de estrutura do Estado para executar (pessoas, sistemas, obras). */
  institucional?: string;
  /** Precisa estar dentro da Constituição e das leis. */
  juridica?: string;
  /**
   * Etiquetas factuais (vocabulário fixo, igual para todas as candidaturas):
   * dizem o que a proposta exige, não a chance de dar certo.
   */
  etiquetas?: {
    orcamento?: EtiquetaOrcamento;
    parlamentar?: EtiquetaParlamentar;
  };
}

export type EtiquetaOrcamento =
  | "Gasto contínuo"
  | "Reduz arrecadação"
  | "Pouco gasto novo"
  | "Custo não informado";

/** Sempre a exigência mais alta citada no texto da viabilidade. */
export type EtiquetaParlamentar =
  | "Ação do governo"
  | "Precisa de lei"
  | "Muda a Constituição"
  | "Não definido no plano";

export interface Tema {
  id: string;
  rotulo: string;
  /** Nome do ícone em lucide-react. */
  icone: string;
  /** Uma linha neutra sobre o que está em disputa no tema. */
  resumoNeutro?: string;
}

export interface PerfilOpcao {
  id: string;
  rotulo: string;
  /** Texto curto opcional exibido junto da opção. */
  ajuda?: string;
}

export interface SelecaoUsuario {
  perfis: string[]; // ids de perfil
  interesses: string[]; // ids de tema; ['*'] representa "quero ver tudo"
}

export const TODOS_OS_TEMAS = "*" as const;
