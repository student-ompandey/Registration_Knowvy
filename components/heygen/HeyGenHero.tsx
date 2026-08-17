"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users, Sparkles } from "lucide-react";
import { CITIES, SERIES } from "@/app/heygen/data";
import { EASE } from "@/components/ui/kit";

const STATS = [
  { value: "09", label: "Cities Across India", highlight: "The Route", accent: "var(--c1)" },
  { value: "06", label: "States & Union Territories", highlight: "Footprint", accent: "var(--c3)" },
  { value: "01", label: "Shared Vision for Creators", highlight: "One Mission", accent: "var(--c5)" },
  { value: "∞", label: "Growth Opportunities", highlight: "Future-Ready", accent: "var(--c7)" },
];

const LINE = {
  hidden: { y: "108%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.08 + i * 0.09 },
  }),
};

const FADE = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.42 + i * 0.09 },
  }),
};

export function HeyGenHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-32 md:pb-24 md:pt-40">
      {/* Background layers */}
      <div className="hg-map" />
      <div className="u-grid-bg pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="hg-glow" />

      {/* Iridescent chrome ambient blobs */}
      <div
        aria-hidden
        className="hg-chrome -right-24 -top-24 size-[380px] md:size-[520px]"
      />
      <div
        aria-hidden
        className="hg-chrome -bottom-32 -left-32 size-[300px] md:size-[420px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <span className="hg-pill text-xs md:text-sm">
            <span className="grid size-6 place-items-center rounded-md bg-brand text-brand-ink">
              <Users size={13} />
            </span>
            <span>One Mission. 9 Cities. Infinite Possibilities.</span>
          </span>

          <span className="u-label text-muted-foreground flex items-center gap-2">
            <span className="u-pulse inline-block size-1.5 rounded-full bg-brand" />
            Ambassador-Led Series · 2026
          </span>
        </motion.div>

        {/* Display Headline */}
        <div className="select-none">
          <h1 className="hg-display hg-h1 tracking-tight text-foreground">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                custom={0}
                variants={LINE}
                initial="hidden"
                animate="visible"
                className="block"
              >
                HeyGen <span className="hg-grad">India</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                custom={1}
                variants={LINE}
                initial="hidden"
                animate="visible"
                className="block text-foreground"
              >
                RoadShow Series
              </motion.span>
            </span>
          </h1>

          {/* Poster Kicker with divider rules */}
          <motion.div
            custom={2}
            variants={FADE}
            initial="hidden"
            animate="visible"
            className="mt-6 flex items-center gap-4 text-brand"
          >
            <div className="hg-rule flex-1" />
            <span className="hg-kicker text-center text-xs md:text-sm font-bold text-foreground">
              A NATIONWIDE MOVEMENT STARTS NOW!
            </span>
            <div className="hg-rule flex-1" />
          </motion.div>
        </div>

        {/* Two Columns: Value Prop & Poster */}
        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            custom={3}
            variants={FADE}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <div className="border-l-2 border-brand pl-5">
              <span className="u-label-sm text-muted-foreground">The Vision</span>
              <p className="mt-3 text-lg font-semibold leading-snug text-foreground md:text-xl">
                “This isn’t a workshop or a typical product demo. It’s a space for real conversations on how you market, create, and scale.”
              </p>
            </div>

            <p className="u-measure mt-7 text-[0.9375rem] leading-relaxed text-muted-foreground">
              We&apos;re connecting founders, creators, marketing teams, and operators across 9 major cities to explore where AI-powered video transforms real-world growth and content production.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#route"
                className="u-btn text-white shadow-lg shadow-brand/20 transition-all hover:scale-105"
                style={{ background: "var(--hg-grad-cta)" }}
              >
                <MapPin size={16} /> Explore the 9 cities
              </Link>
              <a
                href={SERIES.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="u-btn u-btn-ghost"
              >
                Follow Updates on X <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles size={14} className="text-brand" />
              <span>Free community series · Led by HeyGen Ambassador ({SERIES.twitterHandle})</span>
            </div>
          </motion.div>

          {/* Poster Showcase Card */}
          <motion.div
            custom={4}
            variants={FADE}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <figure className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-lift)] transition-transform duration-500 hover:rotate-0 md:-rotate-1">
              <img
                src="/heygen/posters/series-poster.png"
                alt="HeyGen India RoadShow Series Official Poster"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <figcaption className="u-label-sm absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-white/20 bg-black/60 px-4 py-2 text-white backdrop-blur-md">
                <span>Official Series Creative</span>
                <span className="text-[10px] opacity-80">9 CITIES · 1 MISSION</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* City Marquee Strip */}
        <motion.div
          custom={5}
          variants={FADE}
          initial="hidden"
          animate="visible"
          className="u-marquee-host mt-16 overflow-hidden rounded-2xl border border-border bg-surface-2/60 py-3 backdrop-blur-md"
        >
          <div className="u-marquee flex items-center gap-8 text-sm font-semibold">
            {[...CITIES, ...CITIES].map((city, idx) => (
              <span
                key={`${city.slug}-${idx}`}
                className="inline-flex items-center gap-3 whitespace-nowrap"
              >
                <span
                  className="font-bold uppercase tracking-wider"
                  style={{ color: `var(--c${city.order})` }}
                >
                  {city.name}
                </span>
                <span className="opacity-40">✦</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4-Up Stat Rail */}
        <motion.dl
          custom={6}
          variants={FADE}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-2 border-t border-border md:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-border px-2 py-7 md:px-6 ${i % 2 === 0 ? "" : "border-l"
                } ${i < 2 ? "border-b md:border-b-0" : ""} ${i === 2 ? "md:border-l" : ""
                }`}
            >
              <dt className="u-label-sm font-bold" style={{ color: stat.accent }}>
                {stat.highlight}
              </dt>
              <dd className="hg-display mt-3 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none text-foreground">
                {stat.value}
              </dd>
              <dd className="u-label-sm mt-3 text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
