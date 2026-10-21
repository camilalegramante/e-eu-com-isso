import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeCard } from "@/components/report/ThemeCard";
import { CongressoPanel } from "@/components/report/CongressoPanel";
import { ShareBar, ShareDock } from "@/components/share/ShareBar";
import { Icon } from "@/components/ui/Icon";
import { corDoTema } from "@/components/ui/coresTema";
import { decodeSelecao } from "@/lib/url-state";
import {
  selecionarTemas,
  temasSelecionadosSemConteudo,
} from "@/lib/personalization";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { getPerfil } from "@/lib/catalogs";
import { SITE } from "@/lib/site";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const TEXTO_COMPARTILHAR =
  "Veja o que os candidatos propõem sobre os temas que importam pra você.";

const candidaturasTexto = CANDIDATURAS_ORDENADAS.map(
  (c) => `${c.nome} (${c.partido})`,
).join(" e ");

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const selecao = decodeSelecao(await searchParams);
  const temas = selecionarTemas(selecao);
  const nomes = temas.map((t) => t.rotulo);
  const assunto =
    nomes.length === 0
      ? "os temas do seu dia a dia"
      : nomes.length <= 3
        ? nomes.join(", ")
        : `${nomes.slice(0, 3).join(", ")} e mais ${nomes.length - 3}`;

  const title = "Meu relatório";
  const description = `O que ${candidaturasTexto} documentaram sobre ${assunto}. Resumo com fontes, sem recomendação de voto.`;

  // O openGraph da página substitui o do layout por inteiro, então a imagem
  // de prévia precisa ser repetida aqui (é este link que as pessoas compartilham).
  const imagem = { url: "/opengraph-image", width: 1200, height: 630, alt: SITE.nome };

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title: `${title} · ${SITE.nome}`,
      description,
      images: [imagem],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE.nome}`,
      description,
      images: [imagem],
    },
  };
}

export default async function RelatorioPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const selecao = decodeSelecao(await searchParams);
  const temas = selecionarTemas(selecao);
  const faltando = temasSelecionadosSemConteudo(selecao);
  const perfisLabels = selecao.perfis
    .map((id) => getPerfil(id)?.rotulo)
    .filter(Boolean) as string[];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-4 py-10 sm:px-5">
        {/* Cabeçalho do relatório */}
        <div className="max-w-readable">
          <p className="text-sm font-medium uppercase tracking-wide text-brand">
            Seu relatório
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            O que isso muda na sua vida?
          </h1>
          <p className="mt-3 text-ink-soft">
            Comparando o que <strong>{candidaturasTexto}</strong> documentaram
            em seus planos de governo sobre os assuntos que você escolheu.
          </p>
          {perfisLabels.length > 0 && (
            <p className="mt-2 text-sm text-ink-faint">
              Seu perfil: {perfisLabels.join(", ")}.
            </p>
          )}
          {/* No celular, o compartilhamento fica na barra fixa do rodapé. */}
          <ShareBar titulo={TEXTO_COMPARTILHAR} className="mt-5 hidden sm:flex" />
        </div>

        {/* Aviso de integridade */}
        <div className="mt-6 flex max-w-readable items-start gap-3 rounded-xl2 border border-line bg-surface p-4 text-sm text-ink-soft">
          <Icon name="Info" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <p>
            Este site{" "}
            <strong className="text-ink">não indica em quem votar</strong>.
            Proposta é plano, não algo que já está valendo.{" "}
            <Link href="/sobre" className="underline hover:text-ink">
              Como os dados são analisados
            </Link>
            .
          </p>
        </div>

        {/* Atalhos para cada tema: quem escolhe "ver tudo" recebe vários. */}
        {temas.length > 1 && (
          <nav aria-label="Temas do relatório" className="mt-6">
            <p className="text-sm font-medium text-ink">Ir para o tema:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {temas.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#tema-${t.id}`}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-sm font-medium text-ink-soft transition motion-safe:active:scale-[0.98] hover:border-ink/40 hover:text-ink"
                  >
                    <Icon
                      name={t.icone}
                      className={`h-4 w-4 shrink-0 ${corDoTema(t.id).texto}`}
                    />
                    {t.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-6 max-w-readable">
          <CongressoPanel />
        </div>

        {/* Conteúdo */}
        {temas.length > 0 ? (
          <div className="mt-10 space-y-10 sm:space-y-6">
            <h2 className="sr-only">Comparação por tema</h2>
            {temas.map((t) => (
              <ThemeCard key={t.id} tema={t} perfis={selecao.perfis} />
            ))}
          </div>
        ) : (
          <EstadoVazio />
        )}

        {/* Temas selecionados ainda sem conteúdo */}
        {faltando.length > 0 && (
          <div className="mt-8 max-w-readable rounded-xl2 border border-dashed border-line bg-surface p-5 text-sm text-ink-soft">
            <p className="font-medium text-ink">
              Ainda não temos conteúdo sobre:
            </p>
            <p className="mt-1">{faltando.map((t) => t.rotulo).join(", ")}.</p>
          </div>
        )}

        {/* Chamada final */}
        <div className="mt-12 rounded-xl2 bg-ink px-6 py-8 text-center text-paper">
          <h2 className="font-display text-2xl font-semibold">
            Mostre pra alguém que você gosta
          </h2>
          <p className="mx-auto mt-2 max-w-prose text-paper/80">
            Cada pessoa pode montar o próprio relatório, com os temas da vida
            dela. Sem cadastro.
          </p>
          <ShareBar
            titulo={TEXTO_COMPARTILHAR}
            tom="escuro"
            className="mt-5 justify-center"
          />
          <Link
            href="/comecar"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-paper/80 underline underline-offset-2 hover:text-paper"
          >
            Refazer com outros temas
          </Link>
        </div>
      </main>
      <SiteFooter />
      {/* Espaço para a barra fixa de compartilhar não cobrir o rodapé no celular. */}
      <div className="h-24 sm:hidden" aria-hidden />
      <ShareDock titulo={TEXTO_COMPARTILHAR} />
    </>
  );
}

function EstadoVazio() {
  return (
    <div className="mt-10 rounded-xl2 border border-line bg-surface p-8 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-paper">
        <Icon name="Sparkles" className="h-6 w-6 text-brand" />
      </span>
      <h2 className="mt-4 font-display text-xl font-semibold text-ink">
        Escolha ao menos um tema
      </h2>
      <p className="mx-auto mt-2 max-w-prose text-ink-soft">
        Selecione os assuntos que importam pra você e a comparação das propostas
        aparece aqui, com fontes.
      </p>
      <div className="mt-5">
        <Link
          href="/comecar"
          className="inline-flex min-h-12 items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-ink-soft"
        >
          Escolher meus temas
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
