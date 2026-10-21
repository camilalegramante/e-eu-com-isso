import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CtaInicio } from "@/components/site/CtaInicio";
import { Icon } from "@/components/ui/Icon";
import { corDoTema } from "@/components/ui/coresTema";
import { TEMAS, TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { SITE } from "@/lib/site";

const PASSOS = [
  {
    icone: "Users",
    // Cor só decorativa (mesma paleta dos temas).
    cor: corDoTema("custo-de-vida"),
    titulo: "Conte quem é você",
    texto: "Marque o que tem a ver com a sua vida: estudante, CLT, aposentado…",
  },
  {
    icone: "Sparkles",
    cor: corDoTema("saude"),
    titulo: "Escolha os temas",
    texto: "Saúde, custo de vida, segurança, educação e mais.",
  },
  {
    icone: "Scale",
    cor: corDoTema("seguranca"),
    titulo: "Compare com fontes",
    texto: "Veja o que cada candidatura documentou, com link para o documento.",
  },
];

export default function HomePage() {
  const temasComConteudo = TEMAS.filter((t) =>
    TEMAS_COM_CONTEUDO.includes(t.id),
  );

  return (
    <>
      <SiteHeader esconderComecarNoCelular />
      <main>
        {/* Hero */}
        {/* No celular, 16px entre as seções (py-2 + py-2). O período da
            eleição continua no rodapé e em /sobre. */}
        <section className="mx-auto max-w-content px-4 pb-2 pt-8 sm:px-5 sm:pb-10 sm:pt-20">
          <div className="max-w-readable">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              E eu com isso?
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">
              {SITE.tagline} Você não precisa entender de política.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CtaInicio />
              <span className="text-sm text-ink-faint">
                Gratuito · sem cadastro · com fontes
              </span>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="mx-auto max-w-content px-4 py-4 sm:px-5 sm:py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {PASSOS.map((p, i) => (
              <div
                key={p.titulo}
                className={`anim-ao-ver rounded-xl2 border border-l-4 border-line bg-surface p-5 ${p.cor.bordaEsquerda}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${p.cor.icone}`}
                  >
                    <Icon name={p.icone} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink-faint">
                    Passo {i + 1}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold text-ink">
                  {p.titulo}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">{p.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparando */}
        <section className="mx-auto max-w-content px-4 py-2 sm:px-5 sm:py-10">
          <div className="rounded-xl2 border border-line bg-surface p-5 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Quem está sendo comparado
            </h2>
            <p className="mt-2 max-w-readable text-ink-soft">
              As duas candidaturas do 2º turno, com os mesmos critérios de
              apresentação, detalhamento e fontes para ambas.
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {CANDIDATURAS_ORDENADAS.map((c) => (
                // Sem card interno: só a barra na cor neutra da candidatura.
                <div
                  key={c.id}
                  className={`anim-ao-ver border-l-4 pl-4 ${
                    c.corToken === "neutra-1"
                      ? "border-l-candA"
                      : "border-l-candB"
                  }`}
                >
                  <p className="font-display text-lg font-semibold text-ink">
                    {c.nome}{" "}
                    <span className="font-sans text-sm font-medium text-ink-faint">
                      {c.partido}
                    </span>
                  </p>
                  <a
                    href={c.planoDeGoverno.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm text-ink-soft underline hover:text-ink"
                  >
                    <Icon name="FileText" className="h-4 w-4" />
                    Plano de governo
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Temas */}
        <section className="mx-auto max-w-content px-4 pb-10 pt-2 sm:px-5 sm:py-10">
          <div className="rounded-xl2 border border-line bg-surface p-5 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Assuntos do seu dia a dia
            </h2>
            {/* Lista informativa, não seleção: sem borda nem formato de chip,
                para não parecer que dá para tocar e escolher aqui. */}
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4 sm:gap-x-4">
              {temasComConteudo.map((t) => {
                const cor = corDoTema(t.id);
                return (
                  <li
                    key={t.id}
                    className="anim-ao-ver flex items-center gap-2 text-sm font-medium text-ink"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9 ${cor.fundo} ${cor.texto}`}
                      aria-hidden
                    >
                      <Icon name={t.icone} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">{t.rotulo}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      {/* Espaço para o botão fixo (CtaInicio, só no celular) não cobrir o
          fim do rodapé. */}
      <div className="h-20 sm:hidden" aria-hidden />
    </>
  );
}
