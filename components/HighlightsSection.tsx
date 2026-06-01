"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, MessageSquare, Globe, Heart, Zap } from "lucide-react";

const highlights = [
  { title: "Interactive Sessions", icon: Sparkles },
  { title: "Project-Based Learning", icon: Layout },
  { title: "Live Q&A", icon: MessageSquare },
  { title: "Industry Exposure", icon: Globe },
  { title: "Community Building", icon: Heart },
  { title: "Future Opportunities", icon: Zap },
];

export function HighlightsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Workshop Highlights</h2>
              <p className="text-gray-400 text-lg mb-8">
                Experience a transformative learning environment packed with modern techniques, expert insights, and interactive collaboration.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
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
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center group"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                  <highlight.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-white text-sm md:text-base">{highlight.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
