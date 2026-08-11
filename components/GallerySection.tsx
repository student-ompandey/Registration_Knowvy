"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageOff, ArrowLeft, ArrowRight } from "lucide-react";
import { Section, SectionHead, Reveal } from "./ui/kit";

interface Photo {
  id: number;
  src: string;
  caption: string;
}

type Category = "hackathon" | "workshop" | "meetup" | "devday";

interface GalleryEvent {
  id: string;
  name: string;
  date: string;
  category: Category;
  photos: Photo[];
}

const TONE: Record<Category, string> = {
  hackathon: "var(--s4)",
  workshop: "var(--s1)",
  meetup: "var(--s5)",
  devday: "var(--s2)",
};

const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "ms-build",
    name: "MS Build Bhopal",
    date: "May 2025",
    category: "devday",
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
    photos: [],
  },
  {
    id: "copilot-dev-days",
    name: "GitHub Copilot Dev Days",
    date: "Jul 2025",
    category: "workshop",
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
    photos: [],
  },
];

export function GallerySection() {
  const [activeId, setActiveId] = useState("ms-build");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const event = GALLERY_EVENTS.find((e) => e.id === activeId)!;
  const photos = event.photos;

  const scrollRail = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = useCallback(
    (dir: -1 | 1) =>
      setLightboxIdx((i) =>
        i === null ? i : (i + dir + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, step]);

  const active = lightboxIdx === null ? null : photos[lightboxIdx];

  return (
    <Section id="gallery" className="select-none">
      <SectionHead
        index="05"
        eyebrow="Curated gallery"
        title={
          <>
            Capturing moments <span className="text-brand">from our</span> community
            floor
          </>
        }
        aside="Select an event below to browse its photos from the community floor."
      />

      {/* Event tabs */}
      <Reveal className="u-no-bar mt-12 flex gap-2 overflow-x-auto pb-2">
        {GALLERY_EVENTS.map((e) => {
          const on = e.id === activeId;
          return (
            <button
              key={e.id}
              onClick={() => {
                setActiveId(e.id);
                railRef.current?.scrollTo({ left: 0 });
              }}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-[0.8125rem] font-semibold transition-all duration-250 ${
                on
                  ? "border-transparent bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              {e.name}
              <span className={`u-label-sm ml-2.5 ${on ? "opacity-55" : "opacity-45"}`}>
                {e.photos.length}
              </span>
            </button>
          );
        })}
      </Reveal>

      {/* Rail header */}
      <div className="mt-10 flex items-end justify-between gap-6 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="size-2.5 rounded-full"
              style={{ background: TONE[event.category] }}
            />
            <h3 className="u-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-none">
              {event.name}
            </h3>
          </div>
          <p className="u-label-sm mt-3 text-muted-foreground">
            {event.category} · {event.date} · {photos.length} photo
            {photos.length !== 1 ? "s" : ""}
          </p>
        </div>

        {photos.length > 0 && (
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => scrollRail(-1)}
              aria-label="Scroll gallery left"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollRail(1)}
              aria-label="Scroll gallery right"
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Photo rail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.32 }}
          className="mt-6"
        >
          {photos.length > 0 ? (
            <div
              ref={railRef}
              className="u-no-bar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
              {photos.map((photo, i) => (
                <figure
                  key={photo.id}
                  onClick={() => setLightboxIdx(i)}
                  className="group relative aspect-[4/3] w-[82%] shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border border-border bg-surface-2 sm:w-[52%] lg:w-[38%]"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                  />
                  <figcaption className="u-label-sm absolute bottom-4 left-4 right-4 truncate rounded-full border border-white/15 bg-black/60 px-3.5 py-2 text-white backdrop-blur-md">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-2xl border border-dashed border-border bg-surface-2 p-12 text-center">
              <span className="grid size-14 place-items-center rounded-full border border-border bg-surface text-muted-foreground">
                <ImageOff size={20} />
              </span>
              <div>
                <p className="u-display text-2xl">Photos coming soon</p>
                <p className="u-label-sm mt-3 text-muted-foreground">
                  Photos from {event.name} will be added here
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-[60] flex select-text items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <button
                onClick={() => setLightboxIdx(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              >
                <X size={15} />
              </button>

              <div className="relative aspect-video bg-black">
                <img
                  src={active.src}
                  alt={active.caption}
                  className="size-full object-contain"
                />
                {photos.length > 1 && (
                  <>
                    <button
                      onClick={() => step(-1)}
                      aria-label="Previous photo"
                      className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={() => step(1)}
                      aria-label="Next photo"
                      className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="u-label-sm rounded-full px-2.5 py-1.5"
                    style={{ background: TONE[event.category], color: "var(--bg-2)" }}
                  >
                    {event.category}
                  </span>
                  <span className="text-sm font-bold">{event.name}</span>
                  <span className="u-label-sm ml-auto text-muted-foreground">
                    {lightboxIdx! + 1} / {photos.length} · {event.date} · Bhopal, MP
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {active.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
