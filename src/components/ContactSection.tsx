"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { contactLinks, contactText } from "@/data/portfolioContent";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28" id="contact">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_32%)]" />
      <div className="loading-divider pointer-events-none absolute inset-x-0 top-0" />
      <div className="section-shell relative">
        <SectionHeading
          align="center"
          eyebrow="CONTACT"
          index="05"
          status="Channel open"
          title="Let's connect"
          description={contactText}
        />

        <motion.div
          className="panel-border relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-md bg-panel p-5 shadow-[0_28px_100px_rgba(0,0,0,0.34),0_0_50px_rgba(212,175,55,0.06)] sm:p-6"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(212,175,55,0.1),transparent_42%)]" />
          <div className="relative grid gap-3 sm:grid-cols-3">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="group rounded-md border border-white/10 bg-white/[0.035] p-4 transition-all duration-200 hover:border-gold/40 hover:bg-white/[0.05] hover:shadow-gold-soft"
                  initial={{ opacity: 0, y: 12 }}
                  key={item.label}
                  transition={{
                    delay: 0.08 + index * 0.08,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gold/25 bg-gold/[0.1] text-gold transition-all duration-200 group-hover:border-gold/50 group-hover:shadow-gold-soft">
                    <Icon
                      aria-hidden
                      className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                      size={18}
                    />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-ink">{item.label}</p>
                  <p className="mt-2 break-words text-sm leading-6 text-muted">
                    {item.value}
                  </p>
                  <a
                    className="focus-ring mt-3 inline-flex min-h-11 items-center rounded-md text-sm font-semibold text-gold underline-offset-4 transition-all duration-200 hover:translate-x-0.5 hover:text-ink hover:underline"
                    href={item.href}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    Open {item.label}
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="relative mt-6 border-t border-line pt-5 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-6 text-muted">
              Still loading, still building, always open to meaningful
              opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
