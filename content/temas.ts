import type { Tema } from "@/lib/types";

// Catálogo de temas (interesses). A ordem define a ordem padrão de exibição.
// `icone` é o nome de um componente de lucide-react (resolvido em components/ui/Icon).
export const TEMAS: Tema[] = [
  {
    id: "custo-de-vida",
    rotulo: "Custo de vida e impostos",
    icone: "ShoppingCart",
    resumoNeutro:
      "Preços, impostos sobre o consumo e medidas que afetam quanto sobra no fim do mês.",
  },
  {
    id: "emprego-salario",
    rotulo: "Emprego e salário",
    icone: "Briefcase",
    resumoNeutro:
      "Geração de emprego, salário mínimo e renda de quem trabalha.",
  },
  {
    id: "saude",
    rotulo: "Saúde pública",
    icone: "HeartPulse",
    resumoNeutro: "SUS, filas, atenção primária e acesso a serviços de saúde.",
  },
  {
    id: "seguranca",
    rotulo: "Segurança pública",
    icone: "ShieldCheck",
    resumoNeutro:
      "Combate ao crime, policiamento e políticas de segurança.",
  },
  {
    id: "educacao",
    rotulo: "Educação e universidades",
    icone: "GraduationCap",
    resumoNeutro:
      "Escola, ensino técnico, acesso ao ensino superior e permanência estudantil.",
  },
  {
    id: "moradia",
    rotulo: "Moradia e financiamento",
    icone: "House",
    resumoNeutro:
      "Casa própria, financiamento habitacional e moradia nas cidades.",
  },
  {
    id: "previdencia",
    rotulo: "Previdência e aposentadoria",
    icone: "PiggyBank",
    resumoNeutro: "Aposentadoria, INSS e benefícios previdenciários.",
  },
  {
    id: "direitos-mulheres",
    rotulo: "Direitos das mulheres",
    icone: "HeartHandshake",
    resumoNeutro:
      "Enfrentamento à violência, autonomia econômica e políticas para mulheres.",
  },
  // Temas adicionais do catálogo (conteúdo real entra em lotes posteriores).
  {
    id: "direitos-trabalhistas",
    rotulo: "Direitos trabalhistas",
    icone: "HardHat",
    resumoNeutro: "Regras do trabalho, carteira assinada e proteção do trabalhador.",
  },
  {
    id: "meio-ambiente",
    rotulo: "Meio ambiente e clima",
    icone: "Leaf",
    resumoNeutro: "Desmatamento, clima e uso dos recursos naturais.",
  },
  {
    id: "agricultura",
    rotulo: "Agricultura e alimentação",
    icone: "Wheat",
    resumoNeutro: "Produção de alimentos, agronegócio e segurança alimentar.",
  },
  {
    id: "transporte",
    rotulo: "Transporte público",
    icone: "Bus",
    resumoNeutro: "Mobilidade urbana, transporte e deslocamento nas cidades.",
  },
  {
    id: "empreendedorismo",
    rotulo: "Empreendedorismo",
    icone: "Store",
    resumoNeutro: "Abertura de negócios, crédito e apoio a pequenos empreendedores.",
  },
  {
    id: "tecnologia",
    rotulo: "Tecnologia e inteligência artificial",
    icone: "Cpu",
    resumoNeutro: "Digitalização de serviços, internet e inteligência artificial.",
  },
  {
    id: "cultura",
    rotulo: "Cultura e lazer",
    icone: "Palette",
    resumoNeutro: "Cultura, esporte e lazer como políticas públicas.",
  },
  {
    id: "diversidade",
    rotulo: "Diversidade e inclusão",
    icone: "Users",
    resumoNeutro: "Políticas de inclusão e combate às discriminações.",
  },
];

// Temas com conteúdo editorial revisado disponível no MVP.
export const TEMAS_COM_CONTEUDO: string[] = [
  "custo-de-vida",
  "emprego-salario",
  "saude",
  "seguranca",
  "educacao",
  "moradia",
  "previdencia",
  "direitos-mulheres",
];
