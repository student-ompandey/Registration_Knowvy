"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Knowvy Technologies?",
      answer: "Knowvy Technologies is a premium technology ecosystem and student developer community. We organize hackathons, workshops, mentorship cohorts, and networking events to bridge the gap between academic theory and industry engineering standards.",
    },
    {
      question: "Who can join the community?",
      answer: "Anyone who is passionate about building! Whether you are a first-year college student learning your first language, a senior developer looking to mentor, or a designer interested in visual systems, you are welcome here.",
    },
    {
      question: "Are there fees for events or bootcamps?",
      answer: "Most of our community events, open-source cohorts, and webinars are completely free. If an event has a structural cost (like venue hosting, catering, or extensive sandbox servers), we secure industry sponsors to keep prices minimal or fully subsidized.",
    },
    {
      question: "What is the Campus Ambassador Program?",
      answer: "It is our leadership training track where selected students represent Knowvy on campus. Ambassadors coordinate local hackathons, run peer-to-peer coding study groups, and get direct internship referrals as well as sponsored dev merchandise.",
    },
    {
      question: "How can startups or companies partner with us?",
      answer: "We partner with companies for developer hiring, product evangelism, and sandbox tooling promotions. Drop us an email at knowvy.tech@gmail.com to request our sponsorship deck and pitch guidelines.",
    },
  ];

  return (
    <section id="faq" className="py-32 relative bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
            <Sparkles size={13} />
            10 / FAQ
          </span>
          <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            Resolving community <br />
            <span className="font-serif italic lowercase text-[#06b6d4]">and learning</span> queries.
          </h2>
          <p className="text-muted-foreground mt-4 font-sans text-sm md:text-base leading-relaxed max-w-xl">
            Got queries? Search our database for general community mechanics, registrations, and ambassador roles.
          </p>
        </motion.div>

        {/* Accordion container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#06b6d4]/50 bg-card/5 shadow-[0_0_25px_rgba(6,182,212,0.1)]"
                    : "border-border bg-card/5 hover:border-border hover:bg-card/5"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-4 text-base font-serif text-foreground">
                    <span className="text-[#06b6d4] text-xs font-mono font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#06b6d4]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans border-t border-border pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
