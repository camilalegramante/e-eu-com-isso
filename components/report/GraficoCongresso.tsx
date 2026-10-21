"use client";

import { useRef, useState } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useInView,
} from "framer-motion";
import { MOLA } from "@/components/ui/AnimateIn";
import {
  CONGRESSO,
  somaPorCampo,
  type PartidoCamara,
} from "@/content/congresso";

type Casa = "camara" | "senado";

const CASAS: Record<
  Casa,
  {
    aba: string;
    titulo: string;
    unidade: string;
    total: number;
    maioria: number;
    pec: number;
    partidos: PartidoCamara[];
  }
> = {
  camara: {
    aba: "Câmara",
    titulo: "Câmara dos Deputados em 2027",
    unidade: "deputados",
    total: CONGRESSO.regras.camaraTotal,
    maioria: CONGRESSO.regras.camaraMaioria,
    pec: CONGRESSO.regras.camaraPec,
    partidos: CONGRESSO.camara2027,
  },
  senado: {
    aba: "Senado",
    titulo: "Senado em 2027",
    unidade: "senadores",
    total: CONGRESSO.regras.senadoTotal,
    maioria: CONGRESSO.regras.senadoMaioria,
    pec: CONGRESSO.regras.senadoPec,
    partidos: CONGRESSO.senado2027,
  },
};

// Cores neutras das candidaturas (as mesmas dos cards), nunca as dos partidos.
const GRUPOS = [
  { id: "flavio", rotulo: "Apoiam Flávio", cor: "bg-candA" },
  { id: "lula", rotulo: "Apoiam Lula", cor: "bg-candB" },
  { id: "outros", rotulo: "Outros partidos", cor: "bg-ink/35" },
] as const;

function grupoDe(p: PartidoCamara): (typeof GRUPOS)[number]["id"] {
  if (p.campo === "flavio" || p.campo === "lula") return p.campo;
  return "outros";
}

function rotuloPartido(p: PartidoCamara): string | null {
  if (p.obs) return p.obs;
  if (p.campo === "dividido") return "dividido";
  if (p.campo === "neutro") return "liberou apoio";
  if (!p.campo) return "sem posição declarada";
  return null;
}

