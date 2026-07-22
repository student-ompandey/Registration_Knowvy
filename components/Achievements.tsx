"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users, Calendar, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const MILESTONES = [
  {
    value: "1,500+",
    label: "Active Members",
    desc: "Students & developers across Bhopal colleges.",
    icon: Users,
    color: "#06b6d4",
  },
  {
    value: "30+",
    label: "Events Hosted",
    desc: "Workshops, Dev Days, and community meetups.",
    icon: Calendar,
    color: "#8b5cf6",
  },
  {
    value: "3",
    label: "Hackathon Wins",
    desc: "National level hackathons won by members.",
    icon: Trophy,
    color: "#f59e0b",
  },
  {
    value: "₹5L+",
    label: "Prizes Won",
    desc: "Distributed in hackathons & bug bounties.",
    icon: Award,
    color: "#10b981",
  },
  {
    value: "15+",
    label: "Colleges Reached",
    desc: "Active campus ambassador networks.",
    icon: ShieldCheck,
    color: "#ec4899",
  },
  {
    value: "48+",
    label: "Merged PRs",
    desc: "Open source contributions to major repos.",
    icon: TrendingUp,
    color: "#3b82f6",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#06b6d4]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <Sparkles size={13} />
              06 / ACHIEVEMENTS & MILESTONES
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Numbers that <span className="font-serif italic lowercase text-[#06b6d4]">define</span> — <br />
              our community footprint.
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end h-full">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We measure our growth by the impact created for students in Bhopal — from building projects to winning hackathons.
            </p>
          </div>
        </motion.div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: item.color + "50" }}
              className="p-8 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 group shadow-lg flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-foreground"
                    style={{
                      backgroundColor: item.color + "15",
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={18} />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground font-bold uppercase">#0{idx + 1}</span>
                </div>

                <h3 className="font-serif italic text-4xl md:text-5xl text-foreground font-light tracking-tight group-hover:text-[#06b6d4] transition-colors mb-2">
                  {item.value}
                </h3>
                <span className="font-mono text-xs font-bold text-foreground/90 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
