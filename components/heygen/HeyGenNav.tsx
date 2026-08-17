"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS, SERIES } from "@/app/heygen/data";
import { EASE } from "@/components/ui/kit";

export function HeyGenNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-link via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 select-none">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className={`mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 transition-all duration-300 md:px-10 ${scrolled ? "py-3" : "py-5"
            }`}
        >
          {/* Co-brand lockup */}
          <div className="flex shrink-0 items-center gap-3">
            <img
              src="/heygen/heygen-logo.png"
              alt="HeyGen"
              className="h-6 w-auto dark:brightness-0 dark:invert"
            />
            <span className="h-5 w-px bg-border" />
            <Link href="/" className="group flex items-center gap-2">
              <img
                src="/Knowvy.png"
                alt="Knowvy Technologies"
                className="h-7 w-auto"
              />
            </Link>
            <span className="u-label hidden text-muted-foreground sm:inline">
              {SERIES.hashtag}
            </span>
          </div>

          {/* Centred pill nav */}
          <nav
            className={`hidden items-center gap-0.5 rounded-full border p-1 transition-all duration-300 lg:flex ${scrolled
                ? "border-border bg-background/80 shadow-[var(--shadow-card)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
              }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-3 py-2 text-[12.5px] font-medium transition-colors duration-200 hover:bg-surface-2 hover:text-foreground ${activeHash === link.href.replace("#", "")
                    ? "text-foreground"
                    : "text-muted-foreground"
                  }`}
              >
                {link.name}
                {activeHash === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="hg-nav-active"
                    className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <a
              href={SERIES.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <span
                className="u-btn h-10 px-5 text-[12.5px] text-white"
                style={{ background: "var(--hg-grad-cta)" }}
              >
                Connect on X <ArrowUpRight size={15} />
              </span>
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="grid size-10 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-xl transition-colors hover:border-border-strong lg:hidden"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <div>
                <Link
                  href="/"
                  className="u-label-sm mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft size={14} /> Back to Knowvy
                </Link>
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.04 + i * 0.035,
                        duration: 0.4,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-baseline justify-between border-b border-border py-4"
                      >
                        <span className="hg-display text-[7vw] leading-none sm:text-3xl">
                          {link.name}
                        </span>
                        <span className="u-label-sm text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <a
                href={SERIES.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-8"
              >
                <span
                  className="u-btn w-full text-white"
                  style={{ background: "var(--hg-grad-cta)" }}
                >
                  Follow on X ({SERIES.twitterHandle}) <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
