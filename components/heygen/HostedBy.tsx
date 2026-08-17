"use client";

import Link from "next/link";
import { ArrowUpRight, Award, ShieldCheck, Heart } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/ui/kit";
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { SERIES } from "@/app/heygen/data";

export function HostedBy() {
  return (
    <Section id="hosted" tone="base">
      <SectionHead
        index="06"
        eyebrow="Leadership & Credits"
        title={
          <>
            Organized by <span className="hg-grad">Knowvy Technologies</span>
          </>
        }
        aside="Driven by the HeyGen India Ambassador network and the student developer community."
      />

      {/* Logo Co-Brand Lockup */}
      <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <img
          src="/heygen/heygen-logo.png"
          alt="HeyGen"
          className="h-8 w-auto dark:brightness-0 dark:invert"
        />
        <span className="text-xl font-bold text-muted-foreground">✕</span>
        <img
          src="/Knowvy.png"
          alt="Knowvy Technologies"
          className="h-10 w-auto"
        />
      </Reveal>

      {/* 2 Credit Cards */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Knowvy Card */}
        <Reveal className="u-card flex flex-col justify-between p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="u-label-sm inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-bold text-brand">
                <ShieldCheck size={13} />
                Movement Lead
              </span>
              <span className="u-label-sm text-muted-foreground">Community Partner</span>
            </div>

            <h3 className="hg-display mt-6 text-2xl text-foreground">
              Knowvy Technologies
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Special thanks to <strong>Knowvy Technologies</strong> for taking the initiative and leading the HeyGen India RoadShow movement across all 9 cities.
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <Link
              href="/"
              className="u-btn u-btn-ghost w-full justify-between"
            >
              <span>Explore Knowvy Community</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Ambassador Card */}
        <Reveal delay={0.1} className="u-card flex flex-col justify-between p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="u-label-sm inline-flex items-center gap-1.5 rounded-full bg-pop/20 px-3 py-1 font-bold text-pop-ink">
                <Award size={13} />
                HeyGen Ambassador
              </span>
              <span className="u-label-sm text-muted-foreground">Series Host</span>
            </div>

            <h3 className="hg-display mt-6 text-2xl text-foreground">
              Mohneesh Gupta
            </h3>
            <p className="mt-1 text-xs font-semibold text-brand">
              HeyGen India Ambassador & Community Founder
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Leading the charge to connect developers, creators, and business minds with the next frontier of generative video workflows.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <span className="u-label-sm text-muted-foreground">Connect with Mohneesh</span>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/in/mohneesh-gupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={SERIES.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <TwitterIcon size={14} />
              </a>
              <a
                href="https://github.com/mohneesh-gupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              >
                <GithubIcon size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
