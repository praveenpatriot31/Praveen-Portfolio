import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Make Changes",
    category: "Brand identity · Graphic design · Campaigns",
    description: "Creative campaign thinking and visual communication, organised around a clear, confident brand voice.",
    href: "#social-campaigns",
    linkLabel: "Explore campaign work",
    visual: "make-changes",
    eyebrow: "Ideas into impact",
  },
  {
    id: "02",
    title: "Paint-O Paints Singapore",
    category: "Paint campaigns · Product visuals · Marketing",
    description: "Colour-led brand communication and marketing creative for a paint brand, with clarity across product and campaign touchpoints.",
    href: "#paint-o",
    linkLabel: "View brand case study",
    visual: "paint-o",
    eyebrow: "Colour in every layer",
  },
  {
    id: "03",
    title: "Mani Sports & Gifts",
    category: "Retail branding · Promotions · Social creative",
    description: "Promotional communication for a sports and gifts business, spanning product-led graphics and brand-facing creative.",
    href: "#mani-group",
    linkLabel: "View brand case study",
    visual: "mani",
    eyebrow: "Made to be remembered",
  },
  {
    id: "04",
    title: "Cinematrix VFX Studio",
    category: "VFX · Motion graphics · Video · Post-production",
    description: "A screen-focused creative practice built around cinematic imagery, motion-led storytelling and finishing craft.",
    href: "#vfx-slider",
    linkLabel: "Explore VFX work",
    visual: "cinematrix",
    eyebrow: "Craft the impossible",
  },
];

