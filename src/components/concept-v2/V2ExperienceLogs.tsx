"use client";

import { motion } from "framer-motion";
import { Activity, ArrowDown, BriefcaseBusiness, MapPin } from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { experienceEntries } from "@/data/portfolioContent";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const primaryOrganizations = [
  "UOB Developer Club",
  "Byblos Bank Syria",
  "International School of Choueifat"
];

const additionalOrganizations = ["Lady of Damascus Church", "Direct Line"];

const primaryEntries = primaryOrganizations.flatMap((organization) =>
  experienceEntries.filter((entry) => entry.organization === organization)
);

const additionalEntries = additionalOrganizations.flatMap((organization) =>
  experienceEntries.filter((entry) => entry.organization === organization)
);

export function V2ExperienceLogs() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24"
      id="v2-experience"
    >
      <div className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent lg:block" />
      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12">
          <motion.header
            className="v2-experience-heading-motion lg:sticky lg:top-28 lg:h-fit"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            transition={{ duration: 0.52 }}
            viewport={{ amount: 0.35, once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {t.experience.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
              {t.experience.title}
              <span className="block text-muted">
                {t.experience.titleAccent}
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              {t.experience.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3 text-gold">
              <Activity aria-hidden size={17} />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
                {t.experience.learning}
              </span>
              <ArrowDown aria-hidden size={15} />
            </div>
          </motion.header>

          <div className="relative pl-7 sm:pl-10">
            <div
              aria-hidden
              className="absolute bottom-24 left-1 top-5 w-px bg-gradient-to-b from-gold/75 via-gold/35 to-transparent sm:left-2"
            />

            <div className="space-y-5">
              {primaryEntries.map((entry, index) => (
                <motion.article
                  className="v2-card-surface group relative rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/35 sm:p-6"
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
                  key={entry.organization}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ amount: 0.28, once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[1.9rem] top-7 h-3 w-3 rounded-full border-2 border-gold bg-background shadow-gold-soft sm:-left-[2.72rem]"
                  />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3
                        className="text-xl font-semibold text-ink sm:text-2xl"
                        dir="ltr"
                        lang="en"
                      >
                        {entry.organization}
                      </h3>
                      <p
                        className="mt-1 text-sm font-semibold text-gold"
                        dir="ltr"
                        lang="en"
                      >
                        {entry.role}
                      </p>
                    </div>
                    <div className="sm:text-end">
                      <p
                        className="font-mono text-[10px] font-semibold text-ink/80"
                        dir="ltr"
                        lang="en"
                      >
                        {entry.dates}
                      </p>
                      <p
                        className="mt-2 flex items-center gap-1.5 text-xs text-muted sm:justify-end"
                        dir="ltr"
                        lang="en"
                      >
                        <MapPin aria-hidden size={12} />
                        {entry.location}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mt-5 border-t border-line pt-5 text-left text-sm leading-6 text-muted sm:text-base sm:leading-7"
                    dir="ltr"
                    lang="en"
                  >
                    {entry.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="v2-panel-surface mt-6 rounded-sm border-gold/20 p-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45 }}
              viewport={{ amount: 0.4, once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 text-gold">
                <BriefcaseBusiness aria-hidden size={17} />
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                  {t.experience.additional}
                </p>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {additionalEntries.map((entry) => (
                  <div
                    className="rounded-sm border border-white/[0.075] bg-black/20 p-4 transition-colors duration-200 hover:border-gold/30 hover:bg-gold/[0.025]"
                    key={entry.organization}
                  >
                    <p
                      className="text-sm font-semibold text-ink"
                      dir="ltr"
                      lang="en"
                    >
                      {entry.organization}
                    </p>
                    <p
                      className="mt-1 text-xs font-medium text-gold"
                      dir="ltr"
                      lang="en"
                    >
                      {entry.role}
                    </p>
                    <p
                      className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted"
                      dir="ltr"
                      lang="en"
                    >
                      {entry.dates}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
