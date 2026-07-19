"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
  status?: string;
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  index,
  status,
  title
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {eyebrow || status ? (
        <div
          className={`mb-3 flex flex-wrap items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {index ? (
                <span className="mr-2 font-mono text-gold/55">{index}</span>
              ) : null}
              {eyebrow}
            </p>
          ) : null}
          {status ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
              <span className="status-pulse h-1 w-1 rounded-full bg-gold" />
              {status}
            </p>
          ) : null}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
