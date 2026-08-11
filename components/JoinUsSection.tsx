"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Copy, ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { Section, Reveal, revealUp, stagger } from "./ui/kit";

const WHATSAPP_INVITE = "https://chat.whatsapp.com/ByhJB7Rs9jpHcwGIUPWq9j";

const COMMUNITY_LINKS = [
  {
    name: "LinkedIn Page",
    desc: "Connect for professional networking, workshop certificates, speaker spotlights, and career referrals.",
    icon: LinkedinIcon,
    link: "https://linkedin.com/company/knowvy",
    badge: "Professional Network",
    cta: "Connect on LinkedIn",
  },
  {
    name: "Twitter / X",
    desc: "Stay in the loop with open source PR sprints, tech news, live dev tweets, and project ship logs.",
    icon: TwitterIcon,
    link: "https://x.com/knowvytech",
    badge: "@knowvytech",
    cta: "Follow on X",
  },
  {
    name: "WhatsApp Group",
    desc: "Join our main Bhopal developer chat for daily announcements, event passes, and rapid updates.",
    icon: MessageCircle,
    link: WHATSAPP_INVITE,
    badge: "Most Active",
    cta: "Join WhatsApp",
  },
  {
    name: "Instagram",
    desc: "Follow event highlights, behind-the-scenes reels, hackathon photos, and community stories.",
    icon: InstagramIcon,
    link: "https://instagram.com/knowvy.technologies",
    badge: "@knowvy.technologies",
    cta: "Follow Insta",
  },
];

export function JoinUsSection() {
  const [copied, setCopied] = useState(false);

  const copyInvite = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_INVITE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the cards below still link out directly */
    }
  };

  return (
    <Section id="join" tone="brand" divider={false} className="select-none">
      {/* Header */}
      <Reveal className="mx-auto max-w-4xl text-center">
        <span className="u-label inline-flex items-center gap-2.5">
          <span className="u-pulse inline-block size-1.5 rounded-full bg-pop" />
          Join us today
        </span>
        <h2 className="u-display u-d2 mt-6 text-balance">
          Become a part of Knowvy Technologies
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[0.9375rem] leading-relaxed opacity-75">
          Ready to build, learn, and grow with Bhopal&rsquo;s premier student
          developer collective? Join our official communication channels below.
        </p>
      </Reveal>

      {/* Channel cards */}
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2"
      >
        {COMMUNITY_LINKS.map((item) => (
          <motion.li key={item.name} variants={revealUp}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/[0.08] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/[0.14]"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:-rotate-6">
                    <item.icon size={19} />
                  </span>
                  <span className="u-label-sm rounded-full border border-white/25 px-2.5 py-1.5 opacity-80">
                    {item.badge}
                  </span>
                </div>

                <h3 className="u-display mt-7 flex items-center gap-2 text-2xl leading-none">
                  {item.name}
                  <ArrowUpRight
                    size={20}
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-relaxed opacity-70">
                  {item.desc}
                </p>
              </div>

              <div className="u-label-sm mt-8 flex items-center justify-between border-t border-white/20 pt-4">
                <span>{item.cta}</span>
                <span className="opacity-60">Direct link →</span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Invite banner */}
      <Reveal
        delay={0.08}
        className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/[0.08] p-6 sm:flex-row"
      >
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold">Share Knowvy Bhopal with friends</h3>
          <p className="u-label-sm mt-2 opacity-70">
            Invite fellow college students and tech enthusiasts
          </p>
        </div>

        <button
          onClick={copyInvite}
          className="u-btn u-btn-pop h-11 shrink-0 px-5 text-[0.8125rem]"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Link copied" : "Copy community link"}
        </button>
      </Reveal>
    </Section>
  );
}
