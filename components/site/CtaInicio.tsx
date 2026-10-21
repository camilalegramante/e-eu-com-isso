"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const ROTULO = "Descobrir o que importa pra mim";

// Botão principal da home. No celular, quando ele sai da tela (a pessoa
// rolou para baixo), uma cópia aparece fixa no rodapé, para a ação estar
// sempre à mão. No desktop o "Começar" do cabeçalho já cumpre esse papel.
export function CtaInicio() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [fixo, setFixo] = useState(false);

  useEffect(() => {
    const alvo = ref.current;
    if (!alvo) return;
    const observer = new IntersectionObserver(([entrada]) => {
      // Só depois de passar do botão (ele saiu por cima), não antes.
      setFixo(!!entrada && !entrada.isIntersecting && entrada.boundingClientRect.top < 0);
    });
    observer.observe(alvo);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Link
        ref={ref}
        href="/comecar"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-paper transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-ink-soft"
      >
        {ROTULO}
        <Icon name="ArrowRight" className="h-5 w-5" />
      </Link>

      <div
        aria-hidden={!fixo}
        className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 transition sm:hidden ${
          fixo ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          href="/comecar"
          tabIndex={fixo ? 0 : -1}
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-paper shadow-lg transition motion-safe:active:scale-[0.98] hover:bg-ink-soft"
        >
          {ROTULO}
          <Icon name="ArrowRight" className="h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
