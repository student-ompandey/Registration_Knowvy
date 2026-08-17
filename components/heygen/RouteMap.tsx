"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronsRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Building,
  X,
  Bell,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Section, SectionHead, Reveal, EASE } from "@/components/ui/kit";
import { CITIES, type City, SERIES, STATUS_META } from "@/app/heygen/data";
import { CityCard } from "./CityCard";
import { StatusChip } from "./StatusChip";

export function RouteMap() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [activeJump, setActiveJump] = useState<string>("jabalpur");
  const railRef = useRef<HTMLDivElement>(null);

  // Esc key and scroll lock for city modal
  useEffect(() => {
    if (!selectedCity) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedCity(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedCity]);

  const scrollRail = (dir: -1 | 1) => {
    if (!railRef.current) return;
    const scrollAmount = railRef.current.clientWidth * 0.75;
    railRef.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  const handleJumpToCity = (slug: string) => {
    setActiveJump(slug);
    const target = document.getElementById(`city-${slug}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <Section id="route" tone="base">
      <SectionHead
        index="02"
        eyebrow="The 9-City Route"
        title={
          <>
            Nine cities. <span className="hg-grad">One nationwide road.</span>
          </>
        }
        aside="Dates and venue locations roll out city by city. Select a city card for details and notification updates."
      />

      {/* City Jump Rail (Pill Row) */}
      <Reveal className="mt-10">
        <div className="u-no-bar flex items-center gap-2 overflow-x-auto pb-2">
          {CITIES.map((city) => {
            const isSelected = activeJump === city.slug;
            return (
              <button
                key={city.slug}
                onClick={() => handleJumpToCity(city.slug)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-transparent bg-foreground text-background shadow-sm"
                    : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground"
                }`}
              >
                <span
                  className="size-2 rounded-full"
                  style={{ background: `var(--c${city.order})` }}
                />
                <span>{city.name}</span>
                <span className="opacity-50 text-[10px]">0{city.order}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Desktop / Large Screen Horizontal Rail */}
      <div className="mt-12 hidden lg:block">
        {/* Rail navigation arrows */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-brand" />
            <span>Scroll or use arrows to view all 9 roadshow stops</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollRail(-1)}
              aria-label="Scroll route left"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollRail(1)}
              aria-label="Scroll route right"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable cards container */}
        <div
          ref={railRef}
          className="u-no-bar flex snap-x snap-mandatory gap-6 overflow-x-auto py-4"
        >
          {CITIES.map((city) => (
            <div
              key={city.slug}
              className="w-[280px] shrink-0 snap-start"
            >
              <CityCard city={city} onClick={() => setSelectedCity(city)} />
            </div>
          ))}
        </div>

        {/* Poster Horizontal Route Spine & Chevrons */}
        <div className="relative mt-8 px-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE }}
            style={{ transformOrigin: "left" }}
            className="h-1.5 w-full rounded-full overflow-hidden"
          >
            <div className="h-full w-full rounded-full" style={{ background: "var(--hg-grad-spine)" }} />
          </motion.div>

          {/* Node circles */}
          <div className="absolute -top-1.5 inset-x-8 flex items-center justify-between pointer-events-none">
            {CITIES.map((city) => (
              <div key={city.slug} className="flex items-center">
                <span
                  className="size-4.5 rounded-full border-2 border-background shadow-md transition-transform hover:scale-125"
                  style={{ background: `var(--c${city.order})` }}
                />
                {city.order < 9 && (
                  <ChevronsRight size={14} className="opacity-30 mx-auto text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Vertical Timeline (< lg) */}
      <div className="relative mt-12 block lg:hidden">
        {/* Continuous gradient spine */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ transformOrigin: "top" }}
          className="absolute left-6 top-3 bottom-3 w-1 rounded-full"
        >
          <div className="h-full w-full rounded-full" style={{ background: "var(--hg-grad-spine)" }} />
        </motion.div>

        {/* City list with connected nodes */}
        <ol className="space-y-8 pl-14">
          {CITIES.map((city) => (
            <li key={city.slug} className="relative">
              {/* Connected node */}
              <span
                className="absolute -left-14 top-6 size-5 -translate-x-[2px] rounded-full border-2 border-background shadow-md"
                style={{ background: `var(--c${city.order})` }}
              />
              <CityCard city={city} onClick={() => setSelectedCity(city)} />
            </li>
          ))}
        </ol>
      </div>

      {/* Detail Modal Dialog */}
      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCity(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/75 p-5 backdrop-blur-md"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedCity.name} RoadShow Stop Details`}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.26, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-lg rounded-2xl border border-border bg-surface p-7 shadow-[var(--shadow-lift)] md:p-9"
              style={{ "--accent": `var(--c${selectedCity.order})` } as React.CSSProperties}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCity(null)}
                aria-label="Close"
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <X size={16} />
              </button>

              {/* Order and Status */}
              <div className="flex items-center gap-3">
                <span
                  className="u-label-sm rounded-lg px-2.5 py-1 text-white font-bold"
                  style={{ background: "var(--accent)" }}
                >
                  Stop 0{selectedCity.order}
                </span>
                <StatusChip status={selectedCity.status} cityOrder={selectedCity.order} />
              </div>

              {/* City Photo in Modal */}
              <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface-2">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="hg-display text-3xl font-bold text-white leading-none">
                    {selectedCity.name}
                  </h3>
                  <p className="u-label-sm mt-1 text-white/80 text-xs">
                    {selectedCity.state} · {selectedCity.landmark}
                  </p>
                </div>
              </div>

              {/* Date / Venue Info */}
              <div className="mt-6 space-y-3 rounded-xl border border-border bg-surface-2 p-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar size={16} className="text-brand" />
                  <span className="font-medium text-foreground">
                    {selectedCity.date ?? "Dates announcing soon"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Building size={16} className="text-brand" />
                  <span className="font-medium text-foreground">
                    {selectedCity.venue ?? "Venue announcement coming soon"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-brand" />
                  <span>Interactive offline community gathering</span>
                </div>
              </div>

              {/* What happens at this stop */}
              <div className="mt-5 border-t border-border pt-4">
                <h4 className="u-label-sm text-muted-foreground">What to expect</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  A high-energy, 2-3 hour session packed with real founder discussions, hands-on HeyGen AI avatar breakdowns, scalable distribution workflows, and local peer networking.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={SERIES.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-btn w-full text-white"
                  style={{ background: "var(--hg-grad-cta)" }}
                >
                  Follow {selectedCity.name} Updates on X ({SERIES.twitterHandle}) <ArrowUpRight size={15} />
                </a>
                <a
                  href={`mailto:${SERIES.email}?subject=Interested%20in%20HeyGen%20RoadShow%20${selectedCity.name}`}
                  className="u-btn u-btn-ghost w-full"
                >
                  Email Us About {selectedCity.name}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
