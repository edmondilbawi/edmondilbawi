"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Leaf,
  Trees
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { WisdomBar } from "@/components/WisdomBar";
import { WisdomChapter } from "@/components/WisdomChapter";
import {
  wisdomChapters,
  type WisdomBranch
} from "@/data/wisdomChapters";
import { translations, type Language } from "@/data/i18n";

type BranchDefinition = {
  id: WisdomBranch;
  title: string;
  description: string;
  path: string;
  x: number;
  y: number;
};

const BRANCHES: BranchDefinition[] = [
  {
    id: "lens",
    title: "Lens",
    description: "How I learned to see, question, and understand differently.",
    path: "M 500 118 C 418 145, 258 150, 125 205",
    x: 125,
    y: 205
  },
  {
    id: "connection",
    title: "Connection",
    description:
      "How I learned to listen, communicate, and grow with people.",
    path: "M 500 118 C 458 175, 385 222, 310 260",
    x: 310,
    y: 260
  },
  {
    id: "character",
    title: "Character",
    description: "The habits and values that keep me grounded.",
    path: "M 500 118 C 490 175, 510 235, 500 292",
    x: 500,
    y: 292
  },
  {
    id: "building",
    title: "Building",
    description: "How I learned to turn thinking into action.",
    path: "M 500 118 C 542 175, 615 222, 690 260",
    x: 690,
    y: 260
  },
  {
    id: "becoming",
    title: "Becoming",
    description:
      "The reminders that I am still growing, adapting, and loading.",
    path: "M 500 118 C 582 145, 742 150, 875 205",
    x: 875,
    y: 205
  }
];

type WisdomExperienceProps = {
  language?: Language;
  onClose?: () => void;
  publicWording?: boolean;
};

type WisdomTreeProps = {
  language?: Language;
  onSelect: (branch: WisdomBranch) => void;
  publicWording?: boolean;
};

type BranchLeavesProps = {
  branch: BranchDefinition;
  language?: Language;
  onBack: () => void;
  onOpen: (index: number) => void;
  publicWording?: boolean;
};

function formatPercent(value: number) {
  return value.toFixed(value % 1 === 0 ? 0 : 2);
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT" ||
    target.isContentEditable
  );
}

function scrollLibraryToTop() {
  const library = document.getElementById("loaded");

  if (library) {
    library.scrollTop = 0;
  }

  window.requestAnimationFrame(() => {
    library?.scrollTo({
      behavior: "auto",
      top: 0
    });
  });
}

function getBranch(branchId: WisdomBranch, language: Language = "en") {
  const branch =
    BRANCHES.find((candidate) => candidate.id === branchId) ?? BRANCHES[0];
  const branchIndex = BRANCHES.findIndex(
    (candidate) => candidate.id === branch.id
  );
  const copy = translations[language].library.roots[branchIndex];

  return {
    ...branch,
    description: copy.description,
    title: copy.title
  };
}

function getBranchReflectionIndices(branchId: WisdomBranch) {
  return wisdomChapters.flatMap((reflection, index) =>
    reflection.branch === branchId ? [index] : []
  );
}

