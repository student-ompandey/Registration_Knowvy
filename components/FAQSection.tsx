"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can attend?",
    answer: "This workshop is primarily designed for college students interested in modern web development. Whether you're a beginner or have some experience, you'll find immense value.",
  },
  {
    question: "Will certificates be provided?",
    answer: "Yes, all participants who complete the workshop will receive a verifiable Certificate of Participation.",
  },
  {
    question: "Is prior experience required?",
    answer: "Basic understanding of HTML, CSS, and JavaScript is recommended but not mandatory. We will cover core concepts from the ground up.",
  },
  {
    question: "What should I bring?",
    answer: "Just bring your laptop with a code editor (like VS Code) installed and a stable internet connection. A notebook for taking notes is also a good idea.",
  },
  {
    question: "How will updates be communicated?",
    answer: "All important updates, links, and resources will be sent via email to the address you provide during registration.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400"
          >
            Everything you need to know about the workshop.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border px-6 py-2 rounded-xl"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
