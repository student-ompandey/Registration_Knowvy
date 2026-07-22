"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Past Events", href: "#past-events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Milestones", href: "#achievements" },
  { name: "Join Us", href: "#join" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition-active");
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
    setTimeout(() => document.documentElement.classList.remove("theme-transition-active"), 500);
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 select-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center justify-between border rounded-full px-6 py-2.5 transition-all duration-300 ${scrolled
          ? "bg-background/90 border-primary/30 backdrop-blur-xl shadow-[0_12px_40px_rgba(6,182,212,0.15)] dark:bg-black/90"
          : "bg-background/80 border-border backdrop-blur-md shadow-lg dark:bg-black/80 dark:border-white/10 dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-tr from-primary via-[#06b6d4] to-accent shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <span className="font-mono text-white text-sm font-black">K</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-foreground tracking-wider">
            <span>KNOWVY</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[12px] font-medium transition-all duration-200 ${link.href === "#join"
                ? "text-[#06b6d4] font-bold hover:text-cyan-300"
                : "text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CTA */}
          <Link href="#join">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#06b6d4] to-primary text-primary-foreground font-sans text-xs font-bold px-4 py-2 rounded-full transition-all cursor-pointer shadow-md"
            >
              <Sparkles size={12} /> Join Community
            </motion.button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-background/95 border border-border backdrop-blur-xl rounded-3xl p-6 shadow-2xl flex flex-col gap-3 dark:bg-black/95 dark:border-white/10"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border transition-colors flex items-center justify-between"
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={12} className="text-[#06b6d4]" />
              </Link>
            ))}
            <Link href="#join" onClick={() => setMobileOpen(false)}>
              <button className="w-full bg-gradient-to-r from-[#06b6d4] to-primary text-primary-foreground font-sans text-sm font-bold py-3 rounded-full mt-2 cursor-pointer shadow-lg flex items-center justify-center gap-2">
                <Sparkles size={14} /> Join Community
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