function WisdomTree({
  language = "en",
  onSelect,
  publicWording = false
}: WisdomTreeProps) {
  const [previewBranchId, setPreviewBranchId] =
    useState<WisdomBranch | null>(null);
  const previewBranch = previewBranchId
    ? getBranch(previewBranchId, language)
    : null;
  const library = translations[language].library;

  return (
    <section
      aria-label={library.ariaLabel}
      className="panel-border overflow-hidden rounded-md bg-black/20 px-4 py-5 sm:px-6 sm:py-6"
    >
      <div className="relative mx-auto max-w-xl pb-1 md:hidden">
        <div
          aria-hidden
          className="absolute bottom-8 left-5 top-8 w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.25),rgba(212,175,55,0.9),rgba(212,175,55,0.25))]"
        />

        <div className="space-y-3">
          {BRANCHES.map((branch, branchIndex) => {
            const localizedBranch = getBranch(branch.id, language);

            return (
              <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="relative pl-12"
              initial={{ opacity: 0, x: 10 }}
              key={branch.id}
              transition={{
                delay: branchIndex * 0.055,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <span
                aria-hidden
                className="absolute left-5 top-1/2 h-px w-7 -translate-y-1/2 bg-gold/70"
              />
              <span
                aria-hidden
                className="absolute left-[0.94rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-gold bg-background shadow-gold-soft"
              />
              <button
                className="focus-ring group flex min-h-[4.5rem] w-full items-center justify-between gap-4 rounded-md border border-gold/25 bg-background/90 px-4 py-3 text-start transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/55 hover:bg-gold/[0.07] hover:shadow-gold-soft"
                onFocus={() => setPreviewBranchId(branch.id)}
                onClick={() => onSelect(branch.id)}
                onMouseEnter={() => setPreviewBranchId(branch.id)}
                onMouseLeave={() => setPreviewBranchId(null)}
                type="button"
              >
                <span>
                  <span className="block text-base font-semibold text-ink transition-colors duration-200 group-hover:text-gold">
                    {localizedBranch.title}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {publicWording
                      ? library.exploreBranch
                      : "Explore Branch"}
                  </span>
                </span>
                <GitBranch
                  aria-hidden
                  className="shrink-0 text-gold transition-transform duration-200 group-hover:scale-110"
                  size={18}
                />
              </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto hidden max-w-6xl md:block">
        <svg
          aria-label={library.ariaLabel}
          className="h-auto w-full overflow-visible"
          role="group"
          viewBox="0 0 1000 380"
        >
          <path
            className="fill-none stroke-gold/80"
            d="M 500 16 C 488 46, 512 88, 500 118"
            strokeLinecap="round"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
          <circle className="fill-gold" cx="500" cy="16" r="5" />
          <circle className="fill-gold/80" cx="500" cy="118" r="4.5" />

          {BRANCHES.map((branch) => {
            const localizedBranch = getBranch(branch.id, language);

            return (
              <g className="group/branch" key={branch.id}>
              <path
                className="fill-none stroke-gold/70 transition-all duration-200 group-hover/branch:stroke-gold group-hover/branch:drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]"
                d={branch.path}
                strokeLinecap="round"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                className="fill-background stroke-gold transition-all duration-200 group-hover/branch:fill-gold/20"
                cx={branch.x}
                cy={branch.y}
                r="6"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
              <foreignObject
                height="76"
                width="166"
                x={branch.x - 83}
                y={branch.y + 12}
              >
                <button
                  aria-describedby="root-preview-description"
                  className="focus-ring flex h-16 w-full flex-col items-center justify-center rounded-md border border-gold/25 bg-background/95 px-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/55 hover:bg-gold/[0.08] hover:shadow-gold-soft"
                  onFocus={() => setPreviewBranchId(branch.id)}
                  onClick={() => onSelect(branch.id)}
                  onMouseEnter={() => setPreviewBranchId(branch.id)}
                  onMouseLeave={() => setPreviewBranchId(null)}
                  type="button"
                >
                  <span className="text-base font-semibold text-ink">
                    {localizedBranch.title}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {publicWording
                      ? library.exploreBranch
                      : "Explore Branch"}
                  </span>
                </button>
              </foreignObject>
              </g>
            );
          })}
        </svg>

        <div
          aria-live="polite"
          className="mx-auto -mt-1 flex min-h-12 max-w-2xl items-center justify-center rounded-md border border-white/[0.07] bg-white/[0.025] px-4 text-center text-sm leading-6 text-muted"
          id="root-preview-description"
        >
          {previewBranch ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 4 }}
              key={previewBranch.id}
            >
              <span className="font-semibold text-gold">
                {previewBranch.title}:
              </span>{" "}
              {previewBranch.description}
            </motion.p>
          ) : (
            <p>
              {publicWording
                ? library.hoverPrompt
                : "Hover or focus a root to preview its module."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ReflectionLeaf({
  index,
  isLeft,
  language = "en",
  order,
  onOpen,
  publicWording = false
}: {
  index: number;
  isLeft: boolean;
  language?: Language;
  order: number;
  onOpen: (index: number) => void;
  publicWording?: boolean;
}) {
  const reflection = wisdomChapters[index];
  const library = translations[language].library;
  const leafButton = (
    <motion.button
      animate={{ opacity: 1, y: 0 }}
      className="focus-ring group/leaf relative z-10 w-full rounded-md border border-white/10 bg-background/95 p-4 text-start transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/[0.055] hover:shadow-[0_18px_50px_rgba(0,0,0,0.3),0_0_22px_rgba(212,175,55,0.08)]"
      initial={{ opacity: 0, y: 10 }}
      onClick={() => onOpen(index)}
      transition={{ delay: order * 0.055, duration: 0.32, ease: "easeOut" }}
      type="button"
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            {publicWording ? library.reflection : "Reflection Node"}{" "}
            {reflection.id}
          </span>
          <span
            className="mt-1.5 block text-left text-lg font-semibold text-ink transition-colors duration-200 group-hover/leaf:text-gold"
            dir="ltr"
            lang="en"
          >
            {reflection.shortTitle ?? reflection.title}
          </span>
        </span>
        <Leaf
          aria-hidden
          className="shrink-0 text-gold/75 transition-all duration-200 group-hover/leaf:-rotate-6 group-hover/leaf:scale-110"
          size={19}
        />
      </span>
      <span
        className="mt-2.5 block text-left text-sm leading-6 text-muted"
        dir="ltr"
        lang="en"
      >
        {reflection.keyLine}
      </span>
      <span className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5 text-xs font-semibold">
        <span className="uppercase tracking-[0.16em] text-gold">
          {publicWording ? library.openReflection : "Open Reflection"}
        </span>
        <span className="font-mono text-muted">
          +{formatPercent(reflection.contribution)}%
        </span>
      </span>
    </motion.button>
  );

  return (
    <>
      <div className="relative pl-11 md:hidden">
        <span
          aria-hidden
          className="absolute left-4 top-1/2 h-px w-7 -translate-y-1/2 bg-gold/60"
        />
        <span
          aria-hidden
          className="absolute left-[0.7rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-gold bg-background"
        />
        {leafButton}
      </div>

      <div className="relative hidden min-h-[8.5rem] grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] items-center md:grid">
        {isLeft ? leafButton : <span aria-hidden />}
        <span
          aria-hidden
          className="relative flex h-full items-center justify-center"
        >
          <span
            className={`absolute top-1/2 h-px w-7 bg-gold/60 ${
              isLeft ? "right-1/2" : "left-1/2"
            }`}
          />
          <span className="relative z-10 h-3 w-3 rounded-full border-2 border-gold bg-background shadow-gold-soft" />
        </span>
        {isLeft ? <span aria-hidden /> : leafButton}
      </div>
    </>
  );
}

function BranchLeaves({
  branch,
  language = "en",
  onBack,
  onOpen,
  publicWording = false
}: BranchLeavesProps) {
  const library = translations[language].library;
  const reflectionIndices = getBranchReflectionIndices(branch.id);
  const branchContribution = reflectionIndices.reduce(
    (total, index) => total + wisdomChapters[index].contribution,
    0
  );

  return (
    <section
      aria-labelledby={`branch-${branch.id}-title`}
      className="scroll-mt-24 pt-3 sm:pt-4"
    >
      <Button
        icon={<ArrowLeft aria-hidden size={17} />}
        onClick={onBack}
        variant="ghost"
      >
        {publicWording ? library.backToTree : "Back to Tree"}
      </Button>

      <header className="mx-auto mt-6 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {publicWording
            ? library.wisdomBranch
            : "Module active / Wisdom Branch"}
        </p>
        <h2
          className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl"
          id={`branch-${branch.id}-title`}
        >
          {branch.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {branch.description}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em]">
          <p className="rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 text-gold">
            {reflectionIndices.length} {library.reflections}
          </p>
          <p className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-muted">
            +{formatPercent(branchContribution)}% {library.combinedContribution}
          </p>
        </div>
      </header>

      <div className="relative mx-auto mt-7 max-w-4xl">
        <div
          aria-hidden
          className="absolute bottom-8 left-4 top-8 w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.25),rgba(212,175,55,0.85),rgba(212,175,55,0.25))] md:left-1/2 md:-translate-x-1/2"
        />
        <div className="space-y-3 md:space-y-0">
          {reflectionIndices.map((index, reflectionIndex) => (
            <ReflectionLeaf
              index={index}
              isLeft={reflectionIndex % 2 === 0}
              key={wisdomChapters[index].id}
              language={language}
              order={reflectionIndex}
              onOpen={onOpen}
              publicWording={publicWording}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WisdomExperience({
  language = "en",
  onClose,
  publicWording = false
}: WisdomExperienceProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedBranchId, setSelectedBranchId] =
    useState<WisdomBranch | null>(null);

  const activeReflection =
    activeIndex === null ? null : wisdomChapters[activeIndex] ?? null;
  const activeBranch = activeReflection
    ? getBranch(activeReflection.branch, language)
    : selectedBranchId
      ? getBranch(selectedBranchId, language)
      : null;
  const library = translations[language].library;
  const activeBranchIndices = activeBranch
    ? getBranchReflectionIndices(activeBranch.id)
    : [];
  const activeBranchPosition =
    activeIndex === null ? -1 : activeBranchIndices.indexOf(activeIndex);
  const previousReflectionIndex =
    activeBranchPosition > 0
      ? activeBranchIndices[activeBranchPosition - 1]
      : null;
  const nextReflectionIndex =
    activeBranchPosition >= 0 &&
    activeBranchPosition < activeBranchIndices.length - 1
      ? activeBranchIndices[activeBranchPosition + 1]
      : null;

  const selectBranch = useCallback((branchId: WisdomBranch) => {
    setSelectedBranchId(branchId);
    setActiveIndex(null);
  }, []);

  const backToTree = useCallback(() => {
    setActiveIndex(null);
    setSelectedBranchId(null);
  }, []);

  const openReflection = useCallback((index: number) => {
    setSelectedBranchId(wisdomChapters[index].branch);
    setActiveIndex(index);
  }, []);

  const backToBranch = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goPrevious = useCallback(() => {
    if (previousReflectionIndex !== null) {
      setActiveIndex(previousReflectionIndex);
    }
  }, [previousReflectionIndex]);

  const goNext = useCallback(() => {
    if (nextReflectionIndex !== null) {
      setActiveIndex(nextReflectionIndex);
    }
  }, [nextReflectionIndex]);

  useEffect(() => {
    scrollLibraryToTop();
  }, [activeIndex, selectedBranchId]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        isTypingTarget(event.target)
      ) {
        return;
      }

      if (event.key === "ArrowLeft" && previousReflectionIndex !== null) {
        event.preventDefault();
        goPrevious();
      }

      if (event.key === "ArrowRight" && nextReflectionIndex !== null) {
        event.preventDefault();
        goNext();
      }

      if (event.key === "Escape") {
        event.preventDefault();

        if (activeReflection) {
          backToBranch();
        } else if (selectedBranchId) {
          backToTree();
        } else {
          onClose?.();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    activeReflection,
    backToBranch,
    backToTree,
    goNext,
    goPrevious,
    nextReflectionIndex,
    onClose,
    previousReflectionIndex,
    selectedBranchId
  ]);

  return (
    <motion.section
      animate={{ opacity: 1 }}
      aria-label={publicWording ? library.ariaLabel : "21% Loaded library"}
      aria-modal={onClose ? true : undefined}
      className="fixed inset-0 z-50 isolate h-dvh w-screen overflow-x-hidden overflow-y-auto overscroll-contain bg-background"
      id="loaded"
      initial={{ opacity: 0 }}
      role={onClose ? "dialog" : undefined}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_6%,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.045),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 bg-subtle-grid bg-[length:46px_46px] opacity-[0.1]" />
      <div className="pointer-events-none fixed inset-y-0 left-1/2 w-px bg-[linear-gradient(180deg,transparent,rgba(212,175,55,0.09),transparent)]" />

      <div className="sticky top-0 z-30 border-b border-line bg-background/95 backdrop-blur-xl">
        <div className="section-shell flex min-h-16 items-center justify-between gap-4 py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            {publicWording ? library.topLabel : "Version 21 Archive"}
          </p>
          {onClose ? (
            <Button
              icon={<ArrowLeft aria-hidden size={17} />}
              onClick={onClose}
              variant="ghost"
            >
              {publicWording
                ? library.returnToPortfolio
                : "Return to Portfolio"}
            </Button>
          ) : null}
        </div>
      </div>

      <div className="section-shell relative pb-12 sm:pb-16">
        {!selectedBranchId && !activeReflection ? (
          <header className="py-5 text-center sm:py-6">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] text-gold">
              <Trees aria-hidden size={20} />
            </div>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
              {publicWording ? library.title : "21% Loaded Tree"}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {publicWording
                ? library.subtitle
                : "Five roots. Twenty-one reflections. One version still loading."}
            </p>
            {!publicWording ? (
              <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gold/75">
                A saved checkpoint of who I was becoming at 21. The system is
                still loading.
              </p>
            ) : null}
          </header>
        ) : null}

        <div
          className={`panel-border overflow-hidden rounded-md bg-panel/95 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45),0_0_70px_rgba(212,175,55,0.055)] sm:p-6 lg:p-8 ${
            selectedBranchId || activeReflection ? "mt-5" : ""
          }`}
        >
          <AnimatePresence mode="wait">
            {activeReflection && activeBranch ? (
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.985, y: 12 }}
                initial={{ opacity: 0, scale: 0.985, y: 12 }}
                key={`reader-${activeReflection.id}`}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 border-b border-line pb-4 lg:flex-row lg:items-center lg:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    {publicWording
                      ? library.reader
                      : "System log / Focused reflection"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      icon={<ArrowLeft aria-hidden size={17} />}
                      onClick={backToBranch}
                      variant="ghost"
                    >
                      {publicWording ? library.backToBranch : "Back to Branch"}
                    </Button>
                    <Button onClick={backToTree} variant="ghost">
                      {publicWording ? library.backToTree : "Back to Tree"}
                    </Button>
                    <Button
                      disabled={previousReflectionIndex === null}
                      icon={<ChevronLeft aria-hidden size={17} />}
                      onClick={goPrevious}
                      variant="secondary"
                    >
                      {publicWording
                        ? library.previousReflection
                        : "Previous Reflection"}
                    </Button>
                    <Button
                      disabled={nextReflectionIndex === null}
                      icon={<ChevronRight aria-hidden size={17} />}
                      onClick={goNext}
                      variant="secondary"
                    >
                      {publicWording
                        ? library.nextReflection
                        : "Next Reflection"}
                    </Button>
                  </div>
                </div>

                <div className="-mx-5 mb-4 border-b border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.014))] p-3 sm:-mx-6 sm:p-4 lg:-mx-8">
                  <WisdomBar
                    contribution={activeReflection.contribution}
                    language={language}
                    progress={activeReflection.cumulativeProgress}
                    reflectionLabel={`${library.reflection} ${activeReflection.id}`}
                  />
                </div>

                <WisdomChapter
                  branchTitle={activeBranch.title}
                  chapter={activeReflection}
                  language={language}
                  totalReflections={wisdomChapters.length}
                />
              </motion.div>
            ) : selectedBranchId && activeBranch ? (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 12 }}
                key={`branch-${selectedBranchId}`}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                <BranchLeaves
                  branch={activeBranch}
                  language={language}
                  onBack={backToTree}
                  onOpen={openReflection}
                  publicWording={publicWording}
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 12 }}
                key="wisdom-tree"
                transition={{ duration: 0.36, ease: "easeOut" }}
              >
                <WisdomTree
                  language={language}
                  onSelect={selectBranch}
                  publicWording={publicWording}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
