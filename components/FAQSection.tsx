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
    question: "Is the event beginner friendly?",
    answer: "Yes. Students, beginners, and experienced professionals are all welcome.",
  },
  {
    question: "What technology stack is focused in the workshop?",
    answer: "The workshop focuses directly on Microsoft and Azure technologies, including Azure OpenAI, Azure AI Search, Microsoft Copilot Studio, and Azure cloud application deployment.",
  },
  {
    question: "Will certificates be provided?",
    answer: "Event organizers will share certificate details closer to the event.",
  },
  {
    question: "How can I register?",
    answer: "You can register using the official registration link.",
  },
  {
    question: "Who should attend?",
    answer: "Students, developers, AI enthusiasts, founders, and technology professionals interested in building real-world AI systems with Microsoft cloud suites.",
  },
  {
    question: "How does the referral system work?",
    answer: "When you register, your mobile number becomes your referral code. Share this code with your friends. If 7 or more people register using your referral code, your entire registration fee will be refunded! Plus, the top referrers with the maximum referrals will be rewarded with extra cash prizes and exclusive event rewards!",
  },
  {
    question: "How to become a community partner?",
    answer: "Simply send an email to knowvy.tech@gmail.com expressing your interest. Include details about your community, social media links, and how you would like to collaborate. Our team will get back to you shortly!",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative bg-card/10 border-t border-dashed border-primary/20">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
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
              FREQUENTLY_ASKED<span className="text-primary">_</span>
            </h2>
            <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 font-sans"
          >
            Query the database for common inquiries and system parameters.
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
                className="bg-black/50 border border-primary/20 px-6 py-2 rounded-none data-[state=open]:border-primary transition-colors group"
              >
                <AccordionTrigger className="text-left text-lg font-mono font-medium text-white hover:text-primary hover:no-underline uppercase tracking-wide">
                  <span className="flex items-center gap-3">
                    <span className="text-primary/50 text-sm group-hover:text-primary transition-colors">[{String(index + 1).padStart(2, '0')}]</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed font-sans border-t border-dashed border-primary/20 pt-4 mt-2">
                  <span className="text-primary/70 mr-2">{">"}</span>{faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
