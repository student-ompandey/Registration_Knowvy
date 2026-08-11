"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Phone, ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHead, Reveal, revealUp, stagger } from "./ui/kit";

const CONTACT_OPTIONS = [
  {
    label: "Community Email",
    value: "knowvy.tech@gmail.com",
    href: "mailto:knowvy.tech@gmail.com",
    icon: Mail,
  },
  {
    label: "Support Hotline",
    value: "+91 99938 49783",
    href: "tel:+919993849783",
    icon: Phone,
  },
  {
    label: "Instagram Handle",
    value: "@knowvy.technologies",
    href: "https://instagram.com/knowvy.technologies",
    icon: MessageSquare,
  },
];

const EMPTY = { name: "", email: "", subject: "", message: "" };

export function ContactSection() {
  const [formData, setFormData] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData(EMPTY);
    }, 4000);
  };

  const field = (key: keyof typeof EMPTY) => ({
    value: formData[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((d) => ({ ...d, [key]: e.target.value })),
  });

  return (
    <Section id="contact">
      <SectionHead
        index="09"
        eyebrow="Contact"
        title={
          <>
            Get in touch <span className="text-brand">with our</span> operations team
          </>
        }
        aside="Have questions about ambassador registrations, partnerships, or upcoming hackathons? Drop us a line and our operations team will respond."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Channels */}
        <div className="lg:col-span-5">
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="border-t border-border"
          >
            {CONTACT_OPTIONS.map((opt) => (
              <motion.li key={opt.label} variants={revealUp} className="border-b border-border">
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border text-muted-foreground transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
                    <opt.icon size={16} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="u-label-sm block text-muted-foreground">
                      {opt.label}
                    </span>
                    <span className="mt-1.5 block truncate text-[0.9375rem] font-semibold">
                      {opt.value}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.12}>
            <div className="mt-7 rounded-2xl border border-dashed border-border p-6">
              <span className="u-label-sm text-brand">Quick operations FAQ</span>
              <p className="mt-3.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                Ambassador registrations are processed bi-weekly. Open Source
                Fellowships are run once per quarter. For emergency event hosting
                concerns, please call central command.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="u-card space-y-5 p-7 md:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="u-label-sm text-muted-foreground">Your name</span>
                <input
                  type="text"
                  required
                  placeholder="Satoshi Nakamoto"
                  className="u-field mt-2.5"
                  {...field("name")}
                />
              </label>
              <label className="block">
                <span className="u-label-sm text-muted-foreground">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="builder@knowvy.tech"
                  className="u-field mt-2.5"
                  {...field("email")}
                />
              </label>
            </div>

            <label className="block">
              <span className="u-label-sm text-muted-foreground">Subject</span>
              <input
                type="text"
                required
                placeholder="Ambassador application / partnerships"
                className="u-field mt-2.5"
                {...field("subject")}
              />
            </label>

            <label className="block">
              <span className="u-label-sm text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                placeholder="Describe your inquiry..."
                className="u-field mt-2.5 resize-none"
                {...field("message")}
              />
            </label>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="u-btn w-full cursor-default bg-pop text-pop-ink"
                >
                  <Check size={16} /> Message sent successfully
                </motion.p>
              ) : (
                <motion.button
                  key="submit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  type="submit"
                  className="u-btn u-btn-primary w-full"
                >
                  Send message <ArrowUpRight size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
