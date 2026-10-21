import { Icon } from "@/components/ui/Icon";
import type { Candidatura, Fonte } from "@/lib/types";

function hrefFonte(f: Fonte): string {
  return f.pagina ? `${f.url}#page=${f.pagina}` : f.url;
}

export function SourceList({
  fontes,
  candidatura,
}: {
  fontes: Fonte[];
  candidatura: Candidatura;
}) {
  return (
    // Recolhido: quem quer conferir abre. Inclui o plano de governo completo
    // (por isso a contagem soma 1 e a lista nunca fica vazia).
    <details className="group border-t border-line pt-3">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-medium text-ink transition-opacity active:opacity-60">
        <span>
          Fontes{" "}
          <span className="font-normal text-ink-faint">({fontes.length + 1})</span>
        </span>
        <span className="text-ink-faint transition group-open:rotate-180" aria-hidden>
          ▾
        </span>
      </summary>
      <ul className="space-y-1.5 pb-1">
        {fontes.map((f, i) => (
          <li key={`${f.url}-${f.pagina ?? i}`}>
            <a
              href={hrefFonte(f)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1.5 py-1 text-sm text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
            >
              <Icon name="ExternalLink" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span className="min-w-0 [overflow-wrap:anywhere]">
                {f.titulo}
                {f.pagina ? ` — página ${f.pagina}` : ""}
              </span>
            </a>
          </li>
        ))}
        <li className="pt-1">
          <a
            href={candidatura.planoDeGoverno.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
          >
            <Icon name="ExternalLink" className="h-4 w-4 shrink-0" />
            Ver o plano de governo completo ({candidatura.partido})
          </a>
        </li>
      </ul>
    </details>
  );
}
