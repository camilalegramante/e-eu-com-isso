import { Icon } from "@/components/ui/Icon";
import { LabelTag } from "@/components/report/LabelTag";
import { SourceList } from "@/components/report/SourceList";
import { ViabilidadeSection } from "@/components/report/ViabilidadeSection";
import { HistoricoSection } from "@/components/report/HistoricoSection";
import { getViabilidade } from "@/content/viabilidade";
import { getPontosDeAtencao } from "@/content/historico";
import type { Candidatura, Proposta } from "@/lib/types";

const ACENTO: Record<Candidatura["corToken"], string> = {
  "neutra-1": "before:bg-candA",
  "neutra-2": "before:bg-candB",
};

export function CandidateColumn({
  candidatura,
  proposta,
}: {
  candidatura: Candidatura;
  proposta: Proposta | null;
}) {
  const exibivel = !!proposta && proposta.tipoAfirmacao !== "nao-localizado";

  const viabilidade = proposta ? getViabilidade(proposta.id) : undefined;
  const impacto = proposta?.impactoCotidiano;
  const temCondicoes = !!proposta?.condicoes?.length;
  const temIncertezas = !!proposta?.incertezas?.length;
  const resumo = proposta && (
    <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">
      {proposta.resumoFiel}
    </p>
  );

  return (
    <article
      className={`relative overflow-hidden rounded-xl2 border border-line bg-surface p-4 sm:p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 ${ACENTO[candidatura.corToken]}`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
        <h4 className="min-w-0 font-display text-lg font-semibold text-ink">
          {candidatura.nome}
        </h4>
        <span className="text-xs font-medium text-ink-faint">
          {candidatura.partido}
        </span>
      </header>

      {exibivel && proposta ? (
        <div className="mt-3 space-y-3">
          {/* "Está no plano" é o padrão de tudo que aparece aqui; só rotula o
              que foge dele (ex.: histórico, interpretação). */}
          {proposta.tipoAfirmacao !== "proposta-documentada" && (
            <div className="flex flex-wrap items-center gap-2">
              <LabelTag tipo={proposta.tipoAfirmacao} />
            </div>
          )}

          <p className="font-medium text-ink [overflow-wrap:anywhere]">
            {proposta.titulo}
          </p>
          {/* O que muda na vida da pessoa vem primeiro. É interpretação: o
              título ("pode") e o texto (sempre condicional) deixam isso claro.
              O texto fiel ao plano fica logo abaixo. */}
          {impacto && (
            <div className="border-l-2 border-brand pl-3">
              <p className="text-sm font-semibold text-ink">
                O que pode mudar pra você
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{impacto}</p>
            </div>
          )}

          {!impacto && resumo}

          <HistoricoSection pontos={getPontosDeAtencao(proposta.id)} />

          {(impacto || temCondicoes || temIncertezas) && (
            <details className="group border-t border-line pt-3">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-medium text-ink transition-opacity active:opacity-60">
                {impacto ? "O que o plano diz e o que falta" : "O que ainda falta"}
                <span className="text-ink-faint transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="space-y-3 pb-3 text-sm">
                {impacto && resumo}
                {temCondicoes && (
                  <div>
                    <p className="font-semibold text-ink">
                      Pra isso valer, precisa de
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-soft">
                      {proposta.condicoes?.map((c, i) => (
                        <li key={`${i}-${c}`}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {temIncertezas && (
                  <div>
                    <p className="font-semibold text-ink">
                      O que ainda não está claro
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-soft">
                      {proposta.incertezas?.map((c, i) => (
                        <li key={`${i}-${c}`}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          )}

          {viabilidade &&<ViabilidadeSection viabilidade={viabilidade} />}

          <SourceList fontes={proposta.fontes} candidatura={candidatura} />
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          <LabelTag tipo="nao-localizado" />
          <p className="text-sm text-ink-soft">
            Não foi localizada proposta sobre este assunto neste plano. Isso não
            quer dizer que a candidatura é contra nem a favor.
          </p>
        </div>
      )}

      {/* Com proposta exibida, o link do plano fica dentro de "Fontes". */}
      {!exibivel && (
        <a
          href={candidatura.planoDeGoverno.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
        >
          <Icon name="ExternalLink" className="h-4 w-4 shrink-0" />
          Ver o plano de governo completo ({candidatura.partido})
        </a>
      )}
    </article>
  );
}
