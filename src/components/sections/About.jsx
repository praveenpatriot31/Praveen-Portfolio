import React from "react";
import { ArrowUpRight } from "lucide-react";

const STRENGTHS = [
  "Visual storytelling",
  "Cross-disciplinary thinking",
  "Creative problem solving",
  "AI-assisted production",
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] bg-[#080808] px-6 py-24 text-white md:px-12 md:py-28 lg:px-16 lg:py-32 xl:px-20" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="relative min-h-[420px] overflow-hidden rounded-[18px] lg:col-span-5 lg:min-h-[560px]">
          <img src="/images/about.jpg" alt="Portrait used for the About section" className="h-full w-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">More than just visuals.</p>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-7 lg:py-6">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF453A]">About me</p>
            <h2 id="about-title" className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              A creative mind
              <span className="block text-zinc-500">with a bigger vision.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              I&apos;m a Creative Visual Designer working across visual design, brand communication, motion, video, VFX compositing and AI-assisted creative production.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              My approach connects strong visual systems with practical production — keeping ideas clear, adaptable and ready for real-world communication.
            </p>
            <a href="#experience" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-[#FF453A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]">
              View experience <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Strengths</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {STRENGTHS.map((strength, index) => (
                <div key={strength} className="flex items-center gap-3 border-b border-white/[0.07] pb-3 text-sm text-zinc-200">
                  <span className="font-mono text-[10px] text-[#FF453A]">0{index + 1}</span>
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
