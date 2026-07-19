"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  GitBranch,
  Layers3
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { profile } from "@/data/portfolioContent";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const ambientPoints = [
  { delay: 0, left: "8%", top: "24%" },
  { delay: 1.4, left: "22%", top: "76%" },
  { delay: 0.7, left: "54%", top: "18%" },
  { delay: 2.1, left: "72%", top: "72%" },
  { delay: 1, left: "88%", top: "31%" }
];

const identityModules = [
  {
    icon: Code2,
    label: "Computer Science",
    status: "Foundation active"
  },
  {
    icon: Layers3,
    label: "Selected Projects",
    status: "2 builds loaded"
  },
  {
    icon: GitBranch,
    label: "21% Loaded",
    status: "Archive active"
  }
];

export function Hero() {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden border-b border-line pt-16"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.88)_38%,rgba(5,5,5,0.62)_72%,rgba(5,5,5,0.9)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-subtle-grid bg-[length:42px_42px] opacity-[0.18]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
      <div className="absolute bottom-24 left-0 -z-10 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.6)_18%,rgba(212,175,55,0.18)_38%,transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {ambientPoints.map((point) => (
          <motion.span
            animate={
              shouldReduceMotion
                ? { opacity: 0.35 }
                : { opacity: [0.15, 0.7, 0.15], y: [0, -10, 0] }
            }
            className="absolute h-1 w-1 rounded-full bg-gold shadow-gold-soft"
            key={`${point.left}-${point.top}`}
            style={{ left: point.left, top: point.top }}
            transition={{
              delay: point.delay,
              duration: 5.5,
              ease: "easeInOut",
              repeat: shouldReduceMotion ? 0 : Infinity
            }}
          />
        ))}
      </div>

      <div className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-gold" />
                Version 21 / Still Loading
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Digital Portfolio
              </p>
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-normal text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl text-ink/[0.88] sm:text-2xl">
              {profile.subtitle}
            </p>
            <p className="mt-7 max-w-3xl text-balance text-2xl leading-9 text-ink sm:text-3xl sm:leading-10">
              A portfolio can show what I build. 21% Loaded shows the mindset
              behind the person building it.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              At 21, I see myself as 21% loaded: not complete, not fully wise,
              but shaped by 21 reflections that taught me how to think, grow,
              and keep learning.
            </p>

            <div className="mt-8 max-w-md">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted">
                <span>Still Loading</span>
                <span className="text-gold">21%</span>
              </div>
              <div className="h-px overflow-hidden bg-white/10">
                <motion.div
                  animate={{ width: "21%" }}
                  className="relative h-full overflow-hidden bg-gold shadow-gold-soft"
                  initial={{ width: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { x: ["-150%", "350%"] }
                    }
                    className="absolute inset-y-0 left-0 w-8 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]"
                    transition={{
                      delay: 1.2,
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: shouldReduceMotion ? 0 : Infinity,
                      repeatDelay: 3.6
                    }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                className="hover:shadow-[0_0_42px_rgba(212,175,55,0.3)]"
                href="#projects"
                icon={<ArrowRight aria-hidden size={18} />}
                variant="primary"
              >
                View Projects
              </Button>
              <Button
                className="hover:border-gold/50 hover:bg-gold/[0.08] hover:shadow-gold-soft"
                href="#beyond-portfolio"
                icon={<ArrowRight aria-hidden size={18} />}
              >
                Explore 21% Loaded
              </Button>
              <Button
                className="hover:text-gold"
                download
                href="/cv/edmond-ilbawi-cv.pdf"
                icon={<Download aria-hidden size={18} />}
                variant="ghost"
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            animate={{
              opacity: 1,
              x: 0,
              y: shouldReduceMotion ? 0 : [0, -5, 0]
            }}
            className="relative min-h-[420px] overflow-visible rounded-md will-change-transform lg:min-h-[640px]"
            initial={{ opacity: 0, x: 28, y: 0 }}
            transition={{
              opacity: { delay: 0.18, duration: 0.75, ease: "easeOut" },
              x: { delay: 0.18, duration: 0.75, ease: "easeOut" },
              y: shouldReduceMotion
                ? { duration: 0 }
                : {
                    delay: 1,
                    duration: 7,
                    ease: "easeInOut",
                    repeat: Infinity
                  }
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion ? { rotate: 2 } : { rotate: [2, 3, 2] }
              }
              aria-hidden
              className="absolute inset-1 rounded-md border border-gold/20"
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity
              }}
            />
            <motion.div
              animate={
                shouldReduceMotion ? { rotate: -2 } : { rotate: [-2, -3, -2] }
              }
              aria-hidden
              className="absolute inset-7 rounded-md border border-white/[0.08]"
              transition={{
                duration: 9,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity
              }}
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? { opacity: 0.65 }
                  : { opacity: [0.5, 0.75, 0.5], scale: [0.98, 1.02, 0.98] }
              }
              className="absolute inset-0 rounded-md bg-gold/[0.1] blur-2xl"
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity
              }}
            />
            <div className="absolute inset-5 rounded-md border border-gold/[0.24] bg-black/20 shadow-[0_32px_120px_rgba(0,0,0,0.5),0_0_65px_rgba(212,175,55,0.1)]" />
            <div className="absolute inset-5 overflow-hidden rounded-md">
              <Image
                alt="Edmond Ilbawi"
                className="h-full w-full object-cover object-center opacity-[0.9]"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/images/edmond-hero-photo.jpeg"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.5),transparent_38%,rgba(5,5,5,0.36)),linear-gradient(180deg,transparent_48%,rgba(5,5,5,0.82))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(212,175,55,0.2),transparent_30%)]" />
            </div>
            <div className="absolute bottom-11 left-10 right-10 h-px bg-[linear-gradient(90deg,rgba(212,175,55,0.85),rgba(212,175,55,0.18),transparent)]" />
            <div className="absolute bottom-14 left-10 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                Profile / Version 21
              </p>
              <p className="mt-1 text-xs font-semibold text-ink">
                Edmond Ilbawi
              </p>
            </div>
            <span
              aria-hidden
              className="absolute left-1 top-1 h-8 w-8 border-l border-t border-gold/70"
            />
            <span
              aria-hidden
              className="absolute bottom-1 right-1 h-8 w-8 border-b border-r border-gold/70"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-14 hidden overflow-hidden rounded-md border border-white/[0.08] bg-black/30 sm:grid sm:grid-cols-3"
          initial={{ opacity: 0, y: 14 }}
          transition={{ delay: 0.55, duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {identityModules.map(({ icon: Icon, label, status }, index) => (
            <div
              className="group flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              key={label}
            >
              <span className="font-mono text-[10px] text-gold/70">
                0{index + 1}
              </span>
              <Icon
                aria-hidden
                className="text-gold transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                size={16}
              />
              <div>
                <p className="text-sm font-semibold text-ink">{label}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                  {status}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="loading-divider absolute inset-x-0 bottom-0" />
    </section>
  );
}
