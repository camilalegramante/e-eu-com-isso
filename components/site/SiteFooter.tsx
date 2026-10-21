import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto max-w-content space-y-4 px-5 py-10 text-sm text-ink-soft">
        <p className="max-w-readable">
          <strong className="font-semibold text-ink">{SITE.nome}</strong> é um
          produto informativo e apartidário. Não recomenda voto, não atribui
          notas nem classifica candidaturas. As informações são resumos fiéis
          dos planos de governo, com link para as fontes originais.
        </p>
        <p className="max-w-readable">
          {SITE.eleicao} · 2º turno em {SITE.segundoTurno}. Conteúdo atualizado
          em {SITE.atualizadoEm}. As propostas podem mudar; confira sempre a
          fonte oficial.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
          <Link href="/sobre" className="underline hover:text-ink">
            Metodologia e limitações
          </Link>
          <Link href="/comecar" className="underline hover:text-ink">
            Montar meu relatório
          </Link>
        </div>
      </div>
    </footer>
  );
}
