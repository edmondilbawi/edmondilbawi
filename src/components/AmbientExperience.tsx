"use client";

import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";
import { useEffect } from "react";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

const ambientParticles = [
  { left: "9%", top: "18%", delay: 0.2, duration: 7.5 },
  { left: "22%", top: "72%", delay: 1.1, duration: 9 },
  { left: "39%", top: "32%", delay: 2.4, duration: 8 },
  { left: "58%", top: "82%", delay: 0.8, duration: 9.5 },
  { left: "73%", top: "20%", delay: 1.8, duration: 8.5 },
  { left: "86%", top: "58%", delay: 3, duration: 7.8 },
  { left: "94%", top: "35%", delay: 0.4, duration: 9.2 }
];

export function AmbientExperience({ vibrant = false }: { vibrant?: boolean }) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const pointerX = useMotionValue(-320);
  const pointerY = useMotionValue(-320);
  const opacity = useMotionValue(0);
  const x = useSpring(pointerX, { damping: 28, stiffness: 115 });
  const y = useSpring(pointerY, { damping: 28, stiffness: 115 });

  useEffect(() => {
    if (
      shouldReduceMotion ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - 144);
      pointerY.set(event.clientY - 144);
      opacity.set(1);
    };
    const handlePointerLeave = () => opacity.set(0);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true
    });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
    };
  }, [opacity, pointerX, pointerY, shouldReduceMotion]);

  return (
    <>
      {vibrant ? (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
        >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.08, 1], x: [0, -32, 0], y: [0, 24, 0] }
          }
          className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/[0.065] blur-[120px] mix-blend-screen"
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { scale: [1, 1.12, 1], x: [0, 26, 0], y: [0, -20, 0] }
          }
          className="absolute -bottom-44 -left-32 h-[30rem] w-[30rem] rounded-full bg-gold/[0.045] blur-[110px] mix-blend-screen"
          transition={{ duration: 19, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-subtle-grid bg-[length:72px_72px] opacity-[0.025]" />

        {ambientParticles.map((particle) => (
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.18, 0.62, 0.18], y: [0, -16, 0] }
            }
            className="absolute h-1 w-1 rounded-full bg-gold/55 shadow-[0_0_12px_rgba(212,175,55,0.5)]"
            key={`${particle.left}-${particle.top}`}
            style={{ left: particle.left, top: particle.top }}
            transition={{
              delay: particle.delay,
              duration: particle.duration,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        ))}
        </div>
      ) : null}

      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-20 hidden h-72 w-72 rounded-full blur-3xl lg:block ${
          vibrant ? "bg-gold/[0.05]" : "bg-gold/[0.035]"
        }`}
        style={{ opacity, x, y }}
      />
    </>
  );
}
