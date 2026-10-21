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
        // Cores NEUTRAS e equivalentes para as candidaturas (nao-partidarias).
        candA: { DEFAULT: "#0F766E", soft: "#D7ECE9", ink: "#0A4A44" },
        candB: { DEFAULT: "#4338CA", soft: "#DEDBF7", ink: "#2E2689" },
        brand: { DEFAULT: "#B45309", soft: "#F6E8D5", ink: "#7C3A06" },
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
