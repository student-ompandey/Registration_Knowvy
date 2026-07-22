"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Image as ImageIcon, MapPin, Users, Calendar, Trophy } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "1,500+", label: "Active Members", highlight: "Across India" },
  { value: "30+", label: "Events & Meetups", highlight: "Hosted" },
  { value: "3", label: "Hackathons Hosted", highlight: "National" },
  { value: "10+", label: "National Presence", highlight: "Cities" },
];

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between bg-background pt-32 pb-16 overflow-hidden select-none"
    >
      {/* Background Dots & Glowing Ambient Blobs */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#06b6d4]/10 rounded-full blur-[160px] pointer-events-none z-0 animate-float-1" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0 animate-float-2" />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/40 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 relative z-10 flex-grow flex flex-col justify-center gap-10"
      >

        {/* Hero Title & Subtitle Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-2">
          {/* Left Column: Headline & Requested Motto */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              {/* <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-widest">
                <Sparkles size={12} className="text-purple-400" /> OFFICIAL STUDENT NETWORK
              </span> */}

              {/* Headline */}
              <h1
                className="font-serif font-normal text-foreground leading-[0.98] tracking-tight uppercase"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
              >
                Building<br />
                <span className="font-serif italic lowercase bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#ec4899] pr-3 inline-block">
                  premier student
                </span> <br />
                developer hub.
              </h1>
            </motion.div>

            {/* Requested Motto */}
            <motion.div variants={itemVariants} className="p-5 rounded-2xl border border-border bg-card/5 backdrop-blur-md max-w-xl shadow-lg">
              <span className="font-mono text-[10px] text-[#06b6d4] uppercase tracking-widest font-bold block mb-1">
                // OUR MOTTO
              </span>
              <p className="font-serif italic text-xl md:text-2xl text-foreground font-light tracking-wide">
                &ldquo;Perks with Purpose, Events with Impact.&rdquo;
              </p>
            </motion.div>

            {/* CTAs explicitly specified in request */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#join">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 bg-gradient-to-r from-[#06b6d4] to-primary hover:from-cyan-400 hover:to-indigo-500 text-foreground font-sans text-sm font-bold px-7 h-13 rounded-full transition-all cursor-pointer shadow-lg"
                >
                  Join Community <ArrowRight size={15} />
                </motion.button>
              </Link>

              <Link href="#gallery">
                <motion.button
                  whileHover={{ scale: 1.04, borderColor: "rgba(255, 255, 255, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 border border-border hover:border-white/40 bg-muted/50 hover:bg-muted text-foreground font-sans text-xs font-semibold px-6 h-13 rounded-full backdrop-blur-md transition-all cursor-pointer"
                >
                  <ImageIcon size={14} className="text-[#06b6d4]" /> View Gallery
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Community Feature Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative rounded-3xl border border-border bg-black/60 backdrop-blur-xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group hover:border-[#06b6d4]/40 transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#06b6d4]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#06b6d4] to-primary flex items-center justify-center text-foreground font-mono font-bold text-xs">
                    K
                  </div>
                  <div>
                    <h3 className="font-serif italic text-sm text-foreground font-semibold">Knowvy Technologies</h3>
                    <span className="font-mono text-[9px] text-muted-foreground block">Student Community</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ● ACTIVE
                </span>
              </div>

              {/* Content items */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-border bg-card/5">
                  <span className="font-mono text-[9px] text-[#06b6d4] uppercase tracking-wider font-bold block mb-1">
                    NEXT BIG EVENT
                  </span>
                  <h4 className="font-serif text-lg text-foreground font-semibold">Knowvy Monthly Meetup</h4>
                  <p className="text-muted-foreground text-xs mt-1">Come and Join the Knowvy Meetup at your city</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-border bg-card/5">
                    <Users className="w-4 h-4 text-[#06b6d4] mb-1" />
                    <span className="font-serif italic text-lg text-foreground font-bold block">1,500+</span>
                    <span className="font-mono text-[9px] text-muted-foreground uppercase">Members</span>
                  </div>
                  <div className="p-3 rounded-xl border border-border bg-card/5">
                    <Calendar className="w-4 h-4 text-purple-400 mb-1" />
                    <span className="font-serif italic text-lg text-foreground font-bold block">30+</span>
                    <span className="font-mono text-[9px] text-muted-foreground uppercase">Events Hosted</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-dashed border-border bg-card/5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">Community Hub</span>
                  <span className="font-mono text-[10px] text-[#06b6d4] font-bold">WhatsApp / Discord</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Micro-Stat Bar */}
        <motion.div variants={itemVariants} className="border-t border-border mt-10 pt-8 pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.4)" }}
                className="p-4 rounded-2xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-mono text-[9px] text-[#06b6d4] font-bold uppercase tracking-widest block mb-1">
                    {stat.highlight}
                  </span>
                  <span className="font-serif italic text-3xl text-foreground font-light tracking-tight group-hover:text-[#06b6d4] transition-colors">
                    {stat.value}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
