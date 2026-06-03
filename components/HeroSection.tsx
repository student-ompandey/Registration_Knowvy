"use client";

import { motion } from "framer-motion";
import { Calendar, IndianRupee, Users, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Dark Tech Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-primary/50" />
      <div className="absolute top-1/4 right-0 w-32 h-[1px] bg-primary/50" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container relative z-10 px-6 md:px-12 mx-auto flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">
            // Knowvy Technologies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 leading-none uppercase flex flex-col items-center gap-2"
        >
          <span className="text-white text-center">Microsoft Build</span>
          <span className="text-primary flex items-center gap-4 text-center mt-2">
            <span className="h-[2px] w-8 md:w-12 bg-primary hidden md:block"></span>
            //localhost: Bhopal
            <span className="h-[2px] w-8 md:w-12 bg-primary hidden md:block"></span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 font-sans tracking-wide"
        >
          <strong className="text-white block mb-2">Moving Beyond the Prompt: Engineering Real-World AI Agents</strong>
          Join developers, AI enthusiasts, students, founders, and technology professionals for a day of learning, networking, and innovation focused on Artificial Intelligence, AI Agents, Microsoft Copilot, and Azure Cloud services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {/* Tech Stats Badges */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/50 blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center gap-3 bg-card px-6 py-3 border border-border">
              <Calendar className="text-primary w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider text-gray-300">20 June 2026</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-primary/60 blur-md opacity-100 animate-pulse"></div>
            <div className="relative flex items-center gap-3 bg-card px-6 py-3 border border-primary/50">
              <Users className="text-primary w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider text-white font-semibold">Early Bird Tickets Live</span>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary/50 blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative flex items-center gap-3 bg-card px-6 py-3 border border-border">
              <Terminal className="text-primary w-5 h-5" />
              <span className="font-mono text-sm uppercase tracking-wider text-gray-300">Bhopal, MP</span>
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
            <Button size="lg" className="bg-primary/10 hover:bg-primary hover:text-black text-primary border border-primary rounded-none px-8 h-14 text-lg font-mono uppercase tracking-widest transition-all duration-300 w-full sm:w-auto">
              <Terminal className="mr-2 w-5 h-5" />
              Register Now
            </Button>
          </Link>
          <a href="#schedule">
            <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-lg border-border hover:border-primary hover:bg-transparent text-gray-400 hover:text-primary font-mono uppercase tracking-widest transition-all duration-300 bg-transparent w-full sm:w-auto">
              View Schedule
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 font-mono text-sm text-gray-500 tracking-wider"
        >
          <span className="text-primary">📍</span>{" "}
          <span className="text-yellow-400">Venue:</span>{" "}
          <span className="text-white font-semibold">Sharma Computer Academy, Bhopal</span>
        </motion.p>
      </div>
    </section>
  );
}
