import { Icon } from "@/components/ui/Icon";
import { CandidateColumn } from "@/components/report/CandidateColumn";
import { montarComparacao } from "@/lib/personalization";
import type { Tema } from "@/lib/types";

export function ThemeCard({ tema, perfis }: { tema: Tema; perfis: string[] }) {
  const colunas = montarComparacao(tema.id);

  return (
    <section
      id={`tema-${tema.id}`}
      className="scroll-mt-24 rounded-xl2 border border-line bg-paper p-5 sm:p-6"
      aria-labelledby={`titulo-${tema.id}`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
          <Icon name={tema.icone} className="h-5 w-5" />
        </span>
        <div>
          <h3
            id={`titulo-${tema.id}`}
            className="font-display text-xl font-semibold text-ink"
          >
            {tema.rotulo}
          </h3>
          {tema.resumoNeutro && (
            <p className="mt-1 text-sm text-ink-soft">{tema.resumoNeutro}</p>
          )}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {colunas.map((c) => (
          <CandidateColumn
            key={c.candidatura.id}
            candidatura={c.candidatura}
            proposta={c.proposta}
            perfis={perfis}
          />
        ))}
      </div>
    </section>
  );
}
