"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Monitor, ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";

interface KEvent {
  id: number;
  title: string;
  category: "hackathon" | "workshop" | "meetup";
  date: string;
  venue: string;
  mode: "Hybrid" | "Online" | "In-Person";
  desc: string;
  perks: string[];
  status: "OPEN" | "LIMITED" | "UPCOMING";
}

const EVENTS: KEvent[] = [
  {
    id: 1,
    title: "Agentic AI Hackathon 2026",
    category: "hackathon",
    date: "Aug 15–16, 2026",
    venue: "Vexite Labs, Bhopal / Online",
    mode: "Hybrid",
    desc: "Assemble teams to build autonomous agentic architectures, multi-agent frameworks, and vector search systems competing for massive cash prizes.",
    perks: ["₹1.5L Cash Pool", "Mentorship from Vercel Engineers", "Internship Fast-Track"],
    status: "OPEN",
  },
  {
    id: 2,
    title: "Cloud-Native Infrastructure Bootcamp",
    category: "workshop",
    date: "Sep 02, 2026",
    venue: "Sharma Computer Academy, Bhopal",
    mode: "In-Person",
    desc: "Design production-grade container clusters, automate deployments with CI/CD pipelines, and configure load balancing across cloud providers.",
    perks: ["Sponsor Hosting Credits", "Digital Certificates", "Hands-on Cohort Access"],
    status: "LIMITED",
  },
  {
    id: 3,
    title: "Bhopal Developer Mixer Q3",
    category: "meetup",
    date: "Sep 24, 2026",
    venue: "Interactive Startup Hub, Bhopal",
    mode: "In-Person",
    desc: "An evening for builders, founders, and designers to network, exchange ideas, and explore co-founder collaborations over dinner.",
    perks: ["Tech Panel Q&A", "Community Swag Kits", "Networking Dinner"],
    status: "OPEN",
  },
  {
    id: 4,
    title: "Open Source Contribution Sprint",
    category: "workshop",
    date: "Oct 10, 2026",
    venue: "Online Portal",
    mode: "Online",
    desc: "Guided virtual session to review, fix issues, and submit successful pull requests to major JavaScript libraries and frameworks.",
    perks: ["GitHub Merged Badge", "Global Mentorship", "Contributors T-Shirt"],
    status: "UPCOMING",
  },
];

const FILTERS = ["all", "hackathon", "workshop", "meetup"] as const;

export function FeaturedEvents() {
  const [filter, setFilter] = useState<"all" | "hackathon" | "workshop" | "meetup">("all");
  const [selected, setSelected] = useState<KEvent | null>(null);

  const filtered = filter === "all" ? EVENTS : EVENTS.filter((e) => e.category === filter);

  return (
    <section id="events" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header row */}
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
              04 / EVENTS
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Featured <span className="font-serif italic lowercase text-[#06b6d4]">events</span> & cohorts.
            </h2>
          </div>

          {/* Filter tabs with layoutId sliding pill */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-border bg-card/5 backdrop-blur-md self-start">
            {FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-5 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold transition-colors cursor-pointer ${
                  filter === tab ? "text-black" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Event cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.4)" }}
                onClick={() => setSelected(event)}
                className="group relative p-8 rounded-3xl border border-border bg-card/5 cursor-pointer overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-card/5 shadow-lg"
                style={{ minHeight: 270 }}
              >
                <div>
                  {/* Category, Status & Mode */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border border-[#06b6d4]/40 text-[#06b6d4] bg-[#06b6d4]/10">
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                        <Monitor className="w-3 h-3" />
                        {event.mode}
                      </span>
                    </div>

                    <span
                      className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        event.status === "OPEN"
                          ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                          : event.status === "LIMITED"
                          ? "border-amber-500/30 text-amber-400 bg-amber-500/10"
                          : "border-purple-500/30 text-purple-400 bg-purple-500/10"
                      }`}
                    >
                      ● {event.status}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-3 leading-tight group-hover:text-[#06b6d4] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {event.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="border-t border-border pt-5 mt-6 flex items-end justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span className="truncate max-w-[220px]">{event.venue}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider font-bold text-[#06b6d4] group-hover:gap-2 transition-all">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border border-[#06b6d4]/40 text-[#06b6d4] bg-[#06b6d4]/10">
                  {selected.category}
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase">
                  <Monitor className="w-3 h-3" />
                  {selected.mode}
                </span>
              </div>

              <h3 className="font-serif italic text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-4 leading-tight">
                {selected.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {selected.desc}
              </p>

              {/* Perks */}
              <div className="mb-8 p-5 rounded-2xl border border-border bg-card/5">
                <span className="font-mono text-[10px] text-[#06b6d4] uppercase tracking-wider font-bold block mb-4 flex items-center gap-1.5">
                  <Sparkles size={12} /> // Perks & Rewards
                </span>
                <ul className="space-y-2.5">
                  {selected.perks.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-foreground/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-[#06b6d4]" />
                    {selected.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
                    {selected.venue}
                  </div>
                </div>

                <a href="#join" onClick={() => setSelected(null)}>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 h-12 rounded-full font-mono text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-white/95 transition-all cursor-pointer shadow-lg"
                  >
                    Register Now <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
