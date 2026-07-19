"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles
} from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { educationEntries, skillCategories } from "@/data/portfolioContent";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function V2ProfessionalModules() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-16 overflow-hidden py-16 sm:py-20 lg:py-28"
      id="v2-about"
    >
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:68px_68px] opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.065),transparent_29%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[94rem] px-5 sm:px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[2.8rem] xl:text-5xl">
              {t.about.title}
              {t.about.titleAccent ? (
                <span className="block text-muted">{t.about.titleAccent}</span>
              ) : null}
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-muted">
              {t.about.subtitle}
            </p>
            <div className="mt-10 hidden max-w-[11rem] items-center gap-3 lg:flex">
              <span className="h-px flex-1 bg-gradient-to-r from-gold/45 to-gold/10" />
              <ArrowDownRight aria-hidden className="text-gold/75" size={17} />
            </div>
          </aside>

          <div className="grid items-start gap-5 xl:grid-cols-12 xl:gap-6">
            <motion.article
              className="v2-panel-surface relative self-start overflow-hidden rounded-sm border-gold/20 p-6 sm:p-8 xl:col-span-7"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              transition={{ duration: 0.52 }}
              viewport={{ amount: 0.25, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-end gap-3">
                <span className="h-px w-10 bg-gold/25" />
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted/80">
                  {t.about.perspective}
                </span>
              </div>
              <h3 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-[2.15rem]">
                {t.about.heading}
              </h3>
              <div className="mt-6 grid gap-5 text-sm leading-7 text-muted sm:grid-cols-2 sm:text-base">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-5">
                {t.about.tags.map((value) => (
                  <span
                    className="rounded-full border border-white/[0.08] bg-black/10 px-2.5 py-1 text-[10px] font-medium text-muted transition-colors duration-200 hover:border-gold/25 hover:text-ink"
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.article>

            <motion.div
              className="grid gap-5 xl:col-span-5"
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              transition={{ delay: 0.08, duration: 0.52 }}
              viewport={{ amount: 0.22, once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <header className="px-1 pb-1">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                  {t.education.heading}
                </h3>
                <span className="mt-3 block h-px w-14 bg-gradient-to-r from-gold/55 to-transparent" />
              </header>
              {educationEntries.map((entry, index) => (
                <article
                  className="v2-card-surface group relative overflow-hidden rounded-sm p-6 transition-all duration-200 hover:border-gold/35"
                  key={entry.institution}
                >
                  <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-gold/50 via-transparent to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-gold/20 bg-gold/[0.055] text-gold transition-transform duration-200 group-hover:scale-105">
                      <GraduationCap aria-hidden size={18} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink">
                    {t.education.entries[index].institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {t.education.entries[index].degree}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                    <span>{t.education.entries[index].dates}</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin aria-hidden size={12} />
                      {t.education.entries[index].location}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {t.education.entries[index].description}
                  </p>
                </article>
              ))}
            </motion.div>

            <motion.article
              className="v2-panel-surface relative scroll-mt-24 overflow-hidden rounded-sm border-t-gold/25 p-6 sm:p-8 xl:col-span-12"
              id="v2-skills"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              transition={{ duration: 0.52 }}
              viewport={{ amount: 0.2, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(16,16,14,0.96),rgba(6,6,6,0.97))]"
              />
              <div className="relative z-10 flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-3 text-gold">
                    <Layers3 aria-hidden size={19} />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                      {t.skills.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    {t.skills.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted">
                  {t.skills.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-6 grid gap-3 lg:grid-cols-3">
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;

                  return (
                    <div
                      className="group rounded-sm border border-white/[0.075] bg-black/15 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/[0.025]"
                      key={category.category}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-sm border border-gold/25 bg-gold/[0.07] text-gold transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
                          <Icon aria-hidden size={17} />
                        </span>
                      </div>
                      <h4 className="mt-5 min-h-12 text-base font-semibold leading-6 text-ink">
                        {t.skills.groups[index]}
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            className="rounded-sm border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-muted transition-colors duration-200 group-hover:text-ink"
                            key={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative z-10 mt-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">
                <Sparkles aria-hidden size={14} />
                {t.skills.closing}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
