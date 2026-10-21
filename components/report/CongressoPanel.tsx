import { Icon } from "@/components/ui/Icon";
import {
  CONGRESSO,
  camaraOrdenada,
  somaPorCampo,
  type PartidoCamara,
} from "@/content/congresso";

function rotuloCampo(p: PartidoCamara): string | null {
  if (p.obs) return p.obs;
  switch (p.campo) {
    case "flavio":
      return "apoia Flávio";
    case "lula":
      return "apoia Lula";
    case "dividido":
      return "dividido";
    case "neutro":
      return "liberou apoio";
    default:
      return null;
  }
}

// Azul = base de Flávio; verde = base de Lula; cinza = dividido/sem definição.
function corBarra(p: PartidoCamara): string {
  if (p.campo === "flavio") return "bg-blue-500";
  if (p.campo === "lula") return "bg-emerald-500";
  return "bg-ink/30";
}

export function CongressoPanel() {
  const { regras, senado2027, fontes } = CONGRESSO;
  const partidos = camaraOrdenada();
  const max = partidos[0]?.cadeiras ?? 1;
  const soma = somaPorCampo();
  const somaSenado = somaPorCampo(senado2027);

  return (
    <section
      aria-labelledby="congresso-titulo"
      className="rounded-xl2 border border-line bg-surface p-5"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
          <Icon name="Users" className="h-5 w-5" />
        </span>
        <div>
          <h2
            id="congresso-titulo"
            className="font-display text-lg font-semibold text-ink"
          >
            O peso do Congresso a partir de 2027
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Contexto que vale para os dois lados
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm text-ink-soft">
        <p>
          Quem é presidente não decide sozinho: para virar lei, a proposta
          precisa passar no Congresso. Lei comum exige maioria simples (
          {regras.camaraMaioria} de {regras.camaraTotal} deputados e{" "}
          {regras.senadoMaioria} de {regras.senadoTotal} senadores). Mudar a
          Constituição (PEC) é mais difícil: precisa de {regras.camaraPec}{" "}
          deputados e {regras.senadoPec} senadores.
        </p>
        <p>
          Os partidos que declararam apoio a <strong>Flávio Bolsonaro</strong>{" "}
          no 2º turno somam <strong>{soma.flavio} deputados</strong> na Câmara:
          acima da maioria simples e abaixo dos {regras.camaraPec} para mudar a
          Constituição. No Senado, somam <strong>{somaSenado.flavio} senadores</strong>:
          acima da maioria simples e no limite dos {regras.senadoPec} para mudar
          a Constituição.
        </p>
        <p>
          Os partidos que apoiam <strong>Lula</strong> (PT mais a coligação do
          1º turno — PSB, PDT, PSOL, PCdoB, PV e Rede, além de legendas menores)
          somam <strong>{soma.lula} deputados</strong> na Câmara: abaixo da
          maioria simples e abaixo dos {regras.camaraPec} para mudar a
          Constituição. No Senado, somam <strong>{somaSenado.lula} senadores</strong>:
          abaixo da maioria simples e abaixo dos {regras.senadoPec} para mudar a
          Constituição.
        </p>
        <p>
          Apoio na eleição não garante voto em cada projeto. Para mudar a
          Constituição, qualquer um dos dois precisaria de votos de partidos de
          fora do seu grupo, como PSD, MDB e PSDB.
        </p>
      </div>

      {/* Composição da Câmara, por partido. Cores: azul = Flávio, verde = Lula. */}
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Câmara dos Deputados em 2027 — todas as bancadas
        </p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" aria-hidden />
            Base de Flávio
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" aria-hidden />
            Base de Lula
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-ink/30" aria-hidden />
            Dividido ou sem definição
          </span>
        </div>
        <ul className="mt-3 space-y-2">
          {partidos.map((p) => {
            const rotulo = rotuloCampo(p);
            return (
              <li
                key={p.sigla}
                aria-label={`${p.sigla}: ${p.cadeiras} cadeiras${
                  rotulo ? `, ${rotulo}` : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="flex items-center gap-1.5 text-ink">
                    <span className="font-medium">{p.sigla}</span>
                    {rotulo && (
                      <span className="text-xs text-ink-faint">({rotulo})</span>
                    )}
                  </span>
                  <span className="tabular-nums text-ink-soft">
                    {p.cadeiras}
                  </span>
                </div>
                <div
                  className="mt-1 h-2 overflow-hidden rounded-full bg-paper"
                  aria-hidden
                >
                  <div
                    className={`h-full ${corBarra(p)}`}
                    style={{ width: `${Math.round((p.cadeiras / max) * 100)}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Resumo das somas por base. */}
      <div className="mt-5 rounded-lg border border-line bg-paper/60 p-4">
        <p className="text-sm font-semibold text-ink">
          Soma das bancadas na Câmara (513 deputados)
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-ink">
              <span className="h-3 w-3 rounded-sm bg-blue-500" aria-hidden />
              Base de Flávio
            </span>
            <span className="tabular-nums font-semibold text-ink">
              {soma.flavio}
            </span>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-ink">
              <span className="h-3 w-3 rounded-sm bg-emerald-500" aria-hidden />
              Base de Lula
            </span>
            <span className="tabular-nums font-semibold text-ink">
              {soma.lula}
            </span>
          </li>
          <li className="flex items-center justify-between gap-2 text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-ink/30" aria-hidden />
              MDB (dividido) {soma.dividido} · PSD e PSDB (liberaram){" "}
              {soma.neutro} · outros {soma.outros}
            </span>
          </li>
        </ul>
        <p className="mt-3 text-xs text-ink-faint">
          Cálculo a partir das bancadas (Câmara / TSE) e das declarações de
          apoio no 2º turno (O Povo). Maioria simples: {regras.camaraMaioria}{" "}
          deputados. Mudar a Constituição: {regras.camaraPec}. O MDB, o PSD e o
          PSDB não entram em nenhum lado por estarem divididos ou terem liberado
          o apoio dos seus filiados.
        </p>
      </div>

      <p className="mt-4 rounded-lg bg-paper px-3 py-2 text-sm text-ink">
        <strong className="font-semibold">Análise:</strong> propostas que
        dependem de muitos votos — ainda mais as que mudam a Constituição —
        tendem a ser mais difíceis de aprovar. Veja isso em “Passa no Congresso?”
        em cada proposta.
      </p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Fontes
        </p>
        <ul className="mt-2 space-y-1.5">
          {fontes.map((f) => (
            <li key={f.url}>
              <a
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-1.5 text-sm text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
              >
                <Icon
                  name="ExternalLink"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                />
                <span>{f.titulo}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
