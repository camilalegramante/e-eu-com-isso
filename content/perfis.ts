import type { PerfilOpcao } from "@/lib/types";

// Opções de perfil (seleção múltipla, nenhuma obrigatória).
export const PERFIS: PerfilOpcao[] = [
  { id: "estudante", rotulo: "Estudante" },
  { id: "clt", rotulo: "Trabalhador CLT" },
  { id: "servidor", rotulo: "Servidor público" },
  { id: "autonomo-mei", rotulo: "Autônomo ou MEI" },
  { id: "empresario", rotulo: "Empresário" },
  { id: "desempregado", rotulo: "Desempregado ou procurando emprego" },
  { id: "aposentado", rotulo: "Aposentado ou pensionista" },
  { id: "casa-familia", rotulo: "Cuido da casa ou da família" },
  { id: "rural", rotulo: "Agricultor ou trabalhador rural" },
  { id: "primeiro-emprego", rotulo: "Procurando meu primeiro emprego" },
  { id: "nao-responder", rotulo: "Prefiro não responder" },
];

// Perfil que não deve gerar ênfase de personalização.
export const PERFIL_NEUTRO = "nao-responder";
