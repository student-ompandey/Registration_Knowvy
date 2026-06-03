"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="py-16 border-y border-border bg-black/40 relative overflow-hidden backdrop-blur-sm">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-2"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
            // Technology Partner
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center p-4 sm:px-8 border border-border/50 bg-card/30 rounded-xl hover:border-primary/50 transition-colors duration-500 gap-4 sm:gap-6"
        >
          <div className="relative w-24 h-12 sm:w-32 sm:h-16">
            <Image 
              src="/Vexite logo.png" 
              alt="Vexite Technology Partner" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wider uppercase text-center">Vexite Studio</span>
        </motion.div>
      </div>
    </section>
  );
}
