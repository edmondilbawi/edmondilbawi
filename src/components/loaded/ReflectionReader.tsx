"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun
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

type ReadingMode = "dark" | "light";

const READING_MODE_STORAGE_KEY = "twentyOneLoadedReadingMode";

function formatContribution(value: number) {
  return `+${value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1")}%`;
}

function getDisplayedReflectionParagraphs(text: string) {
  const paragraphs = text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const finalParagraph = paragraphs[paragraphs.length - 1] ?? "";

  if (/^(?:that is why )?this chapter adds\b/i.test(finalParagraph)) {
    return paragraphs.slice(0, -1);
  }

  return paragraphs;
}

export function ReflectionReader({
  activeChapter,
  onChangeChapter,
  onClose
}: ReflectionReaderProps) {
  const [readingMode, setReadingMode] = useState<ReadingMode>("light");
  const readerScrollRef = useRef<HTMLDivElement | null>(null);
  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeChapterIndex = activeChapter
    ? wisdomChapters.findIndex((chapter) => chapter.id === activeChapter.id)
    : -1;

  useEffect(() => {
    try {
      const storedMode = window.localStorage.getItem(
        READING_MODE_STORAGE_KEY
      );

      if (storedMode === "dark" || storedMode === "light") {
        setReadingMode(storedMode);
      }
    } catch {
      // Light mode remains the default when browser storage is unavailable.
    }
  }, []);

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

  const isLightMode = readingMode === "light";
  const displayedParagraphs = getDisplayedReflectionParagraphs(
    activeChapter.text
  );
  const quietButtonClassName = clsx(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40",
    isLightMode
      ? "border-[#cdbd99] bg-[#fffaf0]/65 text-[#29313d] hover:border-[#a7761b] hover:text-[#78540f]"
      : "border-white/15 text-ink/75 hover:border-gold/40 hover:text-gold"
  );

  const updateReadingMode = (mode: ReadingMode) => {
    setReadingMode(mode);

    try {
      window.localStorage.setItem(READING_MODE_STORAGE_KEY, mode);
    } catch {
      // The selected mode still applies for the current visit.
    }
  };

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
      className={clsx(
        "fixed inset-0 z-[100] backdrop-blur-xl transition-colors duration-200",
        isLightMode
          ? "bg-[#f3eddf] text-[#202733]"
          : "bg-[#08090b] text-ink"
      )}
      role="dialog"
    >
      <div
        className="h-full overflow-y-auto overscroll-contain"
        ref={readerScrollRef}
      >
        <header
          className={clsx(
            "sticky top-0 z-20 border-b backdrop-blur-xl transition-colors duration-200",
            isLightMode
              ? "border-[#d7c7a4] bg-[#f3eddf]/95 shadow-[0_8px_28px_rgba(76,57,22,0.08)]"
              : "border-white/[0.08] bg-background/90"
          )}
        >
          <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
            <button
              className={clsx("group", quietButtonClassName)}
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

            <div className="flex flex-wrap items-center justify-end gap-2">
              <div
                aria-label="Reading mode"
                className={clsx(
                  "flex min-h-11 items-center rounded-sm border p-1",
                  isLightMode
                    ? "border-[#cdbd99] bg-[#fffaf0]/65"
                    : "border-white/15 bg-white/[0.035]"
                )}
                role="group"
              >
                <button
                  aria-pressed={readingMode === "dark"}
                  className={clsx(
                    "focus-ring inline-flex min-h-9 items-center gap-1.5 rounded-sm px-2.5 text-sm font-semibold transition-colors duration-200",
                    readingMode === "dark"
                      ? "bg-gold text-black"
                      : isLightMode
                        ? "text-[#5b6370] hover:text-[#78540f]"
                        : "text-ink/65 hover:text-gold"
                  )}
                  onClick={() => updateReadingMode("dark")}
                  type="button"
                >
                  <Moon aria-hidden size={14} />
                  Dark
                </button>
                <button
                  aria-pressed={readingMode === "light"}
                  className={clsx(
                    "focus-ring inline-flex min-h-9 items-center gap-1.5 rounded-sm px-2.5 text-sm font-semibold transition-colors duration-200",
                    readingMode === "light"
                      ? "bg-[#b48327] text-[#fffaf0]"
                      : "text-ink/65 hover:text-gold"
                  )}
                  onClick={() => updateReadingMode("light")}
                  type="button"
                >
                  <Sun aria-hidden size={14} />
                  Light
                </button>
              </div>

              <button
                aria-label="Previous reflection"
                className={quietButtonClassName}
                disabled={activeChapterIndex === 0}
                onClick={() => navigateChapter(-1)}
                type="button"
              >
                <ChevronLeft aria-hidden size={15} />
                <span className="hidden sm:inline">Previous reflection</span>
              </button>
              <button
                aria-label="Next reflection"
                className={quietButtonClassName}
                disabled={activeChapterIndex === wisdomChapters.length - 1}
                onClick={() => navigateChapter(1)}
                type="button"
              >
                <span className="hidden sm:inline">Next reflection</span>
                <ChevronRight aria-hidden size={15} />
              </button>
            </div>
          </div>
          <div
            className={clsx(
              "border-t",
              isLightMode ? "border-[#d7c7a4]/75" : "border-white/[0.07]"
            )}
          >
            <p className="mx-auto flex min-h-11 max-w-6xl items-center gap-2 px-5 py-2 text-sm font-semibold sm:px-6 sm:text-base lg:px-8">
              <span
                className={isLightMode ? "text-[#8a6112]" : "text-gold"}
              >
                Chapter {activeChapter.id}
              </span>
              <span
                aria-hidden
                className={isLightMode ? "text-[#756b59]" : "text-ink/40"}
              >
                —
              </span>
              <span className="min-w-0 truncate">{activeChapter.title}</span>
            </p>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 text-[0.9375rem] font-semibold leading-6">
            <span className={isLightMode ? "text-[#8a6112]" : "text-gold"}>
              Chapter {activeChapter.id}
            </span>
            <span className={isLightMode ? "text-[#756b59]" : "text-ink/50"}>
              /
            </span>
            <span className={isLightMode ? "text-[#535b67]" : "text-ink/70"}>
              {WISDOM_ROOT_LABELS[activeChapter.branch]}
            </span>
          </div>
          <h2
            className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            id="reflection-reader-title"
          >
            {activeChapter.title}
          </h2>

          <div
            className={clsx(
              "mt-7 inline-flex max-w-full items-center gap-5 rounded-sm border px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.08)]",
              isLightMode
                ? "border-[#cdb878] bg-[#fff8e9]"
                : "border-gold/30 bg-gold/[0.055]"
            )}
          >
            <div>
              <p
                className={clsx(
                  "text-[0.8125rem] font-bold uppercase tracking-[0.1em]",
                  isLightMode ? "text-[#78540f]" : "text-gold"
                )}
              >
                Wisdom Bar Contribution
              </p>
              <p
                className={clsx(
                  "mt-1 text-sm",
                  isLightMode ? "text-[#646b74]" : "text-ink/60"
                )}
              >
                Part of the 21% Loaded journey
              </p>
            </div>
            <p
              className={clsx(
                "shrink-0 text-2xl font-semibold",
                isLightMode ? "text-[#8a6112]" : "text-gold"
              )}
            >
              {formatContribution(activeChapter.contribution)}
            </p>
          </div>

          <article
            className={clsx(
              "mt-9 rounded-sm border p-6 transition-colors duration-200 sm:p-8 lg:p-10",
              isLightMode
                ? "border-[#d8c9a7] bg-[#fffaf0] shadow-[0_24px_70px_rgba(73,55,20,0.08)]"
                : "v2-panel-surface border-white/[0.08]"
            )}
          >
            <div className="flex items-center gap-3">
              <BookOpen
                aria-hidden
                className={isLightMode ? "text-[#8a6112]" : "text-gold"}
                size={19}
              />
              <h3
                className={clsx(
                  "text-[0.9375rem] font-bold uppercase tracking-[0.1em]",
                  isLightMode ? "text-[#78540f]" : "text-gold"
                )}
              >
                Original full reflection
              </h3>
            </div>
            <div
              className={clsx(
                "mt-7 space-y-6 text-base leading-8 sm:text-lg sm:leading-9",
                isLightMode ? "text-[#333b47]" : "text-ink/[0.82]"
              )}
            >
              {displayedParagraphs.map((paragraph, index) => (
                <p key={`${activeChapter.id}-paragraph-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div
            className={clsx(
              "mt-10 flex flex-col gap-3 border-t pt-7 sm:flex-row sm:items-center sm:justify-between",
              isLightMode ? "border-[#d7c7a4]" : "border-white/[0.08]"
            )}
          >
            <button
              className={clsx(quietButtonClassName, "px-4")}
              disabled={activeChapterIndex === 0}
              onClick={() => navigateChapter(-1)}
              type="button"
            >
              <ChevronLeft aria-hidden size={16} />
              Previous reflection
            </button>
            <button
              className={clsx(
                "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-4 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40",
                isLightMode
                  ? "border-[#a7761b] bg-[#b48327]/10 text-[#78540f] hover:bg-[#b48327] hover:text-[#fffaf0]"
                  : "border-gold/40 bg-gold/[0.07] text-gold hover:bg-gold hover:text-black"
              )}
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
