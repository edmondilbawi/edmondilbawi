"use client";

import { motion } from "framer-motion";
import { Activity, Binary, Boxes, GitBranch } from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const metricVisuals = [
  {
    value: "05",
    icon: GitBranch
  },
  {
    value: "21",
    icon: Binary
  },
  {
    value: "02",
    icon: Boxes
  }
];

export function V2Snapshot() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="v2-section-surface relative z-10 -mt-6 scroll-mt-16 overflow-hidden py-16 sm:py-20 lg:py-24"
      id="v2-snapshot"
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex max-w-xl items-center gap-3">
              <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                {t.snapshot.eyebrow}
              </p>
              <span className="h-px flex-1 bg-gold/25" />
            </div>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
              {t.snapshot.title}
              {t.snapshot.titleAccent ? (
                <span className="block text-muted">
                  {t.snapshot.titleAccent}
                </span>
              ) : null}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              {t.snapshot.text}
            </p>

            <div className="relative mx-auto mt-8 w-fit lg:mx-0">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(205,139,43,0.11),transparent_68%)] blur-xl" />
              <div className="pointer-events-none absolute left-[calc(100%-0.25rem)] top-1/2 hidden h-px w-28 bg-gradient-to-r from-gold/30 to-transparent lg:block" />
              <motion.div
                animate={
                  shouldReduceMotion ? undefined : { rotate: [0, 1.5, 0, -1.5, 0] }
                }
                className="relative grid h-44 w-44 place-items-center rounded-full border border-gold/25 p-4 shadow-[0_0_70px_rgba(205,139,43,0.09)] sm:h-48 sm:w-48"
                style={{
                  background:
                    "conic-gradient(#D4AF37 0deg 75.6deg, rgba(212,175,55,0.08) 75.6deg 360deg)"
                }}
                transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="absolute inset-3 rounded-full border border-white/[0.035] bg-background/95" />
                <div className="absolute inset-7 rounded-full border border-dashed border-white/[0.09]" />
                <div className="relative text-center">
                  <p className="font-mono text-4xl font-bold tracking-[-0.08em] text-gold sm:text-5xl">
                    21<span className="text-3xl">%</span>
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.26em] text-muted">
                    {t.snapshot.loadedAtCapture}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metricVisuals.map((metric, index) => {
              const Icon = metric.icon;
              const copy = t.snapshot.metrics[index];

              return (
                <motion.article
                  className={`v2-card-surface group relative min-h-44 overflow-hidden rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/35 hover:shadow-gold-soft ${
                    index === 2
                      ? "sm:col-span-2 sm:min-h-40 sm:pr-[36%]"
                      : ""
                  }`}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 22 + index * 7 }
                  }
                  key={copy.label}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ amount: 0.25, once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_70%)]" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-sm border border-gold/25 bg-gold/[0.07] text-gold transition-transform duration-200 group-hover:scale-105">
                      <Icon aria-hidden size={19} />
                    </span>
                    <span className="mt-5 h-px w-14 bg-gradient-to-r from-gold/25 to-transparent" />
                  </div>
                  <p className="mt-6 font-mono text-4xl font-bold tracking-[-0.07em] text-ink">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                    {copy.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {copy.detail}
                  </p>
                </motion.article>
              );
            })}

            <motion.div
              className="relative z-10 overflow-hidden rounded-sm border border-gold/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),rgba(16,14,10,0.84))] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.3),0_0_30px_rgba(212,175,55,0.06)] backdrop-blur-md sm:col-span-2 sm:-mt-8 sm:mr-5 sm:w-[58%] sm:justify-self-end"
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              transition={{ delay: 0.24, duration: 0.48 }}
              viewport={{ amount: 0.4, once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 text-gold">
                <Activity aria-hidden size={18} />
                <p className="text-xl font-semibold text-ink">
                  {t.snapshot.learningInPublic}
                </p>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-black/60">
                <motion.div
                  className="h-full origin-left bg-gold"
                  initial={shouldReduceMotion ? { scaleX: 0.21 } : { scaleX: 0 }}
                  transition={{ delay: 0.3, duration: 0.85, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileInView={{ scaleX: 0.21 }}
                />
              </div>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {t.snapshot.currentCheckpoint}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
