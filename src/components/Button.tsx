"use client";

import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  download?: boolean;
  disabled?: boolean;
};

type AppButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-gold/60 bg-gold text-black shadow-gold-soft before:absolute before:inset-y-0 before:-left-1/3 before:w-1/4 before:-skew-x-12 before:bg-white/35 before:opacity-0 before:transition-all before:duration-700 hover:bg-[#e0bd4d] hover:shadow-[0_0_38px_rgba(212,175,55,0.26)] hover:before:left-[115%] hover:before:opacity-100",
  secondary:
    "border-white/[0.12] bg-white/[0.06] text-ink hover:border-gold/30 hover:bg-white/[0.1] hover:shadow-gold-soft",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-white/[0.06] hover:text-ink hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
};

export function Button({
  children,
  className,
  disabled,
  download,
  href,
  icon,
  variant = "secondary",
  type = "button",
  ...props
}: AppButtonProps) {
  const classes = clsx(
    "focus-ring group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-md border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[0.45]",
    variants[variant],
    className
  );

  if (href && !disabled) {
    return (
      <a className={classes} download={download} href={href}>
        {icon ? (
          <span className="relative z-10 inline-flex transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]">
            {icon}
          </span>
        ) : null}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type} {...props}>
      {icon ? (
        <span className="relative z-10 inline-flex transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]">
          {icon}
        </span>
      ) : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
