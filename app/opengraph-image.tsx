import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "E eu com isso? — Entenda o que as propostas dos candidatos podem significar para a sua vida.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const icone = await readFile(join(process.cwd(), "app", "icon.png"));
  const iconeSrc = `data:image/png;base64,${icone.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          background: "#FBF9F5",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconeSrc}
          width={320}
          height={320}
          alt=""
          style={{ flexShrink: 0 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", color: "#B45309", fontSize: 30, fontWeight: 600 }}
          >
            Eleições presidenciais 2026
          </div>
          <div
            style={{
              fontSize: 90,
              fontWeight: 700,
              color: "#1C1B1A",
              lineHeight: 1.05,
              marginTop: 16,
            }}
          >
            E eu com isso?
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#4A4845",
              marginTop: 20,
              maxWidth: 600,
            }}
          >
            O que as propostas dos candidatos podem significar para a sua vida.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
