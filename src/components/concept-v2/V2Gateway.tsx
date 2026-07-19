"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function V2Gateway() {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-16 overflow-hidden py-10 sm:py-12 lg:py-14"
      id="v2-archive"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_25%,rgba(212,175,55,0.11),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:64px_64px] opacity-[0.04]" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.35, once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="v2-panel-surface relative overflow-hidden rounded-sm border-gold/25 px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-1/2 h-52 w-[38rem] -translate-y-1/2 rounded-[50%] border-t border-gold/30 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_68%)]"
          />
          <div className="relative grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Digital journal
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                21% Loaded
              </h2>
              <p className="mt-3 text-base font-medium text-ink/90 sm:text-lg">
                Five roots. Twenty-one reflections. One version still loading.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                A deeper layer of the portfolio: the mindset, questions, and
                reflections behind the work.
              </p>
            </div>

            <Button
              className="w-full sm:w-auto sm:min-w-56"
              href="/21-loaded"
              icon={<ArrowUpRight aria-hidden size={18} />}
              variant="secondary"
            >
              Explore 21% Loaded
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
