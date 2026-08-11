"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/kit";
import { FileText, Shield, UserCheck, AlertTriangle } from "lucide-react";

const SECTIONS = [
  {
    id: "terms",
    label: "Terms",
    title: "Terms of Service",
    icon: FileText,
    blocks: [
      {
        heading: "1. Ticket Eligibility & Verification",
        body: "Your registration is only confirmed once the UTR (12-digit transaction ID) is verified by our admin board. Fraudulent UTR input will lead to immediate cancellation of your ticket without a refund. Tickets are non-transferable without direct confirmation from the organizing team.",
      },
      {
        heading: "2. Mandatory Requirements for Participants",
        list: [
          "Admittance to the venue is strictly prohibited without confirmed registration or formal approval from the organizing committee.",
          "Participants must present the official confirmation email containing their unique verification code sent by our team at the check-in desk.",
          "Bring your own laptop, charger, and extensions (if required) for the hands-on development sessions.",
        ],
      },
      {
        heading: "3. Device Safety & Personal Liability",
        body: "Participants are solely responsible for their personal devices (laptops, phones, etc.) and belongings. The organizers, volunteers, and the host venue partners will not be held liable for any theft, damage, or loss of items during the event.",
      },
    ],
  },
  {
    id: "privacy",
    label: "Privacy",
    title: "Privacy Policy",
    icon: Shield,
    blocks: [
      {
        heading: "1. Data Storage & Usage",
        body: "We collect your Name, Email, Phone Number, College, Branch, Year, and UTR during registration. This data is securely stored and used only for managing check-ins, verifying payments, sending important updates regarding the workshop, and issuing digital participation certificates.",
      },
      {
        heading: "2. Information Sharing",
        body: "We value your privacy. We do not sell or lease your personal information. Relevant details (such as names and emails) may be securely shared with our community and venue partners solely for the purpose of granting system access, checking security, or facilitating participation certificates.",
      },
      {
        heading: "3. Media Capture (Photography & Video)",
        body: "By attending this event, you understand that professional photography, video recording, and live streaming will take place. You agree that the captured media featuring your likeness may be used on social media platforms, websites, and marketing materials for future community events.",
      },
    ],
  },
  {
    id: "conduct",
    label: "Conduct",
    title: "Code of Conduct",
    icon: UserCheck,
    warning:
      "Violation of the Code of Conduct can result in immediate expulsion from the workshop, cancellation of registration badges, and blacklisting from future developer community events.",
    blocks: [
      {
        heading: "1. Respect & Inclusivity",
        body: "Knowvy Technologies is committed to providing a safe, welcoming, and harassment-free learning experience for everyone regardless of gender, sexual orientation, disability, race, religion, or technical experience. Aggressive behavior, offensive remarks, or harassment of any form will not be tolerated.",
      },
      {
        heading: "2. Collaboration & Integrity",
        body: "During labs and team challenges, respect other developers' work. Plagiarism or accessing other participants' private configurations/keys without consent is strictly prohibited. Work collaboratively and help others learn.",
      },
      {
        heading: "3. Venue Etiquette",
        body: "Show respect to the host venue by maintaining cleanliness, throwing waste in garbage bins, and refraining from entering restricted building zones. Follow security protocols and directions from organizers and volunteers at all times.",
      },
    ],
  },
] as const;

export default function TermsPage() {
  const [activeId, setActiveId] = useState<string>("terms");

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1).split("#")[0];
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 120);
    }
  }, []);

  // Highlight whichever section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-grow pb-24 pt-40">
        <div className="mx-auto w-full max-w-3xl px-6">
          {/* Header */}
          <Reveal className="text-center">
            <span className="u-label inline-flex items-center gap-2.5">
              <span className="inline-block size-1.5 rounded-full bg-brand" />
              Legal documentation
            </span>
            <h1 className="u-display u-d2 mt-6">
              Terms & <span className="text-brand">protocols</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
              Please review the guidelines, terms of service, and privacy policies
              for Knowvy Technologies.
            </p>
          </Reveal>

          {/* Sticky section switcher */}
          <div className="sticky top-20 z-30 mt-12 flex justify-center">
            <div className="flex gap-1 rounded-full border border-border bg-background/85 p-1 backdrop-blur-xl">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`u-label-sm rounded-full px-4 py-2.5 transition-colors ${
                    activeId === s.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="mt-14 space-y-6">
            {SECTIONS.map((section) => (
              <Reveal key={section.id}>
                <section id={section.id} className="u-card scroll-mt-36 p-7 md:p-9">
                  <h2 className="u-display flex items-center gap-3 text-2xl leading-none">
                    <section.icon size={20} className="text-brand" />
                    {section.title}
                  </h2>

                  {"warning" in section && section.warning && (
                    <p className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-surface-2 p-4 text-[0.8125rem] leading-relaxed">
                      <AlertTriangle
                        size={17}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--danger)" }}
                      />
                      <span>
                        <strong style={{ color: "var(--danger)" }}>
                          Critical warning:
                        </strong>{" "}
                        {section.warning}
                      </span>
                    </p>
                  )}

                  <div className="mt-7 space-y-6">
                    {section.blocks.map((block) => (
                      <div key={block.heading}>
                        <h3 className="u-label-sm text-foreground">
                          {block.heading}
                        </h3>
                        {"body" in block && block.body && (
                          <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                            {block.body}
                          </p>
                        )}
                        {"list" in block && block.list && (
                          <ul className="mt-3 space-y-2.5">
                            {block.list.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.875rem] leading-relaxed text-muted-foreground"
                              >
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
