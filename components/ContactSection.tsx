"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, HelpCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactOptions = [
    { label: "Community Email", value: "knowvy.tech@gmail.com", href: "mailto:knowvy.tech@gmail.com", icon: Mail },
    { label: "Support Hotline", value: "+91 99938 49783", href: "tel:+919993849783", icon: Phone },
    { label: "Instagram Handle", value: "@knowvy_technologies", href: "https://instagram.com/knowvy_technologies", icon: MessageSquare },
  ];

  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#06b6d4]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4 flex items-center gap-2">
            <Sparkles size={13} />
            09 / CONTACT
          </span>
          <h2 className="font-serif font-normal text-foreground uppercase leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            Get in touch <br />
            <span className="font-serif italic lowercase text-[#06b6d4]">with our</span> operations team.
          </h2>
          <p className="text-muted-foreground mt-4 font-sans text-sm md:text-base leading-relaxed max-w-xl">
            Have questions about ambassador registrations, partnerships, or upcoming hackathons? Drop us a line and our operations team will respond.
          </p>
        </motion.div>

        {/* Contact Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Info details */}
          <div className="lg:col-span-5 space-y-6">
            {contactOptions.map((opt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 4, borderColor: "rgba(6, 182, 212, 0.4)" }}
                className="p-6 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 flex items-center gap-4 group cursor-pointer shadow-md"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] transition-transform group-hover:scale-110 shrink-0">
                  <opt.icon size={16} />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-muted-foreground uppercase block mb-1">
                    {opt.label}
                  </span>
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-foreground hover:text-[#06b6d4] transition-colors font-semibold"
                  >
                    {opt.value}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Quick FAQ card helper */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-3xl border border-dashed border-border bg-card/5 space-y-3"
            >
              <span className="font-mono text-[10px] text-[#06b6d4] uppercase font-bold flex items-center gap-1.5">
                <HelpCircle size={12} /> Quick Operations FAQ:
              </span>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Ambassador registrations are processed bi-weekly. Open Source Fellowships are run once per quarter. For emergency event hosting concerns, please call central command.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl border border-border bg-card/5 backdrop-blur-md shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] text-muted-foreground uppercase font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Satoshi Nakamoto"
                    className="w-full h-11 px-4 rounded-full border border-border bg-card/5 text-xs font-mono text-foreground focus:outline-none focus:border-[#06b6d4]/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] text-muted-foreground uppercase font-semibold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="builder@knowvy.tech"
                    className="w-full h-11 px-4 rounded-full border border-border bg-card/5 text-xs font-mono text-foreground focus:outline-none focus:border-[#06b6d4]/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[9px] text-muted-foreground uppercase font-semibold">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Ambassador Application / Partnerships"
                  className="w-full h-11 px-4 rounded-full border border-border bg-card/5 text-xs font-mono text-foreground focus:outline-none focus:border-[#06b6d4]/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[9px] text-muted-foreground uppercase font-semibold">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry..."
                  className="w-full p-4 rounded-3xl border border-border bg-card/5 text-xs font-mono text-foreground focus:outline-none focus:border-[#06b6d4]/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-12 rounded-full flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shadow-md"
                  >
                    <CheckCircle2 size={16} /> Message Sent Successfully
                  </motion.div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full h-12 rounded-full bg-white hover:bg-white/95 text-black font-sans text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg"
                  >
                    Send Message <Send size={12} />
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
