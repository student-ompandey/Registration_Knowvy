"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, ChevronRight, ImageOff } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

interface GalleryEvent {
  id: string;
  name: string;
  date: string;
  category: "hackathon" | "workshop" | "meetup" | "devday";
  gradient: string;
  photos: Photo[];
}

const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "ms-build",
    name: "MS Build Bhopal",
    date: "May 2025",
    category: "devday",
    gradient: "from-blue-600/40 via-indigo-600/30 to-purple-900/40",
    photos: [
      { id: 1, src: "/gallery/ms-build-1.jpg", caption: "200+ students packed the venue, giving thumbs up after an incredible Azure AI session." },
      { id: 2, src: "/gallery/ms-build-2.jpg", caption: "Participants proudly holding their trophies and plaques at the MS Build awards ceremony." },
      { id: 3, src: "/gallery/ms-build-3.jpg", caption: "The full MS Build Bhopal crowd — three BUILD screens glowing as energy fills the room." },
      { id: 4, src: "/gallery/ms-build-4.jpg", caption: "A proud moment — top performers receiving their award in front of the Microsoft BUILD display." },
      { id: 5, src: "/gallery/ms-build-5.jpg", caption: "Knowvy crew and attendees at the Microsoft BUILD localhost: Bhopal banner — building beyond limits!" },
      { id: 6, src: "/gallery/ms-build-6.jpg", caption: "More moments from MS Build Bhopal — energy, learning, and community all in one place." },
    ],
  },
  {
    id: "tic-hackathon",
    name: "TIC National Hackathon",
    date: "Apr 2026",
    category: "hackathon",
    gradient: "from-pink-500/40 via-purple-500/30 to-indigo-900/40",
    photos: [],
  },
  {
    id: "copilot-dev-days",
    name: "GitHub Copilot Dev Days",
    date: "Jul 2025",
    category: "workshop",
    gradient: "from-purple-600/40 via-pink-600/30 to-cyan-900/40",
    photos: [
      { id: 1, src: "/gallery/devdays1.jpg", caption: "Developers diving into AI-assisted coding with GitHub Copilot at the Dev Days session." },
      { id: 2, src: "/gallery/devdays2.jpg", caption: "Live PR challenge — teams using Copilot to solve complex TypeScript problems in real time." },
      { id: 3, src: "/gallery/devdays3.jpg", caption: "Hands-on workshop: participants exploring Copilot's automated test generation features." },
      { id: 4, src: "/gallery/devdays4.jpg", caption: "Speakers and attendees exchanging ideas during the GitHub Copilot Dev Days event." },
      { id: 5, src: "/gallery/devdays5.jpg", caption: "Community moment — developers celebrating their Copilot Developer Badges at the event." },
    ],
  },
  {
    id: "miro-meetup",
    name: "Miro Meetup Bhopal",
    date: "Sep 2025",
    category: "meetup",
    gradient: "from-amber-500/40 via-orange-600/30 to-rose-900/40",
    photos: [
      { id: 1, src: "/gallery/miro-meet-1.jpg", caption: "Student designers and founders collaborating on visual workflows at Miro Meetup Bhopal." },
      { id: 2, src: "/gallery/miro-meet-2.jpg", caption: "Whiteboarding session — mapping user flows and system architecture diagrams live." },
      { id: 3, src: "/gallery/miro-meet-3.jpg", caption: "Networking and collaboration moments from the Miro Meetup Bhopal community." },
      { id: 4, src: "/gallery/miro-meet-4.jpg", caption: "Participants engaging with Miro tools for product design and UX ideation." },
    ],
  },
  {
    id: "agentic-ai",
    name: "Agentic AI Hackathon",
    date: "Nov 2025",
    category: "hackathon",
    gradient: "from-cyan-500/40 via-blue-600/30 to-emerald-900/40",
    photos: [
      { id: 1, src: "/gallery/age-ai-1.jpg", caption: "Teams building autonomous multi-agent systems during the 36-hour Agentic AI Hackathon." },
      { id: 2, src: "/gallery/age-ai-2.jpg", caption: "Midnight grinding session — LangChain workflows coming to life under pressure." },
      { id: 3, src: "/gallery/age-ai-3.jpg", caption: "VC mentors guiding student teams on their AI agent prototypes at the hackathon." },
      { id: 4, src: "/gallery/age-ai-4.jpg", caption: "Prize ceremony — celebrating the top 4 funded prototypes from Agentic AI Hackathon 2025." },
    ],
  },
  {
    id: "aws-builder-day",
    name: "AWS Builder Day",
    date: "Dec 2025",
    category: "devday",
    gradient: "from-emerald-500/40 via-teal-600/30 to-blue-900/40",
    photos: [
      { id: 1, src: "/gallery/aws-sca-1.jpg", caption: "AWS Cloud architecture and serverless deployments session during AWS Builder Day." },
      { id: 2, src: "/gallery/aws-sca-2.jpg", caption: "Students working through hands-on cloud labs and AWS certification paths." },
      { id: 3, src: "/gallery/aws-sca-3.jpg", caption: "Interactive Q&A session with cloud mentors on scalable cloud infrastructure." },
      { id: 4, src: "/gallery/aws-sca-4.jpg", caption: "Community networking and cloud enthusiast meetup at Sharma Computer Academy." },
      { id: 5, src: "/gallery/aws-sca-5.jpg", caption: "Participants and organizers celebrating the successful conclusion of AWS Builder Day." },
    ],
  },
  {
    id: "open-source-sprint",
    name: "Open Source Sprint Q1",
    date: "Jan 2026",
    category: "workshop",
    gradient: "from-[#06b6d4]/40 via-[#8b5cf6]/30 to-transparent",
    photos: [],
  }
];

