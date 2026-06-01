"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#0B1020] pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white">
                TW
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Workshop<span className="text-primary">26</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering the next generation of developers with industry-ready skills and real-world project experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#why-attend" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="#schedule" className="text-gray-400 hover:text-white transition-colors">Schedule</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">Terms of Service <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">Privacy Policy <ArrowUpRight className="w-3 h-3" /></Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">Code of Conduct <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Tech Workshop. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">Made for College Students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
