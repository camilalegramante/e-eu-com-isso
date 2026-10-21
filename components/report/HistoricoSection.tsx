import { Icon } from "@/components/ui/Icon";
import type { PontoDeAtencao, TipoAcao } from "@/lib/types";

const TIPO_ACAO: Record<TipoAcao, string> = {
  voto: "Voto",
  "projeto-de-lei": "Projeto de lei",
  "ato-parlamentar": "Ato como parlamentar",
  "ato-de-governo": "Ato de governo",
  declaracao: "Declaração pública",
};

const MESES = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

/** "2020-04-17" → "17 abr 2020"; "2020-04" → "abr 2020"; "2020" → "2020". */
export function formatarDataAcao(iso: string): string {
  const [ano, mes, dia] = iso.split("-");
  if (!mes) return iso;
  const m = MESES[Number(mes) - 1];
  if (!m) return iso;
  return dia ? `${Number(dia)} ${m} ${ano}` : `${m} ${ano}`;
}

export function HistoricoSection({ pontos }: { pontos: PontoDeAtencao[] }) {
  return (
    // Recolhido e sem contagem no título: um número aqui viraria placar entre
    // candidaturas. Sem caixas internas (no celular, só divisores).
    <details className="group border-t border-line pt-3">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-semibold text-ink transition-opacity active:opacity-60">
        <span className="flex items-center gap-1.5">
          <Icon name="History" className="h-4 w-4 shrink-0 text-brand" />
          O histórico combina com a proposta?
        </span>
        <span className="text-ink-faint transition group-open:rotate-180" aria-hidden>
          ▾
        </span>
      </summary>

      {pontos.length === 0 ? (
        <p className="pb-3 text-sm text-ink-soft">
          Não registramos pontos de atenção sobre esta proposta. Isso não quer
          dizer que não existam: a lista não é completa.
        </p>
      ) : (
        <ul className="divide-y divide-line pb-1">
          {pontos.map((p) => (
            <li key={p.id} className="space-y-2.5 py-3 text-sm first:pt-1">
              <div>
                <p className="font-semibold text-ink">O plano diz</p>
                <p className="mt-0.5 text-ink-soft">{p.oQuePlanoDiz}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">
                  O histórico mostra{" "}
                  <span className="font-normal text-ink-faint">
                    · {TIPO_ACAO[p.tipoAcao]}, {formatarDataAcao(p.dataAcao)}
                  </span>
                </p>
                <p className="mt-0.5 text-ink-soft">{p.oQueHistoricoMostra}</p>
              </div>
              <div className="border-l-2 border-brand pl-3">
                <p className="font-semibold text-ink">
                  Por que chama atenção{" "}
                  <span className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
                    Análise
                  </span>
                </p>
                <p className="mt-0.5 text-ink-soft">{p.porQueChamaAtencao}</p>
              </div>
              {p.outroLado && (
                <div>
                  <p className="font-semibold text-ink">O que o candidato disse</p>
                  <p className="mt-0.5 text-ink-soft">{p.outroLado}</p>
                </div>
              )}
              <ul className="space-y-1">
                {p.fontes.map((f) => (
                  <li key={f.url}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 py-1 text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
                    >
                      <Icon name="ExternalLink" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span className="min-w-0 [overflow-wrap:anywhere]">{f.titulo}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
