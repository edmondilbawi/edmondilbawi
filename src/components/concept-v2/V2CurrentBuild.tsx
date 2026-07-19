"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CircleDot,
  MessageSquareText,
  ScanSearch
} from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const areaVisuals = [
  {
    icon: Braces,
    layout: "lg:col-span-7"
  },
  {
    icon: ScanSearch,
    layout: "lg:col-span-5"
  },
  {
    icon: MessageSquareText,
    layout: "lg:col-span-5"
  },
  {
    icon: CircleDot,
    layout: "lg:col-span-7"
  }
];

export function V2CurrentBuild() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-16 overflow-hidden py-12 sm:py-20 lg:py-24"
      id="v2-current-build"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(212,175,55,0.075),transparent_30%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-5 sm:px-6 lg:px-10">
        <motion.header
          className="max-w-4xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ amount: 0.4, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
            {t.currentFocus.title}
          </h2>
          <span className="mt-6 block h-px w-32 bg-gradient-to-r from-gold/65 to-transparent" />
        </motion.header>

        <div className="mt-8 grid gap-4 sm:mt-9 lg:grid-cols-12">
          {areaVisuals.map((area, index) => {
            const Icon = area.icon;
            const copy = t.currentFocus.areas[index];

            return (
              <motion.article
                className={`v2-card-surface group relative flex h-full min-h-[11.5rem] flex-col overflow-hidden rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-soft sm:min-h-56 sm:p-6 ${area.layout}`}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: index % 2 === 0 ? -18 : 18, y: 16 }
                }
                key={copy.title}
                transition={{ delay: index * 0.07, duration: 0.48 }}
                viewport={{ amount: 0.28, once: true }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
              >
                <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.11),transparent_70%)]" />
                <div className="relative flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-sm border border-gold/25 bg-gold/[0.07] text-gold transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
                    <Icon aria-hidden size={19} />
                  </span>
                </div>
                <h3 className="relative mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink sm:mt-6">
                  {copy.title}
                </h3>
                <p className="relative mt-3 max-w-2xl text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                  {copy.text}
                </p>
                <span className="relative mt-auto h-px w-16 translate-y-2 bg-gradient-to-r from-gold/45 to-transparent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
