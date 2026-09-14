import React from "react";

const STATS = [
  { value: "100+", label: "Creative projects" },
  { value: "30+", label: "Brands supported" },
  { value: "5+", label: "Years experience" },
];

export default function Impact() {
  return (
    <section
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-28"
      aria-labelledby="impact-title"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-14 flex items-center gap-4 md:mb-16">
          <span id="impact-title" className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
            Impact
          </span>
          <span className="h-px w-10 bg-[#FF453A]" aria-hidden="true" />
        </header>

        <div className="grid grid-cols-1 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-white/10">
          {STATS.map((stat, index) => (
            <article
              key={stat.label}
              className="group border-b border-white/10 py-10 last:border-b-0 md:border-b-0 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0"
            >
              <p className="text-6xl font-black leading-none tracking-[-0.055em] text-white transition-colors duration-300 group-hover:text-[#FF453A] sm:text-7xl lg:text-8xl">
                {stat.value}
              </p>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
                {stat.label}
              </p>
              <p className="mt-2 text-xs text-zinc-600">Portfolio snapshot</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-[#FF453A]/70 pl-5 text-sm leading-7 text-zinc-400 md:text-base">
          A cross-disciplinary practice spanning visual design, brand communication, motion, video, VFX compositing and AI-assisted creative production.
        </p>
      </div>
    </section>
  );
}
