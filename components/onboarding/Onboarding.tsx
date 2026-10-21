"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PERFIS } from "@/content/perfis";
import { TEMAS, TEMAS_COM_CONTEUDO } from "@/content/temas";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { FadeInContainer, FadeInItem } from "@/components/ui/AnimateIn";
import { hrefRelatorio } from "@/lib/url-state";
import { TODOS_OS_TEMAS } from "@/lib/types";
import { getPerfil, getTema } from "@/lib/catalogs";

const STORAGE_KEY = "eeci:selecao";
// Só oferece temas que já têm conteúdo, para ninguém escolher algo vazio.
const TEMAS_DISPONIVEIS = TEMAS.filter((t) => TEMAS_COM_CONTEUDO.includes(t.id));
const PASSOS = ["Perfil", "Interesses", "Revisão"] as const;

export function Onboarding() {
  const router = useRouter();
  const [passo, setPasso] = useState(0);
  const [perfis, setPerfis] = useState<string[]>([]);
  const [interesses, setInteresses] = useState<string[]>([]);
  const verTudo = interesses.includes(TODOS_OS_TEMAS);

  // Restaura escolhas anteriores do navegador (sem servidor, sem dados pessoais).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const dados = JSON.parse(raw) as { perfis?: string[]; interesses?: string[] };
      if (Array.isArray(dados.perfis)) setPerfis(dados.perfis);
      if (Array.isArray(dados.interesses)) setInteresses(dados.interesses);
    } catch {
      /* ignora armazenamento corrompido */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ perfis, interesses }));
    } catch {
      /* ignora indisponibilidade de storage */
    }
  }, [perfis, interesses]);

  function togglePerfil(id: string) {
    setPerfis((atual) =>
      atual.includes(id) ? atual.filter((p) => p !== id) : [...atual, id],
    );
  }

  function toggleInteresse(id: string) {
    if (id === TODOS_OS_TEMAS) {
      setInteresses((atual) =>
        atual.includes(TODOS_OS_TEMAS) ? [] : [TODOS_OS_TEMAS],
      );
      return;
    }
    setInteresses((atual) => {
      const semTudo = atual.filter((i) => i !== TODOS_OS_TEMAS);
      return semTudo.includes(id)
        ? semTudo.filter((i) => i !== id)
        : [...semTudo, id];
    });
  }

  function avancar() {
    setPasso((p) => Math.min(p + 1, PASSOS.length - 1));
  }
  function voltar() {
    setPasso((p) => Math.max(p - 1, 0));
  }
  function verRelatorio() {
    router.push(hrefRelatorio({ perfis, interesses }));
  }

  return (
    <div className="mx-auto max-w-readable px-5 py-10">
      <Stepper passo={passo} onIr={setPasso} />

      {passo === 0 && (
        <fieldset className="mt-8">
          <legend className="font-display text-2xl font-semibold text-ink">
            Qual dessas opções tem a ver com você?
          </legend>
          <p className="mt-2 text-ink-soft">
            Pode marcar quantas quiser. Nenhuma resposta é obrigatória.
          </p>
          <FadeInContainer className="mt-6 flex flex-wrap gap-2">
            {PERFIS.map((p) => (
              <FadeInItem key={p.id}>
                <Chip
                  selected={perfis.includes(p.id)}
                  onClick={() => togglePerfil(p.id)}
                >
                  {p.rotulo}
                </Chip>
              </FadeInItem>
            ))}
          </FadeInContainer>
        </fieldset>
      )}

      {passo === 1 && (
        <fieldset className="mt-8">
          <legend className="font-display text-2xl font-semibold text-ink">
            O que mais importa pra você?
          </legend>
          <p className="mt-2 text-ink-soft">
            Escolha os assuntos que quer entender melhor.
          </p>
          <FadeInContainer className="mt-6 flex flex-wrap gap-2">
            <FadeInItem>
              <Chip
                selected={verTudo}
                onClick={() => toggleInteresse(TODOS_OS_TEMAS)}
                icon="Sparkles"
              >
                Quero ver tudo
              </Chip>
            </FadeInItem>
            {TEMAS_DISPONIVEIS.map((t) => (
              <FadeInItem key={t.id}>
                <Chip
                  selected={!verTudo && interesses.includes(t.id)}
                  onClick={() => toggleInteresse(t.id)}
                  icon={t.icone}
                >
                  {t.rotulo}
                </Chip>
              </FadeInItem>
            ))}
          </FadeInContainer>
        </fieldset>
      )}

      {passo === 2 && (
        <Revisao
          perfis={perfis}
          interesses={interesses}
          verTudo={verTudo}
          onEditarPerfil={() => setPasso(0)}
          onEditarInteresses={() => setPasso(1)}
        />
      )}

      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={voltar}
          disabled={passo === 0}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink-soft hover:text-ink disabled:invisible"
        >
          <Icon name="ArrowLeft" className="h-4 w-4" /> Voltar
        </button>

        {passo < PASSOS.length - 1 ? (
          <button
            type="button"
            onClick={avancar}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-ink-soft"
          >
            {passo === 0 && perfis.length === 0 ? "Pular" : "Avançar"}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={verRelatorio}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper transition motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-ink-soft"
          >
            Ver meu relatório
            <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function Stepper({
  passo,
  onIr,
}: {
  passo: number;
  onIr: (n: number) => void;
}) {
  return (
    <ol className="flex items-center gap-2" aria-label="Progresso">
      {PASSOS.map((rotulo, i) => {
        const estado =
          i === passo ? "atual" : i < passo ? "feito" : "futuro";
        return (
          <li key={rotulo} className="flex flex-1 items-center gap-2">
            <button
              type="button"
              onClick={() => onIr(i)}
              aria-current={estado === "atual" ? "step" : undefined}
              aria-label={`Passo ${i + 1}: ${rotulo}`}
              className="flex items-center gap-2 text-left"
            >
              <span
                className={[
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                  estado === "atual"
                    ? "bg-ink text-paper"
                    : estado === "feito"
                      ? "bg-brand text-paper"
                      : "bg-line text-ink-faint",
                ].join(" ")}
              >
                {estado === "feito" ? "✓" : i + 1}
              </span>
              <span
                className={[
                  "hidden text-sm font-medium sm:inline",
                  estado === "futuro" ? "text-ink-faint" : "text-ink",
                ].join(" ")}
              >
                {rotulo}
              </span>
            </button>
            {i < PASSOS.length - 1 && (
              <span className="h-px flex-1 bg-line" aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Revisao({
  perfis,
  interesses,
  verTudo,
  onEditarPerfil,
  onEditarInteresses,
}: {
  perfis: string[];
  interesses: string[];
  verTudo: boolean;
  onEditarPerfil: () => void;
  onEditarInteresses: () => void;
}) {
  const perfisLabels = perfis
    .map((id) => getPerfil(id)?.rotulo)
    .filter(Boolean) as string[];
  const temasLabels = verTudo
    ? ["Todos os temas"]
    : (interesses.map((id) => getTema(id)?.rotulo).filter(Boolean) as string[]);

  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Confira suas escolhas
      </h2>
      <p className="mt-2 text-ink-soft">
        Você pode editar antes de ver o relatório.
      </p>

      <div className="mt-6 space-y-4">
        <ResumoBloco
          titulo="Seu perfil"
          itens={perfisLabels}
          vazio="Nenhum perfil selecionado"
          onEditar={onEditarPerfil}
        />
        <ResumoBloco
          titulo="Seus interesses"
          itens={temasLabels}
          vazio="Nenhum tema selecionado — será mostrada uma visão geral"
          onEditar={onEditarInteresses}
        />
      </div>
    </div>
  );
}

function ResumoBloco({
  titulo,
  itens,
  vazio,
  onEditar,
}: {
  titulo: string;
  itens: string[];
  vazio: string;
  onEditar: () => void;
}) {
  return (
    <div className="rounded-xl2 border border-line bg-surface p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-ink">{titulo}</h3>
        <button
          type="button"
          onClick={onEditar}
          className="text-sm font-medium text-brand underline hover:text-brand-ink"
        >
          Editar
        </button>
      </div>
      {itens.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {itens.map((i) => (
            <li
              key={i}
              className="rounded-full bg-paper px-3 py-1 text-sm text-ink-soft"
            >
              {i}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-ink-faint">{vazio}</p>
      )}
    </div>
  );
}
