"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section, SectionHead, revealUp, stagger } from "@/components/ui/kit";
import { TRACKS } from "@/app/heygen/data";

export function StopAgenda() {
  return (
    <Section id="at-a-stop" tone="raised">
      <SectionHead
        index="03"
        eyebrow="At a Stop"
        title={
          <>
            What happens <span className="hg-grad">at every city stop?</span>
          </>
        }
        aside="Five curated tracks structured for maximum insight, direct craft sharing, and genuine creator connections."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 border-t border-border"
      >
        {TRACKS.map((track) => {
          const Icon = track.icon;
          return (
            <motion.li
              key={track.idx}
              variants={revealUp}
              className="border-b border-border"
            >
              <div className="group relative flex cursor-default flex-col gap-4 px-3 py-6 transition-colors duration-300 hover:bg-surface md:flex-row md:items-center md:gap-8 md:px-6">
                {/* Index Number */}
                <span
                  className="u-label-sm w-8 shrink-0 font-mono font-bold"
                  style={{ color: `var(--c${track.accent})` }}
                >
                  {track.idx}
                </span>

                {/* Icon */}
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in oklab, var(--c${track.accent}) 15%, transparent)`,
                    color: `var(--c${track.accent})`,
                  }}
                >
                  <Icon size={20} />
                </span>

                {/* Track Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="hg-display text-xl md:text-2xl text-foreground">
                      {track.title}
                    </h3>
                    {track.flagship && (
                      <span className="u-label-sm hidden rounded-full bg-pop px-2.5 py-1 text-pop-ink font-bold sm:inline-flex items-center gap-1">
                        <Sparkles size={11} /> Flagship Track
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="hidden shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                  <span className="grid size-8 place-items-center rounded-full border border-border bg-surface text-brand">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
