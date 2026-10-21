import type { Proposta } from "@/lib/types";
import { custoDeVida } from "./custo-de-vida";
import { empregoSalario } from "./emprego-salario";
import { saude } from "./saude";
import { seguranca } from "./seguranca";
import { educacao } from "./educacao";
import { moradia } from "./moradia";
import { previdencia } from "./previdencia";
import { direitosMulheres } from "./direitos-mulheres";
import { direitosTrabalhistas } from "./direitos-trabalhistas";
import { meioAmbiente } from "./meio-ambiente";
import { agricultura } from "./agricultura";
import { transporte } from "./transporte";
import { empreendedorismo } from "./empreendedorismo";
import { tecnologia } from "./tecnologia";
import { cultura } from "./cultura";
import { diversidade } from "./diversidade";

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
  ...direitosTrabalhistas,
  ...meioAmbiente,
  ...agricultura,
  ...transporte,
  ...empreendedorismo,
  ...tecnologia,
  ...cultura,
  ...diversidade,
];

/** Propostas de um tema, na ordem em que foram declaradas. */
export function propostasDoTema(temaId: string): Proposta[] {
  return TODAS_PROPOSTAS.filter((p) => p.temaId === temaId);
}
