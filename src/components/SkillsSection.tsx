"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolioContent";

export function SkillsSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-navy py-24 sm:py-28"
      id="skills"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%),radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.06),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:38px_38px] opacity-[0.06]" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />
      <div className="section-shell relative">
        <SectionHeading
          align="center"
          eyebrow="CAPABILITIES"
          index="02"
          status="Toolkit active"
          title="Technical toolkit in progress"
          description="A focused set of technologies, tools, and practices I am building through coursework, projects, and hands-on problem solving."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="panel-border group relative overflow-hidden rounded-md bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-6"
                initial={{ opacity: 0, y: 18 }}
                key={category.category}
                transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.8),rgba(212,175,55,0.08),transparent)]" />
                <p className="mb-4 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-gold/55">
                  Module 0{index + 1}
                </p>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/[0.1] text-gold shadow-gold-soft transition-colors group-hover:bg-gold/[0.14]">
                    <Icon
                      aria-hidden
                      className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                      size={19}
                    />
                  </span>
                  <h3 className="text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-gold">
                    {category.category}
                  </h3>
                </div>
                <div className="mt-6 h-px w-16 bg-gold/50 transition-all group-hover:w-24" />
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      className="rounded-full bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-muted ring-1 ring-white/[0.06] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/[0.08] hover:text-ink hover:ring-gold/25 hover:shadow-gold-soft"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
