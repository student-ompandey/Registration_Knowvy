"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/kit";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <div className="relative flex flex-grow items-center justify-center overflow-hidden pb-24 pt-40">
        <div className="u-grid-bg pointer-events-none absolute inset-0 opacity-70" />

        <Reveal className="relative z-10 mx-auto w-full max-w-xl px-6">
          <div className="u-card p-8 text-center md:p-10">
            <span className="u-label inline-flex items-center gap-2.5">
              <span className="u-pulse inline-block size-1.5 rounded-full bg-pop" />
              Community hub access
            </span>

            <h1 className="u-display u-d3 mt-6">Connect and collaborate</h1>

            <p className="mx-auto mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
              Registrations for cohort events are run through our official Discord
              gateway. Select an option below to enter.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="u-btn u-btn-primary w-full"
              >
                Join Discord portal <ArrowUpRight size={16} />
              </a>

              <a href="/#contact" className="u-btn u-btn-ghost w-full">
                <GraduationCap size={16} /> Campus ambassador form
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
    </main>
  );
}
