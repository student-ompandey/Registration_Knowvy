"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Send, Check, Copy, ArrowUpRight, ShieldCheck } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";

const COMMUNITY_LINKS = [
  {
    name: "LinkedIn Page",
    desc: "Connect for professional networking, workshop certificates, speaker spotlights, and career referrals.",
    icon: LinkedinIcon,
    color: "#0A66C2",
    link: "https://linkedin.com/company/knowvy",
    badge: "Professional Network",
    cta: "Connect on LinkedIn",
  },
  {
    name: "Twitter / X",
    desc: "Stay in the loop with open source PR sprints, tech news, live dev tweets, and project ship logs.",
    icon: TwitterIcon,
    color: "#1DA1F2",
    link: "https://x.com/knowvytech",
    badge: "@knowvytech",
    cta: "Follow on X",
  },
  {
    name: "WhatsApp Group",
    desc: "Join our main Bhopal developer chat for daily announcements, event passes, and rapid updates.",
    icon: MessageCircle,
    color: "#25D366",
    link: "https://chat.whatsapp.com/ByhJB7Rs9jpHcwGIUPWq9j",
    badge: "Most Active",
    cta: "Join WhatsApp",
  },
  {
    name: "Instagram",
    desc: "Follow event highlights, behind-the-scenes reels, hackathon photos, and community stories.",
    icon: InstagramIcon,
    color: "#E4405F",
    link: "https://instagram.com/knowvy.technologies",
    badge: "@knowvy.technologies",
    cta: "Follow Insta",
  },
];

export function JoinUsSection() {
  const [copied, setCopied] = useState(false);

  const copyInvite = () => {
    navigator.clipboard.writeText("https://chat.whatsapp.com/ByhJB7Rs9jpHcwGIUPWq9j");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="join" className="relative py-32 bg-background overflow-hidden select-none">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Prominent Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#06b6d4]/20 via-[#8b5cf6]/15 to-pink-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Prominent Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[#06b6d4] font-mono text-xs uppercase font-bold tracking-widest mb-6">
            <Sparkles size={14} /> MAIN CONVERSION HUB ● JOIN US TODAY
          </div>

          <h2 className="font-serif font-normal text-foreground uppercase leading-[0.98] tracking-tight" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}>
            Become a part of <br />
            <span className="font-serif italic lowercase bg-clip-text text-transparent bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#ec4899]">
              Knowvy Technologies
            </span>
          </h2>

          <p className="text-muted-foreground mt-5 font-sans text-base md:text-lg leading-relaxed">
            Ready to build, learn, and grow with Bhopal's premier student developer collective? Join our official communication channels below.
          </p>
        </motion.div>

        {/* 4 Prominent Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {COMMUNITY_LINKS.map((item, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: item.color + "60" }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl border border-border bg-card/5 hover:bg-card/5 transition-all duration-300 group flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[220px]"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-foreground transition-transform group-hover:scale-110 shadow-lg"
                    style={{
                      backgroundColor: item.color + "20",
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={24} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: item.color + "15",
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif italic text-2xl text-foreground font-bold group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {item.name}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#06b6d4]" />
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 border-t border-border pt-4 mt-6 flex items-center justify-between text-xs font-mono font-bold text-foreground">
                <span className="text-[#06b6d4]">{item.cta}</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">Direct Link →</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Invite Link Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#06b6d4]/10 via-purple-600/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#06b6d4]" />
            <div>
              <h4 className="font-serif italic text-base text-foreground font-bold">Share Knowvy Bhopal with Friends</h4>
              <p className="font-mono text-[10px] text-muted-foreground">Invite fellow college students and tech enthusiasts.</p>
            </div>
          </div>

          <button
            onClick={copyInvite}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-muted hover:bg-white/20 text-foreground font-mono text-xs font-bold transition-all cursor-pointer shrink-0"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Link Copied!" : "Copy Community Link"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
