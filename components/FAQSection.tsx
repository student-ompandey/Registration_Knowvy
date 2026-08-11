"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHead, revealUp, stagger } from "./ui/kit";

const FAQS = [
  {
    question: "What is Knowvy Technologies?",
    answer:
      "Knowvy Technologies is a premium technology ecosystem and student developer community. We organize hackathons, workshops, mentorship cohorts, and networking events to bridge the gap between academic theory and industry engineering standards.",
  },
  {
    question: "Who can join the community?",
    answer:
      "Anyone who is passionate about building! Whether you are a first-year college student learning your first language, a senior developer looking to mentor, or a designer interested in visual systems, you are welcome here.",
  },
  {
    question: "Are there fees for events or bootcamps?",
    answer:
      "Most of our community events, open-source cohorts, and webinars are completely free. If an event has a structural cost (like venue hosting, catering, or extensive sandbox servers), we secure industry sponsors to keep prices minimal or fully subsidized.",
  },
  {
    question: "What is the Campus Ambassador Program?",
    answer:
      "It is our leadership training track where selected students represent Knowvy on campus. Ambassadors coordinate local hackathons, run peer-to-peer coding study groups, and get direct internship referrals as well as sponsored dev merchandise.",
  },
  {
    question: "How can startups or companies partner with us?",
    answer:
      "We partner with companies for developer hiring, product evangelism, and sandbox tooling promotions. Drop us an email at knowvy.tech@gmail.com to request our sponsorship deck and pitch guidelines.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHead
        index="10"
        eyebrow="FAQ"
        title={
          <>
            Resolving community <span className="text-brand">and learning</span>{" "}
            queries
          </>
        }
        aside="Got queries? Search our database for general community mechanics, registrations, and ambassador roles."
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 border-t border-border"
      >
        {FAQS.map((faq, i) => {
          const open = openIdx === i;
          return (
            <motion.li key={faq.question} variants={revealUp} className="border-b border-border">
              <h3>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="group flex w-full items-start gap-5 py-6 text-left md:gap-8"
                >
                  <span
                    className={`u-label-sm mt-1.5 w-6 shrink-0 tabular-nums transition-colors ${
                      open ? "text-brand" : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-[1.0625rem] font-bold leading-snug transition-colors group-hover:text-brand md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      open
                        ? "rotate-45 border-transparent bg-brand text-brand-ink"
                        : "border-border text-muted-foreground group-hover:border-border-strong"
                    }`}
                  >
                    <Plus size={15} />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="u-measure pb-7 pl-11 text-sm leading-relaxed text-muted-foreground md:pl-14">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
