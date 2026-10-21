import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Icon } from "@/components/ui/Icon";
import { TEMAS, TEMAS_COM_CONTEUDO } from "@/content/temas";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { SITE } from "@/lib/site";

const PASSOS = [
  {
    icone: "Users",
    titulo: "Conte quem é você",
    texto: "Marque o que tem a ver com a sua vida — estudante, CLT, aposentado…",
  },
  {
    icone: "Sparkles",
    titulo: "Escolha os temas",
    texto: "Saúde, custo de vida, segurança, educação e mais.",
  },
  {
    icone: "Scale",
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
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-content px-5 pb-10 pt-14 sm:pt-20">
          <div className="max-w-readable">
            <p className="text-sm font-medium uppercase tracking-wide text-brand">
              {SITE.eleicao} · 2º turno em {SITE.segundoTurno}
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              E eu com isso?
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-soft">
              {SITE.tagline} Você não precisa entender de política.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/comecar"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-paper transition hover:bg-ink-soft"
              >
                Descobrir o que importa pra mim
                <Icon name="ArrowRight" className="h-5 w-5" />
              </Link>
              <span className="text-sm text-ink-faint">
                Gratuito · sem cadastro · com fontes
              </span>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="mx-auto max-w-content px-5 py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {PASSOS.map((p, i) => (
              <div
                key={p.titulo}
                className="rounded-xl2 border border-line bg-surface p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink">
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
        <section className="mx-auto max-w-content px-5 py-10">
          <div className="rounded-xl2 border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Quem está sendo comparado
            </h2>
            <p className="mt-2 max-w-readable text-ink-soft">
              As duas candidaturas do 2º turno, com os mesmos critérios de
              apresentação, detalhamento e fontes para ambas.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {CANDIDATURAS_ORDENADAS.map((c) => (
                <div
                  key={c.id}
                  className={`relative overflow-hidden rounded-xl2 border border-line bg-paper p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 ${
                    c.corToken === "neutra-1"
                      ? "before:bg-candA"
                      : "before:bg-candB"
                  }`}
                >
                  <p className="font-display text-lg font-semibold text-ink">
                    {c.nome}
                  </p>
                  <p className="text-sm text-ink-faint">{c.partido}</p>
                  <a
                    href={c.planoDeGoverno.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-soft underline hover:text-ink"
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
        <section className="mx-auto max-w-content px-5 py-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Assuntos do seu dia a dia
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {temasComConteudo.map((t) => (
              <li
                key={t.id}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft"
              >
                <Icon name={t.icone} className="h-4 w-4" />
                {t.rotulo}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/comecar"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper hover:bg-ink-soft"
            >
              Montar meu relatório
              <Icon name="ArrowRight" className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
