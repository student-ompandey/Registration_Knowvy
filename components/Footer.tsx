"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SOCIALS = [
  { icon: TwitterIcon, href: "https://x.com/knowvytech", label: "Twitter" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/knowvy", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com/knowvy.technologies", label: "Instagram" },
];

const NAV = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Events", href: "#events" },
  { name: "Programs", href: "#programs" },
  { name: "Resources", href: "#resources" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const LEGAL = [
  { name: "Code of Conduct", href: "/terms#conduct" },
  { name: "Privacy Policy", href: "/terms#privacy" },
  { name: "Terms of Service", href: "/terms#terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative border-t border-border/40 bg-background overflow-hidden pt-20 pb-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Ambient blobs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[250px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand col */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-max">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #a855f7)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.4)"
                }}
              >
                <span className="font-mono text-foreground text-lg font-black">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-base tracking-tight text-foreground">KNOWVY</span>
                <span className="font-mono text-[8px] text-primary uppercase tracking-[0.3em] font-bold">TECHNOLOGIES</span>
              </div>
            </Link>

            <p className="text-muted-foreground font-sans leading-relaxed text-sm max-w-xs">
              Empowering India's next-generation developers, designers, and creators through real-world events, hackathons, and career pathways.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-border bg-card/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:scale-110 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary" /> Navigation
            </h4>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary" /> Guidelines
            </h4>
            <ul className="space-y-3">
              {LEGAL.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-px bg-primary" /> Stay Updated
            </h4>
            <p className="text-muted-foreground text-xs leading-relaxed mb-5">
              Get community highlights, event invites, hackathon announcements, and scholarship opportunities.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">✓</span>
                  Subscribed successfully!
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="developer@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-10 px-4 rounded-xl bg-card border border-border text-xs font-mono focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all placeholder:text-muted-foreground/50"
                  />
                  <button
                    type="submit"
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-foreground transition-all hover:scale-105 shrink-0"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 0 15px rgba(99,102,241,0.3)" }}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Discord CTA */}
            <a
              href="https://chat.whatsapp.com/ByhJB7Rs9jpHcwGIUPWq9j"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex items-center gap-3 p-4 rounded-2xl border border-border bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-[#5865F2]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground font-bold">Join Group</p>
                <p className="font-mono text-[9px] text-muted-foreground">2,000+ builders online</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            &copy; {year} Knowvy Technologies — All Rights Reserved
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              System Active
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
              India 🇮🇳
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
