"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, MessageSquareQuote } from "lucide-react";
import { Section, SectionHead, Reveal, revealUp, stagger } from "@/components/ui/kit";

export function SeriesIntro() {
  return (
    <Section id="series" tone="base">
      <SectionHead
        index="01"
        eyebrow="The Movement"
        title={
          <>
            What is the <span className="hg-grad">HeyGen India</span> RoadShow?
          </>
        }
        aside="A nationwide initiative bringing together the minds shaping the future of creator commerce, marketing, and synthetic media."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left column: Core narrative */}
        <Reveal className="flex flex-col justify-between space-y-6 lg:col-span-6">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p className="border-l-2 border-brand pl-4 font-medium text-foreground">
              We&apos;re taking HeyGen across 9 dynamic cities in India to spark direct, grounded conversations with the creators, founders, and teams driving modern growth.
            </p>
            <p>
              This isn’t about watching slide decks or generic sales pitches. It’s an immersive space where we unpack how modern companies market in 2026, scale video output 10x with AI avatars, and build high-converting content engines that actually work.
            </p>
            <p>
              Whether you are a solo builder, an agency lead, or managing marketing at scale, this roadshow offers a playbook on the practical future of AI video.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-2/60 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-brand text-brand-ink">
                <MessageSquareQuote size={18} />
              </span>
              <div>
                <h4 className="font-semibold text-foreground">Community-First Initiative</h4>
                <p className="text-xs text-muted-foreground">Led by Knowvy Technologies & HeyGen Ambassadors</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right column: The Not / But Contrast Matrix */}
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
          {/* Card A: What it's NOT */}
          <motion.div
            variants={revealUp}
            className="u-card flex flex-col justify-between p-6 border-border/80 bg-surface-2/30"
          >
            <div>
              <span className="u-label-sm inline-flex items-center gap-1.5 text-muted-foreground mb-4">
                <span className="size-2 rounded-full bg-red-400/80" /> What this is not
              </span>
              <h3 className="hg-display text-xl text-foreground mb-6">No Fluff or Sales Pitch</h3>
              <ul className="space-y-4">
                {[
                  "Not a one-way lecture or webinar",
                  "Not a generic software sales pitch",
                  "Not theoretical AI hype or buzzwords",
                  "Not just surface-level networking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-red-500/10 text-red-500 mt-0.5">
                      <X size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-border/50 text-xs text-muted-foreground">
              Zero product pushes · Focus on real craft
            </div>
          </motion.div>

          {/* Card B: What it IS */}
          <motion.div
            variants={revealUp}
            className="u-card flex flex-col justify-between p-6 border-brand/40 bg-brand-soft shadow-lg shadow-brand/5"
          >
            <div>
              <span className="u-label-sm inline-flex items-center gap-1.5 text-brand font-bold mb-4">
                <span className="size-2 rounded-full bg-brand animate-pulse" /> What you can expect
              </span>
              <h3 className="hg-display text-xl text-foreground mb-6">Actionable & Real</h3>
              <ul className="space-y-4">
                {[
                  "Real-talk marketing case studies",
                  "Hands-on AI avatar workflows",
                  "Founder-to-founder relationships",
                  "Practical distribution playbooks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-pop text-pop-ink mt-0.5">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-brand/20 flex items-center justify-between text-xs font-semibold text-brand">
              <span>9 Cities · Free Admission</span>
              <Sparkles size={14} />
            </div>
          </motion.div>
        </RevealGroup>
      </div>
    </Section>
  );
}

function RevealGroup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
