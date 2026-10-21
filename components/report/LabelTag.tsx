import { Icon } from "@/components/ui/Icon";
import type { TipoAfirmacao } from "@/lib/types";

const MAPA: Record<
  TipoAfirmacao,
  { rotulo: string; icone: string; classe: string; titulo: string }
> = {
  "proposta-documentada": {
    rotulo: "Está no plano",
    icone: "FileText",
    classe: "border-ink/20 bg-surface text-ink",
    titulo: "Isto está escrito no plano de governo registrado.",
  },
  historico: {
    rotulo: "Já aconteceu",
    icone: "History",
    classe: "border-ink/15 bg-paper text-ink-soft",
    titulo: "Ação ou decisão anterior já documentada.",
  },
  interpretacao: {
    rotulo: "Possível impacto",
    icone: "Lightbulb",
    classe: "border-brand/30 bg-brand-soft text-brand-ink",
    titulo: "Leitura do possível impacto da proposta — não é fala da candidatura.",
  },
  "previsao-incerta": {
    rotulo: "Pode acontecer ou não",
    icone: "HelpCircle",
    classe: "border-brand/30 bg-brand-soft text-brand-ink",
    titulo: "Efeito futuro que depende de outras coisas para acontecer.",
  },
  "nao-localizado": {
    rotulo: "Não consta",
    icone: "SearchX",
    classe: "border-line bg-paper text-ink-faint",
    titulo:
      "Não foi localizada proposta sobre este assunto neste plano. Isso não quer dizer que a candidatura é contra.",
  },
};

export function LabelTag({ tipo }: { tipo: TipoAfirmacao }) {
  const info = MAPA[tipo];
  return (
    <span
      title={info.titulo}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${info.classe}`}
    >
      <Icon name={info.icone} className="h-3.5 w-3.5" />
      {info.rotulo}
    </span>
  );
}
