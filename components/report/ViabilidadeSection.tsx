import { Icon } from "@/components/ui/Icon";
import type { Viabilidade } from "@/lib/types";

type Criterio = "orcamento" | "parlamentar" | "institucional" | "juridica";

const LINHAS: { chave: Criterio; icone: string; rotulo: string }[] = [
  { chave: "orcamento", icone: "PiggyBank", rotulo: "Tem o dinheiro?" },
  { chave: "parlamentar", icone: "Users", rotulo: "Passa no Congresso?" },
  { chave: "institucional", icone: "HardHat", rotulo: "Dá pra executar?" },
  { chave: "juridica", icone: "Scale", rotulo: "Está dentro da lei?" },
];

export function ViabilidadeSection({
  viabilidade,
}: {
  viabilidade: Viabilidade;
}) {
  const linhas = LINHAS.filter((l) => viabilidade[l.chave]);
  if (linhas.length === 0) return null;
  const etiquetas: Partial<Record<Criterio, string>> =
    viabilidade.etiquetas ?? {};

  return (
    <section
      aria-label="Viabilidade (análise)"
      className="border-t border-line pt-3"
    >
      <div className="flex items-center justify-between gap-2">
        <h5 className="flex items-center gap-1.5 text-sm font-semibold text-ink">
          <Icon name="Scale" className="h-4 w-4 text-brand" />
          Dá pra sair do papel?
        </h5>
        <span className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
          Análise
        </span>
      </div>

      <ul className="mt-2 divide-y divide-line">
        {linhas.map((l) => {
          const etiqueta = etiquetas[l.chave];
          return (
            <li key={l.chave}>
              <details className="group">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2.5 py-2 transition-opacity active:opacity-60">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-ink-soft">
                    <Icon name={l.icone} className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex flex-1 flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="font-medium text-ink">{l.rotulo}</span>
                    {/* Mesmo estilo para todas as etiquetas: não é nota. */}
                    {etiqueta && (
                      <span className="rounded-full border border-line bg-surface px-2 py-0.5 text-xs font-medium text-ink-soft">
                        {etiqueta}
                      </span>
                    )}
                  </span>
                  <span
                    className="text-ink-faint transition group-open:rotate-180"
                    aria-hidden
                  >
                    ▾
                  </span>
                </summary>
                <p className="pb-3 text-sm text-ink-soft sm:pl-8">
                  {viabilidade[l.chave]}
                </p>
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
