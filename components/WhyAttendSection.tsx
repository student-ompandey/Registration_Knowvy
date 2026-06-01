"use client";

import { motion } from "framer-motion";
import { Laptop, MonitorPlay, Briefcase, Lightbulb } from "lucide-react";

const reasons = [
  {
    title: "Hands-on Learning",
    description: "Don't just listen. Code along and build components from scratch to understand the core concepts deeply.",
    icon: Laptop,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Live Demonstrations",
    description: "Watch experts build complex features live, explaining their thought process and best practices.",
    icon: MonitorPlay,
    color: "from-primary to-secondary",
  },
  {
    title: "Real Projects",
    description: "Apply your skills immediately by working on a real-world project during the workshop.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Industry Insights",
    description: "Learn what top companies are looking for and how to structure your projects for scale.",
    icon: Lightbulb,
    color: "from-orange-500 to-yellow-400",
  },
];

export function WhyAttendSection() {
  return (
    <section id="why-attend" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Attend This Workshop?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive session designed to accelerate your growth and equip you with modern web development skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${reason.color}`}
              >
                <reason.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
