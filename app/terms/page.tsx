"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Shield, UserCheck, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    if (window.location.hash) {
      const rawHash = window.location.hash.substring(1).split("#")[0];
      const element = document.getElementById(rawHash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#02010d] transition-colors duration-500">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background grids */}
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none -z-10" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs text-[#06b6d4] uppercase tracking-[0.2em] font-bold block mb-4"
            >
              LEGAL DOCUMENTATION
            </motion.span>
            <h1 className="font-serif font-normal text-white uppercase leading-[1.0] tracking-tight text-3xl md:text-5xl mb-4">
              Terms & <span className="font-serif italic lowercase text-[#06b6d4]">protocols</span>
            </h1>
            <p className="text-white/60 text-sm font-sans max-w-xl mx-auto">
              Please review the guidelines, terms of service, and privacy policies for Knowvy Technologies.
            </p>
          </div>

          <div className="space-y-12">
            {/* Quick Navigation Links */}
            <div className="grid grid-cols-3 gap-2 p-2 bg-white/[0.01] border border-white/5 rounded-full font-mono text-[10px] uppercase text-center">
              <button onClick={() => scrollTo("terms")} className="text-[#06b6d4] hover:text-white transition-colors py-2 border-r border-white/5 cursor-pointer">Terms</button>
              <button onClick={() => scrollTo("privacy")} className="text-[#06b6d4] hover:text-white transition-colors py-2 border-r border-white/5 cursor-pointer">Privacy</button>
              <button onClick={() => scrollTo("conduct")} className="text-[#06b6d4] hover:text-white transition-colors py-2 cursor-pointer">Conduct</button>
            </div>

            {/* SECTION 1: TERMS OF SERVICE */}
            <motion.section
              id="terms"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#06b6d4]/20 transition-all duration-300"
            >
              <h2 className="text-xl font-serif italic text-white mb-6 uppercase flex items-center gap-3">
                <FileText className="text-[#06b6d4] w-5 h-5" /> Terms of Service
              </h2>

              <div className="space-y-6 text-white/70 font-sans text-xs sm:text-sm leading-relaxed">
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">1. Ticket Eligibility & Verification</h3>
                  <p>
                    Your registration is only confirmed once the UTR (12-digit transaction ID) is verified by our admin board. Fraudulent UTR input will lead to immediate cancellation of your ticket without a refund. Tickets are non-transferable without direct confirmation from the organizing team.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">2. Mandatory Requirements for Participants</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/55">
                    <li>Admittance to the venue is strictly prohibited without confirmed registration or formal approval from the organizing committee.</li>
                    <li>Participants must present the official confirmation email containing their unique verification code sent by our team at the check-in desk.</li>
                    <li>Bring your own laptop, charger, and extensions (if required) for the hands-on development sessions.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">3. Device Safety & Personal Liability</h3>
                  <p>
                    Participants are solely responsible for their personal devices (laptops, phones, etc.) and belongings. The organizers, volunteers, and the host venue partners will not be held liable for any theft, damage, or loss of items during the event.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* SECTION 2: PRIVACY POLICY */}
            <motion.section
              id="privacy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#06b6d4]/20 transition-all duration-300"
            >
              <h2 className="text-xl font-serif italic text-white mb-6 uppercase flex items-center gap-3">
                <Shield className="text-[#06b6d4] w-5 h-5" /> Privacy Policy
              </h2>

              <div className="space-y-6 text-white/70 font-sans text-xs sm:text-sm leading-relaxed">
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">1. Data Storage & Usage</h3>
                  <p>
                    We collect your Name, Email, Phone Number, College, Branch, Year, and UTR during registration. This data is securely stored and used only for managing check-ins, verifying payments, sending important updates regarding the workshop, and issuing digital participation certificates.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">2. Information Sharing</h3>
                  <p>
                    We value your privacy. We do not sell or lease your personal information. Relevant details (such as names and emails) may be securely shared with our community and venue partners solely for the purpose of granting system access, checking security, or facilitating participation certificates.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">3. Media Capture (Photography & Video)</h3>
                  <p>
                    By attending this event, you understand that professional photography, video recording, and live streaming will take place. You agree that the captured media featuring your likeness may be used on social media platforms, websites, and marketing materials for future community events.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* SECTION 3: CODE OF CONDUCT */}
            <motion.section
              id="conduct"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 bg-white/[0.01] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#06b6d4]/20 transition-all duration-300"
            >
              <h2 className="text-xl font-serif italic text-white mb-6 uppercase flex items-center gap-3">
                <UserCheck className="text-[#06b6d4] w-5 h-5" /> Code of Conduct
              </h2>

              <div className="space-y-6 text-white/70 font-sans text-xs sm:text-sm leading-relaxed">
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-xs font-mono text-white/80 mb-4 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-red-400 font-bold">CRITICAL WARNING:</span> Violation of the Code of Conduct can result in immediate expulsion from the workshop, cancellation of registration badges, and blacklisting from future developer community events.
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">1. Respect & Inclusivity</h3>
                  <p>
                    Knowvy Technologies is committed to providing a safe, welcoming, and harassment-free learning experience for everyone regardless of gender, sexual orientation, disability, race, religion, or technical experience. Aggressive behavior, offensive remarks, or harassment of any form will not be tolerated.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">2. Collaboration & Integrity</h3>
                  <p>
                    During labs and team challenges, respect other developers' work. Plagiarism or accessing other participants' private configurations/keys without consent is strictly prohibited. Work collaboratively and help others learn.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono text-[11px] uppercase tracking-wider mb-2">3. Venue Etiquette</h3>
                  <p>
                    Show respect to the host venue by maintaining cleanliness, throwing waste in garbage bins, and refraining from entering restricted building zones. Follow security protocols and directions from organizers and volunteers at all times.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
