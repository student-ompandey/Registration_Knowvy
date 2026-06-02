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
              className="flex flex-col items-center text-center group"
            >
              {/* Diamond Icon Container */}
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary/40 rotate-45 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"></div>
                <div className="absolute inset-2 border border-primary/20 rotate-45"></div>
                <reason.icon className="text-primary w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-mono font-bold mb-3 text-white uppercase tracking-wider">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans px-4">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
