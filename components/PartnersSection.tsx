"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center justify-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-primary/60"></span>
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-semibold">
              Event Partners
            </span>
            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-primary/60"></span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Knowvy Technologies Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
            className="relative group cursor-default"
          >
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-30 group-hover:opacity-60"></div>
            
            <div className="relative flex flex-col items-center text-center p-8 bg-black/80 backdrop-blur-md border border-yellow-400/40 rounded-2xl group-hover:border-yellow-400 transition-all duration-500 gap-6 shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] overflow-hidden h-full">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[1px] border-l-[1px] border-primary/60 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1px] border-r-[1px] border-primary/60 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Logo */}
              <div className="relative w-32 h-20 sm:w-40 sm:h-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 transform group-hover:scale-105">
                <Image 
                  src="/Knowvy.png" 
                  alt="Knowvy Technologies" 
                  fill 
                  className="object-contain"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 tracking-wide uppercase group-hover:to-gray-300 transition-all duration-500">
                  Knowvy Technologies
                </span>
                <span className="text-xs font-mono text-primary/80 tracking-[0.2em] uppercase font-medium">
                  Event Organizer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vexite Studio Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative group cursor-default"
          >
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-40 group-hover:opacity-80"></div>
            
            <div className="relative flex flex-col items-center text-center p-8 bg-black/80 backdrop-blur-md border border-yellow-400/40 rounded-2xl group-hover:border-yellow-400 transition-all duration-500 gap-6 shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] overflow-hidden h-full">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[1px] border-l-[1px] border-primary/60 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1px] border-r-[1px] border-primary/60 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Logo */}
              <div className="relative w-32 h-20 sm:w-40 sm:h-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 transform group-hover:scale-105">
                <Image 
                  src="/Vexite logo.png" 
                  alt="Vexite Technology Partner" 
                  fill 
                  className="object-contain"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 tracking-wide uppercase group-hover:to-gray-300 transition-all duration-500">
                  Vexite Studio
                </span>
                <span className="text-xs font-mono text-primary/80 tracking-[0.2em] uppercase font-medium">
                  Innovation Partner
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scalive Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative group cursor-default"
          >
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-40 group-hover:opacity-80"></div>
            
            <div className="relative flex flex-col items-center text-center p-8 bg-black/80 backdrop-blur-md border border-yellow-400/40 rounded-2xl group-hover:border-yellow-400 transition-all duration-500 gap-6 shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] overflow-hidden h-full">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[1px] border-l-[1px] border-primary/60 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1px] border-r-[1px] border-primary/60 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Logo */}
              <div className="relative w-32 h-20 sm:w-40 sm:h-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 transform group-hover:scale-105">
                <Image 
                  src="/scalive.png" 
                  alt="Scalive Venue Partner" 
                  fill 
                  className="object-contain"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 tracking-wide uppercase group-hover:to-gray-300 transition-all duration-500">
                  Scalive
                </span>
                <span className="text-xs font-mono text-primary/80 tracking-[0.2em] uppercase font-medium">
                  Venue Partner
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
