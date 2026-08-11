"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import { Section, SectionHead, revealUp, stagger } from "./ui/kit";

interface Member {
  name: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  initials: string;
  tone: string;
}

const MEMBERS: Member[] = [
  {
    name: "Mohneesh Gupta",
    role: "Founder & Community Lead",
    bio: "Leading Knowvy, building developer networks, organizing tech meetups, and managing industry partnerships.",
    github: "https://github.com/mohneesh-gupta",
    linkedin: "https://linkedin.com/in/mohneesh-gupta",
    initials: "MG",
    tone: "var(--s1)",
  },
  {
    name: "Om Pandey",
    role: "CTO & Tech Lead",
    bio: "Building web applications, managing servers, and developing new features for Knowvy.",
    github: "https://github.com/student-ompandey",
    linkedin: "https://linkedin.com/in/om-pandey-041717310",
    initials: "OP",
    tone: "var(--s2)",
  },
  {
    name: "Durganand Sah",
    role: "Cheif Marketing Officer",
    bio: "Building brand presence, managing marketing campaigns, and expanding our community outreach.",
    github: "https://github.com/Durganand2005",
    linkedin: "https://linkedin.com/in/durganand-sah-491b50253",
    initials: "DS",
    tone: "var(--s4)",
  },
];

export function Team() {
  return (
    <Section id="team">
      <SectionHead
        index="07"
        eyebrow="Our team & core members"
        title={
          <>
            Meet the core <span className="text-brand">coordinators</span> & builders
          </>
        }
        aside="The passionate team running Knowvy Bhopal — managing schedules, designing learning materials, securing corporate sponsors, and hosting our meetups."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {MEMBERS.map((m) => (
          <motion.li
            key={m.name}
            variants={revealUp}
            className="u-card group flex flex-col overflow-hidden"
          >
            {/* Initials plate */}
            <div
              className="u-grain relative flex aspect-[16/9] items-end justify-between overflow-hidden p-6"
              style={{ background: m.tone, color: "var(--bg-2)" }}
            >
              <span className="u-display text-[clamp(3rem,7vw,4.5rem)] leading-[0.8] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {m.initials}
              </span>
              <span className="u-label-sm opacity-70">Knowvy Bhopal</span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-tight">{m.name}</h3>
              <span className="u-label-sm mt-2.5 block text-brand">{m.role}</span>
              <p className="mt-4 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {m.bio}
              </p>

              <div className="mt-7 flex items-center gap-2 border-t border-border pt-5">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-label-sm inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 transition-colors hover:border-border-strong hover:bg-surface-2"
                >
                  <LinkedinIcon size={12} /> LinkedIn
                  <ArrowUpRight size={12} className="opacity-50" />
                </a>
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on GitHub`}
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
