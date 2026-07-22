import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Edmond Ilbawi",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 py-16 text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(224,177,51,0.12),transparent_34%),linear-gradient(135deg,rgba(224,177,51,0.04),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9a91f]/10"
      />

      <section className="relative z-10 mx-auto w-full max-w-2xl rounded-2xl border border-[#d9a91f]/25 bg-black/55 px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-12">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#e0b133]">
          404 / Path not found
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          This page is still loading.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#c7c2b7] sm:text-lg">
          The address may have changed, but the portfolio and the 21% Loaded
          reflection journey are still here.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg border border-[#e0b133] bg-[#e0b133] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0c74f]"
            prefetch={false}
          >
            Return to portfolio
          </Link>
          <Link
            href="/21-loaded"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg border border-[#e0b133]/45 bg-black/35 px-6 py-3 text-sm font-semibold text-[#f1ca54] transition hover:border-[#e0b133] hover:bg-[#e0b133]/10"
            prefetch={false}
          >
            Explore 21% Loaded
          </Link>
        </div>
      </section>
    </main>
  );
}
