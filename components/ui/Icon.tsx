import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Bus,
  Check,
  ChevronDown,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  GraduationCap,
  HardHat,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  History,
  House,
  Info,
  Leaf,
  Lightbulb,
  Link2,
  Palette,
  PiggyBank,
  Scale,
  SearchX,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Wheat,
  X,
  type LucideIcon,
} from "lucide-react";

// Registro explícito (mantém o bundle enxuto vs. importar todos os ícones).
const REGISTRO: Record<string, LucideIcon> = {
  // temas
  ShoppingCart,
  Briefcase,
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  House,
  PiggyBank,
  HeartHandshake,
  HardHat,
  Leaf,
  Wheat,
  Bus,
  Store,
  Cpu,
  Palette,
  Users,
  // rótulos e interface
  FileText,
  History,
  Lightbulb,
  HelpCircle,
  SearchX,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Share2,
  Copy,
  Link2,
  ExternalLink,
  Info,
  Scale,
  Sparkles,
  X,
};

export type IconName = keyof typeof REGISTRO;

export function Icon({
  name,
  className,
  "aria-hidden": ariaHidden = true,
  ...rest
}: {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
} & React.SVGProps<SVGSVGElement>) {
  const Cmp = REGISTRO[name] ?? HelpCircle;
  return <Cmp className={className} aria-hidden={ariaHidden} {...rest} />;
}
