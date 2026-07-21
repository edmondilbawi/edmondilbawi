"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Command } from "lucide-react";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { contactLinks } from "@/data/portfolioContent";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

export function V2ContactCommand() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  return (
    <section
      className="relative z-10 scroll-mt-16 overflow-hidden py-10 sm:py-20 lg:py-24"
      id="v2-contact"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.1),transparent_34%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="v2-panel-surface relative overflow-hidden rounded-sm border-gold/25 px-4 py-6 shadow-[0_30px_100px_rgba(0,0,0,0.4),0_0_70px_rgba(212,175,55,0.06)] sm:px-9 sm:py-11 lg:px-12 lg:py-14"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          transition={{ duration: 0.58 }}
          viewport={{ amount: 0.25, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:48px_48px] opacity-[0.08]" />
          <div className="pointer-events-none absolute left-0 top-0 h-px w-2/5 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-px w-2/5 bg-gradient-to-l from-gold via-gold/40 to-transparent" />

          <div className="relative grid gap-7 sm:gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-3 text-gold">
                <Command aria-hidden size={18} />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.23em]">
                  {t.contact.eyebrow}
                </p>
              </div>
              <h2 className="mt-4 max-w-3xl text-balance text-[2.15rem] font-semibold leading-tight tracking-[-0.045em] sm:mt-5 sm:text-5xl lg:text-6xl">
                {t.contact.titleLead}{" "}
                <span className="text-gold">{t.contact.titleAccent}</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                {t.contact.text}
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");
                const label = index === 0 ? t.contact.email : t.contact.linkedin;
                const action =
                  index === 0 ? t.contact.openEmail : t.contact.openLinkedin;

                return (
                  <a
                    className="focus-ring group flex min-h-[4.5rem] cursor-pointer items-center gap-3 rounded-sm border border-white/[0.09] bg-black/25 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/[0.045] hover:shadow-gold-soft sm:min-h-20 sm:gap-4 sm:p-5"
                    href={link.href}
                    key={link.label}
                    rel={isExternal ? "noreferrer" : undefined}
                    target={isExternal ? "_blank" : undefined}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-gold/30 bg-gold/[0.08] text-gold transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
                      <Icon aria-hidden size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                        {label}
                      </span>
                      <span
                        className="mt-1 block break-words text-sm font-semibold text-ink sm:text-base"
                        dir="ltr"
                      >
                        {link.value}
                      </span>
                      <span className="mt-2 block font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-gold/75">
                        {action}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <footer className="mt-8 flex flex-col gap-4 border-t border-line pt-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">
            {t.contact.footerLead}{" "}
            <span className="text-gold">{t.contact.footerAccent}</span>
          </p>
          <p>{t.contact.copyright}</p>
        </footer>
      </div>
    </section>
  );
}
