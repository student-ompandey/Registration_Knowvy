"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, MessageSquare, Globe, Heart, Zap } from "lucide-react";

const highlights = [
  { title: "AI AGENT ENGINEERING", icon: Sparkles },
  { title: "AZURE AI SERVICES", icon: Layout },
  { title: "COPILOT TECHNOLOGIES", icon: MessageSquare },
  { title: "LARGE LANGUAGE MODELS", icon: Globe },
  { title: "CLOUD NATIVE DEV", icon: Heart },
  { title: "AI AUTOMATION", icon: Zap },
];

export function HighlightsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight text-white drop-shadow-md">
                  EVENT_OVERVIEW<span className="text-primary animate-pulse">_</span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg mb-8 font-sans leading-relaxed">
                Experience a transformative hands-on workshop focused on building and deploying real-world AI applications using Microsoft and Azure technologies.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glowing Aura on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/0 via-primary/20 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-primary/50 p-6 text-center rounded-xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(var(--primary),0.15)] overflow-hidden">
                  {/* Tech corner accents */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-14 h-14 mx-auto border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-500 rotate-45 group-hover:rotate-[225deg] shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    <highlight.icon className="w-6 h-6 text-gray-400 group-hover:text-primary -rotate-45 group-hover:rotate-180 transition-all duration-500" />
                  </div>
                  <h4 className="font-mono font-bold text-white text-xs md:text-sm uppercase tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{highlight.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
