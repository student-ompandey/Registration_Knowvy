"use client";

import { motion } from "framer-motion";
import { Download, Sparkles, Building2 } from "lucide-react";

const COLLABORATORS = [
  { name: "Google for Developers", category: "Community Partner", color: "#06b6d4" },
  { name: "Microsoft for Startups", category: "Cloud Partner", color: "#8b5cf6" },
  { name: "GitHub Education", category: "Dev Tooling", color: "#10b981" },
  { name: "TIT Bhopal", category: "College Chapter", color: "#ec4899" },
  { name: "Unstop", category: "Platform Partner", color: "#f59e0b" },
];

export function PartnersSection() {
  const items = [...COLLABORATORS, ...COLLABORATORS, ...COLLABORATORS];

  return (
    <section id="partners" className="relative py-24 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <Sparkles size={13} />
              10 / PARTNERS & COLLABORATORS
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight text-3xl md:text-5xl">
              Collaborated with <br />
              <span className="font-serif italic lowercase text-[#06b6d4]">leading colleges</span> & companies.
            </h2>
          </div>
        </motion.div>

        {/* 4 Main Partner Grid Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {COLLABORATORS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: p.color + "60" }}
              className="p-5 rounded-2xl border border-border bg-card/5 flex flex-col items-center justify-center text-center transition-all group cursor-pointer min-h-[110px]"
            >
              <span
                className="w-3 h-3 rounded-full mb-3 shadow-[0_0_12px_currentColor]"
                style={{ backgroundColor: p.color, color: p.color }}
              />
              <h4 className="font-serif italic text-base md:text-lg text-foreground group-hover:text-[#06b6d4] transition-colors font-bold">
                {p.name}
              </h4>
              <span className="font-mono text-[9px] text-muted-foreground uppercase mt-1">
                {p.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Continuous Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden py-6 border-y border-border before:absolute before:inset-y-0 before:left-0 before:w-24 md:before:w-48 before:bg-gradient-to-r before:from-[#02010d] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-24 md:after:w-48 after:bg-gradient-to-l after:from-[#02010d] after:to-transparent after:z-10"
        >
          <div className="animate-marquee flex items-center gap-16">
            {items.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0 cursor-default group"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: p.color, color: p.color }}
                />
                <span className="font-serif italic text-2xl md:text-3xl text-foreground tracking-tight group-hover:text-[#06b6d4] transition-colors">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
