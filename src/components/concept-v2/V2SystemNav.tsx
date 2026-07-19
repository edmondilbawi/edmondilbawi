"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { CircleDot } from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";

export function V2SystemNav() {
  const { scrollYProgress } = useScroll();
  const { t } = useV2Language();
  const scaleX = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 130
  });
  const scenes = [
    { label: t.nav.home, href: "#v2-home" },
    { label: t.nav.loaded, href: "/21-loaded" },
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
            className="focus-ring group flex items-center gap-5 rounded-sm"
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
            aria-label="Concept V2 scenes"
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
              className="focus-ring group flex min-h-10 items-center gap-2 rounded-sm border border-gold/40 bg-gold/[0.08] px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gold transition-all duration-200 hover:bg-gold hover:text-black xl:hidden"
              href="/21-loaded"
            >
              <CircleDot
                aria-hidden
                className="transition-transform duration-200 group-hover:scale-110"
                size={14}
              />
              <span className="hidden sm:inline">{t.nav.loaded}</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