export function GraficoCongresso() {
  const [casa, setCasa] = useState<Casa>("camara");
  // A barra começa com largura zero e não é "vista" sozinha; quem dispara o
  // crescimento é o painel, que tem tamanho.
  const painel = useRef<HTMLDivElement>(null);
  const emVista = useInView(painel, { once: true });
  const abas = useRef<Record<Casa, HTMLButtonElement | null>>({
    camara: null,
    senado: null,
  });
  const dados = CASAS[casa];
  const soma = somaPorCampo(dados.partidos);
  const somaGrupo = {
    flavio: soma.flavio,
    lula: soma.lula,
    outros: soma.dividido + soma.neutro + soma.outros,
  };
  const maiorPartido = Math.max(...dados.partidos.map((p) => p.cadeiras), 1);
  const pct = (n: number) => `${(n / dados.total) * 100}%`;

  function trocarComTeclado(e: React.KeyboardEvent) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const proxima: Casa = casa === "camara" ? "senado" : "camara";
    setCasa(proxima);
    abas.current[proxima]?.focus();
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="mt-5">
          <div
            role="tablist"
            aria-label="Casa do Congresso"
            className="grid grid-cols-2 gap-1 rounded-full bg-paper p-1"
            onKeyDown={trocarComTeclado}
          >
            {(Object.keys(CASAS) as Casa[]).map((c) => (
              <button
                key={c}
                ref={(el) => {
                  abas.current[c] = el;
                }}
                type="button"
                role="tab"
                id={`aba-${c}`}
                aria-selected={casa === c}
                aria-controls="painel-casa"
                tabIndex={casa === c ? 0 : -1}
                onClick={() => setCasa(c)}
                className={`min-h-11 rounded-full text-sm font-semibold transition motion-safe:active:scale-[0.98] ${
                  casa === c ? "bg-surface text-ink shadow-sm" : "text-ink-soft"
                }`}
              >
                {CASAS[c].aba} ({CASAS[c].total})
              </button>
            ))}
          </div>

          <div
            ref={painel}
            id="painel-casa"
            role="tabpanel"
            aria-labelledby={`aba-${casa}`}
          >
            <h3 className="mt-5 text-base font-semibold text-ink">
              {dados.titulo}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Toque em um grupo para ver os partidos.
            </p>

            <ul className="mt-3 space-y-2">
              {GRUPOS.map((g) => {
                const partidos = dados.partidos
                  .filter((p) => grupoDe(p) === g.id && p.cadeiras > 0)
                  .sort((a, b) => b.cadeiras - a.cadeiras);
                return (
                  <li key={g.id}>
                    <details className="group rounded-lg border border-line bg-surface">
                      <summary className="flex min-h-11 cursor-pointer list-none flex-col gap-2 px-3 py-3">
                        <span className="flex items-center justify-between gap-2 text-sm">
                          <span className="flex items-center gap-2 font-medium text-ink">
                            <span
                              className={`h-3 w-3 shrink-0 rounded-sm ${g.cor}`}
                              aria-hidden
                            />
                            {g.rotulo}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="tabular-nums font-semibold text-ink">
                              {somaGrupo[g.id]}
                              <span className="sr-only"> {dados.unidade}</span>
                            </span>
                            <span
                              className="text-ink-faint transition group-open:rotate-180"
                              aria-hidden
                            >
                              ▾
                            </span>
                          </span>
                        </span>
                        {/* Barra sobre o total da Casa, com marcas de maioria e PEC. */}
                        <span
                          className="relative block h-3 rounded-full bg-paper"
                          aria-hidden
                        >
                          {/* Cresce do zero ao aparecer e ao trocar de Casa (key). */}
                          <m.span
                            key={casa}
                            className={`block h-full rounded-full ${g.cor}`}
                            initial={{ width: 0 }}
                            animate={{
                              width: emVista ? pct(somaGrupo[g.id]) : 0,
                            }}
                            transition={MOLA}
                          />
                          <span
                            className="absolute -top-1 h-5 w-0.5 bg-ink"
                            style={{ left: pct(dados.maioria) }}
                          />
                          <span
                            className="absolute -top-1 h-5 border-l-2 border-dashed border-ink"
                            style={{ left: pct(dados.pec) }}
                          />
                        </span>
                      </summary>

                      <ul className="space-y-2 border-t border-line px-3 py-3">
                        {partidos.map((p) => {
                          const rotulo = rotuloPartido(p);
                          return (
                            <li key={p.sigla}>
                              <div className="flex items-center justify-between gap-2 text-sm">
                                <span className="text-ink">
                                  <span className="font-medium">{p.sigla}</span>
                                  {rotulo && (
                                    <span className="text-xs text-ink-faint">
                                      {" "}
                                      ({rotulo})
                                    </span>
                                  )}
                                </span>
                                <span className="tabular-nums text-ink-soft">
                                  {p.cadeiras}
                                </span>
                              </div>
                              <div
                                className="mt-1 h-2 overflow-hidden rounded-full bg-paper"
                                aria-hidden
                              >
                                <m.div
                                  key={casa}
                                  className={`h-full ${g.cor}`}
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: emVista
                                      ? `${(p.cadeiras / maiorPartido) * 100}%`
                                      : 0,
                                  }}
                                  transition={MOLA}
                                />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-0.5 bg-ink" aria-hidden />
                Maioria: {dados.maioria}
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="h-3 border-l-2 border-dashed border-ink"
                  aria-hidden
                />
                Mudar a Constituição: {dados.pec}
              </span>
            </div>
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
