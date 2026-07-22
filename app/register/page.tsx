"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#02010d] transition-colors duration-500">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
        {/* Background grids */}
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-15 pointer-events-none" />

        <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
          <div className="w-full max-w-xl p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-md text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" />
              <span className="font-mono text-[9px] text-[#06b6d4] uppercase tracking-wider font-bold">
                COMMUNITY HUB ACCESS
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif italic text-3xl md:text-4xl text-white uppercase tracking-tight">
                Connect and Collaborate
              </h1>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                Registrations for cohort events are run through our official Discord gateway. Select an option below to enter.
              </p>
            </div>

            <div className="space-y-4">
              {/* Discord gateway button */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <button className="w-full bg-white hover:bg-white/95 text-black font-sans text-xs font-bold rounded-full h-12 flex items-center justify-center gap-2 transition-all cursor-pointer">
                  Join Discord Portal <ArrowRight size={14} />
                </button>
              </a>

              {/* Ambassador link */}
              <a href="#contact" className="w-full block">
                <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-white/15 font-sans text-xs font-bold rounded-full h-12 flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <GraduationCap size={16} className="text-[#06b6d4]" /> Campus Ambassador Form
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
