import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Play } from "lucide-react";

const stats = [
  ["5+", "Years experience"],
  ["100+", "Projects"],
  ["30+", "Brands supported"],
];

export default function HeroClean() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_42%,rgba(255,69,58,.16),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,.05),transparent_28%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-6 py-7 sm:px-10 lg:px-16 lg:py-9">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">
          <a href="#top" className="text-sm font-bold tracking-[.28em]">PRAVEEN<span className="text-[#ff453a]">.</span></a>
          <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[.22em] text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] transition hover:border-white/40">Available for work</a>
        </nav>

        <div id="top" className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.16,1,.3,1] }}>
            <p className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-[#ff453a]"><span className="h-px w-10 bg-[#ff453a]" /> Creative / Visual / VFX</p>
            <h1 className="max-w-5xl text-[clamp(4rem,10vw,9.2rem)] font-black leading-[.82] tracking-[-.065em]">
              I MAKE<br />
              <span className="text-[#ff453a]">VISUALS</span><br />
              THAT MOVE.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">Creative Visual Designer focused on brand, motion, video, VFX compositing and AI-assisted creative production.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-bold tracking-[.18em] text-black transition hover:-translate-y-0.5">VIEW SELECTED WORK <ArrowUpRight size={16} /></a>
              <a href="/resume/Praveen_S_Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-xs font-bold tracking-[.18em] transition hover:border-white/40"><Download size={15} /> DOWNLOAD CV</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: reduce ? 1 : .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }} className="relative mx-auto w-full max-w-[560px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,69,58,.38),transparent_28%),linear-gradient(145deg,#1b1b1b,#080808_62%)]" />
              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.24em] text-white/45">Current focus</span><Play size={15} className="text-[#ff453a]" /></div>
                <p className="mt-3 text-2xl font-bold tracking-tight">Design × Motion × AI</p>
              </div>
              <div className="absolute left-8 top-8 text-[9px] uppercase tracking-[.3em] text-white/35">01 / Selected direction</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 border-t border-white/10 pt-5">
          {stats.map(([value, label]) => <div key={label} className="border-r border-white/10 px-4 first:pl-0 last:border-0"><p className="text-2xl font-black tracking-tight sm:text-3xl">{value}</p><p className="mt-1 text-[9px] uppercase tracking-[.18em] text-white/35">{label}</p></div>)}
        </div>
      </div>
    </section>
  );
}
