"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Award, ExternalLink, Sparkles, X } from "lucide-react";

interface PastEventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: string;
  category: "Hackathon" | "Dev Day" | "Meetup" | "Workshop";
  desc: string;
  highlights: string[];
  gradient: string;
}

const PAST_EVENTS: PastEventItem[] = [
  {
    id: 1,
    title: "MS Build Bhopal",
    date: "May 18, 2025",
    location: "Vexite Labs, Bhopal",
    attendees: "220+ Participants",
    category: "Dev Day",
    desc: "An flagship event bringing Microsoft technologies, Azure AI, and modern web architectures to students in Bhopal with live keynote streaming & hands-on labs.",
    highlights: ["Azure AI Workshop", "Keynote Stream", "Swag & Certification"],
    gradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/10",
  },
  {
    id: 2,
    title: "GitHub Copilot Dev Days",
    date: "Jul 12, 2025",
    location: "SIRT Campus, Bhopal",
    attendees: "180+ Developers",
    category: "Workshop",
    desc: "Interactive session exploring AI-assisted software development, rapid prototyping with GitHub Copilot, and automated unit test generation.",
    highlights: ["Copilot Pro Access", "Live PR Challenge", "Developer Badges"],
    gradient: "from-purple-600/30 via-pink-600/20 to-cyan-600/10",
  },
  {
    id: 3,
    title: "Miro Meetup Bhopal",
    date: "Sep 05, 2025",
    location: "Interactive Startup Hub, Bhopal",
    attendees: "140+ Designers & Coders",
    category: "Meetup",
    desc: "Visual collaboration meetup focused on system design diagramming, UX wireframing, and product management workflows for student founders.",
    highlights: ["Miro Swag Kits", "System Design Slam", "Networking Dinner"],
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-500/10",
  },
  {
    id: 4,
    title: "Agentic AI Hackathon 2025",
    date: "Nov 20–21, 2025",
    location: "Bhopal / Hybrid",
    attendees: "350+ Hackers (45 Teams)",
    category: "Hackathon",
    desc: "A 36-hour intense hackathon where student teams built autonomous multi-agent systems, LangChain workflows, and AI vector database tools.",
    highlights: ["₹1.5L Prize Pool", "VC Mentorship", "4 Funded Prototypes"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-emerald-500/10",
  },
  {
    id: 5,
    title: "Cloud Native Dev Day",
    date: "Dec 14, 2025",
    location: "Sharma Computer Academy, Bhopal",
    attendees: "160+ Participants",
    category: "Dev Day",
    desc: "Deep dive into Docker containers, Kubernetes orchestrations, and automated CI/CD pipeline deployments for scalable cloud applications.",
    highlights: ["Docker Labs", "K8s Deployment", "Cloud Credits"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-blue-500/10",
  },
  {
    id: 6,
    title: "Open Source Sprint Q1",
    date: "Jan 24, 2026",
    location: "Online / Discord",
    attendees: "210+ Contributors",
    category: "Workshop",
    desc: "A weekend PR sprint guiding student developers to resolve real GitHub issues, review pull requests, and contribute to popular open source repos.",
    highlights: ["48 Merged PRs", "First-time Contributor Badges", "T-Shirt Giveaways"],
    gradient: "from-[#06b6d4]/30 via-[#8b5cf6]/20 to-transparent",
  },
  {
    id: 7,
    title: "Web3 & AI Summit",
    date: "Feb 10, 2026",
    location: "Bhopal Tech Park",
    attendees: "200+ Attendees",
    category: "Dev Day",
    desc: "Exploring decentralized applications, smart contract security, and intersecting AI agent networks with blockchain protocols.",
    highlights: ["Smart Contract Audit", "Solidity Workshop", "Grants Panel"],
    gradient: "from-pink-500/30 via-purple-500/20 to-indigo-500/10",
  },
  {
    id: 8,
    title: "CodeSprint Bhopal",
    date: "Mar 15, 2026",
    location: "LNCT University, Bhopal",
    attendees: "300+ Coders",
    category: "Hackathon",
    desc: "Competitive programming and rapid MVP development sprint testing algorithmic efficiency and full-stack deployment skills under time limits.",
    highlights: ["Competitive Leaderboard", "Mentorship Sessions", "Placement Referrals"],
    gradient: "from-indigo-500/30 via-cyan-500/20 to-emerald-500/10",
  },
];

export function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState<PastEventItem | null>(null);

  return (
    <section id="past-events" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
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
              03 / PAST EVENTS & HIGHLIGHTS
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Proven track record <br />
            </h2>
          </div>

          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-sm">
            Explore our flagship past events, developer days, and hackathons hosted for students across Bhopal.
          </p>
        </motion.div>

        {/* Past Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_EVENTS.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.4)" }}
              onClick={() => setSelectedEvent(evt)}
              className="p-6 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 group flex flex-col justify-between cursor-pointer overflow-hidden relative shadow-md min-h-[280px]"
            >
              {/* Card gradient backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${evt.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border border-[#06b6d4]/40 text-[#06b6d4] bg-[#06b6d4]/10">
                    {evt.category}
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                    <Users size={11} className="text-muted-foreground" /> {evt.attendees}
                  </span>
                </div>

                <h3 className="font-serif italic text-xl text-foreground group-hover:text-[#06b6d4] transition-colors leading-tight font-semibold">
                  {evt.title}
                </h3>

                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {evt.desc}
                </p>
              </div>

              <div className="relative z-10 border-t border-border pt-4 mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-mono text-[10px]">
                  <Calendar size={12} className="text-[#06b6d4]" /> {evt.date}
                </span>
                <span className="font-mono text-[10px] text-[#06b6d4] font-bold group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-border bg-card p-8 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border border-[#06b6d4]/40 text-[#06b6d4] bg-[#06b6d4]/10 inline-block mb-4">
                {selectedEvent.category}
              </span>

              <h3 className="font-serif italic text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-3">
                {selectedEvent.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#06b6d4]" /> {selectedEvent.date}</span>
                <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#06b6d4]" /> {selectedEvent.location}</span>
                <span className="flex items-center gap-1.5"><Users size={13} className="text-[#06b6d4]" /> {selectedEvent.attendees}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {selectedEvent.desc}
              </p>

              <div className="p-4 rounded-2xl border border-border bg-card/5 space-y-3 mb-6">
                <span className="font-mono text-[10px] text-[#06b6d4] uppercase font-bold block">
                  // Event Highlights & Perks
                </span>
                <ul className="space-y-2">
                  {selectedEvent.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground/80 font-sans">
                      <Award size={13} className="text-[#06b6d4]" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="w-full h-11 rounded-full bg-white text-black font-sans text-xs font-bold transition-all cursor-pointer"
              >
                Close Highlights
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
