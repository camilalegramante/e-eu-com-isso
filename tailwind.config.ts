import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  // hover: só em aparelhos com mouse. No celular, o hover "gruda" depois do
  // toque (ex.: "Ver meu relatório" surgia cinza no lugar de "Avançar").
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        paper: "#FBF9F5",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1C1B1A",
          soft: "#4A4845",
          faint: "#7A756E",
        },
        line: "#E8E2D8",
        // Cores das candidaturas: verde (candA) e azul-claro (candB), sem
        // relação com a identidade dos partidos. O azul é claro para não se
        // confundir com o azul-escuro do ícone do site.
        candA: { DEFAULT: "#15803D", soft: "#DCFCE7", ink: "#14532D" },
        candB: { DEFAULT: "#38BDF8", soft: "#E0F2FE", ink: "#075985" },
        brand: { DEFAULT: "#B45309", soft: "#F6E8D5", ink: "#7C3A06" },
        // Destaque da análise no histórico: lilás, distinto do bege da marca
        // e sem relação com as cores das candidaturas.
        destaque: { DEFAULT: "#6B5CA5", soft: "#EFEAF8", ink: "#43357A" },
      },
      maxWidth: {
        content: "72rem",
        readable: "44rem",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
