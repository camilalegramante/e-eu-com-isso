import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeCard } from "@/components/report/ThemeCard";
import { CongressoPanel } from "@/components/report/CongressoPanel";
import { ShareBar } from "@/components/share/ShareBar";
import { Icon } from "@/components/ui/Icon";
import { decodeSelecao } from "@/lib/url-state";
import {
  selecionarTemas,
  temasSelecionadosSemConteudo,
} from "@/lib/personalization";
import { CANDIDATURAS_ORDENADAS } from "@/content/candidaturas";
import { getPerfil } from "@/lib/catalogs";
import { SITE } from "@/lib/site";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

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

  return {
    title,
    description,
    openGraph: { title: `${title} · ${SITE.nome}`, description },
    twitter: { title: `${title} · ${SITE.nome}`, description },
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
      <main className="mx-auto max-w-content px-5 py-10">
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
        </div>

        {/* Aviso de integridade */}
        <div className="mt-6 flex max-w-readable items-start gap-3 rounded-xl2 border border-line bg-surface p-4 text-sm text-ink-soft">
          <Icon name="Info" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <p>
            Este site{" "}
            <strong className="text-ink">não indica em quem votar</strong>. Uma
            proposta é um plano, não algo que já está valendo — muita coisa
            depende do Congresso e de dinheiro. Toque em “Aprofundar” para ver o
            que ainda falta e confira sempre o plano de governo.
          </p>
        </div>

        <div className="mt-6 max-w-readable">
          <CongressoPanel />
        </div>

        <div className="mt-6 max-w-readable">
          <ShareBar titulo="Veja o que os candidatos propõem sobre os temas que importam pra você." />
        </div>

        {/* Conteúdo */}
        {temas.length > 0 ? (
          <div className="mt-10 space-y-6">
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
              Estes temas que você escolheu ainda não estão disponíveis:
            </p>
            <p className="mt-1">
              {faltando.map((t) => t.rotulo).join(", ")}. Eles entram em breve.
            </p>
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
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/comecar"
              className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-paper/90"
            >
              Refazer com outros temas
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
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
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper hover:bg-ink-soft"
        >
          Escolher meus temas
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
