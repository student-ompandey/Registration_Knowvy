"use client";

import { motion } from "framer-motion";
import { Section, SectionHead, revealUp, stagger } from "./ui/kit";

const COLLABORATORS = [
  { name: "Google for Developers", category: "Community Partner", tone: "var(--s1)" },
  { name: "Microsoft for Startups", category: "Cloud Partner", tone: "var(--s2)" },
  { name: "GitHub Education", category: "Dev Tooling", tone: "var(--s3)" },
  { name: "TIT Bhopal", category: "College Chapter", tone: "var(--s4)" },
  { name: "Unstop", category: "Platform Partner", tone: "var(--s5)" },
];

export function PartnersSection() {
  // Duplicated once so the -50% marquee translate loops seamlessly
  const track = [...COLLABORATORS, ...COLLABORATORS];

  return (
    <Section id="partners">
      <SectionHead
        index="10"
        eyebrow="Partners & Collaborators"
        title={
          <>
            Collaborated with <span className="text-brand">leading colleges</span> &
            companies
          </>
        }
      />

      {/* Partner grid */}
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5"
      >
        {COLLABORATORS.map((p) => (
          <motion.li
            key={p.name}
            variants={revealUp}
            className="u-card group flex min-h-[148px] flex-col justify-between p-5"
          >
            <span
              className="size-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{ background: p.tone }}
            />
            <div>
              <h3 className="text-[0.9375rem] font-bold leading-snug">{p.name}</h3>
              <span className="u-label-sm mt-2 block text-muted-foreground">
                {p.category}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Type marquee */}
      <div
        className="u-marquee-host relative mt-6 overflow-hidden border-y border-border py-7"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="u-marquee items-center gap-10">
          {track.map((p, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10">
              <span className="u-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-none text-muted-foreground transition-colors duration-300 hover:text-foreground">
                {p.name}
              </span>
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ background: p.tone }}
              />
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
