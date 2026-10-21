// Uma cor por tema, só para ajudar a reconhecer o assunto (não é nota nem
// avaliação). Evita vermelho, verde-amarelo e as cores das candidaturas
// (candA verde, candB azul-claro), para nenhum tema "parecer" de um lado.
// Classes escritas por extenso para o Tailwind encontrá-las.
export interface CorTema {
  /** Fundo bem claro (faixa do título). */
  fundo: string;
  /** Círculo do ícone. */
  icone: string;
  /** Cor do ícone sem fundo (chips). */
  texto: string;
  /** Cor da borda (com border-l-4, quando só existe a borda esquerda). */
  borda: string;
  /** Só a borda esquerda colorida, num card que já tem borda neutra. */
  bordaEsquerda: string;
}

const CORES: Record<string, CorTema> = {
  "custo-de-vida": {
    fundo: "bg-orange-50",
    icone: "bg-orange-500 text-white",
    texto: "text-orange-600",
    borda: "border-orange-500",
    bordaEsquerda: "border-l-orange-500",
  },
  "emprego-salario": {
    fundo: "bg-stone-100",
    icone: "bg-stone-600 text-white",
    texto: "text-stone-600",
    borda: "border-stone-600",
    bordaEsquerda: "border-l-stone-600",
  },
  saude: {
    fundo: "bg-pink-50",
    icone: "bg-pink-500 text-white",
    texto: "text-pink-600",
    borda: "border-pink-500",
    bordaEsquerda: "border-l-pink-500",
  },
  seguranca: {
    fundo: "bg-violet-50",
    icone: "bg-violet-600 text-white",
    texto: "text-violet-600",
    borda: "border-violet-600",
    bordaEsquerda: "border-l-violet-600",
  },
  educacao: {
    fundo: "bg-amber-50",
    icone: "bg-amber-500 text-white",
    texto: "text-amber-600",
    borda: "border-amber-500",
    bordaEsquerda: "border-l-amber-500",
  },
  moradia: {
    fundo: "bg-lime-50",
    icone: "bg-lime-600 text-white",
    texto: "text-lime-700",
    borda: "border-lime-600",
    bordaEsquerda: "border-l-lime-600",
  },
  previdencia: {
    fundo: "bg-cyan-50",
    icone: "bg-cyan-600 text-white",
    texto: "text-cyan-700",
    borda: "border-cyan-600",
    bordaEsquerda: "border-l-cyan-600",
  },
  "direitos-mulheres": {
    fundo: "bg-fuchsia-50",
    icone: "bg-fuchsia-600 text-white",
    texto: "text-fuchsia-600",
    borda: "border-fuchsia-600",
    bordaEsquerda: "border-l-fuchsia-600",
  },
};

const PADRAO: CorTema = {
  fundo: "bg-stone-100",
  icone: "bg-ink text-paper",
  texto: "text-ink-soft",
  borda: "border-ink",
  bordaEsquerda: "border-l-ink",
};

export function corDoTema(temaId: string): CorTema {
  return CORES[temaId] ?? PADRAO;
}
