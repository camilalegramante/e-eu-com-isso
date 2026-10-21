"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#FBF9F5",
          color: "#1C1B1A",
          display: "flex",
          minHeight: "100svh",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "32rem" }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
            Algo deu errado
          </h1>
          <p style={{ marginTop: "0.75rem", color: "#4A4845" }}>
            Houve um problema inesperado ao carregar o site. Você pode tentar de
            novo.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              borderRadius: "999px",
              background: "#1C1B1A",
              color: "#FBF9F5",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