function ProjectArtwork({ visual }) {
  if (visual === "paint-o") {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden bg-[#f4f2ed] text-[#10264a] sm:min-h-[320px]">
        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[28px] border-[#1161e7]/15 sm:h-80 sm:w-80" />
        <div className="absolute -right-2 top-10 h-40 w-40 rounded-full bg-[#1161e7] sm:h-52 sm:w-52" />
        <div className="absolute right-12 top-20 h-20 w-20 rounded-full bg-[#ffc107] sm:right-20 sm:top-24 sm:h-28 sm:w-28" />
        <div className="absolute bottom-0 left-0 h-3 w-full bg-[#1161e7]" />
        <div className="absolute bottom-3 left-0 flex h-2 w-full">
          {["#e5007d", "#ff8a00", "#ffc107", "#0095e2", "#4caf50", "#8a2be2"].map((color) => (
            <span key={color} className="h-full flex-1" style={{ backgroundColor: color }} />
          ))}
        </div>
        <div className="absolute left-6 top-7 sm:left-10 sm:top-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#1161e7] sm:text-[10px]">Singapore · Paint & colour</p>
          <p className="mt-7 text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
            Paint-O<br /><span className="text-[#1161e7]">Paints.</span>
          </p>
          <p className="mt-5 max-w-[180px] text-[9px] font-semibold uppercase tracking-[0.16em] text-[#10264a]/60 sm:text-[10px]">Colour-led brand communication</p>
        </div>
        <span className="absolute bottom-9 right-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#10264a]/60 sm:right-10">01 / Colour system</span>
      </div>
    );
  }

  if (visual === "mani") {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden bg-[#10100f] text-white sm:min-h-[320px]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(198,154,85,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(198,154,85,.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#c69a55]/40 sm:h-80 sm:w-80" />
        <div className="absolute -right-2 top-6 h-44 w-44 rounded-full border-[22px] border-[#c69a55]/15 sm:h-56 sm:w-56" />
        <div className="absolute bottom-8 right-8 flex items-end gap-2 sm:bottom-10 sm:right-10">
          {[34, 58, 42, 76, 50].map((height, index) => (
            <span key={height} className="w-3 rounded-t-sm bg-[#c69a55]/80 sm:w-4" style={{ height: height + "px", opacity: 1 - index * 0.12 }} />
          ))}
        </div>
        <div className="absolute left-6 top-7 sm:left-10 sm:top-10">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#c69a55] sm:text-[10px]">Sports · Gifts · Retail</p>
          <p className="mt-8 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.76] tracking-[-0.08em]">MANI<span className="text-[#c69a55]">.</span></p>
          <p className="mt-4 max-w-[190px] text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">Promotional design & brand communication</p>
        </div>
        <span className="absolute bottom-8 left-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:left-10">02 / Retail creative</span>
      </div>
    );
  }

  if (visual === "cinematrix") {
    return (
      <div className="relative h-full min-h-[250px] overflow-hidden bg-[#0a0b10] text-white sm:min-h-[320px]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 35%, rgba(255,69,58,.28), transparent 34%), radial-gradient(ellipse at 40% 100%, rgba(80,95,145,.3), transparent 45%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(120deg, transparent 0 42%, rgba(255,255,255,.22) 42.2%, transparent 42.5%), linear-gradient(120deg, transparent 0 56%, rgba(255,69,58,.55) 56.2%, transparent 56.5%)" }} />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#ff453a]/50 sm:right-12 sm:top-10 sm:h-36 sm:w-36" />
        <div className="absolute right-12 top-12 h-16 w-16 rounded-full border border-white/20 sm:right-16 sm:top-14 sm:h-28 sm:w-28" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#ff453a]" />
        <div className="absolute left-6 top-7 sm:left-10 sm:top-10">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff655c] sm:text-[10px]">VFX · Motion · Post</p>
          <p className="mt-8 text-[clamp(2.3rem,6.5vw,5.8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">CINE<br />MATRIX<span className="text-[#ff453a]">.</span></p>
          <p className="mt-5 max-w-[190px] text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">Cinematic visual storytelling</p>
        </div>
        <span className="absolute bottom-8 right-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 sm:right-10">03 / Image craft</span>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[250px] overflow-hidden bg-[#e7ff4f] text-[#151515] sm:min-h-[320px]">
      <div className="absolute -right-10 -top-20 h-64 w-64 rotate-12 border-[24px] border-[#151515]/10 sm:h-80 sm:w-80" />
      <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-[#ff453a] sm:h-32 sm:w-32" />
      <div className="absolute left-6 top-7 sm:left-10 sm:top-10">
        <p className="text-[9px] font-bold uppercase tracking-[0.24em] sm:text-[10px]">Identity · Campaign · Design</p>
        <p className="mt-8 text-[clamp(2.7rem,7.5vw,6.5rem)] font-black uppercase leading-[0.74] tracking-[-0.085em]">Make<br />Changes<span className="text-[#ff453a]">.</span></p>
        <p className="mt-5 max-w-[180px] text-[9px] font-semibold uppercase tracking-[0.16em] text-black/60 sm:text-[10px]">Visual communication with intent</p>
      </div>
      <div className="absolute bottom-8 left-6 flex items-center gap-2 sm:left-10">
        <span className="h-2 w-2 rounded-full bg-[#ff453a]" />
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Ideas into impact</span>
      </div>
    </div>
  );
}

export default function FeaturedProjectsPro() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 md:py-28 lg:px-16 xl:px-20" aria-labelledby="selected-work-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-12 flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-end lg:mb-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff453a]">Portfolio / Selected work</p>
            <h2 id="selected-work-title" className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Work that<br className="hidden sm:block" /> makes a mark<span className="text-zinc-500">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Brand communication, campaign design and cinematic craft across four selected creative practices.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              className="group block rounded-[18px] border border-white/[0.10] bg-white/[0.02] p-2.5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a] motion-reduce:transform-none"
              aria-label={`${project.title}: ${project.linkLabel}`}
            >
              <div className="relative overflow-hidden rounded-[12px]">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transform-none">
                  <ProjectArtwork visual={project.visual} />
                </div>
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#ff453a]">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
                <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[9px] font-bold tracking-[0.16em] text-black/70 backdrop-blur-sm">{project.id}</span>
              </div>
              <div className="flex flex-col gap-4 px-3 pb-3 pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] text-[#ff655c]">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.035em] transition-colors duration-300 group-hover:text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 pb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 transition-colors group-hover:text-white">
                  {project.linkLabel} <ArrowDownRight size={14} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-6 text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Selected work across identity, campaign design, retail communication and VFX.</span>
          <span className="text-zinc-600">Explore each discipline below for supporting project material.</span>
        </div>
      </div>
    </section>
  );
}
