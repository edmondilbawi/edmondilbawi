"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const roots = ["Lens", "Connection", "Character", "Building", "Becoming"];

type BeyondPortfolioBridgeProps = {
  onEnterLibrary: () => void;
};

export function BeyondPortfolioBridge({
  onEnterLibrary
}: BeyondPortfolioBridgeProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-y border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(5,5,5,0.92))] py-20 sm:py-24"
      id="beyond-portfolio"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:42px_42px] opacity-[0.12]" />
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.4 }
            : { opacity: [0.28, 0.55, 0.28], scale: [0.97, 1.03, 0.97] }
        }
        className="pointer-events-none absolute left-[12%] right-[12%] top-[18%] h-56 rounded-full bg-gold/[0.07] blur-3xl"
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: shouldReduceMotion ? 0 : Infinity
        }}
      />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 bottom-0" />
      <div className="section-shell relative">
        <motion.div
          className="group mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Sparkles
              aria-hidden
              className="transition-all duration-200 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
              size={15}
            />
            BEYOND THE PORTFOLIO / VERSION 21
          </p>
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-semibold text-ink sm:text-5xl">
            Before the work, there is the mindset.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/85 sm:text-lg sm:leading-8">
            The projects are visible. Underneath them are five roots: the
            lessons, habits, and reflections that shaped how I think at 21.
          </p>

          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {roots.map((root, index) => (
              <span
                className="group/root inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-gold/[0.06] hover:text-gold hover:shadow-gold-soft"
                key={root}
              >
                <span className="font-mono text-[9px] text-gold/55">
                  0{index + 1}
                </span>
                {root}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-7 flex max-w-xl flex-col items-center justify-center gap-2 rounded-md border border-gold/15 bg-black/25 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:flex-row sm:gap-4">
            <GitBranch aria-hidden className="text-gold" size={15} />
            <span>5 roots</span>
            <span className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />
            <span>21 reflections</span>
            <span className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />
            <span>First saved checkpoint</span>
          </div>

          <div className="mt-8">
            <Button
              className="hover:-translate-y-1 hover:shadow-[0_0_54px_rgba(212,175,55,0.34)]"
              icon={<ArrowRight aria-hidden size={18} />}
              onClick={onEnterLibrary}
              variant="primary"
            >
              Enter 21% Library
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
