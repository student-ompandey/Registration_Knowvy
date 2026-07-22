"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Sparkles, Award, Briefcase } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohit Deshmukh",
    role: "Open Source Contributor & Alum",
    company: "Now: Frontend Engineer Referral & GSOC Contributor",
    quote: "Knowvy Bhopal gave me direct hands-on support. The open source cohort guided my first PR to Vercel, and mentors reviewed my GSOC application step-by-step.",
    impact: "GSOC Stipend + Tech Placement",
    initial: "R",
    accent: "#06b6d4",
  },
  {
    name: "Anjali Sharma",
    role: "Campus Ambassador Lead",
    company: "Now: Cloud Operations Intern at AWS",
    quote: "Coordinating tech bootcamps in Bhopal built my project-management and system design capabilities. Knowvy connected me to mentors who optimized my cloud resume.",
    impact: "Off-campus AWS Placement",
    initial: "A",
    accent: "#8b5cf6",
  },
  {
    name: "Vikram Sen",
    role: "Hackathon Winner",
    company: "Now: Founding Engineer at AI Startup",
    quote: "The Agentic AI Hackathon changed everything. We prototyped an automated tool in 36 hours, and Knowvy sponsors connected us with pre-seed investors.",
    impact: "Pre-seed AI Funding",
    initial: "V",
    accent: "#ec4899",
  },
];

const ALUMNI_SPOTLIGHT = [
  { name: "Rohit D.", role: "Contributed to Vercel / GSOC", placement: "Google Summer of Code" },
  { name: "Anjali S.", role: "Cloud Systems Specialist", placement: "AWS Cloud Intern" },
  { name: "Vikram S.", role: "AI Systems Engineer", placement: "YC-backed AI Startup" },
  { name: "Priya M.", role: "Full Stack Developer", placement: "Microsoft Dev Referral" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number, direction: number) => {
    setDir(direction);
    setIdx((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(idx + 1, 1), 8000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), 8000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const story = TESTIMONIALS[idx];

  return (
    <section id="testimonials" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <Sparkles size={13} />
              08 / TESTIMONIALS & ALUMNI SPOTLIGHT
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Member stories <br />
              <span className="font-serif italic lowercase text-[#06b6d4]">&amp; alumni placements</span>.
            </h2>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-3 self-start md:self-end pb-2">
            {TESTIMONIALS.map((s, i) => (
              <button
                key={i}
                onClick={() => { go(i, i > idx ? 1 : -1); resetTimer(); }}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width: i === idx ? 32 : 8,
                  height: 8,
                  background: i === idx ? "#06b6d4" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Carousel Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl border border-border bg-card/5 hover:border-border transition-colors overflow-hidden backdrop-blur-md shadow-2xl mb-16"
        >
          <Quote
            className="absolute top-6 right-8 w-32 h-32 pointer-events-none opacity-5"
            style={{ color: "#06b6d4" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 p-8 md:p-14 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-foreground text-3xl font-serif italic shrink-0 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${story.accent}, ${story.accent}80)`,
                    boxShadow: `0 0 30px ${story.accent}40`,
                  }}
                >
                  {story.initial}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { go(idx - 1, -1); resetTimer(); }}
                    className="w-9 h-9 rounded-xl border border-border bg-muted/50 hover:border-white/25 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { go(idx + 1, 1); resetTimer(); }}
                    className="w-9 h-9 rounded-xl border border-border bg-muted/50 hover:border-white/25 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-foreground text-base md:text-xl font-sans leading-relaxed">
                  <span className="text-3xl font-serif mr-1 leading-none text-[#06b6d4]">&ldquo;</span>
                  {story.quote}
                  <span className="text-3xl font-serif ml-1 leading-none text-[#06b6d4]">&rdquo;</span>
                </p>

                <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif italic text-lg text-foreground">
                      {story.name}
                    </h4>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#06b6d4] mt-1 font-bold">
                      {story.role}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {story.company}
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest font-bold whitespace-nowrap border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shadow-sm">
                    🎯 {story.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Alumni Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl border border-border bg-card/5"
        >
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={16} className="text-[#06b6d4]" />
            <span className="font-mono text-xs text-foreground uppercase font-bold tracking-widest">
              ALUMNI SPOTLIGHT — WHERE OUR MEMBERS ARE NOW
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ALUMNI_SPOTLIGHT.map((alum, i) => (
              <div key={i} className="p-4 rounded-2xl border border-border bg-card/5">
                <h5 className="font-serif text-base text-foreground font-bold">{alum.name}</h5>
                <span className="font-mono text-[9px] text-[#06b6d4] block uppercase mt-0.5">{alum.role}</span>
                <span className="inline-block mt-3 font-mono text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  📍 {alum.placement}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
