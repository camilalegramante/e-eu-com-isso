import { Icon } from "@/components/ui/Icon";
import type { PontoDeAtencao, TipoAcao } from "@/lib/types";

export const TIPO_ACAO: Record<TipoAcao, string> = {
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
  const temPontos = pontos.length > 0;
  return (
    // Aberto direto e sem contagem no título: um número aqui viraria placar
    // entre candidaturas. O título é uma faixa que vai de borda a borda da
    // coluna (margem negativa = padding do card): destaca sem virar caixa
    // dentro de caixa e sem roubar largura do texto no celular.
    <section>
      <div className="-mx-4 flex min-h-14 items-center gap-3 border-y border-brand/25 bg-brand-soft px-4 py-3 sm:-mx-5 sm:px-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="History" className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-semibold leading-snug text-ink">
            O histórico combina com a proposta?
          </span>
          <span className="mt-0.5 block text-sm text-brand-ink">
            {temPontos
              ? "Veja o que o candidato já fez ou disse sobre isso"
              : "Nenhum ponto registrado até agora"}
          </span>
        </span>
      </div>

      {!temPontos ? (
        <p className="pt-3 text-sm text-ink-soft">
          Não registramos pontos de atenção sobre esta proposta. Isso não quer
          dizer que não existam: a lista não é completa.
        </p>
      ) : (
        <ul className="divide-y divide-line">
          {pontos.map((p) => (
            <li key={p.id} className="space-y-2.5 py-3 text-sm last:pb-0">
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
              {/* A análise é o ponto central: faixa colorida de borda a borda,
                  como o título, em vez de uma caixa dentro do card. */}
              <div className="-mx-4 border-l-4 border-destaque bg-destaque-soft px-4 py-3 sm:-mx-5 sm:px-5">
                <p className="font-semibold text-destaque-ink">
                  Por que chama atenção{" "}
                  <span className="text-[11px] font-medium uppercase tracking-wide text-destaque-ink/70">
                    Análise
                  </span>
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink">{p.porQueChamaAtencao}</p>
              </div>
              {p.outroLado && (
                <div>
                  <p className="font-semibold text-ink">O que o candidato disse</p>
                  <p className="mt-0.5 text-ink-soft">{p.outroLado}</p>
                </div>
              )}
              {/* Recolhidas, como as fontes da proposta: quem quer conferir abre. */}
              <details className="group/fontes">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-medium text-ink transition-opacity active:opacity-60">
                  {/* Sem contagem: nenhum número nesta seção, para não virar placar. */}
                  <span>Fontes</span>
                  <span className="text-ink-faint transition group-open/fontes:rotate-180" aria-hidden>
                    ▾
                  </span>
                </summary>
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
              </details>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
