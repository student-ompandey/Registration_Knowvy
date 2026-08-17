"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Video, Sparkles, Layers } from "lucide-react";
import { Section, Reveal } from "@/components/ui/kit";
import { CAPABILITIES } from "@/app/heygen/data";

export function WhyAIVideo() {
  return (
    <Section tone="brand" className="relative overflow-hidden">
      {/* Decorative chrome blob on brand background */}
      <div
        aria-hidden
        className="hg-chrome -left-20 top-0 size-[450px] opacity-25"
      />

      <div className="relative z-10">
        {/* Eyebrow */}
        <Reveal>
          <span className="u-label-sm inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-white backdrop-blur-md">
            <Sparkles size={12} />
            The AI Video Paradigm
          </span>
        </Reveal>

        {/* Large two-tone display type */}
        <Reveal className="mt-8 max-w-4xl">
          <h2 className="hg-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] text-white">
            Every business is now a <span className="text-white/60">media company.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
            High-converting video doesn&apos;t require cameras, lighting crews, or multi-week turnarounds anymore. Learn how HeyGen is redefining the speed and economics of visual communication.
          </p>
        </Reveal>

        {/* 3 Capabilities Columns */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/15 pt-12 md:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1} className="space-y-4">
              <span className="u-label-sm font-mono text-white/50">0{i + 1}</span>
              <h3 className="hg-display text-2xl text-white">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{cap.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* External HeyGen link */}
        <Reveal className="mt-14 flex items-center justify-between flex-wrap gap-4 border-t border-white/15 pt-8">
          <div className="flex items-center gap-3 text-white/80 text-sm">
            <Video size={18} />
            <span>Curious about the tech? Explore what HeyGen can do.</span>
          </div>
          <a
            href="https://www.heygen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="u-btn bg-white text-black hover:bg-white/90 font-bold transition-transform hover:scale-105"
          >
            Visit HeyGen.com <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
