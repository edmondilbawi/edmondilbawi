type V2FlowLineProps = {
  className?: string;
};

const DESKTOP_THREAD =
  "M -30 128 C 150 136 310 126 500 145 C 720 172 950 154 1460 170 C 1210 195 1050 208 1460 235 C 1170 265 900 250 600 280 C 320 308 150 318 -30 330 C 160 355 500 345 860 375 C 1130 397 1320 385 1470 420 C 1230 450 1100 485 1460 510 C 1180 538 850 520 520 555 C 260 583 125 604 -30 620 C 250 648 680 640 1060 672 C 1270 690 1370 720 1460 748 C 1240 775 1100 804 1460 830 C 1140 852 730 855 420 880 C 190 898 80 922 -30 945 C 280 968 760 958 1100 982 C 1250 993 1360 1002 1460 1015";

const MOBILE_THREAD =
  "M 9 -10 C 13 175 7 325 11 500 C 16 675 8 845 12 1010";

export function V2FlowLine({ className = "" }: V2FlowLineProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      data-v2-flow-thread
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_10%,rgba(212,175,55,0.075),transparent_24%),radial-gradient(ellipse_at_12%_41%,rgba(212,175,55,0.045),transparent_22%),radial-gradient(ellipse_at_82%_70%,rgba(212,175,55,0.055),transparent_24%),linear-gradient(180deg,rgba(212,175,55,0.018),transparent_18%,rgba(212,175,55,0.012)_54%,transparent_86%)]" />
      <div className="absolute inset-0 bg-subtle-grid bg-[length:68px_68px] opacity-[0.035] [mask-image:linear-gradient(90deg,transparent_2%,black_24%,black_76%,transparent_98%)]" />

      <svg
        className="absolute inset-0 hidden h-full w-full md:block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1000"
      >
        <defs>
          <linearGradient id="portfolio-thread-gold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgb(212 175 55)" stopOpacity="0.34" />
            <stop offset="0.2" stopColor="rgb(236 198 78)" stopOpacity="0.72" />
            <stop offset="0.52" stopColor="rgb(212 175 55)" stopOpacity="0.42" />
            <stop offset="0.82" stopColor="rgb(236 198 78)" stopOpacity="0.64" />
            <stop offset="1" stopColor="rgb(212 175 55)" stopOpacity="0.26" />
          </linearGradient>
          <filter height="180%" id="portfolio-thread-glow" width="180%" x="-40%" y="-40%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <path
          d={DESKTOP_THREAD}
          fill="none"
          filter="url(#portfolio-thread-glow)"
          stroke="rgba(212,175,55,0.18)"
          strokeLinecap="round"
          strokeWidth="14"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={DESKTOP_THREAD}
          fill="none"
          stroke="url(#portfolio-thread-gold)"
          strokeLinecap="round"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full md:hidden"
        preserveAspectRatio="none"
        viewBox="0 0 390 1000"
      >
        <path
          d={MOBILE_THREAD}
          fill="none"
          stroke="rgba(212,175,55,0.16)"
          strokeLinecap="round"
          strokeWidth="8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={MOBILE_THREAD}
          fill="none"
          stroke="rgba(212,175,55,0.55)"
          strokeLinecap="round"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
