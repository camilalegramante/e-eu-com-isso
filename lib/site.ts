// URL pública do site. Em ordem de prioridade:
// 1) NEXT_PUBLIC_SITE_URL (defina na Vercel com o domínio final);
// 2) VERCEL_URL (preenchido automaticamente em cada deploy da Vercel);
// 3) localhost, para desenvolvimento.
function resolverUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

// Constantes e textos institucionais compartilhados.
export const SITE = {
  nome: "E eu com isso?",
  tagline: "Entenda o que as propostas dos candidatos podem significar para a sua vida.",
  descricao:
    "Compare, em linguagem simples e com fontes verificáveis, o que as candidaturas à Presidência documentaram sobre os temas do seu dia a dia. Gratuito, sem cadastro e sem recomendação de voto.",
  eleicao: "Eleições presidenciais 2026",
  segundoTurno: "25 de outubro de 2026",
  atualizadoEm: "21 de outubro de 2026",
  url: resolverUrl(),
};

// Produção só exibe conteúdo aprovado editorialmente; em desenvolvimento
// os rascunhos aparecem com selo, para permitir revisão. Para revisar os
// rascunhos num deploy (ex.: ambiente de homologação privado), defina
// NEXT_PUBLIC_SHOW_DRAFTS=true nas variáveis de ambiente.
export const MOSTRAR_RASCUNHOS =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";
