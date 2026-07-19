"use client";

import { motion } from "framer-motion";
import { Braces, CircleDot, Database, Network, ShieldCheck } from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { projects, type Project } from "@/data/portfolioContent";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

function SystemPreview({ project }: { project: Project }) {
  const isBankingSystem = project.preview.kind === "banking-system";
  const { t } = useV2Language();

  return (
    <div
      aria-label={`${t.projects.preview}: ${project.title}`}
      className="relative min-h-44 overflow-hidden border-b border-line bg-black/35 sm:min-h-48"
      role="img"
    >
      <div className="absolute inset-0 bg-subtle-grid bg-[length:30px_30px] opacity-[0.13]" />
      <div className="project-scan absolute inset-x-0 top-0 h-px bg-gold/60" />

      {isBankingSystem ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative grid h-32 w-32 place-items-center rounded-full border border-gold/30">
            <div className="grid h-24 w-24 place-items-center rounded-full border border-gold/55 bg-gold/[0.06] text-gold shadow-gold-soft">
              <ShieldCheck aria-hidden size={34} />
            </div>
            {["-left-16 top-2", "-right-16 top-2", "-left-16 bottom-2", "-right-16 bottom-2"].map(
              (position, index) => (
                <span
                  className={`absolute grid h-10 w-10 place-items-center rounded-sm border border-white/10 bg-panel text-muted ${position}`}
                  key={position}
                >
                  {index % 2 === 0 ? (
                    <Database aria-hidden size={16} />
                  ) : (
                    <Braces aria-hidden size={16} />
                  )}
                </span>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-40 w-56">
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 256 192"
            >
              <path d="M128 96 C90 70 70 42 42 32" fill="none" stroke="rgba(212,175,55,0.42)" strokeWidth="2" />
              <path d="M128 96 C166 70 186 42 214 32" fill="none" stroke="rgba(212,175,55,0.42)" strokeWidth="2" />
              <path d="M128 96 C88 118 60 143 34 160" fill="none" stroke="rgba(212,175,55,0.42)" strokeWidth="2" />
              <path d="M128 96 C168 118 196 143 222 160" fill="none" stroke="rgba(212,175,55,0.42)" strokeWidth="2" />
            </svg>
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/55 bg-gold/[0.08] text-gold shadow-gold-soft">
              <Network aria-hidden size={27} />
            </span>
            {[
              "left-1 top-1",
              "right-1 top-1",
              "bottom-1 left-0",
              "bottom-1 right-0"
            ].map((position) => (
              <span
                className={`absolute grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-panel ${position}`}
                key={position}
              >
                <CircleDot aria-hidden className="text-gold/75" size={15} />
              </span>
            ))}
          </div>
        </div>
      )}

      <p className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">
        {t.projects.preview}
      </p>
    </div>
  );
}

export function V2ProjectCaseFiles() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="v2-section-surface relative z-10 scroll-mt-16 overflow-hidden py-16 sm:py-20 lg:py-24"
      id="v2-projects"
    >
      <div className="pointer-events-none absolute -right-36 top-12 h-96 w-96 rounded-full bg-gold/[0.045] blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-10">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {t.projects.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
              {t.projects.title}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted">
            {t.projects.subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              className="v2-panel-surface group overflow-hidden rounded-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/35 hover:shadow-gold-soft"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: index === 0 ? -28 : 28 }
              }
              key={project.title}
              transition={{ duration: 0.58, ease: "easeOut" }}
              viewport={{ amount: 0.18, once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <SystemPreview project={project} />

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    {t.projects.project} / 0{index + 1}
                  </p>
                  <span className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {t.projects.statuses[index]}
                  </span>
                </div>
                <h3
                  className="mt-4 text-balance text-left text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl"
                  dir="ltr"
                  lang="en"
                >
                  {project.title}
                </h3>
                <p
                  className="mt-4 text-left text-base leading-7 text-muted"
                  dir="ltr"
                  lang="en"
                >
                  {project.description}
                </p>

                <div className="mt-5 grid gap-5 border-y border-line py-5 md:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                      {t.projects.technologies}
                    </p>
                    <div
                      className="mt-3 flex flex-wrap gap-2"
                      dir="ltr"
                      lang="en"
                    >
                      {project.techStack.map((technology) => (
                        <span
                          className="rounded-sm border border-white/[0.09] bg-black/25 px-2.5 py-1.5 text-xs text-ink/80"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                      {t.projects.takeaways}
                    </p>
                    <ul
                      className="mt-3 space-y-1.5 text-left"
                      dir="ltr"
                      lang="en"
                    >
                      {project.highlights.map((highlight) => (
                        <li
                          className="flex gap-2.5 text-sm leading-5 text-muted"
                          key={highlight}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  aria-disabled="true"
                  className="mt-4 flex items-center justify-between gap-4 rounded-sm border border-dashed border-white/10 bg-black/20 px-3 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted"
                >
                  <span>{t.projects.source}</span>
                  <span className="text-gold/75">
                    {t.projects.sourceStates[index]}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
