"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { cvText } from "@/data/portfolioContent";

const featuredExperiences = [
  {
    organization: "UOB Developer Club",
    role: "Public Relations Officer",
    dates: "August 2025 - June 2026",
    location: "Beirut Governorate, Lebanon",
    description:
      "Representing the Developers Club by supporting communication, promoting initiatives, and strengthening student engagement.",
    highlights: [
      "Promote initiatives and raise event awareness.",
      "Connect members, students, and external audiences."
    ]
  },
  {
    organization: "Byblos Bank Syria",
    role: "Intern",
    dates: "February 2024 - March 2024",
    location: "Syria",
    description:
      "Gained exposure to software development, IT operations, cybersecurity practices, and technology's role in secure banking systems.",
    highlights: [
      "Saw technology power secure, efficient banking.",
      "Sharpened analytical thinking and professional problem-solving."
    ]
  },
  {
    organization: "International School of Choueifat",
    role: "Head Prefect - Academic Department",
    dates: "September 2023 - June 2024",
    location: "Damascus Governorate, Syria",
    description:
      "Led and supported students within the Academic Department while promoting a positive and collaborative learning environment.",
    highlights: [
      "Connected students and faculty.",
      "Built leadership, communication, and organization."
    ]
  }
];

const additionalExperiences = [
  {
    organization: "Lady of Damascus Church",
    role: "Volunteer",
    dates: "August 2018 - August 2025"
  },
  {
    organization: "Direct Line",
    role: "Intern",
    dates: "July 2021 - August 2021"
  }
];

export function CVSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-line bg-navy py-24 sm:py-28"
      id="cv"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.022),transparent_42%),radial-gradient(circle_at_78%_22%,rgba(212,175,55,0.06),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:44px_44px] opacity-[0.035]" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="EXPERIENCE"
          index="04"
          status="Timeline active"
          title="Where I've learned by doing"
          description={cvText}
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Overview
            </p>
            <h3 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">
              Selected experience, not a full resume.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              These are the roles and environments that helped me practice
              communication, responsibility, teamwork, and professional
              discipline outside the classroom.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-gold/20 bg-gold/[0.055] p-4">
                <p className="font-mono text-2xl font-semibold text-gold">03</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-muted">
                  Featured roles
                </p>
              </div>
              <div className="rounded-md border border-white/[0.08] bg-white/[0.03] p-4">
                <p className="font-mono text-2xl font-semibold text-ink">02</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-muted">
                  Additional roles
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Additional experience
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {additionalExperiences.map((entry) => (
                  <div
                    className="group flex gap-4 rounded-md border border-white/10 bg-white/[0.035] p-4 text-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.05] hover:shadow-gold-soft"
                    key={`${entry.organization}-${entry.role}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-200 group-hover:border-gold/50 group-hover:shadow-gold-soft">
                      <BriefcaseBusiness
                        aria-hidden
                        className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                        size={16}
                      />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">
                        {entry.organization}
                      </p>
                      <p className="mt-1 text-gold">{entry.role}</p>
                      <p className="mt-1 text-muted">{entry.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.article
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Timeline
            </p>
            <h3 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">
              Roles that shaped the work.
            </h3>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              A compact view of the experience highlights most relevant to this
              portfolio.
            </p>

            <div className="relative mt-9 space-y-7 pl-8">
              <motion.div
                aria-hidden
                className="absolute bottom-2 left-[0.43rem] top-2 w-px origin-top bg-[linear-gradient(180deg,rgba(212,175,55,0.95),rgba(212,175,55,0.12))]"
                initial={{ scaleY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ scaleY: 1 }}
              />

              {featuredExperiences.map((entry, index) => (
                <motion.article
                  className="group relative"
                  initial={{ opacity: 0, y: 12 }}
                  key={`${entry.organization}-${entry.role}`}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span
                    aria-hidden
                    className="absolute -left-8 top-2 h-3.5 w-3.5 rounded-full border border-gold bg-navy shadow-gold-soft transition-all duration-200 group-hover:scale-125 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                  />
                  <div className="rounded-md border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-gold/30 group-hover:bg-white/[0.04] group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.3),0_0_26px_rgba(212,175,55,0.08)]">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-ink">
                          {entry.organization}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-gold">
                          {entry.role}
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
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                      {entry.highlights.map((bullet) => (
                        <li className="flex gap-3" key={bullet}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
