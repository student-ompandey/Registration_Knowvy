"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#why-attend" },
    { name: "Benefits", href: "#benefits" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110">
            <img src="/logo.png" alt="Microsoft Build Bhopal Logo" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Microsoft Build
            </span>
            <span className="font-mono text-[10px] md:text-xs text-primary uppercase tracking-[0.2em] -mt-1">
              //localhost: Bhopal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/register">
            <Button className="bg-primary/10 hover:bg-primary border border-primary/50 hover:border-primary text-primary hover:text-black font-mono uppercase tracking-widest rounded-xl px-8 h-11 transition-all duration-500 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] backdrop-blur-sm">
              Register Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block font-mono text-gray-300 hover:text-white text-lg tracking-wider uppercase border-b border-white/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/register" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-mono font-bold uppercase tracking-widest rounded-xl h-12 transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  Register Now
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
