import type { PerfilOpcao } from "@/lib/types";

// Opções de perfil (seleção múltipla, nenhuma obrigatória).
export const PERFIS: PerfilOpcao[] = [
  { id: "estudante", rotulo: "Estudante" },
  { id: "clt", rotulo: "Trabalhador CLT" },
  { id: "servidor", rotulo: "Servidor público" },
  { id: "autonomo-mei", rotulo: "Autônomo ou MEI" },
  { id: "empresario", rotulo: "Empresário" },
  { id: "aposentado", rotulo: "Aposentado ou pensionista" },
  { id: "desempregado", rotulo: "Desempregado ou procurando emprego" },
  { id: "casa-familia", rotulo: "Cuido da casa ou da família" },
  { id: "rural", rotulo: "Agricultor ou trabalhador rural" },
  { id: "primeiro-emprego", rotulo: "Procurando meu primeiro emprego" },
];
// Sem "Prefiro não responder": o passo de perfil já tem "Pular".
