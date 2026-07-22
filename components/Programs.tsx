"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, BookOpen, Compass, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

interface Program {
  title: string;
  role: string;
  perks: string[];
  desc: string;
  icon: any;
}

export function Programs() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const programs: Program[] = [
    {
      title: "Campus Ambassador",
      role: "Lead your college tech chapter",
      perks: ["Sponsor vouchers & Swags", "Direct mentorship pathways", "Event hosting coordination"],
      desc: "Act as the primary interface between Knowvy Technologies and your institution. Help organize local workshops, distribute learning materials, and spot emerging developer talent on campus.",
      icon: Compass,
    },
    {
      title: "Volunteer Cohort",
      role: "Core backend operations & management",
      perks: ["Operational management credits", "Priority passes to major tech mixes", "Community leader references"],
      desc: "Get behind the scenes of national-level hackathons and meetups. Volunteers coordinate operations, manage online communities (Discord/WhatsApp), and run marketing sprints.",
      icon: Terminal,
    },
    {
      title: "Open Source Fellowship",
      role: "8-week focused coding sprint",
      perks: ["Pull request guidance", "Project deployment credits", "Contributor certificates"],
      desc: "Join a dedicated peer group building real tools. Fellowships match you with senior mentors to review your code, refine architecture patterns, and help you land meaningful open-source credits.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="programs" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
            <Sparkles size={13} />
            05 / PROGRAMS
          </span>
          <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            Leadership <span className="font-serif italic lowercase text-[#06b6d4]">cohorts</span> & pathways.
          </h2>
          <p className="text-muted-foreground mt-4 font-sans text-sm md:text-base leading-relaxed max-w-xl">
            Ready to lead? Join our structural cohorts to run campus communities, learn system architectures, or build developer resources.
          </p>
        </motion.div>

        {/* 2-Column Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Interactive Cards list */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                  activeIdx === idx
                    ? "border-[#06b6d4]/50 bg-card/5 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    : "border-border bg-card/5 hover:border-border hover:bg-card/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] shrink-0">
                    <prog.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif italic text-base text-foreground group-hover:text-[#06b6d4] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                      {prog.role}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className={`text-muted-foreground transition-transform duration-300 ${
                    activeIdx === idx ? "rotate-90 text-[#06b6d4]" : "group-hover:translate-x-1"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic Program Perks Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl border border-border bg-card/5 flex flex-col justify-between min-h-[340px]"
          >
            <AnimatePresence mode="wait">
              {activeIdx !== null ? (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif italic text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-3">
                      {programs[activeIdx].title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {programs[activeIdx].desc}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#06b6d4] uppercase tracking-wider font-bold block mb-3 flex items-center gap-1.5">
                      <Sparkles size={12} /> // Cohort Perks & Benefits:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {programs[activeIdx].perks.map((perk, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5 text-xs text-foreground/80 font-sans">
                          <CheckCircle2 size={14} className="text-[#06b6d4] shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <Compass className="w-10 h-10 text-muted-foreground mb-4 animate-pulse" />
                  <h4 className="font-serif italic text-sm text-foreground">
                    Select a Leadership Track
                  </h4>
                  <p className="text-muted-foreground text-xs max-w-xs mt-1">
                    Click on any cohort card to explore application details, requirements, and community benefits.
                  </p>
                </div>
              )}
            </AnimatePresence>

            {activeIdx !== null && (
              <div className="border-t border-border pt-6 mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#06b6d4] font-bold uppercase tracking-widest hover:gap-2.5 transition-all"
                >
                  Apply to Program <ChevronRight size={12} />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
