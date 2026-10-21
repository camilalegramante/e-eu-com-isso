import { Icon } from "@/components/ui/Icon";
import { GraficoCongresso } from "@/components/report/GraficoCongresso";
import { CONGRESSO, somaPorCampo } from "@/content/congresso";

export function CongressoPanel() {
  const { regras, senado2027, fontes } = CONGRESSO;
  const soma = somaPorCampo();
  const somaSenado = somaPorCampo(senado2027);

  return (
    <section
      aria-labelledby="congresso-titulo"
      className="rounded-xl2 border border-line bg-surface p-4 sm:p-5"
    >
      {/* Recolhido por padrão: é contexto, não a resposta principal. */}
      <details className="group/congresso">
        <summary className="flex cursor-pointer list-none items-start gap-3 transition-opacity active:opacity-60">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
            <Icon name="Users" className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <h2
              id="congresso-titulo"
              className="font-display text-lg font-semibold text-ink"
            >
              O peso do Congresso a partir de 2027
            </h2>
            <span className="mt-1 block text-sm text-ink-soft">
              O presidente não decide sozinho: muita proposta precisa ser
              aprovada pelo Congresso.
            </span>
            <span className="mt-2 block text-sm font-medium text-brand underline underline-offset-2 group-open/congresso:hidden">
              Ver quem apoia cada um
            </span>
          </span>
          <span
            className="mt-1 text-ink-faint transition group-open/congresso:rotate-180"
            aria-hidden
          >
            ▾
          </span>
        </summary>

        <GraficoCongresso />

        <details className="group mt-4 border-t border-line">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-medium text-ink transition-opacity active:opacity-60">
            Saiba mais
            <span
              className="text-ink-faint transition group-open:rotate-180"
              aria-hidden
            >
              ▾
            </span>
          </summary>
          <div className="space-y-3 pb-3 text-sm text-ink-soft">
            <p>
              Lei comum precisa da maioria: {regras.camaraMaioria} de{" "}
              {regras.camaraTotal} deputados e {regras.senadoMaioria} de{" "}
              {regras.senadoTotal} senadores. Mudar a Constituição (PEC) precisa de{" "}
              {regras.camaraPec} deputados e {regras.senadoPec} senadores.
            </p>
            <p>
              Os partidos que apoiam Flávio somam {soma.flavio} deputados e{" "}
              {somaSenado.flavio} senadores. Os que apoiam Lula somam {soma.lula}{" "}
              deputados e {somaSenado.lula} senadores.
            </p>
            <p>
              Apoio na eleição não garante voto em cada projeto. Para mudar a
              Constituição, qualquer um dos dois precisaria de votos de partidos de
              fora do seu grupo, como PSD, MDB e PSDB.
            </p>
            <p>
              <strong className="font-semibold text-ink">Como contamos:</strong>{" "}
              bancadas eleitas (TSE) e declarações de apoio no 2º turno. MDB, PSD e
              PSDB ficam em “outros” por estarem divididos ou terem liberado o apoio.
              A composição ainda pode mudar até a posse.
            </p>
            <p>
              <strong className="font-semibold text-ink">Análise:</strong> propostas
              que dependem de muitos votos, ainda mais as que mudam a Constituição,
              tendem a ser mais difíceis de aprovar. Veja “Passa no Congresso?” em
              cada proposta.
            </p>

            <div>
              <p className="font-semibold text-ink">Fontes</p>
              <ul className="mt-2 space-y-1.5">
                {fontes.map((f) => (
                  <li key={f.url}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 underline decoration-line underline-offset-2 hover:text-ink"
                    >
                      <Icon
                        name="ExternalLink"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      />
                      <span className="min-w-0 [overflow-wrap:anywhere]">{f.titulo}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </details>
    </section>
  );
}
