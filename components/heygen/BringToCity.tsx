"use client";

import { Mail, ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { Section, SectionHead, Reveal } from "@/components/ui/kit";
import { SERIES } from "@/app/heygen/data";
import { TwitterIcon } from "@/components/SocialIcons";

export function BringToCity() {
  return (
    <Section id="partner" tone="raised">
      <SectionHead
        index="06"
        eyebrow="Get In Touch"
        title={
          <>
            Bring the roadshow <span className="hg-grad">to your city</span>
          </>
        }
        aside="Want to co-host, suggest a venue, partner, or have questions about an upcoming stop? Reach out directly."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Email Card */}
        <Reveal className="u-card flex flex-col justify-between p-8">
          <div>
            <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand mb-6">
              <Mail size={24} />
            </span>
            <h3 className="hg-display text-2xl text-foreground">
              Mail Us Directly
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you want to offer a community space/venue, request a session in your city, or partner with Knowvy Technologies & HeyGen, drop us a direct email.
            </p>
            <p className="u-label-sm mt-4 font-mono font-bold text-foreground">
              {SERIES.email}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href={SERIES.mailUrl}
              className="u-btn u-btn-primary w-full justify-between"
            >
              <span>Send Email</span>
              <Send size={15} />
            </a>
          </div>
        </Reveal>

        {/* Twitter / Contact Card */}
        <Reveal delay={0.1} className="u-card flex flex-col justify-between p-8">
          <div>
            <span className="grid size-12 place-items-center rounded-xl bg-pop/20 text-pop-ink mb-6">
              <TwitterIcon size={22} />
            </span>
            <h3 className="hg-display text-2xl text-foreground">
              Connect on X (Twitter)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For fastest updates, roadshow questions, or speaker collaborations, connect with Series Host & HeyGen India Ambassador <strong>Mohneesh Gupta</strong> on X.
            </p>
            <p className="u-label-sm mt-4 font-mono font-bold text-brand">
              x.com/mohneesh_gupta1
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <a
              href={SERIES.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn u-btn-ghost w-full justify-between hover:border-brand hover:text-brand"
            >
              <span>DM on X ({SERIES.twitterHandle})</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
