"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/kit";
import { SERIES } from "@/app/heygen/data";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 u-grain" style={{ background: "var(--hg-grad-cta)" }}>
      {/* Decorative background grid and map overlay */}
      <div className="hg-map opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 text-center md:px-10">
        {/* Eyebrow */}
        <Reveal>
          <span className="u-label-sm inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-bold text-white backdrop-blur-md">
            <Sparkles size={13} />
            The Movement Is Starting
          </span>
        </Reveal>

        {/* Big Display Headline */}
        <Reveal className="mt-8">
          <h2 className="hg-display mx-auto max-w-4xl text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.92] text-white">
            One Mission. 9 Cities. Infinite Possibilities.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-xl font-medium text-white/90">
            Connecting founders, businesses & creators across India.
          </p>
        </Reveal>

        {/* Main CTA buttons */}
        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SERIES.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="u-btn bg-white text-black hover:bg-white/90 font-bold px-8 h-12 text-base transition-all hover:scale-105 shadow-2xl"
          >
            Connect on X ({SERIES.twitterHandle}) <ArrowUpRight size={18} />
          </a>
          <a
            href={SERIES.mailUrl}
            className="u-btn border border-white/30 text-white hover:bg-white/10 font-bold px-6 h-12 text-sm backdrop-blur-sm"
          >
            Email Us Directly
          </a>
        </Reveal>

        {/* Footer line */}
        <Reveal className="mt-14 border-t border-white/20 pt-8">
          <p className="u-label-sm tracking-widest text-white/70">
            {SERIES.hashtag} · KNOWVY TECHNOLOGIES × HEYGEN
          </p>
        </Reveal>
      </div>

      <div className="hg-rule absolute bottom-0 inset-x-0 opacity-40" />
    </section>
  );
}
