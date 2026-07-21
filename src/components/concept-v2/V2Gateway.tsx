"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function V2Gateway() {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-16 overflow-hidden py-7 sm:py-12 lg:py-14"
      id="v2-archive"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_25%,rgba(212,175,55,0.11),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:64px_64px] opacity-[0.04]" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.35, once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="v2-panel-surface relative overflow-hidden rounded-sm border-gold/25 px-4 py-6 sm:px-8 sm:py-9 lg:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-1/2 h-52 w-[38rem] -translate-y-1/2 rounded-[50%] border-t border-gold/30 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_68%)]"
          />
          <div className="relative">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Digital journal
              </p>
              <h2 className="mt-3 text-[2.15rem] font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                21% Loaded
              </h2>
              <p className="mt-3 text-base font-medium text-ink/90 sm:text-lg">
                Five roots. Twenty-one reflections. One version still loading.
              </p>
              <div className="relative mt-4 max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-black/35 px-4 py-4 shadow-[0_16px_42px_rgba(0,0,0,0.2),0_0_24px_rgba(212,175,55,0.035)] sm:mt-5 sm:px-6 sm:py-5">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent"
                />
                <p className="text-sm leading-7 text-ink/80 sm:text-base">
                  A CV can show milestones, but it cannot show the full journey
                  behind them.
                </p>
                <p className="mt-3 text-sm leading-7 text-ink/80 sm:text-base">
                  21% Loaded was created to show the character, reflections,
                  and personal growth behind those milestones — the person I am
                  becoming while working toward them.
                </p>
              </div>

              <Button
                className="mt-3 w-full sm:mt-5 sm:w-auto sm:min-w-56"
                href="/21-loaded"
                icon={<ArrowUpRight aria-hidden size={18} />}
                variant="secondary"
              >
                Explore 21% Loaded
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
