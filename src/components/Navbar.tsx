"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolioContent";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 150
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));
    let frameId = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const checkpoint = window.scrollY + window.innerHeight * 0.34;
        const activeSection = sections.reduce(
          (current, section) =>
            section.offsetTop <= checkpoint ? section : current,
          sections[0]
        );

        if (activeSection) {
          setActiveHref(`#${activeSection.id}`);
        }
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/[0.78] shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="section-shell flex h-16 items-center justify-between"
      >
        <a
          className="focus-ring group inline-flex items-center gap-3 rounded-md"
          href="#home"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/[0.35] bg-gold/[0.1] text-xs font-semibold text-gold transition-all duration-200 group-hover:scale-105 group-hover:border-gold/60 group-hover:shadow-gold-soft"
          >
            EI
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-200 group-hover:text-gold">
            Edmond Ilbawi
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              aria-current={activeHref === item.href ? "page" : undefined}
              className={`focus-ring relative rounded-md px-3 py-2 text-sm transition-all duration-200 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-200 hover:bg-white/[0.04] hover:text-ink active:text-gold ${
                activeHref === item.href
                  ? "bg-white/[0.035] text-ink after:scale-x-100"
                  : "text-muted after:scale-x-0 hover:after:scale-x-100"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="focus-ring group inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white/[0.04] text-ink transition-all duration-200 hover:border-gold/30 hover:text-gold lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? (
            <X
              aria-hidden
              className="transition-all duration-200 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
              size={20}
            />
          ) : (
            <Menu
              aria-hidden
              className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
              size={20}
            />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-background/[0.96] px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`focus-ring rounded-md border-l px-3 py-3 text-sm transition-all duration-200 hover:translate-x-1 hover:border-gold/50 hover:bg-white/[0.06] hover:text-ink active:text-gold ${
                  activeHref === item.href
                    ? "border-gold/60 bg-gold/[0.06] text-ink"
                    : "border-transparent text-muted"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gold shadow-gold-soft"
        style={{ scaleX: progressScale }}
      />
    </header>
  );
}
