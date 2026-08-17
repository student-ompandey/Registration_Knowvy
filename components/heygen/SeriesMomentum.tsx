"use client";

import { motion } from "framer-motion";
import { Section, Reveal, revealUp, stagger } from "@/components/ui/kit";

const METRICS = [
  { value: "0 / 9", label: "Stops Completed", desc: "Series kicking off soon" },
  { value: "9", label: "Cities Announced", desc: "All 9 locations confirmed" },
  { value: "—", label: "Founders & Creators Met", desc: "Counting post-launch" },
  { value: "—", label: "Collaborations Started", desc: "Community impact" },
];

export function SeriesMomentum() {
  return (
    <Section tone="pop" className="relative overflow-hidden">
      <div className="relative z-10">
        {/* Eyebrow */}
        <Reveal>
          <span className="u-label-sm inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3.5 py-1.5 font-bold text-pop-ink">
            <span className="size-2 rounded-full bg-pop-ink animate-pulse" />
            Live Momentum
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal className="mt-6 max-w-2xl">
          <h2 className="hg-display text-[clamp(2rem,4.5vw,3.8rem)] leading-none text-pop-ink">
            Tracking the nationwide impact.
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-pop-ink/80">
            Real-time numbers as we move through Madhya Pradesh, Maharashtra, Delhi NCR, Karnataka, Telangana, and Tamil Nadu.
          </p>
        </Reveal>

        {/* Progress Bar */}
        <Reveal className="mt-10">
          <div className="rounded-full bg-black/10 p-1">
            <div
              className="h-3 rounded-full"
              style={{
                width: "11%", // 1 of 9 in progress
                background: "var(--brand)",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs font-bold text-pop-ink/75">
            <span>Launch Stage (Bhopal, Indore, Jabalpur...)</span>
            <span>9 Cities Goal</span>
          </div>
        </Reveal>

        {/* 4-Up Metric Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              variants={revealUp}
              className="rounded-2xl border border-black/10 bg-white/30 p-6 backdrop-blur-md"
            >
              <dd className="hg-display text-3xl md:text-4xl text-pop-ink">
                {metric.value}
              </dd>
              <dt className="mt-3 text-xs md:text-sm font-bold text-pop-ink">
                {metric.label}
              </dt>
              <p className="mt-1 text-xs text-pop-ink/70">{metric.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
