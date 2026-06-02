"use client";

import Link from "next/link";
import { ArrowUpRight, Terminal, Phone, Mail } from "lucide-react";

// Inline SVGs for brand icons removed from lucide-react v1+
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="Microsoft Build Bhopal Logo" className="w-10 h-10 object-contain" />
              <span className="font-mono font-bold text-2xl tracking-tighter text-white uppercase">
                Microsoft Build <span className="text-primary">Bhopal</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 font-sans">
              Moving Beyond the Prompt: Engineering Real-World AI Agents with Microsoft and Azure technologies.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" /> Quick Links
            </h4>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><Link href="#home" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 before:content-['>'] before:text-primary/50 hover:before:text-primary">Home</Link></li>
              <li><Link href="#why-attend" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 before:content-['>'] before:text-primary/50 hover:before:text-primary">About</Link></li>
              <li><Link href="#benefits" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 before:content-['>'] before:text-primary/50 hover:before:text-primary">Benefits</Link></li>
              <li><Link href="#schedule" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 before:content-['>'] before:text-primary/50 hover:before:text-primary">Schedule</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 before:content-['>'] before:text-primary/50 hover:before:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" /> Legal
            </h4>
            <ul className="space-y-3 font-mono text-sm uppercase">
              <li><Link href="/terms#terms" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Terms of Service <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/terms#privacy" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Privacy Policy <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/terms#conduct" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Code of Conduct <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" /> Contact
            </h4>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com/knowvy_technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm border border-white/10 bg-black/30 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com/company/knowvy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm border border-white/10 bg-black/30 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/knowvytech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-sm border border-white/10 bg-black/30 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <TwitterIcon />
              </a>
            </div>

            {/* Phone & Email */}
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href="tel:+919993849783"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                  <span>+91 9993849783</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:knowvy.tech@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                  <span>knowvy.tech@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dashed border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs uppercase tracking-widest text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} KNOWVY TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> SYSTEM_ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
