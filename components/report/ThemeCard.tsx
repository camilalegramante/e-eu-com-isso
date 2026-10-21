import { Icon } from "@/components/ui/Icon";
import { corDoTema } from "@/components/ui/coresTema";
import { CandidateColumn } from "@/components/report/CandidateColumn";
import { montarComparacao, motivoRelevancia } from "@/lib/personalization";
import type { Tema } from "@/lib/types";

export function ThemeCard({ tema, perfis }: { tema: Tema; perfis: string[] }) {
  const colunas = montarComparacao(tema.id);
  const cor = corDoTema(tema.id);
  const motivo = motivoRelevancia(
    colunas.flatMap((c) => (c.proposta ? [c.proposta] : [])),
    perfis,
  );

  return (
    <section
      id={`tema-${tema.id}`}
      className="scroll-mt-24 sm:rounded-xl2 sm:border sm:border-line sm:bg-paper sm:p-6"
      aria-labelledby={`titulo-${tema.id}`}
    >
      {/* No celular o tema não é um card, para não empilhar caixas e sobrar
          largura para o texto: só a faixa colorida do título o separa.
          Título e colunas entram ao aparecer na tela (CSS, .anim-ao-ver). */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          className={`anim-ao-ver mb-1 flex items-start gap-3 rounded-xl2 border-l-4 px-4 py-4 sm:col-span-2 ${cor.borda} ${cor.fundo}`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${cor.icone}`}
          >
            <Icon name={tema.icone} className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3
              id={`titulo-${tema.id}`}
              className="font-display text-xl font-semibold text-ink"
            >
              {tema.rotulo}
            </h3>
            {tema.resumoNeutro && (
              <p className="mt-1 text-sm text-ink-soft">{tema.resumoNeutro}</p>
            )}
            {motivo && (
              <p className="mt-2 text-sm font-medium text-brand">{motivo}</p>
            )}
          </div>
        </div>

        {colunas.map((c) => (
          // "grid" mantém as duas colunas com a mesma altura, como antes.
          <div key={c.candidatura.id} className="anim-ao-ver grid min-w-0">
            <CandidateColumn
              candidatura={c.candidatura}
              proposta={c.proposta}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
