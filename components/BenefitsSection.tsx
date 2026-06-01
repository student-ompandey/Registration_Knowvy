"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Code, FolderOpen, UserCheck } from "lucide-react";

const benefits = [
  {
    title: "Certificate of Participation",
    icon: Award,
    description: "Receive a verified certificate to showcase your new skills on LinkedIn and your resume.",
  },
  {
    title: "Networking Opportunities",
    icon: Users,
    description: "Connect with like-minded peers, industry professionals, and potential collaborators.",
  },
  {
    title: "Career Growth",
    icon: TrendingUp,
    description: "Gain insights into the tech industry that will help accelerate your career trajectory.",
  },
  {
    title: "Practical Experience",
    icon: Code,
    description: "Move beyond theory and build practical, working applications during the workshop.",
  },
  {
    title: "Portfolio Building",
    icon: FolderOpen,
    description: "Add a high-quality, modern web application to your professional portfolio.",
  },
  {
    title: "Expert Guidance",
    icon: UserCheck,
    description: "Learn directly from experienced developers who know what it takes to succeed.",
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
    <section id="benefits" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Exclusive Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            What you'll get by participating in this intensive, one-day tech workshop.
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
              className="bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
