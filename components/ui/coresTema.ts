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
  // Temas adicionados depois: algumas cores se repetem (16 temas, poucas
  // cores que não lembram partidos nem candidaturas).
  "direitos-trabalhistas": {
    fundo: "bg-indigo-50",
    icone: "bg-indigo-600 text-white",
    texto: "text-indigo-600",
    borda: "border-indigo-600",
    bordaEsquerda: "border-l-indigo-600",
  },
  "meio-ambiente": {
    fundo: "bg-cyan-50",
    icone: "bg-cyan-600 text-white",
    texto: "text-cyan-700",
    borda: "border-cyan-600",
    bordaEsquerda: "border-l-cyan-600",
  },
  "agricultura": {
    fundo: "bg-yellow-50",
    icone: "bg-yellow-500 text-white",
    texto: "text-yellow-700",
    borda: "border-yellow-500",
    bordaEsquerda: "border-l-yellow-500",
  },
  "transporte": {
    fundo: "bg-blue-50",
    icone: "bg-blue-700 text-white",
    texto: "text-blue-700",
    borda: "border-blue-700",
    bordaEsquerda: "border-l-blue-700",
  },
  "empreendedorismo": {
    fundo: "bg-amber-50",
    icone: "bg-amber-600 text-white",
    texto: "text-amber-700",
    borda: "border-amber-600",
    bordaEsquerda: "border-l-amber-600",
  },
  "tecnologia": {
    fundo: "bg-slate-50",
    icone: "bg-slate-600 text-white",
    texto: "text-slate-600",
    borda: "border-slate-600",
    bordaEsquerda: "border-l-slate-600",
  },
  "cultura": {
    fundo: "bg-purple-50",
    icone: "bg-purple-600 text-white",
    texto: "text-purple-600",
    borda: "border-purple-600",
    bordaEsquerda: "border-l-purple-600",
  },
  "diversidade": {
    fundo: "bg-fuchsia-50",
    icone: "bg-fuchsia-500 text-white",
    texto: "text-fuchsia-600",
    borda: "border-fuchsia-500",
    bordaEsquerda: "border-l-fuchsia-500",
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
