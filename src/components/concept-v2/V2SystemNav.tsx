"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { CircleDot, Menu, X } from "lucide-react";
import { useState } from "react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { withSiteBasePath } from "@/utils/sitePath";

export function V2SystemNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { t } = useV2Language();
  const scaleX = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 130
  });
  const scenes = [
    { label: t.nav.home, href: "#v2-home" },
    { label: t.nav.loaded, href: withSiteBasePath("/21-loaded/") },
    { label: t.nav.about, href: "#v2-about" },
    { label: t.nav.skills, href: "#v2-skills" },
    { label: t.nav.projects, href: "#v2-projects" },
    { label: t.nav.experience, href: "#v2-experience" },
    { label: t.nav.contact, href: "#v2-contact" }
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-background/85 backdrop-blur-xl">
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
          style={{ scaleX }}
        />
        <div className="mx-auto flex min-h-16 w-full max-w-[96rem] items-center justify-between gap-3 px-5 sm:gap-4 sm:px-6 lg:min-h-[5.75rem] lg:px-8">
          <a
            className="focus-ring group flex min-h-11 items-center gap-5 rounded-sm"
            href="#v2-home"
          >
            <span className="status-pulse h-2.5 w-2.5 rounded-full bg-gold" />
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-ink lg:text-base">
                {t.hero.fullName}
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-gold/80 lg:text-[11px]">
                {t.nav.portfolio}
              </span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden xl:ml-auto xl:mr-[3.25rem] xl:block"
          >
            <ul className="flex items-center gap-14">
              {scenes.map((scene) => (
                <li key={scene.href}>
                  <a
                    className="focus-ring group flex items-center rounded-sm py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-gold"
                    href={scene.href}
                  >
                    {scene.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              aria-label={t.hero.exploreLoaded}
              className="focus-ring group flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-gold/40 bg-gold/[0.08] px-0 text-[10px] font-bold uppercase tracking-[0.14em] text-gold transition-all duration-200 hover:bg-gold hover:text-black sm:px-3 xl:hidden"
              href={withSiteBasePath("/21-loaded/")}
            >
              <CircleDot
                aria-hidden
                className="transition-transform duration-200 group-hover:scale-110"
                size={14}
              />
              <span className="hidden sm:inline">{t.nav.loaded}</span>
            </a>
            <button
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-white/15 bg-white/[0.045] text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              {isOpen ? <X aria-hidden size={19} /> : <Menu aria-hidden size={19} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-white/[0.07] bg-background/95 px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:hidden"
          >
            <ul className="mx-auto grid max-w-[96rem] gap-1">
              {scenes.map((scene) => (
                <li key={scene.href}>
                  <a
                    className="focus-ring flex min-h-11 items-center rounded-sm border-l border-transparent px-3 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-gold/55 hover:bg-gold/[0.055] hover:text-ink"
                    href={scene.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {scene.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
