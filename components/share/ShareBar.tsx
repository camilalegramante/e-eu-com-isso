"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function ShareBar({ titulo }: { titulo: string }) {
  const [url, setUrl] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [podeCompartilhar, setPodeCompartilhar] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
    setPodeCompartilhar(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
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
        url: url || window.location.href,
      });
    } catch {
      /* usuário cancelou ou indisponível */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={copiar}
        className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-ink/40"
      >
        <Icon name={copiado ? "Check" : "Link2"} className="h-4 w-4" />
        {copiado ? "Link copiado!" : "Copiar link"}
      </button>
      {podeCompartilhar && (
        <button
          type="button"
          onClick={compartilhar}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink-soft"
        >
          <Icon name="Share2" className="h-4 w-4" />
          Compartilhar
        </button>
      )}
    </div>
  );
}
