import { filtrarPerfilIds, filtrarTemaIds } from "@/lib/catalogs";
import { TODOS_OS_TEMAS, type SelecaoUsuario } from "@/lib/types";

// Codifica/decodifica a seleção do usuário na URL, SEM dados pessoais.
// Formato: ?p=<perfis separados por ponto>&i=<interesses separados por ponto>
// Ex.: ?p=clt.estudante&i=saude.educacao  (ou i=* para "quero ver tudo").
// Os ids do catálogo são kebab-case e seguros em URL; usamos "." como separador.

const SEP = ".";
export const PARAM_PERFIS = "p";
export const PARAM_INTERESSES = "i";

type SearchParamsInput =
  | URLSearchParams
  | Record<string, string | string[] | undefined>;

function lerParam(params: SearchParamsInput, chave: string): string {
  if (params instanceof URLSearchParams) return params.get(chave) ?? "";
  const valor = params[chave];
  if (Array.isArray(valor)) return valor[0] ?? "";
  return valor ?? "";
}

function dividir(valor: string): string[] {
  return valor
    .split(SEP)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Decodifica a seleção a partir dos searchParams. Nunca lança exceção:
 * ids desconhecidos são descartados; entrada vazia/ruim vira seleção vazia.
 */
export function decodeSelecao(params: SearchParamsInput): SelecaoUsuario {
  const perfisBrutos = dividir(lerParam(params, PARAM_PERFIS));
  const interessesBrutos = dividir(lerParam(params, PARAM_INTERESSES));

  const perfis = filtrarPerfilIds(perfisBrutos);

  // "*" (quero ver tudo) tem precedência e normaliza para ["*"].
  const interesses = interessesBrutos.includes(TODOS_OS_TEMAS)
    ? [TODOS_OS_TEMAS]
    : filtrarTemaIds(interessesBrutos);

  return { perfis, interesses };
}

/**
 * Codifica a seleção como query string (sem "?" inicial).
 * Params vazios são omitidos.
 */
export function encodeSelecao(selecao: SelecaoUsuario): string {
  const sp = new URLSearchParams();

  const perfis = filtrarPerfilIds(selecao.perfis);
  if (perfis.length > 0) sp.set(PARAM_PERFIS, perfis.join(SEP));

  const interesses = selecao.interesses.includes(TODOS_OS_TEMAS)
    ? [TODOS_OS_TEMAS]
    : filtrarTemaIds(selecao.interesses);
  if (interesses.length > 0) sp.set(PARAM_INTERESSES, interesses.join(SEP));

  return sp.toString();
}

/** Caminho completo do relatório para uma seleção. */
export function hrefRelatorio(selecao: SelecaoUsuario): string {
  const qs = encodeSelecao(selecao);
  return qs ? `/relatorio?${qs}` : "/relatorio";
}

export function selecaoVazia(selecao: SelecaoUsuario): boolean {
  return selecao.perfis.length === 0 && selecao.interesses.length === 0;
}
