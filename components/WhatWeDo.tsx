"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";

const TRACKS = [
  {
    idx: "01",
    title: (
      <span>
        Hackathons <span className="font-serif italic text-[#06b6d4]">with stakes</span>, not stickers.
      </span>
    ),
    meta: "48-HOUR BUILDS ● OFFLINE & REMOTE ● PRIZE POOL ₹10L+",
    highlight: true,
  },
  {
    idx: "02",
    title: "Workshops & Cohorts",
    meta: "HANDS-ON ● SMALL COHORTS ● MENTORSHIP",
  },
  {
    idx: "03",
    title: "Bootcamps",
    meta: "6-WEEK INTENSIVES ● PRODUCTION CODE",
  },
  {
    idx: "04",
    title: "Meetups",
    meta: "CITY-FIRST ● MONTHLY ● NETWORKING",
  },
  {
    idx: "05",
    title: (
      <span>
        Tech <span className="font-serif italic text-[#06b6d4]">Talks</span> & AMA
      </span>
    ),
    meta: "FOUNDERS ● STAFF ENGINEERS ● ARCHITECTS",
  },
  {
    idx: "06",
    title: "Open Source",
    meta: "MVP ● MAINTAINER TRACK ● PR SPRINTS",
  },
  {
    idx: "07",
    title: "Career Sessions",
    meta: "RESUME REVIEW ● MOCK INTERVIEWS ● OFFERS",
  },
  {
    idx: "08",
    title: "Agentic AI",
    meta: "PROMPTING ● MULTI-AGENT PIPELINES ● VECTOR SEARCH",
  },
  {
    idx: "09",
    title: "Cloud & DevOps",
    meta: "SERVERLESS ● CONTAINERS ● CI/CD PIPELINES",
  },
];

export function WhatWeDo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="what-we-do" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section title & layout grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <Layers size={14} />
              03 / WHAT WE DO
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Nine ways to <span className="font-serif italic lowercase text-[#06b6d4]">ship</span> — <br />
              pick your entry point.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end h-full">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              From your first Git commit to your first funded startup. The lattice is designed so every stage of a student's journey has a room.
            </p>
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TRACKS.map((track, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[170px] group cursor-pointer ${
                track.highlight
                  ? "border-[#06b6d4]/40 bg-gradient-to-br from-white/[0.03] to-[#06b6d4]/5 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  : "border-border bg-card/5 hover:border-[#06b6d4]/30 hover:bg-card/5"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-[#06b6d4] font-bold block">
                    / {track.idx}
                  </span>
                  {track.highlight && (
                    <span className="px-2 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 flex items-center gap-1">
                      <Sparkles size={10} /> Flagship
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl text-foreground tracking-tight leading-tight group-hover:text-[#06b6d4] transition-colors">
                  {track.title}
                </h3>
              </div>
              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest block mt-6 group-hover:text-muted-foreground transition-colors">
                {track.meta}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
