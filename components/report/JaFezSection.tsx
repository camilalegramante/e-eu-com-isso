import { Icon } from "@/components/ui/Icon";
import { TIPO_ACAO, formatarDataAcao } from "@/components/report/HistoricoSection";
import type { AcaoNaDirecao } from "@/lib/types";

// Par do "O histórico combina com a proposta?", com o mesmo visual: faixa de
// título de borda a borda (em verde-água), sem contagem (não pode virar
// placar) e análise em destaque. Aqui entram ações do candidato na mesma direção do plano.
export function JaFezSection({ acoes }: { acoes: AcaoNaDirecao[] }) {
  const temAcoes = acoes.length > 0;
  // A faixa de título vai de borda a borda da coluna (margem negativa =
  // padding do card): destaca sem virar caixa dentro de caixa e sem roubar
  // largura do texto no celular. Sem contagem: um número viraria placar.
  const faixa = "-mx-4 flex min-h-14 items-center gap-3 border-y border-agua/25 bg-agua-soft px-4 py-3 sm:-mx-5 sm:px-5";
  const cabecalho = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-agua text-white">
        <Icon name="Check" className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold leading-snug text-ink">
          O candidato já fez algo nessa direção?
        </span>
        <span className="mt-0.5 block text-sm text-agua-ink">
          {temAcoes ? "Veja o que ele já fez que vai na linha da proposta" : "Nenhum ponto registrado até agora"}
        </span>
      </span>
    </>
  );

  // Sem itens, o aviso fica recolhido no título: quem quiser entender abre.
  if (!temAcoes) {
    return (
      <details className="group">
        <summary className={`${faixa} cursor-pointer list-none transition-opacity active:opacity-60`}>
          {cabecalho}
          <span className="text-agua-ink transition group-open:rotate-180" aria-hidden>
            ▾
          </span>
        </summary>
        <p className="pt-3 text-sm text-ink-soft">
          Ainda não registramos ações do candidato na direção desta proposta.
          Isso não quer dizer que não existam: a lista não é completa.
        </p>
      </details>
    );
  }

  return (
    <section>
      <div className={faixa}>{cabecalho}</div>
      <ul className="divide-y divide-line">
        {acoes.map((a) => (
          <li key={a.id} className="space-y-2.5 py-3 text-sm last:pb-0">
            <div>
              <p className="font-semibold text-ink">O plano diz</p>
              <p className="mt-0.5 text-ink-soft">{a.oQuePlanoDiz}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">
                O que ele já fez{" "}
                <span className="font-normal text-ink-faint">
                  · {TIPO_ACAO[a.tipoAcao]}, {formatarDataAcao(a.dataAcao)}
                </span>
              </p>
              <p className="mt-0.5 text-ink-soft">{a.oQueFez}</p>
            </div>
            <div className="-mx-4 border-l-4 border-destaque bg-destaque-soft px-4 py-3 sm:-mx-5 sm:px-5">
              <p className="font-semibold text-destaque-ink">
                Por que combina{" "}
                <span className="text-[11px] font-medium uppercase tracking-wide text-destaque-ink/70">
                  Análise
                </span>
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-ink">{a.porQueCombina}</p>
            </div>
            {a.resultado && (
              <div>
                <p className="font-semibold text-ink">O que aconteceu depois</p>
                <p className="mt-0.5 text-ink-soft">{a.resultado}</p>
              </div>
            )}
            <details className="group/fontes">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-medium text-ink transition-opacity active:opacity-60">
                {/* Sem contagem: nenhum número nesta seção, para não virar placar. */}
                <span>Fontes</span>
                <span className="text-ink-faint transition group-open/fontes:rotate-180" aria-hidden>
                  ▾
                </span>
              </summary>
              <ul className="space-y-1">
                {a.fontes.map((f) => (
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
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
