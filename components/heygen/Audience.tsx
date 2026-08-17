"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead, revealUp, stagger } from "@/components/ui/kit";
import { AUDIENCE } from "@/app/heygen/data";

export function Audience() {
  return (
    <Section id="who" tone="base">
      <SectionHead
        index="04"
        eyebrow="Who Should Attend"
        title={
          <>
            Built for creators, <span className="hg-grad">founders & marketers.</span>
          </>
        }
        aside="Whether you run a brand, manage a content team, or want to modernize your marketing engine."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {AUDIENCE.map((item) => {
          const Icon = item.icon;
          const accentVar = `var(--c${item.accent})`;
          return (
            <motion.div
              key={item.title}
              variants={revealUp}
              className="u-card group flex flex-col justify-between p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                <span
                  className="grid size-12 place-items-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in oklab, ${accentVar} 15%, transparent)`,
                    color: accentVar,
                  }}
                >
                  <Icon size={24} />
                </span>

                <h3 className="hg-display text-xl leading-tight text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold text-muted-foreground group-hover:text-foreground">
                <span>What you walk away with</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
