"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronDown, Quote } from "lucide-react";
import { translations, type Language } from "@/data/i18n";
import type { WisdomChapterData } from "@/data/wisdomChapters";

type WisdomChapterProps = {
  branchTitle: string;
  chapter: WisdomChapterData;
  language?: Language;
  totalReflections: number;
};

function splitParagraphs(text: string) {
  return text.split(/\n\n/).filter(Boolean);
}

export function WisdomChapter({
  branchTitle,
  chapter,
  language = "en",
  totalReflections
}: WisdomChapterProps) {
  const library = translations[language].library;
  const isRtl = language === "ar";
  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      className="panel-border group mx-auto max-w-4xl rounded-md bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-6 lg:p-8"
      initial={{ opacity: 0, y: 14 }}
      key={`${chapter.id}-reflection`}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <header className="border-b border-line pb-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <p className="text-gold">
              {library.reflection} {chapter.id} / {totalReflections}
            </p>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-gold/60 sm:block" />
            <p className="text-muted">
              {library.branch}: {branchTitle}
            </p>
          </div>
          <p className="font-mono text-2xl font-semibold text-gold/75 sm:text-3xl">
            {chapter.id}
          </p>
        </div>

        <h2
          className="mt-4 max-w-3xl text-balance text-left text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl"
          dir="ltr"
          lang="en"
        >
          {chapter.shortTitle ?? chapter.title}
        </h2>
      </header>

      <div className="mt-6">
        <div className="relative rounded-md border border-gold/25 bg-gold/[0.07] px-5 py-5 sm:px-6">
          <Quote
            aria-hidden
            className="absolute right-5 top-5 text-gold/30"
            size={27}
          />
          <p
            className="pr-9 text-balance text-xl font-semibold leading-8 text-ink sm:text-2xl sm:leading-9"
            dir="ltr"
            lang="en"
          >
            {chapter.keyLine}
          </p>
        </div>

        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {library.shortReflection}
          </p>
          <div
            className="mt-4 space-y-5 text-base leading-8 text-ink/90 sm:text-lg sm:leading-9"
            dir="ltr"
            lang="en"
          >
            {splitParagraphs(chapter.shortReflection).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {library.takeawayWords}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" dir="ltr" lang="en" role="list">
            {chapter.takeawayWords.map((word) => (
              <li
                className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1.5 text-sm font-medium text-gold"
                key={word}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>

        <details className="group/original mt-8 border-t border-line pt-5">
          <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/35 hover:text-gold [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2.5">
              <BookOpen
                aria-hidden
                className="text-gold transition-transform duration-200 group-open/original:scale-110"
                size={17}
              />
              {library.readFullOriginal}
            </span>
            <ChevronDown
              aria-hidden
              className="shrink-0 text-gold transition-transform duration-200 group-open/original:rotate-180"
              size={18}
            />
          </summary>

          <div
            className={`mt-6 max-w-3xl space-y-6 border-gold/25 text-base leading-8 text-muted ${
              isRtl ? "border-r pr-4 sm:pr-6" : "border-l pl-4 sm:pl-6"
            }`}
            dir="ltr"
            lang="en"
          >
            {splitParagraphs(chapter.text).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </motion.article>
  );
}
