"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, Camera, MapPin, Calendar, Layers } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "hackathon" | "workshop" | "meetup" | "devday";
  date: string;
  event: string;
  caption: string;
  gradient: string;
  accent: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "MS Build Bhopal Keynote & AI Sandbox",
    category: "devday",
    date: "May 2025",
    event: "MS Build Bhopal",
    caption: "Over 200+ students packed the venue for Azure AI demonstrations and live hands-on labs.",
    gradient: "from-blue-600/40 via-indigo-600/30 to-purple-900/40",
    accent: "#3b82f6",
  },
  {
    id: 2,
    title: "GitHub Copilot Live PR Challenge",
    category: "workshop",
    date: "Jul 2025",
    event: "Copilot Dev Days",
    caption: "Developers working side-by-side using AI pair programmers to solve complex TypeScript challenges.",
    gradient: "from-purple-600/40 via-pink-600/30 to-cyan-900/40",
    accent: "#8b5cf6",
  },
  {
    id: 3,
    title: "Miro Product & UX System Workshop",
    category: "meetup",
    date: "Sep 2025",
    event: "Miro Meetup Bhopal",
    caption: "Student designers and founders whiteboarding user flows and system architecture diagrams.",
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-900/40",
    accent: "#f59e0b",
  },
  {
    id: 4,
    title: "Agentic AI Hackathon Midnight Coding",
    category: "hackathon",
    date: "Nov 2025",
    event: "Agentic AI Hackathon",
    caption: "Teams grinding past midnight building multi-agent LangChain integrations for cash prizes.",
    gradient: "from-cyan-500/40 via-blue-600/30 to-emerald-900/40",
    accent: "#06b6d4",
  },
  {
    id: 5,
    title: "Cloud Native Container Deployments",
    category: "workshop",
    date: "Dec 2025",
    event: "Cloud Native Dev Day",
    caption: "Deploying production K8s clusters and Docker containers live on cloud servers.",
    gradient: "from-emerald-500/40 via-teal-600/30 to-blue-900/40",
    accent: "#10b981",
  },
  {
    id: 6,
    title: "Open Source Sprint Winner Announcement",
    category: "workshop",
    date: "Jan 2026",
    event: "Open Source Sprint",
    caption: "Celebrating first-time GitHub contributors with custom swag and merged PR badges.",
    gradient: "from-pink-500/40 via-purple-600/30 to-indigo-900/40",
    accent: "#ec4899",
  },
];

const CATEGORIES = ["all", "hackathon", "workshop", "meetup", "devday"] as const;

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<"all" | "hackathon" | "workshop" | "meetup" | "devday">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filtered = activeTab === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="relative py-32 bg-background overflow-hidden select-none">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

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
              <Camera size={14} />
              05 / CURATED GALLERY
            </span>
            <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              Capturing moments <br />
              <span className="font-serif italic lowercase text-[#06b6d4]">from our</span> community floor.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-border bg-card/5 backdrop-blur-md self-start">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold transition-colors cursor-pointer ${
                  activeTab === tab ? "text-black" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeGalleryPill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Interactive Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-3xl border border-border bg-card/5 overflow-hidden cursor-pointer min-h-[300px] flex flex-col justify-between p-7 transition-all duration-300 hover:border-[#06b6d4]/50 shadow-xl"
              >
                {/* Visual Gradient Representation Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

                {/* Top Badge & Expand Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest font-bold border border-border text-foreground bg-black/40 backdrop-blur-md">
                    {item.event}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/40 border border-border backdrop-blur-md flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="relative z-10 space-y-2 pt-12">
                  <span className="font-mono text-[9px] text-cyan-300 uppercase tracking-widest block font-bold">
                    📅 {item.date}
                  </span>
                  <h3 className="font-serif italic text-xl md:text-2xl text-foreground font-semibold leading-tight group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Interactive Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl select-text"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Modal Visual Header */}
              <div className={`h-56 rounded-2xl bg-gradient-to-br ${selectedPhoto.gradient} p-6 flex flex-col justify-between mb-6 relative overflow-hidden border border-border`}>
                <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
                <span className="relative z-10 px-3 py-1 rounded-full text-[9px] font-mono uppercase font-bold border border-border bg-black/50 text-foreground w-max">
                  {selectedPhoto.event}
                </span>
                <div className="relative z-10">
                  <span className="font-mono text-xs text-cyan-300 font-bold uppercase block mb-1">
                    {selectedPhoto.date} ● Bhopal, MP
                  </span>
                  <h3 className="font-serif italic text-2xl md:text-3xl text-foreground font-semibold">
                    {selectedPhoto.title}
                  </h3>
                </div>
              </div>

              {/* Caption & Description */}
              <div className="space-y-4">
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                <div className="p-4 rounded-xl border border-border bg-card/5 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>Category: <strong className="text-[#06b6d4] uppercase">{selectedPhoto.category}</strong></span>
                  <span>Chapter: <strong>Knowvy Bhopal</strong></span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-full h-12 rounded-full bg-white text-black font-sans text-xs font-bold mt-6 transition-all cursor-pointer hover:bg-white/90"
              >
                Close Preview
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
