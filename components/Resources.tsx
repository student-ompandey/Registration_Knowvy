"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FolderOpen, ArrowUpRight, Code, ShieldCheck, GitPullRequest, Compass, Sparkles } from "lucide-react";

interface Resource {
  title: string;
  category: "roadmap" | "github" | "cheatsheet";
  desc: string;
  links: string;
  icon: any;
  stars?: string;
}

export function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "roadmap" | "github" | "cheatsheet">("all");

  const resources: Resource[] = [
    {
      title: "Agentic AI Developer Roadmap",
      category: "roadmap",
      desc: "Complete step-by-step layout to master LangChain, LangGraph, prompt architecture, and context agents.",
      links: "https://github.com/knowvy",
      icon: Compass,
    },
    {
      title: "Knowvy Starter Template",
      category: "github",
      desc: "Vite + Next.js template packaged with preconfigured dark/light design systems, tailwind structures, and framer motion layers.",
      links: "https://github.com/knowvy",
      icon: Code,
      stars: "140+",
    },
    {
      title: "Tailwind CSS v4 Cheatsheet",
      category: "cheatsheet",
      desc: "Quick reference card outlining the changes in the latest Tailwind release, custom inline @theme modifiers, and layout layers.",
      links: "https://github.com/knowvy",
      icon: ShieldCheck,
    },
    {
      title: "Next.js 16 App Router Playbook",
      category: "roadmap",
      desc: "Best practices, caching rules, hydration error fixes, and structural component layout designs for modern server routing.",
      links: "https://github.com/knowvy",
      icon: GitPullRequest,
    },
  ];

  const filteredResources = resources.filter((res) => {
    const matchesTab = activeTab === "all" || res.category === activeTab;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="resources" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#06b6d4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
              <Sparkles size={13} />
              06 / RESOURCES
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Developer <span className="font-serif italic lowercase text-[#06b6d4]">resources</span> & templates.
            </h2>
          </div>

          {/* Search and Filters block */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            {/* Search Box */}
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-3.5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-10 pr-4 rounded-full border border-border bg-card/5 text-xs font-mono focus:outline-none focus:border-[#06b6d4]/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] w-full sm:w-60 text-foreground placeholder:text-muted-foreground transition-all"
              />
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1 border border-border p-1 rounded-full bg-card/5 backdrop-blur-md">
              {(["all", "roadmap", "github", "cheatsheet"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold transition-colors cursor-pointer ${
                    activeTab === tab ? "text-black" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeResourceTab"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredResources.length > 0 ? (
              filteredResources.map((res, idx) => (
                <motion.a
                  key={res.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.4)" }}
                  href={res.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 group flex items-start justify-between gap-6 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-6">
                      <res.icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-[#06b6d4] transition-colors flex items-center gap-2">
                        {res.title}
                        {res.stars && (
                          <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-full shrink-0">
                            ★ {res.stars}
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed max-w-md">
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-border bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-[#06b6d4] group-hover:border-[#06b6d4]/40 transition-all shrink-0">
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 p-12 text-center border border-dashed border-border rounded-3xl bg-card/5"
              >
                <FolderOpen className="w-10 h-10 text-muted-foreground mx-auto mb-4 animate-pulse" />
                <h4 className="font-serif italic text-sm text-foreground">
                  No Resources Match Query
                </h4>
                <p className="text-muted-foreground text-xs mt-1">
                  Refine your filters or search criteria.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
