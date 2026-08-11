"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, SectionHead, Reveal, revealUp, stagger } from "./ui/kit";

const TESTIMONIALS = [
  {
    name: "Rohit Deshmukh",
    role: "Open Source Contributor & Alum",
    company: "Now: Frontend Engineer Referral & GSOC Contributor",
    quote:
      "Knowvy Bhopal gave me direct hands-on support. The open source cohort guided my first PR to Vercel, and mentors reviewed my GSOC application step-by-step.",
    impact: "GSOC Stipend + Tech Placement",
    initial: "R",
    tone: "var(--s1)",
  },
  {
    name: "Anjali Sharma",
    role: "Campus Ambassador Lead",
    company: "Now: Cloud Operations Intern at AWS",
    quote:
      "Coordinating tech bootcamps in Bhopal built my project-management and system design capabilities. Knowvy connected me to mentors who optimized my cloud resume.",
    impact: "Off-campus AWS Placement",
    initial: "A",
    tone: "var(--s2)",
  },
  {
    name: "Vikram Sen",
    role: "Hackathon Winner",
    company: "Now: Founding Engineer at AI Startup",
    quote:
      "The Agentic AI Hackathon changed everything. We prototyped an automated tool in 36 hours, and Knowvy sponsors connected us with pre-seed investors.",
    impact: "Pre-seed AI Funding",
    initial: "V",
    tone: "var(--s4)",
  },
];

const ALUMNI_SPOTLIGHT = [
  { name: "Rohit D.", role: "Contributed to Vercel / GSOC", placement: "Google Summer of Code" },
  { name: "Anjali S.", role: "Cloud Systems Specialist", placement: "AWS Cloud Intern" },
  { name: "Vikram S.", role: "AI Systems Engineer", placement: "YC-backed AI Startup" },
  { name: "Priya M.", role: "Full Stack Developer", placement: "Microsoft Dev Referral" },
];

const AUTOPLAY_MS = 8000;

export function Testimonials() {
  const [[idx, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, direction: number) => {
    setState([(next + TESTIMONIALS.length) % TESTIMONIALS.length, direction]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(idx + 1, 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, paused, go]);

  const story = TESTIMONIALS[idx];

  return (
    <Section id="testimonials">
      <SectionHead
        index="08"
        eyebrow="Testimonials & alumni spotlight"
        title={
          <>
            Member stories <span className="text-brand">& alumni</span> placements
          </>
        }
      />

      {/* Quote carousel */}
      <Reveal className="mt-14">
        {/* autoplay pauses while the reader is hovering the card */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="u-card overflow-hidden p-7 md:p-12"
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, x: dir * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -32 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-balance text-xl font-medium leading-[1.35] md:text-[1.75rem]">
                “{story.quote}”
              </p>

              <footer className="mt-10 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="u-display grid size-14 shrink-0 place-items-center rounded-xl text-2xl leading-none"
                    style={{ background: story.tone, color: "var(--bg-2)" }}
                  >
                    {story.initial}
                  </span>
                  <div>
                    <cite className="block text-base font-bold not-italic">
                      {story.name}
                    </cite>
                    <span className="u-label-sm mt-2 block text-brand">
                      {story.role}
                    </span>
                    <span className="u-label-sm mt-1.5 block text-muted-foreground">
                      {story.company}
                    </span>
                  </div>
                </div>

                <span className="u-label-sm shrink-0 self-start rounded-full bg-pop px-3 py-2 text-pop-ink sm:self-auto">
                  {story.impact}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => go(i, i > idx ? 1 : -1)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === idx}
                className="h-1.5 rounded-full transition-all duration-400"
                style={{
                  width: i === idx ? 36 : 10,
                  background: i === idx ? "var(--brand)" : "var(--line-strong)",
                }}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => go(idx - 1, -1)}
              aria-label="Previous testimonial"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => go(idx + 1, 1)}
              aria-label="Next testimonial"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Alumni spotlight */}
      <div className="mt-16">
        <Reveal>
          <h3 className="u-label text-muted-foreground">
            Alumni spotlight — where our members are now
          </h3>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ALUMNI_SPOTLIGHT.map((a) => (
            <motion.li key={a.name} variants={revealUp} className="u-card p-5">
              <h4 className="text-[0.9375rem] font-bold">{a.name}</h4>
              <span className="u-label-sm mt-2 block text-muted-foreground">
                {a.role}
              </span>
              <span className="u-label-sm mt-4 inline-block rounded-full border border-border px-2.5 py-1.5 text-brand">
                {a.placement}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
