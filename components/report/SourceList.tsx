import { Icon } from "@/components/ui/Icon";
import type { Fonte } from "@/lib/types";

function hrefFonte(f: Fonte): string {
  return f.pagina ? `${f.url}#page=${f.pagina}` : f.url;
}

export function SourceList({ fontes }: { fontes: Fonte[] }) {
  if (fontes.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
        Fontes
      </p>
      <ul className="mt-2 space-y-1.5">
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
      </ul>
    </div>
  );
}
