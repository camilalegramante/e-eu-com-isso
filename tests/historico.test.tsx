import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import {
  HistoricoSection,
  formatarDataAcao,
} from "@/components/report/HistoricoSection";
import type { PontoDeAtencao } from "@/lib/types";

// Conteúdo FICTÍCIO, só para testar a interface.
const EXEMPLO: PontoDeAtencao = {
  id: "exemplo",
  propostaId: "exemplo-proposta",
  oQuePlanoDiz: "Exemplo: o plano promete A.",
  oQueHistoricoMostra: "Exemplo: votou contra A.",
  dataAcao: "2020-04-17",
  tipoAcao: "voto",
  porQueChamaAtencao: "Exemplo de análise condicional.",
  outroLado: "Exemplo de justificativa.",
  fontes: [{ titulo: "Fonte de exemplo", url: "https://example.com", tipo: "jornalismo" }],
};

describe("formatarDataAcao", () => {
  it("formata dia, mês e ano", () => {
    expect(formatarDataAcao("2020-04-17")).toBe("17 abr 2020");
  });
  it("aceita só mês e ano", () => {
    expect(formatarDataAcao("2019-11")).toBe("nov 2019");
  });
  it("aceita só o ano", () => {
    expect(formatarDataAcao("2005")).toBe("2005");
  });
});

describe("HistoricoSection", () => {
  it("sem pontos, avisa que a lista não é completa", () => {
    const html = renderToStaticMarkup(<HistoricoSection pontos={[]} />);
    expect(html).toContain("a lista não é completa");
    expect(html).toContain("Nenhum ponto registrado até agora");
  });

  it("com pontos, o título convida a abrir (sem contagem)", () => {
    const html = renderToStaticMarkup(<HistoricoSection pontos={[EXEMPLO]} />);
    expect(html).toContain("Veja o que o candidato já fez ou disse sobre isso");
    expect(html).not.toMatch(/\(\d+\)/);
  });

  it("mostra os fatos, a análise rotulada, o outro lado e a fonte", () => {
    const html = renderToStaticMarkup(<HistoricoSection pontos={[EXEMPLO]} />);
    expect(html).toContain("Exemplo: votou contra A.");
    expect(html).toContain("Voto, 17 abr 2020");
    expect(html).toContain("Análise");
    expect(html).toContain("Exemplo de justificativa.");
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
