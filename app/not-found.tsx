import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-readable flex-col items-start px-5 py-24">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">
          Página não encontrada
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
          Esse endereço não existe por aqui
        </h1>
        <p className="mt-3 text-ink-soft">
          O link pode estar incompleto. Volte ao início e monte o seu relatório.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink-soft"
        >
          Voltar ao início
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
