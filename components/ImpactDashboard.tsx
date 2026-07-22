"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, Code, MapPin, Award } from "lucide-react";

const BARS = [
  { label: "Q1 '24", height: "60%" },
  { label: "Q2", height: "75%" },
  { label: "Q3", height: "65%" },
  { label: "Q4", height: "85%" },
  { label: "Q1 '25", height: "80%" },
  { label: "Q2", height: "92%" },
  { label: "Q3", height: "88%" },
  { label: "Q4", height: "100%" },
];

export function ImpactDashboard() {
  return (
    <section id="impact" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section title & description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <TrendingUp size={14} />
              02 / IMPACT
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Numbers that <span className="font-serif italic lowercase text-[#06b6d4]">compound</span> — <br />
              because community does.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end h-full">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Every metric is a person who shipped something. This dashboard updates in near-real-time from our operations stack.
            </p>
          </div>
        </motion.div>

        {/* Dashboard Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Total Members Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl border border-border bg-card/5 hover:border-[#06b6d4]/30 flex flex-col justify-between min-h-[420px] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-semibold">
                  TOTAL COMMUNITY MEMBERS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1">
                  ▲ 38% YOY GROWTH
                </span>
              </div>
              <h3 className="font-serif italic text-5xl md:text-7xl text-[#06b6d4] font-light tracking-tight mb-4">
                24.8k
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-md">
                Active across 14 Indian cities and a growing remote cohort. 63% first-year undergrads.
              </p>
            </div>

            {/* Custom Animated Bar Chart */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-end justify-between h-28 gap-2">
                {BARS.map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <motion.div
                      initial={{ height: "0%" }}
                      whileInView={{ height: bar.height }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary/30 via-[#06b6d4]/70 to-[#06b6d4] group-hover:brightness-125 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    />
                    <span className="font-mono text-[9px] text-muted-foreground group-hover:text-foreground transition-colors">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Two stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right Card: Learning Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -3, borderColor: "rgba(6,182,212,0.3)" }}
              className="p-8 rounded-3xl border border-border bg-card/5 flex flex-col justify-between flex-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-semibold">
                  LEARNING HOURS LOGGED
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                  <Activity className="w-3 h-3 animate-pulse text-cyan-400" />
                  LIVE
                </span>
              </div>
              <h3 className="font-serif italic text-4xl md:text-5xl text-foreground font-light tracking-tight mb-2">
                142,300+
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Aggregate hours across workshops, bootcamps and study circles.
              </p>
            </motion.div>

            {/* Bottom Right Card: Projects Shipped */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -3, borderColor: "rgba(139,92,246,0.3)" }}
              className="p-8 rounded-3xl border border-border bg-card/5 flex flex-col justify-between flex-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-semibold flex items-center gap-1.5">
                  <Code size={13} className="text-[#8b5cf6]" />
                  PROJECTS SHIPPED
                </span>
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                  OPEN SOURCE
                </span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif italic text-4xl md:text-5xl text-foreground font-light tracking-tight mb-2">
                    1,208
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Public repos, hackathon builds and community tools.
                  </p>
                </div>

                {/* Animated Radial Circle Gauge */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      className="stroke-white/10 fill-transparent"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="26"
                      className="stroke-[#06b6d4] fill-transparent"
                      strokeWidth="4"
                      strokeDasharray={163}
                      initial={{ strokeDashoffset: 163 }}
                      whileInView={{ strokeDashoffset: 163 - (163 * 78) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute font-mono text-[11px] text-foreground font-bold">
                    78%
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom row metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 border-t border-border pt-8"
        >
          <div className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card/5">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-semibold flex items-center gap-1.5">
              <MapPin size={12} className="text-[#06b6d4]" />
              CITIES
            </span>
            <span className="font-serif italic text-2xl text-foreground">14 INDIA</span>
          </div>
          <div className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card/5 sm:col-span-2 lg:col-span-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-semibold flex items-center gap-1.5">
              <Award size={12} className="text-[#06b6d4]" />
              VERIFIED CERTIFICATES ISSUED
            </span>
            <span className="font-serif italic text-2xl text-foreground">8,412 VERIFIED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
