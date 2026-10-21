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
          <Link href="/sobre" className="text-ink-soft hover:text-ink">
            Como funciona
          </Link>
          <Link
            href="/comecar"
            className="rounded-full bg-ink px-4 py-1.5 font-medium text-paper hover:bg-ink-soft"
          >
            Começar
          </Link>
        </nav>
      </div>
    </header>
  );
}
