"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, MapPin, Code, Calendar, Award } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Student Community in Bhopal",
    desc: "A thriving tech hub bringing together students, self-taught developers, and tech enthusiasts across colleges in Bhopal.",
    icon: MapPin,
    accent: "#06b6d4",
  },
  {
    title: "Events & Meetups",
    desc: "Regular offline meetups, technical workshops, hands-on dev days, and collaborative hackathons with real cash prizes.",
    icon: Calendar,
    accent: "#8b5cf6",
  },
  {
    title: "Mentorship & Growth",
    desc: "Direct guidance from senior developers, open-source maintainers, and startup founders to fast-track your career.",
    icon: Target,
    accent: "#ec4899",
  },
  {
    title: "Build & Ship Culture",
    desc: "We prioritize building production projects, shipping open source contributions, and showing your work out loud.",
    icon: Code,
    accent: "#10b981",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none" />

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
              <Sparkles size={13} />
              01 / ABOUT US
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              India's student <br />
              <span className="font-serif italic lowercase text-[#06b6d4]">developer</span> ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end h-full">
            <div className="p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
              <p className="text-foreground/80 text-xs sm:text-sm font-sans leading-relaxed">
                We are a student community in Bhopal, hosting events, meetups, and hackathons for students and tech enthusiasts looking to build, learn, and grow together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-foreground/80 font-serif italic text-xl md:text-2xl leading-relaxed max-w-xl"
            >
              We believe that college shouldn't limit your engineering potential. Knowvy turns curiosity into <span className="text-[#06b6d4] underline decoration-cyan-500/40 underline-offset-4">real-world impact</span> through community-driven learning.
            </motion.p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Founded by students in Bhopal, Knowvy Technologies organizes hands-on dev days, flagship hackathons, open-source cohorts, and community meetups. Whether you are coding your first line of JavaScript or building AI agents, Knowvy gives you the stage, mentorship, and peer network to succeed.
            </p>

            <div className="pt-4 border-t border-border flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border border-border bg-card/5 text-xs font-mono text-muted-foreground">
                🚀 Student-Led & Community-First
              </div>
              <div className="px-4 py-2 rounded-full border border-border bg-card/5 text-xs font-mono text-muted-foreground">
                💻 Free & Subsidized Learning
              </div>
            </div>
          </div>

          {/* Right Column: 4 Minimal Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: card.accent + "60" }}
                className="p-6 rounded-3xl border border-border bg-card/5 hover:bg-card/5 flex flex-col justify-between min-h-[170px] transition-all duration-300 group shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-[#06b6d4]">
                      <card.icon size={16} />
                    </div>
                    <span className="font-mono text-[9px] text-muted-foreground font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif italic text-lg text-foreground group-hover:text-[#06b6d4] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