const CATEGORY_COLORS: Record<string, string> = {
  hackathon: "text-pink-400 border-pink-400/40 bg-pink-400/10",
  workshop: "text-purple-400 border-purple-400/40 bg-purple-400/10",
  meetup: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  devday: "text-[#06b6d4] border-[#06b6d4]/40 bg-[#06b6d4]/10",
};

export function GallerySection() {
  const [selectedEventId, setSelectedEventId] = useState<string>("ms-build");
  const [lightboxPhoto, setLightboxPhoto] = useState<(Photo & { event: GalleryEvent }) | null>(null);

  const selectedEvent = GALLERY_EVENTS.find((e) => e.id === selectedEventId)!;

  return (
    <section id="gallery" className="relative py-32 bg-background overflow-hidden select-none">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
            <Camera size={14} />
            05 / CURATED GALLERY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Capturing moments <br />
              <span className="font-serif italic lowercase text-[#06b6d4]">from our</span> community floor.
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xs">
              Select an event below to browse its photos from the community floor.
            </p>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — Event List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-72 flex-shrink-0"
          >
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4 font-bold">
              // Events
            </p>
            <div className="flex flex-col gap-2">
              {GALLERY_EVENTS.map((evt) => (
                <button
                  key={evt.id}
                  onClick={() => setSelectedEventId(evt.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center justify-between gap-3 ${selectedEventId === evt.id
                    ? "border-[#06b6d4]/50 bg-[#06b6d4]/5"
                    : "border-border bg-card/5 hover:border-border/60 hover:bg-card/10"
                    }`}
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className={`font-sans text-sm font-semibold truncate transition-colors ${selectedEventId === evt.id ? "text-[#06b6d4]" : "text-foreground"
                        }`}
                    >
                      {evt.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[evt.category]}`}>
                        {evt.category}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">{evt.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${evt.photos.length > 0
                      ? "text-[#06b6d4] bg-[#06b6d4]/10"
                      : "text-muted-foreground bg-muted/20"
                      }`}>
                      {evt.photos.length} 📷
                    </span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${selectedEventId === evt.id ? "rotate-90 text-[#06b6d4]" : "text-muted-foreground group-hover:translate-x-0.5"}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo Grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEventId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                {/* Event Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-serif italic text-2xl md:text-3xl text-foreground font-semibold">
                      {selectedEvent.name}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground mt-1">
                      {selectedEvent.photos.length} photo{selectedEvent.photos.length !== 1 ? "s" : ""} · {selectedEvent.date}
                    </p>
                  </div>
                  <span className={`text-[9px] font-mono uppercase font-bold px-3 py-1 rounded-full border ${CATEGORY_COLORS[selectedEvent.category]}`}>
                    {selectedEvent.category}
                  </span>
                </div>

                {/* Photos Grid or Empty State */}
                {selectedEvent.photos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedEvent.photos.map((photo, idx) => (
                      <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.06 }}
                        onClick={() => setLightboxPhoto({ ...photo, event: selectedEvent })}
                        className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-border hover:border-[#06b6d4]/50 transition-all duration-300 shadow-lg"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <p className="text-white text-[10px] font-sans leading-snug line-clamp-2">
                            {photo.caption}
                          </p>
                        </div>
                        {/* Photo number badge */}
                        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-border flex items-center justify-center text-[9px] font-mono text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          {idx + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className={`rounded-3xl border border-border bg-gradient-to-br ${selectedEvent.gradient} min-h-[320px] flex flex-col items-center justify-center gap-4 p-12`}>
                    <div className="w-16 h-16 rounded-full border border-border bg-black/30 backdrop-blur-md flex items-center justify-center">
                      <ImageOff size={24} className="text-muted-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="font-serif italic text-xl text-foreground/80 font-semibold mb-2">
                        Photos coming soon
                      </p>
                      <p className="text-muted-foreground text-xs font-mono">
                        Photos from {selectedEvent.name} will be added here.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl select-text"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-3xl border border-border bg-card overflow-hidden shadow-2xl relative"
            >
              {/* Close */}
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-border bg-black/60 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Full Image */}
              <div className="relative w-full aspect-video">
                <img
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className={`text-[9px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[lightboxPhoto.event.category]}`}>
                    {lightboxPhoto.event.category}
                  </span>
                  <span className="font-sans text-sm font-semibold text-foreground">
                    {lightboxPhoto.event.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground ml-auto">
                    {lightboxPhoto.event.date} · Bhopal, MP
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lightboxPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
