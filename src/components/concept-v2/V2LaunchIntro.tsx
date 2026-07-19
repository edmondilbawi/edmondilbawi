"use client";

import {
  animate as animateValue,
  motion,
  useMotionValue,
  useTransform
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_SESSION_KEY = "edmond-launch-intro-v2-played";
const HERO_REVEAL_DELAY_MS = 4200;
const INTRO_DURATION_MS = 5650;

type V2LaunchIntroProps = {
  onReveal: () => void;
};

export function V2LaunchIntro({ onReveal }: V2LaunchIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasRevealed = useRef(false);
  const progress = useMotionValue(0);
  const progressScale = useTransform(progress, [0, 100], [0, 1]);
  const progressText = useTransform(
    progress,
    (value) => `${Math.round(value)}%`
  );

  const revealHero = useCallback(() => {
    if (hasRevealed.current) {
      return;
    }

    hasRevealed.current = true;
    onReveal();
  }, [onReveal]);

  const finishIntro = useCallback(() => {
    revealHero();
    setIsVisible(false);
  }, [revealHero]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const replayForLocalReview = process.env.NODE_ENV === "development";
    let hasPlayed = false;

    try {
      hasPlayed =
        !replayForLocalReview &&
        window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch {
      // Storage may be unavailable in restricted browsing modes. The timed
      // fallback below still guarantees that the portfolio is revealed.
    }

    if (prefersReducedMotion || hasPlayed) {
      finishIntro();
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsPlaying(true);
    });
    const progressAnimation = animateValue(progress, 100, {
      delay: 0.45,
      duration: 3.55,
      ease: "linear"
    });
    const revealTimer = window.setTimeout(revealHero, HERO_REVEAL_DELAY_MS);
    const fallbackTimer = window.setTimeout(finishIntro, INTRO_DURATION_MS);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(revealTimer);
      window.clearTimeout(fallbackTimer);
      progressAnimation.stop();
    };
  }, [finishIntro, progress, revealHero]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const skipOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        finishIntro();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", skipOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", skipOnEscape);
    };
  }, [finishIntro, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      aria-label="Skip introduction"
      className="fixed inset-0 z-[200] block h-[100svh] w-full cursor-pointer overflow-hidden bg-transparent p-0 text-left"
      data-launch-intro
      onClick={finishIntro}
      type="button"
    >
      <motion.span
        animate={isPlaying ? { y: "-102%" } : { y: "0%" }}
        aria-hidden
        className="absolute inset-x-0 top-0 h-[calc(50%+1px)] bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.085),transparent_38%),linear-gradient(180deg,#050505_0%,#070706_100%)]"
        initial={false}
        transition={{ delay: 4.25, duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="absolute inset-0 bg-subtle-grid bg-[length:54px_54px] opacity-[0.08] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      </motion.span>

      <motion.span
        animate={isPlaying ? { y: "102%" } : { y: "0%" }}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[calc(50%+1px)] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.075),transparent_38%),linear-gradient(180deg,#070706_0%,#040404_100%)]"
        initial={false}
        transition={{ delay: 4.25, duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="absolute inset-0 bg-subtle-grid bg-[length:54px_54px] opacity-[0.07] [mask-image:linear-gradient(to_top,transparent,black)]" />
      </motion.span>

      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[26rem] w-[min(96vw,52rem)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),rgba(212,175,55,0.035)_38%,transparent_70%)] blur-3xl"
      />

      <motion.span
        animate={
          isPlaying
            ? { opacity: [0, 0.85, 0.85, 0], scaleX: [0, 1, 1, 1] }
            : { opacity: 0, scaleX: 0 }
        }
        aria-hidden
        className="absolute left-0 top-1/2 h-px w-full origin-center bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_18px_rgba(212,175,55,0.5)]"
        initial={false}
        transition={{
          delay: 3.95,
          duration: 1.35,
          ease: "easeInOut",
          times: [0, 0.28, 0.78, 1]
        }}
      />

      <motion.span
        animate={
          isPlaying
            ? {
                clipPath: [
                  "inset(50% 50% 50% 50%)",
                  "inset(0% 0% 0% 0%)",
                  "inset(0% 0% 0% 0%)",
                  "inset(0% 0% 0% 0%)"
                ],
                opacity: [0, 0.62, 0.62, 0]
              }
            : {
                clipPath: "inset(50% 50% 50% 50%)",
                opacity: 0
              }
        }
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-[min(92vw,42rem)] -translate-x-1/2 -translate-y-1/2 border border-gold/60 shadow-[0_0_80px_rgba(212,175,55,0.07),inset_0_0_55px_rgba(212,175,55,0.025)] sm:h-80"
        initial={false}
        transition={{
          delay: 0.18,
          duration: 4.4,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.12, 0.9, 1]
        }}
      />

      <motion.span
        animate={
          isPlaying
            ? {
                opacity: [0, 1, 1, 0],
                scale: [0.93, 1, 1, 0.97],
                x: "-50%",
                y: [8, 0, 0, -5]
              }
            : { opacity: 0, scale: 0.93, x: "-50%", y: 8 }
        }
        aria-hidden
        className="absolute left-1/2 top-[calc(50%_-_5.25rem)] whitespace-nowrap font-mono text-6xl font-medium tracking-[0.2em] text-ink sm:text-8xl"
        data-launch-initials
        initial={false}
        transition={{
          delay: 0.12,
          duration: 4.55,
          ease: "easeOut",
          times: [0, 0.11, 0.9, 1]
        }}
      >
        E<span className="text-gold [text-shadow:0_0_28px_rgba(212,175,55,0.32)]">I</span>
      </motion.span>

      <motion.span
        animate={
          isPlaying
            ? {
                opacity: [0, 0.68, 0.68, 0],
                x: "-50%",
                y: [5, 0, 0, -3]
              }
            : { opacity: 0, x: "-50%", y: 5 }
        }
        aria-hidden
        className="absolute left-1/2 top-[calc(50%+0.25rem)] whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-[0.34em] text-gold/80 sm:text-[10px]"
        initial={false}
        transition={{
          delay: 0.5,
          duration: 4.05,
          ease: "easeOut",
          times: [0, 0.12, 0.88, 1]
        }}
      >
        Edmond Ilbawi · Portfolio
      </motion.span>

      <motion.span
        animate={
          isPlaying
            ? {
                opacity: [0, 1, 1, 0],
                x: "-50%",
                y: [7, 0, 0, -2]
              }
            : { opacity: 0, x: "-50%", y: 7 }
        }
        aria-hidden
        className="absolute left-1/2 top-[calc(50%+4rem)] flex w-[min(84vw,36rem)] flex-col"
        initial={false}
        transition={{
          delay: 0.32,
          duration: 4.3,
          ease: "easeOut",
          times: [0, 0.1, 0.9, 1]
        }}
      >
        <span className="flex items-end justify-between font-mono text-[9px] font-medium uppercase tracking-[0.24em] text-ink/60 sm:text-[10px]">
          <span>Loading portfolio</span>
          <motion.span
            className="text-3xl font-semibold tracking-[-0.05em] text-gold [text-shadow:0_0_22px_rgba(212,175,55,0.24)] sm:text-5xl"
            data-launch-progress
          >
            {progressText}
          </motion.span>
        </span>
        <span className="relative mt-4 h-[3px] w-full overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-0 origin-left bg-gradient-to-r from-gold/45 via-gold to-gold/70 shadow-[0_0_14px_rgba(212,175,55,0.45)]"
            data-launch-progress-bar
            style={{ scaleX: progressScale }}
          />
        </span>
        <span className="mt-2.5 flex justify-between font-mono text-[8px] tracking-[0.18em] text-ink/30">
          <span>0</span>
          <span>100</span>
        </span>
      </motion.span>
    </button>
  );
}
