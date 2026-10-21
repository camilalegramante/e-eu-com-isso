import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Viabilidade } from "@/lib/types";

const LINHAS: { chave: keyof Viabilidade; icone: string; rotulo: string }[] = [
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

  return (
    <section
      aria-label="Viabilidade (análise)"
      className="rounded-lg border border-line bg-paper/60 p-3"
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

      <dl className="mt-3 space-y-2.5">
        {linhas.map((l) => (
          <div key={l.chave} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-ink-soft">
              <Icon name={l.icone} className="h-3.5 w-3.5" />
            </span>
            <div className="text-sm">
              <dt className="font-medium text-ink">{l.rotulo}</dt>
              <dd className="text-ink-soft">{viabilidade[l.chave]}</dd>
            </div>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-xs text-ink-faint">
        Os mesmos 4 pontos valem para todas as propostas. É uma análise dos
        obstáculos, não uma nota.{" "}
        <Link href="/sobre#viabilidade" className="underline hover:text-ink">
          Entenda
        </Link>
        .
      </p>
    </section>
  );
}
