import { Icon } from "@/components/ui/Icon";
import { LabelTag } from "@/components/report/LabelTag";
import { SourceList } from "@/components/report/SourceList";
import { ViabilidadeSection } from "@/components/report/ViabilidadeSection";
import { motivoRelevancia } from "@/lib/personalization";
import { getViabilidade } from "@/content/viabilidade";
import { MOSTRAR_RASCUNHOS } from "@/lib/site";
import type { Candidatura, Proposta } from "@/lib/types";

const ACENTO: Record<Candidatura["corToken"], string> = {
  "neutra-1": "before:bg-candA",
  "neutra-2": "before:bg-candB",
};

export function CandidateColumn({
  candidatura,
  proposta,
  perfis,
}: {
  candidatura: Candidatura;
  proposta: Proposta | null;
  perfis: string[];
}) {
  const liberada =
    !!proposta && (proposta.statusRevisao === "aprovado" || MOSTRAR_RASCUNHOS);
  const exibivel = liberada && proposta.tipoAfirmacao !== "nao-localizado";
  // Rascunho oculto não exibe nada (só o link do plano): não pode virar
  // "Não consta", pois seria afirmar uma ausência que ainda não foi conferida.
  const emRevisao = !!proposta && !liberada;

  const motivo = proposta ? motivoRelevancia(proposta, perfis) : null;
  const viabilidade = proposta ? getViabilidade(proposta.id) : undefined;

  return (
    <article
      className={`relative overflow-hidden rounded-xl2 border border-line bg-surface p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 ${ACENTO[candidatura.corToken]}`}
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
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">
            {proposta.resumoFiel}
          </p>

          {motivo && (
            <p className="rounded-lg bg-paper px-3 py-2 text-sm text-ink">
              {motivo}
            </p>
          )}

          {(proposta.impactoCotidiano ||
            proposta.condicoes?.length ||
            proposta.incertezas?.length) && (
            <details className="group rounded-lg border border-line bg-paper/60">
              <summary className="flex min-h-11 cursor-pointer transition-colors active:bg-line/40 list-none items-center justify-between gap-2 px-3 py-2 text-sm font-medium text-ink">
                Resumo
                <span className="text-ink-faint transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="space-y-3 px-3 pb-3 text-sm">
                {proposta.impactoCotidiano && (
                  <div>
                    <p className="font-semibold text-ink">
                      O que pode mudar pra você{" "}
                      <span className="font-normal text-ink-faint">
                        (possível impacto)
                      </span>
                    </p>
                    <p className="mt-1 text-ink-soft">
                      {proposta.impactoCotidiano}
                    </p>
                  </div>
                )}
                {proposta.condicoes && proposta.condicoes.length > 0 && (
                  <div>
                    <p className="font-semibold text-ink">
                      Pra isso valer, precisa de
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-soft">
                      {proposta.condicoes.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {proposta.incertezas && proposta.incertezas.length > 0 && (
                  <div>
                    <p className="font-semibold text-ink">
                      O que ainda não está claro
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-ink-soft">
                      {proposta.incertezas.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          )}

          {viabilidade && <ViabilidadeSection viabilidade={viabilidade} />}

          <SourceList fontes={proposta.fontes} />
        </div>
      ) : emRevisao ? null : (
        <div className="mt-3 space-y-2">
          <LabelTag tipo="nao-localizado" />
          <p className="text-sm text-ink-soft">
            Não foi localizada proposta sobre este assunto neste plano. Isso não
            quer dizer que a candidatura é contra nem a favor.
          </p>
        </div>
      )}

      <a
        href={candidatura.planoDeGoverno.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
      >
        <Icon name="ExternalLink" className="h-4 w-4 shrink-0" />
        Ver o plano de governo completo ({candidatura.partido})
      </a>
    </article>
  );
}
