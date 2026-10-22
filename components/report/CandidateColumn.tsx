import { Icon } from "@/components/ui/Icon";
import { LabelTag } from "@/components/report/LabelTag";
import { SourceList } from "@/components/report/SourceList";
import { HistoricoSection } from "@/components/report/HistoricoSection";
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

  const impacto = proposta?.impactoCotidiano;
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
              A fonte vem logo abaixo, para conferir no plano. */}
          {impacto && (
            <div className="border-l-2 border-brand pl-3">
              <p className="text-sm font-semibold text-ink">
                O que pode mudar pra você
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{impacto}</p>
            </div>
          )}

          {!impacto && resumo}

          <SourceList fontes={proposta.fontes} candidatura={candidatura} />

          <HistoricoSection pontos={getPontosDeAtencao(proposta.id)} />
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
