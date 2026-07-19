"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Mail,
  Send,
  Sparkles
} from "lucide-react";
import { AmbientExperience } from "@/components/AmbientExperience";
import { Button } from "@/components/Button";
import { ReflectionReader } from "@/components/loaded/ReflectionReader";
import {
  wisdomChapters,
  WISDOM_ROOT_LABELS,
  WISDOM_TOTAL_PERCENT,
  type WisdomBranch,
  type WisdomChapterData
} from "@/data/wisdomChapters";
import {
  submitOpenedReflection,
  submitVisitorName
} from "@/lib/staticForms/submitVisitorName";

type ChatStep = "name" | "chapter" | "selected";
type AssistantActivity = "idle" | "typing" | "searching";

const VISITOR_NAME_STORAGE_KEY = "twentyOneLoadedVisitorName";
const VISITOR_NAME_SUBMITTED_STORAGE_KEY =
  "twentyOneLoadedVisitorNameSubmitted";

const ROOTS = [
  "lens",
  "connection",
  "character",
  "building",
  "becoming"
] as const;

function findChapter(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return null;
  }

  if (/^\d+$/.test(normalizedQuery)) {
    const chapterNumber = Number.parseInt(normalizedQuery, 10);

    if (chapterNumber >= 1 && chapterNumber <= wisdomChapters.length) {
      return wisdomChapters[chapterNumber - 1];
    }

    return null;
  }

  const exactMatch = wisdomChapters.find(
    (chapter) =>
      chapter.title.toLowerCase() === normalizedQuery ||
      chapter.shortTitle?.toLowerCase() === normalizedQuery
  );

  if (exactMatch) {
    return exactMatch;
  }

  const partialMatches = wisdomChapters.filter(
    (chapter) =>
      chapter.title.toLowerCase().includes(normalizedQuery) ||
      chapter.shortTitle?.toLowerCase().includes(normalizedQuery)
  );

  return partialMatches.length === 1 ? partialMatches[0] : null;
}

function normalizeRootQuery(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ");
}

function findRoot(query: string): WisdomBranch | null {
  const normalizedQuery = normalizeRootQuery(query);

  if (!normalizedQuery) {
    return null;
  }

  const matches = ROOTS.filter((root) => {
    const normalizedLabel = normalizeRootQuery(WISDOM_ROOT_LABELS[root]);

    return (
      normalizedLabel === normalizedQuery ||
      normalizedLabel.includes(normalizedQuery) ||
      root === normalizedQuery
    );
  });

  return matches.length === 1 ? matches[0] : null;
}

