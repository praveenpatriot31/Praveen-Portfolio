import React from 'react';

const STATS = [
  { value: '100+', label: 'CREATIVE PROJECTS' },
  { value: '30+', label: 'BRANDS SUPPORTED' },
  { value: '5+', label: 'YEARS EXPERIENCE' },
];

export default function Impact() {
  return (
    <section className="w-full border-b border-white/[0.04] bg-[#050505] px-8 py-24 text-white md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16 flex items-center gap-4 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">THE IMPACT</span>
          <div className="h-px w-10 bg-[#FF453A]/80" />
        </div>

        <div className="grid grid-cols-1 gap-y-14 gap-x-12 md:grid-cols-3 lg:gap-x-24">
          {STATS.map((stat) => (
            <div key={stat.label} className="group flex select-none flex-col items-start">
              <div className="mb-4 text-[72px] font-black leading-none tracking-[-0.06em] text-white transition-colors duration-300 group-hover:text-[#FF453A] sm:text-[90px] lg:text-[110px]">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl border-t border-white/10 pt-6 text-sm leading-7 text-zinc-500">
          A cross-disciplinary practice spanning visual design, brand communication, motion, video, VFX compositing and AI-assisted creative production.
        </div>
      </div>
    </section>
  );
}
