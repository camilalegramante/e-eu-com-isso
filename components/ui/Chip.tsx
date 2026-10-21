import { Icon } from "@/components/ui/Icon";

export function Chip({
  selected,
  onClick,
  children,
  icon,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
        selected
          ? "border-ink bg-ink text-paper"
          : "border-line bg-surface text-ink-soft hover:border-ink/40 hover:text-ink",
      ].join(" ")}
    >
      {icon ? (
        <Icon name={icon} className="h-4 w-4 shrink-0" />
      ) : selected ? (
        <Icon name="Check" className="h-4 w-4 shrink-0" />
      ) : null}
      <span>{children}</span>
    </button>
  );
}
