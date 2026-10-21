import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-ink"
          aria-label={`${SITE.nome} — página inicial`}
        >
          E eu com isso?
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/sobre" className="inline-flex min-h-11 items-center text-ink-soft transition-opacity hover:text-ink active:opacity-60">
            Como funciona
          </Link>
          <Link
            href="/comecar"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 py-1.5 font-medium text-paper transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-ink-soft"
          >
            Começar
          </Link>
        </nav>
      </div>
    </header>
  );
}
