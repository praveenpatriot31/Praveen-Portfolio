import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

const stats = [
  ["5+", "Years experience"],
  ["100+", "Projects"],
  ["30+", "Brands supported"],
];

const focusAreas = [
  ["01", "Brand", "Visual identity & communication"],
  ["02", "Motion", "Animation & video"],
  ["03", "VFX", "Compositing & post-production"],
  ["04", "AI", "Assisted creative workflows"],
];

export default function HeroClean() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(255,69,58,.12),transparent_32%),radial-gradient(circle_at_12%_84%,rgba(255,255,255,.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-5 py-5 sm:px-10 sm:py-6 lg:px-16 lg:py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5" aria-label="Primary navigation">
          <a href="#top" className="text-sm font-bold tracking-[.28em]" aria-label="Praveen S. home">
            PRAVEEN<span className="text-[#ff453a]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[.22em] text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Work</a>
            <a href="#experience" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Experience</a>
            <a href="#contact" className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">Contact</a>
          </div>
          <a href="#contact" className="touch-manipulation rounded-full border border-white/15 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em] transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] sm:px-4 sm:text-[10px] sm:tracking-[.2em]">
            Available for work
          </a>
        </nav>

        <div id="top" className="grid items-center gap-10 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: [0.16, 1, .3, 1] }}
          >
            <p className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.26em] text-[#ff453a] sm:mb-6 sm:text-[10px] sm:tracking-[.3em]">
              <span className="h-px w-8 bg-[#ff453a] sm:w-10" /> Creative / Visual / VFX
            </p>
            <h1 className="max-w-5xl text-[clamp(3.55rem,16vw,9rem)] font-black leading-[.84] tracking-[-.065em] sm:text-[clamp(4rem,9.4vw,9rem)] sm:leading-[.82]">
              I MAKE<br />
              <span className="text-[#ff453a]">VISUALS</span><br />
              THAT MOVE.
            </h1>
            <p className="mt-7 max-w-xl text-[14px] leading-6 text-white/60 sm:mt-8 sm:text-lg sm:leading-7">
              Creative Visual Designer focused on brand, motion, video, VFX compositing and AI-assisted creative production.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a href="#work" className="touch-manipulation inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-bold tracking-[.14em] text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:w-auto sm:px-7 sm:tracking-[.18em]">
                VIEW SELECTED WORK <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="/resume/Praveen_S_Resume.pdf" download className="touch-manipulation inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-xs font-bold tracking-[.14em] transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:w-auto sm:px-7 sm:tracking-[.18em]">
                <Download size={15} aria-hidden="true" /> DOWNLOAD CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9, delay: .12, ease: [0.16, 1, .3, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] sm:rounded-[1.75rem]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <span className="text-[9px] font-semibold uppercase tracking-[.24em] text-white/40 sm:text-[10px] sm:tracking-[.28em]">Creative focus</span>
                <span className="flex shrink-0 items-center gap-2 text-[8px] uppercase tracking-[.16em] text-white/30 sm:text-[9px] sm:tracking-[.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff453a]" /> Available
                </span>
              </div>

              <div className="grid grid-cols-2">
                {focusAreas.map(([number, title, description]) => (
                  <div key={number} className="group min-h-[132px] border-b border-r border-white/10 p-5 transition hover:bg-white/[0.025] last:border-r-0 [&:nth-child(2n)]:border-r-0 sm:min-h-[150px] sm:p-6">
                    <p className="text-[9px] font-bold tracking-[.22em] text-[#ff453a]">{number}</p>
                    <h2 className="mt-6 text-lg font-bold tracking-tight text-white sm:mt-7 sm:text-xl">{title}</h2>
                    <p className="mt-2 max-w-[150px] text-[11px] leading-5 text-white/40 sm:text-xs">{description}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 px-5 py-4 sm:px-6 sm:py-5">
                <p className="text-[9px] uppercase tracking-[.18em] text-white/30 sm:text-[10px] sm:tracking-[.22em]">Design × Motion × Production</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 border-t border-white/10 pt-4 sm:pt-5">
          {stats.map(([value, label]) => (
            <div key={label} className="min-w-0 border-r border-white/10 px-2 first:pl-0 last:border-0 sm:px-4">
              <p className="text-xl font-black tracking-tight sm:text-3xl">{value}</p>
              <p className="mt-1 max-w-[90px] text-[8px] uppercase leading-4 tracking-[.12em] text-white/40 sm:max-w-none sm:text-[9px] sm:tracking-[.18em]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
