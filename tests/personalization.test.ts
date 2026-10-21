import { describe, it, expect } from "vitest";
import {
  ehRelevanteParaPerfil,
  montarComparacao,
  resolverInteresses,
  selecionarTemas,
  temasSelecionadosSemConteudo,
} from "@/lib/personalization";
import { TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import type { Proposta } from "@/lib/types";

describe("resolverInteresses", () => {
  it("expande '*' para todos os temas do catálogo", () => {
    const ids = resolverInteresses(["*"]);
    expect(ids.length).toBeGreaterThanOrEqual(TEMAS_COM_CONTEUDO.length);
    expect(ids).toContain("saude");
  });

  it("filtra ids inválidos e preserva ordem do catálogo", () => {
    const ids = resolverInteresses(["educacao", "xpto", "custo-de-vida"]);
    expect(ids).toEqual(["custo-de-vida", "educacao"]);
  });
});

describe("selecionarTemas", () => {
  it("retorna apenas temas com conteúdo, por padrão", () => {
    const temas = selecionarTemas({ perfis: [], interesses: ["*"] });
    expect(temas.map((t) => t.id).sort()).toEqual([...TEMAS_COM_CONTEUDO].sort());
  });

  it("intersecta a seleção com os temas com conteúdo", () => {
    const temas = selecionarTemas({
      perfis: [],
      interesses: ["saude", "transporte"], // transporte ainda sem conteúdo
    });
    expect(temas.map((t) => t.id)).toEqual(["saude"]);
  });

  it("expõe temas selecionados ainda sem conteúdo", () => {
    const faltando = temasSelecionadosSemConteudo({
      perfis: [],
      interesses: ["saude", "transporte"],
    });
    expect(faltando.map((t) => t.id)).toEqual(["transporte"]);
  });
});

describe("montarComparacao", () => {
  it("retorna uma coluna por candidatura, na ordem canônica, sem omitir ninguém", () => {
    const colunas = montarComparacao("saude");
    expect(colunas).toHaveLength(CANDIDATURAS_ORDENADAS.length);
    expect(colunas.map((c) => c.candidatura.id)).toEqual(
      CANDIDATURAS_ORDENADAS.map((c) => c.id),
    );
    // Todas as candidaturas têm proposta cadastrada neste tema.
    expect(colunas.every((c) => c.proposta !== null)).toBe(true);
  });

  it("mantém paridade mesmo que uma candidatura não tenha proposta (coluna null)", () => {
    const colunas = montarComparacao("tema-inexistente");
    expect(colunas).toHaveLength(CANDIDATURAS_ORDENADAS.length);
    expect(colunas.every((c) => c.proposta === null)).toBe(true);
  });
});

describe("ehRelevanteParaPerfil", () => {
  const proposta = {
    relevantePara: ["clt", "aposentado"],
  } as unknown as Proposta;

  it("é verdadeiro quando há interseção com perfis ativos", () => {
    expect(ehRelevanteParaPerfil(proposta, ["clt"])).toBe(true);
  });

  it("ignora o perfil neutro 'nao-responder'", () => {
    expect(ehRelevanteParaPerfil(proposta, ["nao-responder"])).toBe(false);
  });

  it("é falso sem perfis ou sem interseção", () => {
    expect(ehRelevanteParaPerfil(proposta, [])).toBe(false);
    expect(ehRelevanteParaPerfil(proposta, ["estudante"])).toBe(false);
  });
});
