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
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight">
                  EVENT_OVERVIEW<span className="text-primary">_</span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg mb-8 font-sans">
                Experience a transformative learning environment packed with modern techniques, expert insights, and interactive collaboration.
              </p>
              <div className="w-20 h-1 bg-primary/50" />
            </motion.div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 border border-primary/20 p-6 text-center group relative overflow-hidden"
              >
                {/* Tech corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors duration-300"></div>
                
                <div className="w-12 h-12 mx-auto border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors rotate-45">
                  <highlight.icon className="w-5 h-5 text-primary -rotate-45" />
                </div>
                <h4 className="font-mono font-semibold text-white text-xs md:text-sm uppercase tracking-wider">{highlight.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
