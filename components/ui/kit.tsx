"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ───────────────────────────────────────────
   Motion
─────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.66, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

/** Fades + lifts its children into view once. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.66, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Parent for staggered lists — pair with <Reveal.Item> style `variants={revealUp}`. */
export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────
   Structure
─────────────────────────────────────────── */

/** Consistent vertical rhythm + max width for every section on the page. */
export function Section({
  id,
  children,
  className = "",
  tone = "base",
  divider = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** base = page background, raised = subtle inset panel, brand/pop = full-bleed colour block */
  tone?: "base" | "raised" | "brand" | "pop";
  divider?: boolean;
}) {
  const toneClass =
    tone === "brand"
      ? "u-block-brand u-grain"
      : tone === "pop"
        ? "u-block-pop u-grain"
        : tone === "raised"
          ? "bg-surface-2"
          : "bg-background";

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 md:py-32 ${toneClass} ${className}`}
    >
      {divider && tone === "base" && (
        <div className="u-rule absolute top-0 inset-x-0" />
      )}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10">
        {children}
      </div>
    </section>
  );
}

/** The mono micro-label that sits above every heading. */
export function Eyebrow({
  index,
  children,
  className = "",
  dot,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
  /** colour of the leading dot; defaults to the brand colour */
  dot?: string;
}) {
  return (
    <span className={`u-label inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="inline-block size-1.5 rounded-full shrink-0"
        style={{ background: dot ?? "var(--brand)" }}
      />
      {index && <span className="opacity-45 tabular-nums">{index}</span>}
      <span>{children}</span>
    </span>
  );
}

/**
 * Section header: eyebrow, condensed display headline, and an optional
 * right-hand paragraph. Keeps the same grid across all 12 sections.
 */
export function SectionHead({
  index,
  eyebrow,
  title,
  aside,
  size = "u-d2",
  className = "",
  align = "split",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  size?: string;
  className?: string;
  align?: "split" | "center";
}) {
  if (align === "center") {
    return (
      <Reveal className={`mx-auto max-w-3xl text-center ${className}`}>
        <Eyebrow index={index} className="mb-6 justify-center">
          {eyebrow}
        </Eyebrow>
        <h2 className={`u-display ${size} text-balance`}>{title}</h2>
        {aside && (
          <p className="mx-auto mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {aside}
          </p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal
      className={`grid grid-cols-1 items-end gap-8 lg:grid-cols-12 ${className}`}
    >
      <div className="lg:col-span-8">
        <Eyebrow index={index} className="mb-6">
          {eyebrow}
        </Eyebrow>
        <h2 className={`u-display ${size} text-balance`}>{title}</h2>
      </div>
      {aside && (
        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-right">
            {aside}
          </p>
        </div>
      )}
    </Reveal>
  );
}

/** Renders part of a headline in the brand colour. */
export function Hi({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>;
}
