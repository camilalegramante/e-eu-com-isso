"use client";

import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

// Mola fixa, igual em todo o site: entrada suave, sem "quicar" demais.
export const MOLA = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8,
} as const;

const container: Variants = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.06 } },
};

// Deslocamento pequeno: a animação acompanha a leitura, não chama atenção.
const item: Variants = {
  oculto: { opacity: 0, y: 12 },
  visivel: { opacity: 1, y: 0, transition: MOLA },
};

type Tag = "div" | "ul" | "ol" | "li" | "section";

/**
 * Agrupa itens que entram em cascata quando aparecem na tela (uma vez só).
 * - LazyMotion + `m` carregam só o necessário (pacote menor no celular).
 * - reducedMotion="user": quem pede menos movimento no sistema não vê animação.
 */
export function FadeInContainer({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Componente = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Componente
          className={className}
          variants={container}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {children}
        </Componente>
      </MotionConfig>
    </LazyMotion>
  );
}

/** Filho de <FadeInContainer>: herda o momento de entrada e a cascata. */
export function FadeInItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Componente = m[as];
  return (
    <Componente className={className} variants={item}>
      {children}
    </Componente>
  );
}
