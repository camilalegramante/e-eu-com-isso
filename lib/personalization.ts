import { TEMAS, TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { propostasDoTema } from "@/content/propostas";
import { PERFIL_NEUTRO } from "@/content/perfis";
import { getPerfil } from "@/lib/catalogs";
import {
  TODOS_OS_TEMAS,
  type Candidatura,
  type Proposta,
  type SelecaoUsuario,
  type Tema,
} from "@/lib/types";

// Funções PURAS de personalização.
// Princípio: a personalização escolhe O QUE mostrar e ENFATIZA, mas nunca
// altera fatos, nunca esconde uma candidatura e nunca reordena as candidaturas.

const TEMAS_COM_CONTEUDO_SET = new Set(TEMAS_COM_CONTEUDO);

/** Expande "*" (quero ver tudo) para a lista concreta de temas do catálogo. */
export function resolverInteresses(interesses: string[]): string[] {
  if (interesses.includes(TODOS_OS_TEMAS)) {
    return TEMAS.map((t) => t.id);
  }
  const set = new Set(interesses);
  return TEMAS.filter((t) => set.has(t.id)).map((t) => t.id);
}

/**
 * Temas a exibir no relatório, na ordem do catálogo.
 * Por padrão, apenas temas com conteúdo editorial revisado.
 */
export function selecionarTemas(
  selecao: SelecaoUsuario,
  opts: { somenteComConteudo?: boolean } = {},
): Tema[] {
  const { somenteComConteudo = true } = opts;
  const ids = new Set(resolverInteresses(selecao.interesses));
  return TEMAS.filter((t) => {
    if (!ids.has(t.id)) return false;
    if (somenteComConteudo && !TEMAS_COM_CONTEUDO_SET.has(t.id)) return false;
    return true;
  });
}

/** Temas que o usuário escolheu mas que ainda não têm conteúdo revisado. */
export function temasSelecionadosSemConteudo(selecao: SelecaoUsuario): Tema[] {
  // "Ver tudo" significa tudo o que está publicado, não uma lista de pendências.
  if (selecao.interesses.includes(TODOS_OS_TEMAS)) return [];
  const ids = new Set(resolverInteresses(selecao.interesses));
  return TEMAS.filter((t) => ids.has(t.id) && !TEMAS_COM_CONTEUDO_SET.has(t.id));
}

/** Perfis "ativos" para ênfase (ignora o perfil neutro "prefiro não responder"). */
export function perfisAtivos(perfis: string[]): string[] {
  return perfis.filter((p) => p !== PERFIL_NEUTRO);
}

/** A proposta tem relação de ênfase com algum dos perfis selecionados? */
export function ehRelevanteParaPerfil(
  proposta: Proposta,
  perfis: string[],
): boolean {
  const ativos = perfisAtivos(perfis);
  if (ativos.length === 0 || !proposta.relevantePara) return false;
  return proposta.relevantePara.some((p) => ativos.includes(p));
}

/**
 * Frase curta de ênfase do tema para o perfil marcado, ou null. Une os perfis
 * de todas as candidaturas do tema, para aparecer uma vez só e igual para
 * todas (nunca "esta proposta é mais pra você que a outra").
 */
export function motivoRelevancia(
  propostas: Proposta[],
  perfis: string[],
): string | null {
  const ativos = perfisAtivos(perfis);
  const relevantes = new Set(propostas.flatMap((p) => p.relevantePara ?? []));
  const casados = ativos.filter((p) => relevantes.has(p));
  if (casados.length === 0) return null;
  const rotulos = casados
    .map((id) => getPerfil(id)?.rotulo)
    .filter((r): r is string => Boolean(r));
  if (rotulos.length === 0) return null;
  return `Este tema pode te afetar como ${rotulos.map((r) => `"${r}"`).join(" e ")}.`;
}

export interface ColunaComparacao {
  candidatura: Candidatura;
  proposta: Proposta | null;
}

/**
 * Monta a comparação de um tema: UMA coluna por candidatura, sempre na mesma
 * ordem canônica. Garante paridade — nenhuma candidatura é omitida. Se uma
 * candidatura não tiver proposta cadastrada, a coluna vem com proposta null
 * (a interface renderiza "não localizado").
 */
export function montarComparacao(temaId: string): ColunaComparacao[] {
  const propostas = propostasDoTema(temaId);
  return CANDIDATURAS_ORDENADAS.map((candidatura) => ({
    candidatura,
    proposta: propostas.find((p) => p.candidaturaId === candidatura.id) ?? null,
  }));
}
