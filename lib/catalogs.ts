import { TEMAS } from "@/content/temas";
import { PERFIS } from "@/content/perfis";
import { CANDIDATURAS } from "@/content/candidaturas";
import type { Candidatura, PerfilOpcao, Tema } from "@/lib/types";

const TEMA_IDS = new Set(TEMAS.map((t) => t.id));
const PERFIL_IDS = new Set(PERFIS.map((p) => p.id));
const CANDIDATURA_IDS = new Set(CANDIDATURAS.map((c) => c.id));

export function isTemaId(id: string): boolean {
  return TEMA_IDS.has(id);
}

export function isPerfilId(id: string): boolean {
  return PERFIL_IDS.has(id);
}

export function isCandidaturaId(id: string): boolean {
  return CANDIDATURA_IDS.has(id);
}

/**
 * Mantém apenas ids válidos, remove duplicados e preserva a ordem do catálogo.
 */
export function filtrarTemaIds(ids: string[]): string[] {
  const set = new Set(ids);
  return TEMAS.filter((t) => set.has(t.id)).map((t) => t.id);
}

export function filtrarPerfilIds(ids: string[]): string[] {
  const set = new Set(ids);
  return PERFIS.filter((p) => set.has(p.id)).map((p) => p.id);
}

export function getTema(id: string): Tema | undefined {
  return TEMAS.find((t) => t.id === id);
}

export function getPerfil(id: string): PerfilOpcao | undefined {
  return PERFIS.find((p) => p.id === id);
}

export function getCandidatura(id: string): Candidatura | undefined {
  return CANDIDATURAS.find((c) => c.id === id);
}
