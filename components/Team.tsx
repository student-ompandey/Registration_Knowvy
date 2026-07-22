"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface Member {
  name: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  avatar: string;
  initials: string;
  accent: string;
}

export function Team() {
  const members: Member[] = [
    {
      name: "Mohneesh Gupta",
      role: "Founder & Community Lead",
      bio: "Leading Knowvy, building developer networks, organizing tech meetups, and managing industry partnerships.",
      github: "https://github.com/mohneesh-gupta",
      linkedin: "https://linkedin.com/in/mohneesh-gupta",
      avatar: "MG",
      initials: "MG",
      accent: "#06b6d4",
    },
    {
      name: "Om Pandey",
      role: "CTO & Tech Lead",
      bio: "Building web applications, managing servers, and developing new features for Knowvy.",
      github: "https://github.com/student-ompandey",
      linkedin: "https://linkedin.com/in/om-pandey-041717310",
      avatar: "OP",
      initials: "OP",
      accent: "#8b5cf6",
    },
    {
      name: "Durganand Sah",
      role: "Cheif Marketing Officer",
      bio: "Building brand presence, managing marketing campaigns, and expanding our community outreach.",
      github: "https://github.com/Durganand2005",
      linkedin: "https://linkedin.com/in/durganand-sah-491b50253",
      avatar: "DS",
      initials: "DS",
      accent: "#ec4899",
    },
  ];

  return (
    <section id="team" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
            <Sparkles size={13} />
            07 / OUR TEAM & CORE MEMBERS
          </span>
          <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            Meet the core <br />
            <span className="font-serif italic lowercase text-[#06b6d4]">coordinators</span> & builders.
          </h2>
          <p className="text-muted-foreground mt-4 font-sans text-sm md:text-base leading-relaxed max-w-xl">
            The passionate team running Knowvy Bhopal — managing schedules, designing learning materials, securing corporate sponsors, and hosting our meetups.
          </p>
        </motion.div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, borderColor: member.accent + "60" }}
              className="p-8 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 group flex flex-col justify-between cursor-pointer shadow-lg"
            >
              <div>
                {/* Visual Avatar Card */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-foreground font-serif italic text-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${member.accent}30, ${member.accent}10)`,
                    border: `1px solid ${member.accent}40`,
                    boxShadow: `0 0 20px ${member.accent}20`,
                  }}
                >
                  {member.initials}
                </div>

                <h3 className="font-serif text-xl text-foreground tracking-tight mb-1 group-hover:text-[#06b6d4] transition-colors font-semibold">
                  {member.name}
                </h3>
                <span className="font-mono text-[10px] text-[#06b6d4] font-bold uppercase tracking-wider block mb-4">
                  {member.role}
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed mb-8">
                  {member.bio}
                </p>
              </div>

              {/* Social and LinkedIn Links explicitly requested */}
              <div className="border-t border-border pt-6 flex items-center justify-between">
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                  Knowvy Bhopal
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-[#06b6d4] hover:text-foreground transition-colors bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-3 py-1 rounded-full font-bold"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={12} /> LinkedIn
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
