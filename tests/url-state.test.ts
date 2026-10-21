import { describe, it, expect } from "vitest";
import {
  decodeSelecao,
  encodeSelecao,
  hrefRelatorio,
  selecaoVazia,
} from "@/lib/url-state";

describe("url-state", () => {
  it("faz round-trip de uma seleção válida", () => {
    const sel = { perfis: ["clt", "estudante"], interesses: ["saude", "educacao"] };
    const qs = encodeSelecao(sel);
    const back = decodeSelecao(new URLSearchParams(qs));
    expect(back.perfis).toEqual(["estudante", "clt"]); // ordem do catálogo
    expect(back.interesses).toEqual(["saude", "educacao"]); // ordem do catálogo
  });

  it("descarta ids desconhecidos sem lançar exceção", () => {
    const back = decodeSelecao(new URLSearchParams("p=clt.hacker&i=saude.foo.bar"));
    expect(back.perfis).toEqual(["clt"]);
    expect(back.interesses).toEqual(["saude"]);
  });

  it("trata entrada vazia como seleção vazia", () => {
    const back = decodeSelecao(new URLSearchParams(""));
    expect(back.perfis).toEqual([]);
    expect(back.interesses).toEqual([]);
    expect(selecaoVazia(back)).toBe(true);
  });

  it("normaliza '*' (quero ver tudo) com precedência", () => {
    const back = decodeSelecao(new URLSearchParams("i=*.saude.educacao"));
    expect(back.interesses).toEqual(["*"]);
    expect(encodeSelecao({ perfis: [], interesses: ["*"] })).toBe("i=*");
  });

  it("aceita searchParams como objeto e lida com valor em array", () => {
    const back = decodeSelecao({ p: ["clt", "ignorado"], i: "saude" });
    expect(back.perfis).toEqual(["clt"]);
    expect(back.interesses).toEqual(["saude"]);
  });

  it("omite params vazios ao codificar", () => {
    expect(encodeSelecao({ perfis: [], interesses: [] })).toBe("");
    expect(hrefRelatorio({ perfis: [], interesses: [] })).toBe("/relatorio");
    expect(hrefRelatorio({ perfis: ["clt"], interesses: ["saude"] })).toBe(
      "/relatorio?p=clt&i=saude",
    );
  });

  it("nunca lança em entradas malformadas", () => {
    expect(() => decodeSelecao({ p: undefined, i: undefined })).not.toThrow();
    expect(() => decodeSelecao(new URLSearchParams("p=....&i=..."))).not.toThrow();
  });
});
