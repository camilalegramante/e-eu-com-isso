import type { Proposta } from "@/lib/types";
import { custoDeVida } from "./custo-de-vida";
import { empregoSalario } from "./emprego-salario";
import { saude } from "./saude";
import { seguranca } from "./seguranca";
import { educacao } from "./educacao";
import { moradia } from "./moradia";
import { previdencia } from "./previdencia";
import { direitosMulheres } from "./direitos-mulheres";

// Agregação de todas as propostas revisadas.
export const TODAS_PROPOSTAS: Proposta[] = [
  ...custoDeVida,
  ...empregoSalario,
  ...saude,
  ...seguranca,
  ...educacao,
  ...moradia,
  ...previdencia,
  ...direitosMulheres,
];

/** Propostas de um tema, na ordem em que foram declaradas. */
export function propostasDoTema(temaId: string): Proposta[] {
  return TODAS_PROPOSTAS.filter((p) => p.temaId === temaId);
}

/** Temas que possuem ao menos uma proposta aprovada. */
export function temasComPropostaAprovada(): string[] {
  const ids = new Set<string>();
  for (const p of TODAS_PROPOSTAS) {
    if (p.statusRevisao === "aprovado") ids.add(p.temaId);
  }
  return [...ids];
}