export function TwentyOneLoadedPage() {
  const prefersReducedMotion = useReducedMotion();
  const [visitorName, setVisitorName] = useState("");
  const [chatStep, setChatStep] = useState<ChatStep>("name");
  const [chatInput, setChatInput] = useState("");
  const [chatStatus, setChatStatus] = useState("");
  const [assistantActivity, setAssistantActivity] =
    useState<AssistantActivity>("idle");
  const [chapterIntroVisible, setChapterIntroVisible] = useState(false);
  const [searchLeadMessage, setSearchLeadMessage] = useState("");
  const [lastSelectionQuery, setLastSelectionQuery] = useState("");
  const [selectedChatRoot, setSelectedChatRoot] =
    useState<WisdomBranch | null>(null);
  const [selectedChapter, setSelectedChapter] =
    useState<WisdomChapterData | null>(null);
  const [readerChapter, setReaderChapter] =
    useState<WisdomChapterData | null>(null);
  const assistantTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingVisitorNameRef = useRef<string | null>(null);
  const isAssistantProcessing = assistantActivity !== "idle";

  useEffect(() => {
    try {
      const storedName = window.localStorage.getItem(VISITOR_NAME_STORAGE_KEY);

      if (storedName) {
        setVisitorName(storedName);
        setChatStep("chapter");
        setChapterIntroVisible(true);
        setChatInput("");
      }
    } catch {
      // The guided flow remains functional when browser storage is unavailable.
    }
  }, []);

  useEffect(
    () => () => {
      if (assistantTimerRef.current) {
        clearTimeout(assistantTimerRef.current);
      }
    },
    []
  );

  useEffect(() => {
    const normalizedName = visitorName.trim();

    if (!readerChapter || !normalizedName) {
      return;
    }

    const reflectionLabel = `Chapter ${readerChapter.id} — ${readerChapter.title}`;

    void submitOpenedReflection(normalizedName, reflectionLabel);
  }, [readerChapter, visitorName]);

  const scheduleAssistantResponse = (callback: () => void, delay: number) => {
    if (assistantTimerRef.current) {
      clearTimeout(assistantTimerRef.current);
    }

    assistantTimerRef.current = setTimeout(
      () => {
        assistantTimerRef.current = null;
        setAssistantActivity("idle");
        callback();
      },
      prefersReducedMotion ? 0 : delay
    );
  };

  const beginChapterSearch = (
    chapter: WisdomChapterData,
    query: string
  ) => {
    if (isAssistantProcessing) {
      return;
    }

    const isChoosingAnother = chatStep === "selected" || Boolean(selectedChapter);

    setLastSelectionQuery(query);
    setChatStep("selected");
    setChatStatus("");
    setChatInput("");
    setSelectedChapter(null);
    setSearchLeadMessage(
      isChoosingAnother ? "Of course. Let’s look for another reflection." : ""
    );
    setAssistantActivity("searching");

    scheduleAssistantResponse(() => {
      setSelectedChapter(chapter);
      setSelectedChatRoot(chapter.branch);
      setSearchLeadMessage("");
    }, 850);
  };

  const beginInvalidChapterSearch = (query: string) => {
    if (isAssistantProcessing) {
      return;
    }

    const isChoosingAnother = chatStep === "selected" || Boolean(selectedChapter);

    setLastSelectionQuery(query);
    setChatStep("chapter");
    setChatStatus("");
    setChatInput("");
    setSelectedChapter(null);
    setSearchLeadMessage(
      isChoosingAnother ? "Of course. Let’s look for another reflection." : ""
    );
    setAssistantActivity("searching");

    scheduleAssistantResponse(() => {
      setSearchLeadMessage("");
      setChatStatus(
        "I couldn’t find that reflection. Try a number from 1 to 21, or type the chapter title."
      );
    }, 850);
  };

  const submitVisitorNameInBackground = (name: string) => {
    const normalizedName = name.trim();

    if (!normalizedName || pendingVisitorNameRef.current === normalizedName) {
      return;
    }

    try {
      const submittedName = window.localStorage.getItem(
        VISITOR_NAME_SUBMITTED_STORAGE_KEY
      );

      if (submittedName === normalizedName) {
        return;
      }
    } catch {
      // In-memory tracking still prevents duplicate submissions this visit.
    }

    pendingVisitorNameRef.current = normalizedName;

    void submitVisitorName(normalizedName).then((wasSubmitted) => {
      if (wasSubmitted) {
        try {
          window.localStorage.setItem(
            VISITOR_NAME_SUBMITTED_STORAGE_KEY,
            normalizedName
          );
        } catch {
          // Submission succeeds even when browser storage is unavailable.
        }
      }

      if (pendingVisitorNameRef.current === normalizedName) {
        pendingVisitorNameRef.current = null;
      }
    });
  };

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = chatInput.trim();

    if (!submittedValue) {
      setChatStatus("Enter a name or reflection before continuing.");
      return;
    }

    if (chatStep === "name") {
      setVisitorName(submittedValue);
      setChatStep("chapter");
      setChapterIntroVisible(false);
      setChatInput("");
      setChatStatus("");
      setAssistantActivity("typing");

      try {
        window.localStorage.setItem(
          VISITOR_NAME_STORAGE_KEY,
          submittedValue
        );
      } catch {
        // Persistence is optional; local state remains available for this visit.
      }

      submitVisitorNameInBackground(submittedValue);

      scheduleAssistantResponse(() => {
        setChapterIntroVisible(true);
      }, 750);

      return;
    }

    const root = findRoot(submittedValue);

    if (root) {
      setSelectedChatRoot(root);
      setChatInput("");
      setChatStatus(`Showing reflections from ${WISDOM_ROOT_LABELS[root]}.`);
      return;
    }

    const chapter = findChapter(submittedValue);

    if (!chapter) {
      beginInvalidChapterSearch(submittedValue);
      return;
    }

    beginChapterSearch(chapter, submittedValue);

    // Future: Edmond's Assistant should answer using selected root and approved chapter content.
    // Future: Edmond's Assistant should cite or reference relevant reflections.
    // Future: Edmond's Assistant must not invent personal facts outside approved chapter content.
  };

  const closeReader = useCallback(() => setReaderChapter(null), []);
  const changeReaderChapter = useCallback((chapter: WisdomChapterData) => {
    setReaderChapter(chapter);
    setSelectedChapter(chapter);
    setSelectedChatRoot(chapter.branch);
    setLastSelectionQuery(chapter.title);
    setChatStep("selected");
  }, []);
  const visibleChatChapters = selectedChatRoot
    ? wisdomChapters.filter((chapter) => chapter.branch === selectedChatRoot)
    : wisdomChapters;

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-ink">
      <AmbientExperience vibrant />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-full max-w-[96rem] items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6 lg:min-h-[5.25rem] lg:px-8">
          <Link
            className="focus-ring group flex min-h-11 shrink-0 items-center gap-3 rounded-sm sm:gap-4"
            href="/"
          >
            <span className="status-pulse h-2.5 w-2.5 rounded-full bg-gold" />
            <span>
              <span className="block whitespace-nowrap text-base font-bold uppercase tracking-[0.12em] text-ink">
                Edmond Ilbawi
              </span>
              <span className="hidden text-[0.9375rem] font-semibold uppercase tracking-[0.12em] text-gold sm:block">
                Portfolio
              </span>
            </span>
          </Link>

          <Link
            className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 bg-white/[0.045] px-3 text-base font-semibold text-ink/80 transition-all duration-200 hover:border-gold/40 hover:text-gold sm:px-4"
            href="/"
          >
            <ArrowLeft
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-1"
              size={14}
            />
            <span className="sm:hidden">Back</span>
            <span className="hidden sm:inline">Back to portfolio</span>
          </Link>
        </div>
      </header>

      <main className="relative isolate overflow-hidden pb-12 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_4%,rgba(212,175,55,0.13),transparent_28%),radial-gradient(ellipse_at_92%_52%,rgba(212,175,55,0.07),transparent_24%),radial-gradient(ellipse_at_8%_84%,rgba(212,175,55,0.055),transparent_22%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-subtle-grid bg-[length:68px_68px] opacity-[0.04] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 1100"
        >
          <defs>
            <linearGradient id="loaded-page-thread" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#D4AF37" stopOpacity="0.08" />
              <stop offset="0.28" stopColor="#E8C557" stopOpacity="0.48" />
              <stop offset="0.72" stopColor="#D4AF37" stopOpacity="0.32" />
              <stop offset="1" stopColor="#D4AF37" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            d="M-80 205 C260 55 430 145 620 102 C900 40 1110 72 1520 10"
            fill="none"
            stroke="url(#loaded-page-thread)"
            strokeLinecap="round"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-100 930 C240 790 520 910 760 824 C1030 730 1170 796 1540 676"
            fill="none"
            stroke="url(#loaded-page-thread)"
            strokeLinecap="round"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <section
            aria-labelledby="wisdom-bar-title"
            className="mx-auto max-w-5xl text-center"
            id="wisdom-bar"
          >
            <p className="text-[0.9375rem] font-bold uppercase tracking-[0.14em] text-gold">
              Digital Journal
            </p>
            <h1
              className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl"
              id="wisdom-bar-title"
            >
              21% Loaded
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              “21% Loaded” means I am still becoming — not complete, but shaped
              by reflection, growth, and experience.
            </p>

            <div className="mx-auto mt-9 max-w-4xl text-left">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="text-3xl font-semibold text-gold">21%</span>
                  <span className="ml-3 text-base text-ink/75">Still becoming</span>
                </div>
                <span className="text-[0.9375rem] font-medium text-ink/70">
                  21 / 100 loaded
                </span>
              </div>
              <div
                aria-label="21 percent loaded"
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={WISDOM_TOTAL_PERCENT}
                className="mt-4 h-3 overflow-hidden rounded-full border border-white/10 bg-black/55 p-0.5"
                role="progressbar"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold/70 via-gold to-[#f0d36d] shadow-[0_0_20px_rgba(212,175,55,0.7)]"
                  style={{ width: `${WISDOM_TOTAL_PERCENT}%` }}
                />
              </div>

              <div className="mt-6 space-y-4 border-y border-white/[0.09] py-5">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.9375rem] font-medium text-ink/70 sm:justify-start">
                  <span>Five roots</span>
                  <span>Twenty-one reflections</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {ROOTS.map((root, index) => (
                    <span
                      className={`inline-flex min-h-11 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05] px-3 py-2 text-center text-sm font-medium text-gold sm:px-4 sm:text-[0.9375rem] ${
                        index === ROOTS.length - 1
                          ? "col-span-2 sm:col-span-1"
                          : ""
                      }`}
                      key={root}
                    >
                      {WISDOM_ROOT_LABELS[root]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto mt-12 max-w-6xl space-y-7 sm:mt-16 sm:space-y-10">
            <section
              aria-labelledby="companion-title"
              className="v2-panel-surface relative overflow-hidden rounded-sm border-gold/30 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.42),0_0_55px_rgba(212,175,55,0.07)] sm:p-8 lg:p-10"
              id="companion"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex max-w-2xl items-start gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-gold/30 bg-gold/[0.08] text-gold shadow-[0_0_24px_rgba(212,175,55,0.08)]">
                    <Sparkles aria-hidden size={18} />
                  </span>
                  <div>
                    <p className="text-[0.9375rem] font-semibold uppercase tracking-[0.1em] text-gold">
                      Guided Journal Assistant
                    </p>
                    <h2
                      className="mt-1.5 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl"
                      id="companion-title"
                    >
                      Edmond’s Assistant
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-7 text-ink/75">
                      I can help you choose one of the 21 reflections and guide
                      you through the journal.
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-live="polite"
                className="mt-8 max-w-none space-y-5 sm:mt-10 sm:space-y-6"
                id="companion-transcript"
              >
                {chatStep === "name" ? (
                  <div className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/20 bg-gold/[0.035] p-4 pl-5 text-base leading-7 text-ink/90 shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:max-w-[80%]">
                    <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
                    <p className="text-[0.9375rem] font-semibold text-gold">
                      Edmond’s Assistant
                    </p>
                    <p className="mt-2">What is your name?</p>
                  </div>
                ) : null}

                {chatStep !== "name" ? (
                  <>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-auto w-fit max-w-[88%] rounded-sm border border-white/[0.12] bg-white/[0.055] p-4 text-base leading-7 text-ink shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:max-w-[72%]"
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 8 }
                      }
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.22
                      }}
                    >
                      <p>You can call me {visitorName}.</p>
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {assistantActivity === "typing" ? (
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/20 bg-gold/[0.035] p-4 pl-5 text-base leading-7 text-ink/90 sm:max-w-[80%]"
                          exit={
                            prefersReducedMotion
                              ? undefined
                              : { opacity: 0, y: -4 }
                          }
                          initial={
                            prefersReducedMotion
                              ? false
                              : { opacity: 0, y: 8 }
                          }
                          role="status"
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.24
                          }}
                        >
                          <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
                          <p className="font-medium text-ink/85">
                            Edmond’s Assistant is typing
                            <span
                              aria-hidden
                              className="motion-safe:animate-pulse motion-reduce:animate-none"
                            >
                              ...
                            </span>
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    {chapterIntroVisible ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="relative max-w-full overflow-hidden rounded-sm border border-gold/20 bg-gold/[0.035] p-4 pl-5 text-base leading-7 text-ink/90 sm:max-w-[92%] sm:p-5 sm:pl-6"
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 8 }
                      }
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.28
                      }}
                    >
                      <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
                      <p className="text-[0.9375rem] font-semibold text-gold">
                        Edmond’s Assistant
                      </p>
                      <p className="mt-2">
                        Nice to meet you, {visitorName}. Which of the 21
                        reflections would you like to dive into?
                      </p>
                      <p className="mt-4 text-[0.9375rem] leading-6 text-ink/70">
                        Choose a chapter below, or type its number/title.
                      </p>
                      <div
                        aria-label="Choose a reflection path"
                        className="mt-3 flex flex-wrap gap-2"
                        role="group"
                      >
                        {ROOTS.map((root) => {
                          const isSelected = selectedChatRoot === root;

                          return (
                            <button
                              aria-pressed={isSelected}
                              className={`focus-ring min-h-11 rounded-full border px-4 py-2 text-base font-semibold transition-all duration-200 disabled:cursor-wait disabled:opacity-50 ${
                                isSelected
                                  ? "border-gold/55 bg-gold/[0.12] text-gold"
                                  : "border-white/15 bg-black/20 text-ink/70 hover:border-gold/35 hover:text-ink"
                              }`}
                              disabled={isAssistantProcessing}
                              key={root}
                              onClick={() => {
                                setSelectedChatRoot(
                                  isSelected ? null : root
                                );
                                setChatStatus("");
                              }}
                              type="button"
                            >
                              {WISDOM_ROOT_LABELS[root]}
                            </button>
                          );
                        })}
                      </div>
                      <div className="mt-5 max-h-[28rem] overflow-y-auto rounded-sm border border-white/[0.1] bg-black/25 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:mt-6 sm:max-h-[34rem] sm:p-4">
                        <motion.ol
                          animate={{ opacity: 1, y: 0 }}
                          className="grid gap-2 sm:grid-cols-2 sm:gap-3"
                          initial={
                            prefersReducedMotion
                              ? false
                              : { opacity: 0.72, y: 4 }
                          }
                          key={selectedChatRoot ?? "all-reflections"}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 0.2
                          }}
                        >
                          {visibleChatChapters.map((chapter) => {
                            const isSelected =
                              selectedChapter?.id === chapter.id;

                            return (
                              <li key={chapter.id}>
                                <button
                                  aria-pressed={isSelected}
                                  className={`focus-ring group grid min-h-16 w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 rounded-sm border px-4 py-3.5 text-left transition-all duration-200 disabled:cursor-wait disabled:opacity-50 ${
                                    isSelected
                                      ? "border-gold/35 bg-gold/[0.09] text-gold shadow-[inset_0_0_18px_rgba(212,175,55,0.04)]"
                                      : "border-transparent text-ink/75 hover:border-gold/20 hover:bg-gold/[0.055] hover:text-ink"
                                  }`}
                                  data-chapter-id={chapter.id}
                                  disabled={isAssistantProcessing}
                                  onClick={() =>
                                    beginChapterSearch(chapter, chapter.title)
                                  }
                                  type="button"
                                >
                                  <span className="row-span-2 shrink-0 pt-0.5 text-[0.9375rem] font-semibold text-gold">
                                    {chapter.id}
                                  </span>
                                  <span className="text-base leading-6">
                                    {chapter.title}
                                  </span>
                                  <span className="text-[0.9375rem] font-medium text-gold/85">
                                    {WISDOM_ROOT_LABELS[chapter.branch]}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </motion.ol>
                      </div>
                    </motion.div>
                    ) : null}
                  </>
                ) : null}

                {lastSelectionQuery ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="ml-auto w-fit max-w-[88%] rounded-sm border border-white/[0.12] bg-white/[0.055] p-4 text-base leading-7 text-ink shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:max-w-[72%]"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    key={lastSelectionQuery}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22
                    }}
                  >
                    <p>I want to explore {lastSelectionQuery}.</p>
                  </motion.div>
                ) : null}

                {searchLeadMessage ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/20 bg-gold/[0.035] p-4 pl-5 text-base leading-7 text-ink/90 sm:max-w-[82%]"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22
                    }}
                  >
                    <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
                    <p>{searchLeadMessage}</p>
                  </motion.div>
                ) : null}

                <AnimatePresence initial={false}>
                  {assistantActivity === "searching" ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/25 bg-gold/[0.04] p-4 pl-5 text-base leading-7 text-ink/90 sm:max-w-[82%]"
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, y: -4 }
                      }
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 8 }
                      }
                      role="status"
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.24
                      }}
                    >
                      <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent" />
                      <p className="font-medium text-ink/85">
                        Searching the reflections
                        <span
                          aria-hidden
                          className="motion-safe:animate-pulse motion-reduce:animate-none"
                        >
                          ...
                        </span>
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {chatStatus && assistantActivity === "idle" ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/20 bg-gold/[0.035] p-4 pl-5 text-base leading-7 text-ink/90 sm:max-w-[82%]"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    role="status"
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.24
                    }}
                  >
                    <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent" />
                    <p>{chatStatus}</p>
                  </motion.div>
                ) : null}

                {selectedChapter ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="relative w-fit max-w-[92%] overflow-hidden rounded-sm border border-gold/30 bg-gold/[0.045] p-4 pl-5 shadow-[0_16px_45px_rgba(0,0,0,0.24),0_0_30px_rgba(212,175,55,0.04)] sm:max-w-[82%] sm:p-5 sm:pl-6"
                    data-selected-chapter={selectedChapter.id}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.28
                    }}
                  >
                    <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
                    <p className="text-[0.9375rem] font-semibold text-gold">
                      Edmond’s Assistant
                    </p>
                    <p className="mt-2 text-base font-semibold text-ink">
                      I found it.
                    </p>
                    <p className="mt-2 text-base leading-7 text-ink/90">
                      You selected Chapter {selectedChapter.id} — {selectedChapter.title}.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.9375rem] leading-6 text-ink/70">
                      <span className="rounded-full border border-white/10 px-2.5 py-1">
                        Root: {WISDOM_ROOT_LABELS[selectedChapter.branch]}
                      </span>
                      <span>+{selectedChapter.contribution}% contribution</span>
                    </div>
                    <Button
                      className="mt-5 min-w-44 !text-base shadow-[0_0_32px_rgba(212,175,55,0.2)]"
                      icon={<BookOpen aria-hidden size={16} />}
                      onClick={() => setReaderChapter(selectedChapter)}
                      variant="primary"
                    >
                      Open Reflection
                    </Button>
                  </motion.div>
                ) : null}
              </div>

              <form
                aria-busy={isAssistantProcessing}
                className="mt-8 max-w-none"
                onSubmit={handleChatSubmit}
              >
                <label className="sr-only" htmlFor="companion-input">
                  {chatStep === "name"
                    ? "Enter your name"
                    : chatStep === "selected"
                      ? "Choose another chapter number or title"
                      : "Enter a chapter number or title"}
                </label>
                <div className="flex min-w-0 flex-col items-stretch gap-2 rounded-sm border border-white/15 bg-black/45 p-2 transition-colors duration-200 focus-within:border-gold/55 sm:flex-row sm:items-center">
                  <input
                    aria-describedby={
                      chatStep === "name"
                        ? "visitor-name-privacy companion-status"
                        : "companion-status"
                    }
                    autoComplete={chatStep === "name" ? "name" : "off"}
                    className="min-h-11 w-full min-w-0 flex-1 bg-transparent px-2 text-base text-ink outline-none placeholder:text-ink/60"
                    disabled={isAssistantProcessing}
                    id="companion-input"
                    key={
                      chatStep === "name"
                        ? "visitor-name-input"
                        : "reflection-query-input"
                    }
                    name={
                      chatStep === "name"
                        ? "visitor-name"
                        : "reflection-query"
                    }
                    onChange={(event) => {
                      setChatInput(event.target.value);
                      setChatStatus("");
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        event.currentTarget.form?.requestSubmit();
                      }
                    }}
                    placeholder={
                      chatStep === "name"
                        ? "Type your name..."
                        : chatStep === "selected"
                          ? "Type another chapter number or title..."
                          : "Type a chapter number or title..."
                    }
                    type="text"
                    value={chatInput}
                  />
                  <button
                    aria-label="Send to Edmond’s Assistant"
                    className="focus-ring group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-sm border border-gold/55 bg-gold/[0.11] px-4 text-base font-semibold text-gold transition-all duration-200 hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                    disabled={!chatInput.trim() || isAssistantProcessing}
                    type="submit"
                  >
                    <Send
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={16}
                    />
                    <span>Send</span>
                  </button>
                </div>
                {chatStep === "name" ? (
                  <p
                    className="mt-3 text-base leading-6 text-ink/75"
                    id="visitor-name-privacy"
                  >
                    Your name and opened reflections may be saved so I can
                    understand how visitors explore 21% Loaded.
                  </p>
                ) : null}
                <p
                  aria-live="polite"
                  className="sr-only"
                  id="companion-status"
                  role="status"
                >
                  {chatStatus}
                </p>
              </form>

            </section>

            <section
              aria-labelledby="contact-question-title"
              className="v2-panel-surface relative mx-auto max-w-3xl overflow-hidden rounded-sm border-gold/30 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.3),0_0_38px_rgba(212,175,55,0.04)] sm:p-8"
              id="reach-out"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-gold/[0.06]" />
                <span className="relative grid h-11 w-11 place-items-center rounded-sm border border-gold/25 bg-gold/[0.07] text-gold">
                  <Mail aria-hidden size={20} />
                </span>
                <p className="relative mt-4 text-[0.9375rem] font-semibold uppercase tracking-[0.1em] text-gold">
                  Private contact
                </p>
                <h2
                  className="relative mt-2 text-3xl font-semibold tracking-[-0.025em]"
                  id="contact-question-title"
                >
                  Reach out to me
                </h2>
                <p className="relative mt-3 text-base leading-7 text-ink/75">
                  For longer thoughts, personal messages, collaborations, or
                  opportunities, you can reach out directly.
                </p>

                <Button
                  className="relative mt-7 w-full !text-base"
                  href="mailto:edmondilbawi@gmail.com?subject=Message%20from%2021%25%20Loaded"
                  icon={<Mail aria-hidden size={16} />}
                  variant="secondary"
                >
                  Send email
                </Button>
              </section>
            </div>
          </div>
      </main>

      <ReflectionReader
        activeChapter={readerChapter}
        onChangeChapter={changeReaderChapter}
        onClose={closeReader}
      />
    </div>
  );
}
