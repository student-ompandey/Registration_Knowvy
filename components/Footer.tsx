"use client";

import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 border border-primary/50 flex items-center justify-center font-mono font-bold text-primary rotate-45 group-hover:bg-primary/10 transition-colors">
                <span className="-rotate-45">MB</span>
              </div>
              <span className="font-mono font-bold text-2xl tracking-tighter text-white uppercase">
                LOCALHOST<span className="text-primary">_BHOPAL</span>
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
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Terms of Service <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Privacy Policy <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-between group">Code of Conduct <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
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
