"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Terminal, Shield, FileText, UserCheck, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function TermsPage() {
  // Smooth scroll to hash on load — strip any extra hashes just in case
  useEffect(() => {
    if (window.location.hash) {
      // Take only the first hash segment in case of stacked hashes
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
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow pt-28 pb-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white uppercase">
                LEGAL_PROTOCOLS<span className="text-primary animate-pulse">_</span>
              </h1>
              <div className="h-[1px] w-8 border-t border-dashed border-primary/50"></div>
            </motion.div>
            <p className="text-gray-400 text-lg font-sans max-w-2xl mx-auto">
              Please review the guidelines, terms of service, and privacy policies for Microsoft Build Bhopal 2026.
            </p>
          </div>

          <div className="space-y-12">
            {/* Quick Navigation Links */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-black/40 border border-white/10 rounded-sm font-mono text-xs uppercase text-center">
              <button onClick={() => scrollTo("terms")} className="text-primary hover:text-white transition-colors py-2 border-r border-white/10 cursor-pointer">Terms of Service</button>
              <button onClick={() => scrollTo("privacy")} className="text-primary hover:text-white transition-colors py-2 border-r border-white/10 cursor-pointer">Privacy Policy</button>
              <button onClick={() => scrollTo("conduct")} className="text-primary hover:text-white transition-colors py-2 cursor-pointer">Code of Conduct</button>
            </div>

            {/* SECTION 1: TERMS OF SERVICE */}
            <motion.section
              id="terms"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 bg-black/30 border border-white/5 p-8 rounded-lg relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
              <h2 className="text-2xl font-mono font-bold text-white mb-6 uppercase flex items-center gap-3">
                <FileText className="text-primary w-6 h-6" /> Terms of Service
              </h2>

              <div className="space-y-6 text-gray-300 font-sans text-sm leading-relaxed">
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">1. Ticket Eligibility & Verification</h3>
                  <p>
                    Your registration is only confirmed once the UTR (12-digit transaction ID) is verified by our admin board. Fraudulent UTR input will lead to immediate cancellation of your ticket without a refund. Tickets are non-transferable without direct confirmation from the organizing team.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">2. Mandatory Requirements for Participants</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Admittance to the venue is strictly prohibited without confirmed registration or formal approval from the organizing committee.</li>
                    <li>Participants must present the official confirmation email containing their unique verification code sent by our team at the check-in desk.</li>
                    <li>Bring your own laptop, charger, and extensions (if required) for the hands-on Azure development sessions.</li>

                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">3. Device Safety & Personal Liability</h3>
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
              className="scroll-mt-28 bg-black/30 border border-white/5 p-8 rounded-lg relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
              <h2 className="text-2xl font-mono font-bold text-white mb-6 uppercase flex items-center gap-3">
                <Shield className="text-primary w-6 h-6" /> Privacy Policy
              </h2>

              <div className="space-y-6 text-gray-300 font-sans text-sm leading-relaxed">
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">1. Data Storage & Usage</h3>
                  <p>
                    We collect your Name, Email, Phone Number, College, Branch, Year, and UTR during registration. This data is securely stored and used only for managing check-ins, verify payments, sending important updates regarding the workshop, and issuing digital participation certificates.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">2. Information Sharing</h3>
                  <p>
                    We value your privacy. We do not sell or lease your personal information. Relevant details (such as names and emails) may be securely shared with Microsoft and venue partners solely for the purpose of granting system access, checking security, or facilitating participation certificates.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">3. Media Capture (Photography & Video)</h3>
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
              className="scroll-mt-28 bg-black/30 border border-white/5 p-8 rounded-lg relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
              <h2 className="text-2xl font-mono font-bold text-white mb-6 uppercase flex items-center gap-3">
                <UserCheck className="text-primary w-6 h-6" /> Code of Conduct
              </h2>

              <div className="space-y-6 text-gray-300 font-sans text-sm leading-relaxed">
                <div className="p-4 bg-primary/5 border border-primary/20 text-xs font-mono text-gray-300 mb-4 rounded flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-primary font-bold">CRITICAL WARNING:</span> Violation of the Code of Conduct can result in immediate expulsion from the workshop, cancellation of registration badges, and blacklisting from future developer community events.
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">1. Respect & Inclusivity</h3>
                  <p>
                    Microsoft Build Bhopal is committed to providing a safe, welcoming, and harassment-free learning experience for everyone regardless of gender, sexual orientation, disability, race, religion, or technical experience. Aggressive behavior, offensive remarks, or harassment of any form will not be tolerated.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">2. Collaboration & Integrity</h3>
                  <p>
                    During labs and team challenges, respect other developers' work. Plagiarism or accessing other participants' private configurations/keys without consent is strictly prohibited. Work collaboratively and help others learn.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-mono font-semibold uppercase mb-2">3. Venue Etiquette</h3>
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
