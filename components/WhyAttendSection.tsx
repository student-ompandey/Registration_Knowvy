"use client";

import { motion } from "framer-motion";
import { Laptop, MonitorPlay, Briefcase, Lightbulb, Coffee, Gift } from "lucide-react";

const reasons = [
  {
    title: "LEARN FROM EXPERTS",
    description: "Gain insights from experienced developers and industry professionals.",
    icon: Lightbulb,
  },
  {
    title: "HANDS-ON KNOWLEDGE",
    description: "Understand how real-world AI applications are built and deployed on Azure.",
    icon: Laptop,
  },
  {
    title: "NETWORKING",
    description: "Connect with students, developers, founders, and technology leaders.",
    icon: Briefcase,
  },
  {
    title: "CAREER GROWTH",
    description: "Discover opportunities in AI, cloud computing, and software engineering.",
    icon: MonitorPlay,
  },
  {
    title: "FREE FOOD & DRINKS",
    description: "Enjoy complimentary meals and refreshments to keep your energy high throughout the event.",
    icon: Coffee,
  },
  {
    title: "EXCLUSIVE SWAG",
    description: "Take home official event merchandise, stickers, and developer tools.",
    icon: Gift,
  },
];

export function WhyAttendSection() {
  return (
    <section id="why-attend" className="py-24 relative z-10 bg-background border-t border-border/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              WHY_ATTEND_THIS_EVENT<span className="text-primary">_</span>
            </h2>
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-sans"
          >
            Microsoft Build //localhost: Bhopal is a community-driven technology event designed to bring together developers, students, founders, and industry professionals. The event focuses on the future of AI, Cloud Computing, Large Language Models, Azure AI, Copilot technologies, and modern software engineering practices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-[1px] border-t border-dashed border-primary/30 -z-10" />

          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              {/* Glowing Aura on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative flex flex-col items-center text-center bg-black/40 backdrop-blur-md border border-yellow-400/40 group-hover:border-yellow-400 rounded-2xl p-8 h-full transition-all duration-500 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] hover:-translate-y-2">

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-400/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-400/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Diamond Icon Container */}
                <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-yellow-400/30 rotate-45 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all duration-500 group-hover:rotate-[225deg] shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.6)]"></div>
                  <div className="absolute inset-2 border border-yellow-400/10 rotate-45 group-hover:border-yellow-400/50 transition-all duration-500 group-hover:-rotate-45"></div>
                  <reason.icon className="text-gray-400 group-hover:text-yellow-400 w-8 h-8 relative z-10 group-hover:scale-110 transition-all duration-500" />
                </div>

                <h3 className="text-xl font-mono font-bold mb-4 text-white uppercase tracking-wider group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans px-2 group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
