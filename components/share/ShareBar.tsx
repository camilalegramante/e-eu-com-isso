"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

function useCompartilhar(titulo: string) {
  const [copiado, setCopiado] = useState(false);
  const [podeCompartilhar, setPodeCompartilhar] = useState(false);

  useEffect(() => {
    setPodeCompartilhar(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* clipboard indisponível */
    }
  }

  async function compartilhar() {
    try {
      await navigator.share({
        title: "E eu com isso?",
        text: titulo,
        url: window.location.href,
      });
    } catch {
      /* usuário cancelou ou indisponível */
    }
  }

  return { copiado, podeCompartilhar, copiar, compartilhar };
}

const ESTILOS = {
  claro: {
    copiar: "border border-ink/20 bg-surface text-ink hover:border-ink/40",
    compartilhar: "bg-ink text-paper hover:bg-ink-soft",
  },
  escuro: {
    copiar: "border border-paper/40 text-paper hover:border-paper",
    compartilhar: "bg-paper text-ink hover:bg-paper/90",
  },
};

/** Botões em linha (topo e fim do relatório). */
export function ShareBar({
  titulo,
  tom = "claro",
  className = "",
}: {
  titulo: string;
  tom?: keyof typeof ESTILOS;
  className?: string;
}) {
  const { copiado, podeCompartilhar, copiar, compartilhar } =
    useCompartilhar(titulo);
  const estilo = ESTILOS[tom];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {podeCompartilhar && (
        <button
          type="button"
          onClick={compartilhar}
          className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium ${estilo.compartilhar}`}
        >
          <Icon name="Share2" className="h-4 w-4" />
          Compartilhar
        </button>
      )}
      <button
        type="button"
        onClick={copiar}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium ${estilo.copiar}`}
      >
        <Icon name={copiado ? "Check" : "Link2"} className="h-4 w-4" />
        {copiado ? "Link copiado!" : "Copiar link"}
      </button>
    </div>
  );
}

/**
 * Barra fixa no rodapé da tela, só no celular (ao alcance do polegar).
 * Aparece depois que a pessoa começa a rolar, para não cobrir o início.
 */
export function ShareDock({ titulo }: { titulo: string }) {
  const { copiado, podeCompartilhar, copiar, compartilhar } =
    useCompartilhar(titulo);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const atualizar = () => setVisivel(window.scrollY > 240);
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    return () => window.removeEventListener("scroll", atualizar);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 pt-3 backdrop-blur transition-transform duration-200 sm:hidden ${
        visivel ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      aria-hidden={!visivel}
    >
      <div className="flex gap-2">
        {podeCompartilhar && (
          <button
            type="button"
            onClick={compartilhar}
            tabIndex={visivel ? 0 : -1}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-paper"
          >
            <Icon name="Share2" className="h-4 w-4" />
            Compartilhar
          </button>
        )}
        <button
          type="button"
          onClick={copiar}
          tabIndex={visivel ? 0 : -1}
          aria-live="polite"
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 bg-surface px-4 text-sm font-medium text-ink ${
            podeCompartilhar ? "" : "flex-1"
          }`}
        >
          <Icon name={copiado ? "Check" : "Link2"} className="h-4 w-4" />
          {copiado ? "Copiado!" : "Copiar link"}
        </button>
      </div>
    </div>
  );
}
