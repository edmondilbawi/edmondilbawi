"use client";

import { motion } from "framer-motion";
import { translations, type Language } from "@/data/i18n";
import { WISDOM_TOTAL_PERCENT } from "@/data/wisdomChapters";

type WisdomBarProps = {
  contribution: number;
  language?: Language;
  progress: number;
  reflectionLabel: string;
};

function formatPercent(value: number) {
  return value.toFixed(value % 1 === 0 ? 0 : 2);
}

export function WisdomBar({
  contribution,
  language = "en",
  progress,
  reflectionLabel
}: WisdomBarProps) {
  const library = translations[language].library;
  const safeProgress = Math.min(Math.max(progress, 0), WISDOM_TOTAL_PERCENT);
  const visualWidth = `${safeProgress}%`;

  return (
    <div
      aria-label={library.progressAria}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={safeProgress}
      aria-valuetext={`${reflectionLabel}: ${library.contribution} +${formatPercent(contribution)}%. ${library.loadedAfter}: ${formatPercent(safeProgress)} / ${WISDOM_TOTAL_PERCENT}.`}
      className="w-full"
      role="progressbar"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <p className="font-semibold text-ink">
            {library.contribution}:{" "}
            <span className="text-gold">
              +{formatPercent(contribution)}%
            </span>
          </p>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />
          <p className="text-muted">
            {library.loadedAfter}:{" "}
            <span className="font-mono font-semibold text-ink">
              {formatPercent(safeProgress)} / {WISDOM_TOTAL_PERCENT}
            </span>
          </p>
        </div>
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          {reflectionLabel}
        </p>
      </div>

      <div className="relative mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-black/[0.35] shadow-[inset_0_0_14px_rgba(255,255,255,0.035)]">
        <motion.div
          animate={{ width: visualWidth }}
          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(212,175,55,0.72),#D4AF37)] shadow-gold-soft"
          initial={false}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-40" />
      </div>

      <div className="mt-1.5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
        <span>0%</span>
        <span>{library.title}</span>
      </div>
    </div>
  );
}
