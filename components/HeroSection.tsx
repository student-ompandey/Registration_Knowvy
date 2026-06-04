"use client";

import { motion } from "framer-motion";
import { Calendar, IndianRupee, Users, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-black">
      {/* Dark Tech Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
      <div className="absolute top-1/4 right-0 w-32 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container relative z-10 px-6 md:px-12 mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-primary/60"></span>
          <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase font-semibold">
            Knowvy Technologies
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-primary/60"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter mb-4 leading-none uppercase flex flex-col items-center gap-2 drop-shadow-2xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Microsoft Build</span>
          <span className="text-primary flex items-center gap-4 text-center mt-2">
            <span className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent to-primary hidden md:block"></span>
            //localhost: Bhopal
            <span className="h-[2px] w-8 md:w-16 bg-gradient-to-l from-transparent to-primary hidden md:block"></span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mb-10 flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl font-serif text-gray-200 mb-4 drop-shadow-sm font-medium">
            Moving Beyond the Prompt: Engineering Real-World AI Agents
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-sans tracking-wide leading-relaxed">
            Join developers and industry leaders for a day of hands-on learning focused on <strong className="text-white font-medium">AI Agents</strong>, <strong className="text-white font-medium">Microsoft Copilot</strong>, and <strong className="text-white font-medium">Azure Cloud</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {/* Tech Stats Badges */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
            <div className="relative flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-3 border border-white/10 rounded-xl group-hover:border-primary/50 transition-colors duration-300">
              <Calendar className="text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">10:00am, 20 June 2026</span>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/40 blur opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse rounded-xl"></div>
            <div className="relative flex items-center gap-3 bg-primary/10 backdrop-blur-md px-6 py-3 border border-primary/50 rounded-xl">
              <Users className="text-primary w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider text-white font-semibold shadow-black drop-shadow-md">Early Bird Tickets Live</span>
            </div>
          </div>

          <Link href="/register" className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-yellow-500/50 blur opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse rounded-xl"></div>
            <div className="relative flex items-center gap-3 bg-yellow-500/10 backdrop-blur-md px-6 py-3 border border-yellow-500/50 rounded-xl hover:bg-yellow-500/20 transition-all duration-300">
              <IndianRupee className="text-yellow-400 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm uppercase tracking-wider text-white font-bold shadow-black drop-shadow-md">Refer & Earn</span>
            </div>
          </Link>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
            <div className="relative flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-3 border border-white/10 rounded-xl group-hover:border-primary/50 transition-colors duration-300">
              <Terminal className="text-primary w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">Bhopal, MP</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link href="/register">
            <Button size="lg" className="relative group bg-primary/10 hover:bg-primary hover:text-black text-primary border border-primary/50 hover:border-primary rounded-xl px-8 h-14 text-lg font-mono uppercase tracking-widest transition-all duration-500 w-full sm:w-auto overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <Terminal className="mr-2 w-5 h-5 relative z-10" />
              <span className="relative z-10">Register Now</span>
            </Button>
          </Link>
          <a href="#schedule">
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 text-lg border-white/10 hover:border-white/30 hover:bg-white/5 text-gray-400 hover:text-white font-mono uppercase tracking-widest transition-all duration-500 bg-black/40 backdrop-blur-sm w-full sm:w-auto group">
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">View Schedule</span>
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 font-mono text-sm text-gray-500 tracking-wider bg-black/40 border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:border-yellow-400 backdrop-blur-sm px-6 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300"
        >
          <span className="text-primary animate-pulse">📍</span>
          <span className="text-yellow-400">Venue:</span>
          <span className="text-white font-semibold">Sharma Computer Academy, Bhopal</span>
        </motion.p>
      </div>
    </section>
  );
}
