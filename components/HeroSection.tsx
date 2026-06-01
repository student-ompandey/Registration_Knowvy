"use client";

import { motion } from "framer-motion";
import { Calendar, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B1020]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[120px]"
        />
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[15%] w-24 h-24 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full border border-secondary/20 bg-gradient-to-tr from-secondary/10 to-transparent backdrop-blur-sm hidden md:block"
      />

      <div className="container relative z-10 px-6 md:px-12 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Registration Open</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Tech Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-10"
        >
          Learn Industry Ready Skills, Build Real Projects, and Grow Your Network.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
            <Calendar className="text-primary w-5 h-5" />
            <span>20 June 2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
            <IndianRupee className="text-secondary w-5 h-5" />
            <span>59 Only</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
            <Users className="text-blue-400 w-5 h-5" />
            <span>Limited Seats Available</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 text-white bg-transparent">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
