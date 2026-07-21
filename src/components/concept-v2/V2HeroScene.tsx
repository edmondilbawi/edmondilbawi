"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Terminal } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useV2Language } from "@/components/concept-v2/V2LanguageProvider";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";
import { withSiteBasePath } from "@/utils/sitePath";

const ACADEMIC_SENTENCE =
  "University of Balamand · Computer Science · Expected Graduation 2027";

function AcademicMarquee() {
  return (
    <div className="relative mt-2 w-full overflow-hidden pt-3 sm:mt-3 xl:absolute xl:left-0 xl:top-full">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/25 to-transparent"
      />
      <span className="sr-only">{ACADEMIC_SENTENCE}</span>
      <div
        aria-hidden
        className="flex h-7 w-full items-center overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]"
        data-hero-marquee
      >
        <div className="hero-academic-marquee flex w-max will-change-transform">
          {[0, 1].map((copy) => (
            <p
              className="hero-academic-marquee-copy flex shrink-0 items-center whitespace-nowrap pr-5 font-mono text-[10px] font-medium uppercase tracking-[0.11em] text-ink/75 sm:text-[clamp(0.5rem,1.12vw,0.66rem)] sm:tracking-[0.13em]"
              key={copy}
            >
              {ACADEMIC_SENTENCE}
              <span className="ml-5 text-gold/80">·</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

type V2HeroSceneProps = {
  isReady?: boolean;
};

export function V2HeroScene({ isReady = true }: V2HeroSceneProps) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const { t } = useV2Language();

  const itemTransition = (delay: number) => ({
    delay: isReady && !shouldReduceMotion ? delay : 0,
    duration: shouldReduceMotion ? 0 : 0.72,
    ease: "easeOut" as const
  });

  return (
    <section
      className="relative z-10 flex min-h-[100svh] scroll-mt-16 items-center overflow-hidden border-b border-line pt-20 sm:pt-24 lg:pt-36"
      id="v2-home"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(205,139,43,0.15),transparent_28%),radial-gradient(ellipse_at_56%_58%,rgba(177,110,34,0.055),transparent_42%),radial-gradient(circle_at_18%_78%,rgba(190,125,38,0.075),transparent_25%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.022)_50%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:54px_54px] opacity-[0.16] [mask-image:linear-gradient(90deg,transparent_10%,black_55%,black_100%)]" />
      <motion.svg
        animate={{ opacity: 0.94 }}
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[61%] overflow-visible lg:block"
        preserveAspectRatio="none"
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient
            id="hero-panel-linear"
            x1="0.16"
            x2="0.88"
            y1="0.94"
            y2="0.06"
          >
            <stop offset="0" stopColor="rgb(184 119 35)" stopOpacity="0.025" />
            <stop offset="0.32" stopColor="rgb(194 128 38)" stopOpacity="0.07" />
            <stop offset="0.62" stopColor="rgb(207 143 44)" stopOpacity="0.14" />
            <stop offset="0.84" stopColor="rgb(222 158 53)" stopOpacity="0.24" />
            <stop offset="1" stopColor="rgb(236 174 68)" stopOpacity="0.34" />
          </linearGradient>
          <radialGradient
            cx="0.81"
            cy="0.18"
            id="hero-panel-radial"
            r="0.74"
          >
            <stop offset="0" stopColor="rgb(231 165 61)" stopOpacity="0.22" />
            <stop offset="0.48" stopColor="rgb(211 143 45)" stopOpacity="0.08" />
            <stop offset="0.78" stopColor="rgb(188 120 35)" stopOpacity="0.025" />
            <stop offset="1" stopColor="rgb(188 120 35)" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            cx="0.98"
            cy="0.22"
            id="hero-panel-right"
            r="0.58"
          >
            <stop offset="0" stopColor="rgb(228 158 53)" stopOpacity="0.09" />
            <stop offset="0.58" stopColor="rgb(211 141 43)" stopOpacity="0.045" />
            <stop offset="1" stopColor="rgb(188 120 35)" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            cx="0.92"
            cy="0.43"
            id="hero-panel-lower-right"
            r="0.38"
          >
            <stop offset="0" stopColor="rgb(218 148 48)" stopOpacity="0.1" />
            <stop offset="0.6" stopColor="rgb(203 134 40)" stopOpacity="0.04" />
            <stop offset="1" stopColor="rgb(188 120 35)" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="hero-panel-shadow"
            x1="0.08"
            x2="0.9"
            y1="0.9"
            y2="0.08"
          >
            <stop offset="0" stopColor="rgb(3 4 6)" stopOpacity="0.92" />
            <stop offset="0.28" stopColor="rgb(4 5 6)" stopOpacity="0.72" />
            <stop offset="0.5" stopColor="rgb(7 7 7)" stopOpacity="0.42" />
            <stop offset="0.7" stopColor="rgb(10 9 7)" stopOpacity="0.16" />
            <stop offset="1" stopColor="rgb(10 9 7)" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="hero-upper-curve-stroke"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="0" stopColor="rgb(255 218 120)" stopOpacity="1" />
            <stop offset="0.3" stopColor="rgb(255 220 125)" stopOpacity="1" />
            <stop offset="0.65" stopColor="rgb(255 194 75)" stopOpacity="0.98" />
            <stop offset="0.78" stopColor="rgb(240 168 60)" stopOpacity="0.9" />
            <stop offset="0.9" stopColor="rgb(180 115 45)" stopOpacity="0.65" />
            <stop offset="1" stopColor="rgb(106 73 37)" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient
            id="hero-lower-curve-stroke"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="0" stopColor="rgb(224 163 74)" stopOpacity="0.95" />
            <stop offset="0.12" stopColor="rgb(240 189 96)" stopOpacity="1" />
            <stop offset="0.2" stopColor="rgb(255 220 122)" stopOpacity="1" />
            <stop offset="0.32" stopColor="rgb(208 159 66)" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="rgb(183 139 57)" stopOpacity="0.75" />
            <stop offset="0.74" stopColor="rgb(143 109 45)" stopOpacity="0.55" />
            <stop offset="1" stopColor="rgb(128 88 40)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="hero-top-fade"
            x1="0"
            x2="0"
            y1="350"
            y2="565"
          >
            <stop offset="0" stopColor="white" />
            <stop offset="0.36" stopColor="white" stopOpacity="0.9" />
            <stop offset="1" stopColor="black" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="hero-lower-fade"
            x1="0"
            x2="0"
            y1="515"
            y2="625"
          >
            <stop offset="0" stopColor="black" />
            <stop offset="0.52" stopColor="white" stopOpacity="0.7" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <mask
            height="1000"
            id="hero-top-mask"
            maskUnits="userSpaceOnUse"
            width="1000"
            x="0"
            y="0"
          >
            <rect fill="url(#hero-top-fade)" height="1000" width="1000" />
          </mask>
          <mask
            height="1000"
            id="hero-lower-mask"
            maskUnits="userSpaceOnUse"
            width="1000"
            x="0"
            y="0"
          >
            <rect fill="url(#hero-lower-fade)" height="1000" width="1000" />
          </mask>
          <filter
            height="160%"
            id="hero-panel-glow"
            width="160%"
            x="-30%"
            y="-30%"
          >
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter
            height="140%"
            id="hero-curve-glow"
            width="140%"
            x="-20%"
            y="-20%"
          >
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter
            height="180%"
            id="hero-curve-haze"
            width="180%"
            x="-40%"
            y="-40%"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <path
            d="M 622 139 C 740 135 836 137 925 140 C 960 142 978 164 974 208 C 970 310 944 420 890 505 C 700 550 430 565 195 555 C 220 470 250 349 315 280 C 400 190 495 142 622 139 Z"
            id="hero-panel-top-shape"
          />
          <path
            d="M 974 208 C 970 310 944 420 890 505 C 800 580 690 650 585 730 C 490 820 420 925 370 1040 H 250 C 278 880 380 650 390 580 C 500 420 700 285 974 208 Z"
            id="hero-panel-lower-shape"
          />
        </defs>
        <g mask="url(#hero-top-mask)">
          <use
            fill="rgb(205 139 43)"
            filter="url(#hero-panel-glow)"
            href="#hero-panel-top-shape"
            opacity="0.09"
          />
          <use fill="url(#hero-panel-linear)" href="#hero-panel-top-shape" />
          <use fill="url(#hero-panel-radial)" href="#hero-panel-top-shape" />
          <use fill="url(#hero-panel-right)" href="#hero-panel-top-shape" />
          <use fill="url(#hero-panel-shadow)" href="#hero-panel-top-shape" />
          <use fill="url(#hero-panel-lower-right)" href="#hero-panel-top-shape" />
        </g>
        <g mask="url(#hero-lower-mask)">
          <use
            fill="rgb(205 139 43)"
            filter="url(#hero-panel-glow)"
            href="#hero-panel-lower-shape"
            opacity="0.075"
          />
          <use fill="url(#hero-panel-linear)" href="#hero-panel-lower-shape" />
          <use fill="url(#hero-panel-radial)" href="#hero-panel-lower-shape" />
          <use fill="url(#hero-panel-shadow)" href="#hero-panel-lower-shape" />
        </g>
        <path
          d="M 622 139 C 495 142 400 190 315 280 C 250 349 220 470 195 555"
          fill="none"
          filter="url(#hero-curve-haze)"
          stroke="url(#hero-upper-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="0.25"
          strokeWidth="20"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 622 139 C 495 142 400 190 315 280 C 250 349 220 470 195 555"
          fill="none"
          filter="url(#hero-curve-glow)"
          stroke="url(#hero-upper-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="0.6"
          strokeWidth="5.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 622 139 C 495 142 400 190 315 280 C 250 349 220 470 195 555"
          fill="none"
          stroke="url(#hero-upper-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="1"
          strokeWidth="1.8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 390 580 C 380 650 278 880 250 1040"
          fill="none"
          filter="url(#hero-curve-haze)"
          stroke="url(#hero-lower-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="0.34"
          strokeWidth="28"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 390 580 C 380 650 278 880 250 1040"
          fill="none"
          filter="url(#hero-curve-glow)"
          stroke="url(#hero-lower-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="0.72"
          strokeWidth="5.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 390 580 C 380 650 278 880 250 1040"
          fill="none"
          stroke="url(#hero-lower-curve-stroke)"
          strokeLinecap="round"
          strokeOpacity="1"
          strokeWidth="2.8"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>

      <div className="relative mx-auto grid w-full max-w-[96rem] gap-6 px-4 pb-8 sm:gap-10 sm:px-6 sm:pb-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-[3.25rem] lg:pb-10">
        <div className="min-w-0 lg:relative lg:top-5 lg:col-span-6">
          <motion.div
            animate={
              isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            className="flex max-w-[39rem] items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold"
            initial={false}
            transition={itemTransition(0.04)}
          >
            <Terminal aria-hidden size={15} />
            <span>{t.hero.eyebrow}</span>
            <span className="h-px flex-1 bg-gold/20" />
          </motion.div>

          <motion.h1
            animate={
              isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            className="mt-6 text-balance text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-ink sm:mt-10 sm:text-7xl lg:text-[6.9rem] lg:leading-[0.85]"
            initial={false}
            transition={itemTransition(0.14)}
          >
            {t.hero.firstName}
            <span className="block text-gold">{t.hero.lastName}</span>
          </motion.h1>
          <motion.p
            animate={
              isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            className="mt-5 max-w-[28rem] text-base leading-7 text-muted sm:mt-9 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
            initial={false}
            transition={itemTransition(0.28)}
          >
            {t.hero.thesis}
          </motion.p>
          <motion.div
            animate={
              isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            className="mt-5 sm:mt-7"
            initial={false}
            transition={itemTransition(0.4)}
          >
            <Button
              className="min-h-14 w-full border-gold/30 bg-gold/[0.055] text-base shadow-[0_16px_45px_rgba(0,0,0,0.32)] sm:min-h-[4.1rem] sm:w-auto sm:min-w-[13.75rem]"
              download
              href="/cv/edmond-ilbawi-cv.pdf"
              icon={<Download aria-hidden size={17} />}
              variant="secondary"
            >
              {t.hero.downloadCv}
            </Button>
          </motion.div>

          <motion.div
            animate={
              isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            className="mt-5 grid max-w-[40.5rem] grid-cols-2 divide-x divide-white/[0.09] overflow-hidden border-y border-white/[0.12] bg-[linear-gradient(90deg,rgba(212,175,55,0.035),transparent_52%,rgba(255,255,255,0.012))] sm:mt-8"
            initial={false}
            transition={itemTransition(0.52)}
          >
            <div className="px-2 py-3.5 sm:px-6 sm:py-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
                Age
              </p>
              <p className="mt-2 text-base font-medium text-ink">
                21 years old
              </p>
            </div>
            <div className="px-3 py-3.5 sm:px-6 sm:py-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
                Location
              </p>
              <p className="mt-2 flex items-center gap-2 text-base font-medium text-ink">
                <MapPin aria-hidden className="text-gold" size={14} />
                Based in Lebanon
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={
            isReady
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.985, y: 24 }
          }
          className="relative mx-auto w-full min-w-0 max-w-[31rem] lg:top-0 lg:left-10 lg:col-span-6 lg:col-start-7 xl:left-[4.375rem]"
          initial={false}
          transition={{
            delay: isReady && !shouldReduceMotion ? 0.24 : 0,
            duration: shouldReduceMotion ? 0 : 0.92,
            ease: "easeOut"
          }}
        >
          <div className="relative flex min-h-[22rem] w-full items-center justify-center sm:min-h-[34rem] lg:min-h-[38rem] lg:justify-end">
            <motion.div
              animate={
                shouldReduceMotion
                  ? { opacity: 0.94 }
                  : { opacity: [0.88, 0.98, 0.88] }
              }
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[26rem] w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_60%_42%,rgba(212,175,55,0.3),rgba(212,175,55,0.1)_42%,transparent_72%)] blur-2xl sm:h-[35rem] lg:hidden"
              transition={{
                duration: 9,
                ease: "easeInOut",
                repeat: shouldReduceMotion ? 0 : Infinity
              }}
            />
            <motion.div
              animate={{ y: 0 }}
              className="relative z-10 w-[78%] min-w-0 max-w-[26.75rem] sm:w-[88%]"
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-8 top-8 h-px w-14 bg-gradient-to-r from-transparent to-gold/65"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-2 left-8 right-[-0.5rem] h-px bg-gradient-to-r from-gold/55 via-gold/20 to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 bottom-8 top-12 w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent"
              />
              <div className="relative aspect-[37/50] overflow-hidden rounded-[0.8rem] border border-[#d69a32]/65 bg-navy shadow-[0_34px_95px_rgba(0,0,0,0.52),0_0_48px_rgba(205,139,43,0.13),inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <Image
                  alt={t.hero.portraitAlt}
                  className="h-full w-full object-cover object-center [filter:brightness(1.08)_contrast(1.08)_saturate(1.05)]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 25rem, 80vw"
                  src={withSiteBasePath("/images/edmond-hero-photo.jpeg")}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_52%_42%,transparent_34%,rgba(5,5,5,0.08)_68%,rgba(5,5,5,0.28)_100%),linear-gradient(90deg,rgba(5,5,5,0.32),transparent_35%,rgba(5,5,5,0.55)),linear-gradient(180deg,transparent_58%,rgba(5,5,5,0.48))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(218,151,46,0.14),transparent_30%)]" />
              </div>
              <AcademicMarquee />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
