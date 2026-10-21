import Image from "next/image";
import Link from "next/link";
import icone from "@/app/icon.png";
import { SITE } from "@/lib/site";

export function SiteHeader({
  esconderComecarNoCelular = false,
}: {
  /**
   * Na home, no celular, o botão principal fica fixo no rodapé ao rolar
   * (CtaInicio); aí o "Começar" do cabeçalho seria repetido.
   */
  esconderComecarNoCelular?: boolean;
} = {}) {
  return (
    // Cores invertidas (fundo escuro) para destacar. Fixo no topo só no
    // desktop; no celular rola junto, para sobrar tela. O contorno de foco
    // fica claro, porque o verde padrão some no fundo escuro.
    <header className="border-b border-ink bg-ink text-paper sm:sticky sm:top-0 sm:z-30 [&_:focus-visible]:outline-paper">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-display text-base font-semibold leading-tight text-paper sm:text-lg"
          aria-label={`${SITE.nome} — página inicial`}
        >
          {/* O mesmo desenho do favicon (app/icon.png); decorativo. Some
              abaixo de 360px; quando falta espaço, o nome quebra em duas
              linhas em vez de empurrar os botões. */}
          <Image
            src={icone}
            alt=""
            width={32}
            height={32}
            priority
            className="hidden h-9 w-9 shrink-0 min-[360px]:block"
          />
          <span>E eu com isso?</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-5">
          {/* No celular fica em branco cheio (não apagado). Sem o "Começar"
              ao lado (home), vira botão contornado; com ele, não cabem dois
              botões em 360px, então fica como link. */}
          <Link
            href="/sobre"
            className={`inline-flex min-h-11 items-center whitespace-nowrap font-medium text-paper transition-opacity hover:text-paper active:opacity-60 sm:border-0 sm:px-0 sm:font-normal sm:text-paper/80 ${
              esconderComecarNoCelular
                ? "rounded-full border border-paper/60 px-4"
                : ""
            }`}
          >
            Como funciona
          </Link>
          <Link
            href="/comecar"
            className={`min-h-11 items-center rounded-full ${
              esconderComecarNoCelular ? "hidden sm:inline-flex" : "inline-flex"
            } whitespace-nowrap bg-paper px-3 py-1.5 font-medium text-ink sm:px-4 transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-white`}
          >
            Começar
          </Link>
        </nav>
      </div>
    </header>
  );
}
