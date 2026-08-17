"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHead, revealUp, stagger, EASE } from "@/components/ui/kit";
import { FAQS } from "@/app/heygen/data";

export function HeyGenFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="faq" tone="base">
      <SectionHead
        index="08"
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Got questions? <span className="hg-grad">We&apos;ve got answers.</span>
          </>
        }
        aside="Everything you need to know about attendance, requirements, and logistics for the HeyGen India RoadShow."
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
            <motion.li
              key={faq.question}
              variants={revealUp}
              className="border-b border-border"
            >
              <h3>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="group flex w-full items-start gap-5 py-6 text-left md:gap-8"
                >
                  <span
                    className={`u-label-sm mt-1.5 w-6 shrink-0 tabular-nums font-mono transition-colors ${
                      open ? "text-brand" : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="hg-display flex-1 text-lg font-bold leading-snug transition-colors group-hover:text-brand md:text-xl text-foreground">
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
                    transition={{ duration: 0.3, ease: EASE }}
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
