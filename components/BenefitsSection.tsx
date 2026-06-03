"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Code, FolderOpen, Gift } from "lucide-react";

const benefits = [
  {
    title: "SOFTWARE DEVELOPERS",
    icon: Code,
    description: "Enhance your development workflow with Microsoft AI agents and Azure cloud-native technologies.",
  },
  {
    title: "STUDENTS & BEGINNERS",
    icon: Users,
    description: "Learn industry-ready skills, build real projects on Azure, and network with professionals.",
  },
  {
    title: "STARTUP FOUNDERS",
    icon: TrendingUp,
    description: "Discover how Microsoft AI technologies and Azure can scale your product and business.",
  },
  {
    title: "AI ENTHUSIASTS",
    icon: Award,
    description: "Deep dive into Azure OpenAI, Microsoft Copilot, and advanced AI automation workflows.",
  },
  {
    title: "CLOUD PROFESSIONALS",
    icon: FolderOpen,
    description: "Explore advanced deployment strategies and Azure AI services.",
  },
  {
    title: "TECH LEADERS & INNOVATORS",
    icon: Gift,
    description: "Discover new AI paradigms to drive innovation and lead technical teams into the era of AI automation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-card/10 relative border-t border-dashed border-primary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              WHO_SHOULD_ATTEND<span className="text-primary">_</span>
            </h2>
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-sans"
          >
            The event is designed for a diverse audience of tech professionals and enthusiasts.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glowing Aura on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative h-full bg-black/40 backdrop-blur-md border border-yellow-400/40 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-500 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] overflow-hidden flex flex-col justify-between">
                
                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-yellow-400/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-yellow-400/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div>
                  <div className="w-14 h-14 flex items-center justify-center mb-8 border border-yellow-400/30 rotate-45 group-hover:bg-yellow-400/10 group-hover:border-yellow-400 transition-all duration-500 shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] group-hover:rotate-[225deg]">
                    <benefit.icon className="text-gray-400 group-hover:text-yellow-400 w-6 h-6 -rotate-45 group-hover:rotate-180 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-3 text-white uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
