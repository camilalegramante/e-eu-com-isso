import { describe, it, expect } from "vitest";
import { TODAS_PROPOSTAS, propostasDoTema } from "@/content/propostas";
import { TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS } from "@/content/candidaturas";
import { PONTOS_DE_ATENCAO } from "@/content/historico";
import { APOIOS_INDIVIDUAIS, CONGRESSO, somaPorCampo } from "@/content/congresso";
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

  it("proposta publicada nunca fica sem fonte", () => {
    for (const p of TODAS_PROPOSTAS) {
      if (p.tipoAfirmacao !== "nao-localizado") {
        expect(p.fontes.length, `sem fonte: ${p.id}`).toBeGreaterThanOrEqual(1);
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

describe("integridade do histórico (pontos de atenção)", () => {
  const propostas = new Map(TODAS_PROPOSTAS.map((p) => [p.id, p]));

  it("aponta para uma proposta documentada existente", () => {
    for (const h of PONTOS_DE_ATENCAO) {
      const p = propostas.get(h.propostaId);
      expect(p, `propostaId inexistente em ${h.id}`).toBeDefined();
      expect(p?.tipoAfirmacao, `proposta não documentada em ${h.id}`).toBe(
        "proposta-documentada",
      );
    }
  });

  it("tem fonte externa com URL válida e data no formato certo", () => {
    for (const h of PONTOS_DE_ATENCAO) {
      expect(h.fontes.length, `sem fontes em ${h.id}`).toBeGreaterThanOrEqual(1);
      for (const f of h.fontes) {
        expect(/^https:\/\//.test(f.url), `URL inválida em ${h.id}: ${f.url}`).toBe(true);
        expect(f.tipo, `fonte do próprio plano em ${h.id}`).not.toBe("plano-de-governo");
      }
      expect(/^\d{4}(-\d{2}(-\d{2})?)?$/.test(h.dataAcao), `data inválida em ${h.id}`).toBe(true);
    }
  });

  it("ids são únicos", () => {
    const ids = PONTOS_DE_ATENCAO.map((h) => h.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("integridade dos apoios individuais no Congresso", () => {
  const listaDa = (casa: "camara" | "senado") =>
    casa === "camara" ? CONGRESSO.camara2027 : CONGRESSO.senado2027;

  it("só entra quem é de partido sem campo definido na Casa", () => {
    for (const a of APOIOS_INDIVIDUAIS) {
      const partido = listaDa(a.casa).find((p) => p.sigla === a.partido);
      expect(partido, `${a.nome}: partido ${a.partido}`).toBeDefined();
      expect(partido?.campo === "flavio" || partido?.campo === "lula", a.nome).toBe(false);
    }
  });

  it("não tira de 'outros' mais cadeiras do que existem", () => {
    for (const casa of ["camara", "senado"] as const) {
      const soma = somaPorCampo(listaDa(casa));
      const n = APOIOS_INDIVIDUAIS.filter((a) => a.casa === casa).length;
      expect(n).toBeLessThanOrEqual(soma.dividido + soma.neutro + soma.outros);
    }
  });

  it("cada nome aparece uma vez, com data e fonte https", () => {
    const nomes = APOIOS_INDIVIDUAIS.map((a) => a.nome);
    expect(new Set(nomes).size).toBe(nomes.length);
    for (const a of APOIOS_INDIVIDUAIS) {
      expect(a.data, a.nome).toMatch(/^\d{4}-\d{2}(-\d{2})?$/);
      expect(a.fonte.url, a.nome).toMatch(/^https:\/\//);
      expect((a.fala ?? a.registro ?? "").trim().length, a.nome).toBeGreaterThan(0);
    }
  });
});
