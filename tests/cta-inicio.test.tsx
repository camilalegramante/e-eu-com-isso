import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CtaInicio } from "@/components/site/CtaInicio";

// Sem @testing-library/dom instalado: monta com react-dom direto.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;
function render(ui: React.ReactNode) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => createRoot(container).render(ui));
  return { container };
}

// jsdom não tem IntersectionObserver: guarda o callback para simular a
// rolagem.
let avisar: (entrada: Partial<IntersectionObserverEntry>) => void = () => {};

beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: IntersectionObserverCallback) {
        avisar = (entrada) =>
          cb([entrada as IntersectionObserverEntry], this as never);
      }
      observe() {}
      disconnect() {}
    },
  );
});

afterEach(() => vi.unstubAllGlobals());

function barraFixa(container: HTMLElement) {
  return container.querySelector("div.fixed") as HTMLElement;
}

describe("CtaInicio", () => {
  it("começa sem o botão fixo", () => {
    const { container } = render(<CtaInicio />);
    expect(barraFixa(container)).toHaveAttribute("aria-hidden", "true");
  });

  it("mostra o botão fixo quando o principal sai da tela por cima", () => {
    const { container } = render(<CtaInicio />);
    act(() =>
      avisar({
        isIntersecting: false,
        boundingClientRect: { top: -50 } as DOMRectReadOnly,
      }),
    );
    expect(barraFixa(container)).toHaveAttribute("aria-hidden", "false");
  });

  it("esconde de novo quando o principal volta à tela", () => {
    const { container } = render(<CtaInicio />);
    act(() =>
      avisar({
        isIntersecting: false,
        boundingClientRect: { top: -50 } as DOMRectReadOnly,
      }),
    );
    act(() =>
      avisar({
        isIntersecting: true,
        boundingClientRect: { top: 200 } as DOMRectReadOnly,
      }),
    );
    expect(barraFixa(container)).toHaveAttribute("aria-hidden", "true");
  });
});
