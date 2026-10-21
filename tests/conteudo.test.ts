import { describe, it, expect } from "vitest";
import { TODAS_PROPOSTAS, propostasDoTema } from "@/content/propostas";
import { TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS } from "@/content/candidaturas";
import { isCandidaturaId, isPerfilId, isTemaId } from "@/lib/catalogs";

const URL_OK = /^(https?:\/\/|\/fontes\/)/;

describe("integridade editorial do conteúdo", () => {
  it("toda proposta tem ids válidos e consistentes", () => {
    for (const p of TODAS_PROPOSTAS) {
      expect(isTemaId(p.temaId), `temaId inválido em ${p.id}`).toBe(true);
      expect(isCandidaturaId(p.candidaturaId), `candidaturaId inválido em ${p.id}`).toBe(true);
      for (const perfil of p.relevantePara ?? []) {
        expect(isPerfilId(perfil), `relevantePara inválido (${perfil}) em ${p.id}`).toBe(true);
      }
    }
  });

  it("proposta documentada tem ao menos uma fonte com URL e página válidas", () => {
    for (const p of TODAS_PROPOSTAS) {
      if (p.tipoAfirmacao === "nao-localizado") continue;
      expect(p.fontes.length, `sem fontes em ${p.id}`).toBeGreaterThanOrEqual(1);
      for (const f of p.fontes) {
        expect(URL_OK.test(f.url), `URL malformada em ${p.id}: ${f.url}`).toBe(true);
        if (f.pagina !== undefined) {
          expect(Number.isInteger(f.pagina) && f.pagina > 0, `página inválida em ${p.id}`).toBe(true);
        }
      }
    }
  });

  it("item aprovado nunca fica sem fonte", () => {
    for (const p of TODAS_PROPOSTAS) {
      if (p.statusRevisao === "aprovado" && p.tipoAfirmacao !== "nao-localizado") {
        expect(p.fontes.length, `aprovado sem fonte: ${p.id}`).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it("todo tema com conteúdo tem paridade: uma entrada por candidatura", () => {
    for (const temaId of TEMAS_COM_CONTEUDO) {
      const doTema = propostasDoTema(temaId);
      for (const c of CANDIDATURAS) {
        const n = doTema.filter((p) => p.candidaturaId === c.id).length;
        expect(n, `tema ${temaId} sem paridade para ${c.id} (encontradas ${n})`).toBe(1);
      }
    }
  });

  it("ids de proposta são únicos", () => {
    const ids = TODAS_PROPOSTAS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
