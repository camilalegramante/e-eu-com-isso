"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// A URL do relatório leva as escolhas de perfil e temas na query string.
// Ela é removida antes do envio para que essas escolhas não saiam do navegador.
const semQuery = (url: string) => url.replace(/[?#].*$/, "");

// Contagem de visitas e medição de velocidade da Vercel (sem cookies).
export function Analytics() {
  return (
    <>
      <VercelAnalytics
        beforeSend={(evento) => ({ ...evento, url: semQuery(evento.url) })}
      />
      <SpeedInsights
        beforeSend={(dados) => ({ ...dados, url: semQuery(dados.url) })}
      />
    </>
  );
}
