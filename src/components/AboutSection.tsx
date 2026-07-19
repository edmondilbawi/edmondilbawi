"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutText, educationEntries } from "@/data/portfolioContent";

function splitParagraphs(text: string) {
  return text.split(/\n\n/).filter(Boolean);
}

export function AboutSection() {
  return (
    <section
      className="relative overflow-hidden bg-background py-24 sm:py-28"
      id="about"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(212,175,55,0.07),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.018),transparent_45%)]" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="FOUNDATION"
          index="01"
          status="Foundation loaded"
          title="The person behind the work"
          description="A quieter look at what I study, how I think, and the foundation that shaped my direction."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.article
            className="panel-border group relative max-w-2xl self-start overflow-hidden rounded-md bg-[linear-gradient(145deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:34px_34px] opacity-[0.06]" />
            <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              About
            </p>
            <h3 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">
              How I think, learn, and grow
            </h3>
            <div className="mt-7 space-y-6 text-base leading-8 text-muted sm:text-lg">
              {splitParagraphs(aboutText).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-muted">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-gold" />
              Academic path / Personal perspective
            </div>
            </div>
          </motion.article>

          <motion.article
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Education
            </p>
            <h3 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">
              Where the foundation began
            </h3>

            <div className="relative mt-8 space-y-7 pl-8">
              <motion.div
                aria-hidden
                className="absolute bottom-2 left-[0.43rem] top-2 w-px origin-top bg-[linear-gradient(180deg,rgba(212,175,55,0.95),rgba(212,175,55,0.12))]"
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ scaleY: 1 }}
              />

              {educationEntries.map((entry, index) => (
                <motion.article
                  className="group relative"
                  initial={{ opacity: 0, y: 12 }}
                  key={entry.institution}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span
                    aria-hidden
                    className="absolute -left-8 top-2 h-3.5 w-3.5 rounded-full border border-gold bg-background shadow-gold-soft transition-all duration-200 group-hover:scale-125 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                  />
                  <div className="rounded-md border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-gold/30 group-hover:bg-white/[0.04] group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.28),0_0_26px_rgba(212,175,55,0.08)]">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-ink">
                          {entry.institution}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-gold">
                          {entry.degree}
                        </p>
                      </div>
                      <p className="font-mono text-sm font-medium uppercase tracking-[0.1em] text-muted transition-colors duration-200 group-hover:text-gold">
                        {entry.dates}
                      </p>
                    </div>
                    <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                      <MapPin
                        aria-hidden
                        className="transition-all duration-200 group-hover:scale-110 group-hover:text-gold group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                        size={15}
                      />
                      {entry.location}
                    </p>
                    <p className="mt-4 max-w-2xl leading-7 text-muted">
                      {entry.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
