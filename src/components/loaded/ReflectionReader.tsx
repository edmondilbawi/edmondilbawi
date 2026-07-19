"use client";

import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  wisdomChapters,
  WISDOM_ROOT_LABELS,
  type WisdomChapterData
} from "@/data/wisdomChapters";

type ReflectionReaderProps = {
  activeChapter: WisdomChapterData | null;
  onChangeChapter: (chapter: WisdomChapterData) => void;
  onClose: () => void;
};

function formatContribution(value: number) {
  return `+${value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")}%`;
}

export function ReflectionReader({
  activeChapter,
  onChangeChapter,
  onClose
}: ReflectionReaderProps) {
  const readerScrollRef = useRef<HTMLDivElement | null>(null);
  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeChapterIndex = activeChapter
    ? wisdomChapters.findIndex((chapter) => chapter.id === activeChapter.id)
    : -1;

  useEffect(() => {
    if (!activeChapter) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    window.requestAnimationFrame(() => backButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeChapter, onClose]);

  useEffect(() => {
    if (activeChapter) {
      readerScrollRef.current?.scrollTo({ behavior: "auto", top: 0 });
    }
  }, [activeChapter]);

  if (!activeChapter) {
    return null;
  }

  const navigateChapter = (direction: -1 | 1) => {
    const nextChapter = wisdomChapters[activeChapterIndex + direction];

    if (nextChapter) {
      onChangeChapter(nextChapter);
    }
  };

  return (
    <div
      aria-labelledby="reflection-reader-title"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl"
      role="dialog"
    >
      <div
        className="h-full overflow-y-auto overscroll-contain"
        ref={readerScrollRef}
      >
        <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
            <button
              className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-3 text-base font-semibold text-ink/75 transition-colors duration-200 hover:border-gold/40 hover:text-gold"
              onClick={onClose}
              ref={backButtonRef}
              type="button"
            >
              <ArrowLeft
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-1"
                size={15}
              />
              Back to companion
            </button>

            <div className="flex items-center gap-2">
              <button
                aria-label="Previous reflection"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-3 text-base font-semibold text-ink/75 transition-colors duration-200 hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activeChapterIndex === 0}
                onClick={() => navigateChapter(-1)}
                type="button"
              >
                <ChevronLeft aria-hidden size={15} />
                <span className="hidden sm:inline">Previous reflection</span>
              </button>
              <button
                aria-label="Next reflection"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-3 text-base font-semibold text-ink/75 transition-colors duration-200 hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activeChapterIndex === wisdomChapters.length - 1}
                onClick={() => navigateChapter(1)}
                type="button"
              >
                <span className="hidden sm:inline">Next reflection</span>
                <ChevronRight aria-hidden size={15} />
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 text-[0.9375rem] font-semibold leading-6">
            <span className="text-gold">Chapter {activeChapter.id}</span>
            <span className="text-ink/50">/</span>
            <span className="text-ink/70">
              {WISDOM_ROOT_LABELS[activeChapter.branch]}
            </span>
            <span className="text-ink/50">/</span>
            <span className="text-gold">
              {formatContribution(activeChapter.contribution)} contribution
            </span>
          </div>
          <h2
            className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            id="reflection-reader-title"
          >
            {activeChapter.title}
          </h2>

          <article className="v2-panel-surface mt-9 rounded-sm p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <BookOpen aria-hidden className="text-gold" size={19} />
              <h3 className="text-[0.9375rem] font-bold uppercase tracking-[0.1em] text-gold">
                Original full reflection
              </h3>
            </div>
            <div className="mt-7 space-y-6 text-base leading-8 text-ink/85 sm:text-lg sm:leading-9">
              {activeChapter.text.split(/\n\n+/).map((paragraph, index) => (
                <p key={`${activeChapter.id}-paragraph-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <button
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/15 px-4 text-base font-semibold text-ink/75 transition-colors duration-200 hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              disabled={activeChapterIndex === 0}
              onClick={() => navigateChapter(-1)}
              type="button"
            >
              <ChevronLeft aria-hidden size={16} />
              Previous reflection
            </button>
            <button
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-gold/40 bg-gold/[0.07] px-4 text-base font-semibold text-gold transition-colors duration-200 hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              disabled={activeChapterIndex === wisdomChapters.length - 1}
              onClick={() => navigateChapter(1)}
              type="button"
            >
              Next reflection
              <ArrowRight aria-hidden size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
