import React from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Paint-O Paints",
    category: "BRAND IDENTITY",
    type: "Visual System & Guidelines",
    visual: "paint-o",
  },
  {
    id: "02",
    title: "Studio Identity & Layouts",
    category: "VISUAL DIRECTION",
    type: "Brand Systems",
    visual: "identity",
  },
  {
    id: "03",
    title: "Vector Marketing Assets",
    category: "GRAPHIC DESIGN",
    type: "Marketing Communication",
    visual: "vector",
  },
];

const COLORS = ["#1161E7", "#1FA463", "#FF8A00", "#D81B8C", "#6A1B9A"];

function PaintOVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F3F4F6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(17,97,231,0.20),transparent_30%),radial-gradient(circle_at_55%_65%,rgba(216,27,140,0.16),transparent_26%)]" />
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[34px] border-[#1161E7]/20" />
      <div className="absolute right-20 top-20 h-28 w-28 rounded-full border-[18px] border-[#FF8A00]/50" />
      <div className="absolute bottom-8 left-8 flex gap-2" aria-hidden="true">
        {COLORS.map((color) => (
          <span key={color} className="h-2 w-10 rounded-full" style={{ backgroundColor: color }} />
        ))}
      </div>
      <div className="absolute left-7 top-7 sm:left-10 sm:top-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1161E7]">Paint-O Paints</p>
        <p className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#0F1E3A] sm:text-6xl">
          Transform.
          <br />
          Protect.
          <br />
          <span className="text-[#FF8A00]">Maintain.</span>
        </p>
      </div>
    </div>
  );
}

function ArchiveVisual({ variant }) {
  const identity = variant === "identity";

  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(255,69,58,0.08))]" />
      <div className="absolute left-8 top-10 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">
        {identity ? "Identity / Layout" : "Vector / Collateral"}
      </div>
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">
        {identity ? (
          <>
            Studio
            <br />
            <span className="text-[#FF453A]">System</span>
          </>
        ) : (
          <>
            Vector
            <br />
            <span className="text-zinc-500">Assets</span>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-8 flex gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-8 bg-[#FF453A]" />
        <span className="h-1.5 w-4 bg-white/30" />
        <span className="h-1.5 w-2 bg-white/15" />
      </div>
    </div>
  );
}

export default function FeaturedProjectsPro() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-28 text-white md:px-12 lg:py-36 xl:px-24"
      aria-labelledby="selected-work-title"
    >
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <header className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end lg:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF453A]">Selected Work</span>
            </div>
            <h2
              id="selected-work-title"
              className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              Work that shows
              <br />
              <span className="text-zinc-500">how I think.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-300">
            A focused selection of visual design, brand communication and creative production work.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className={`group rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-3 md:p-4 ${
                index === 0 ? "lg:col-span-12" : "lg:col-span-6"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[19px] bg-zinc-950 ${
                  index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
                }`}
              >
                {project.visual === "paint-o" ? <PaintOVisual /> : <ArchiveVisual variant={project.visual} />}

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] font-mono tracking-[0.16em] text-[#FF453A]">{project.id}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
                  <span className="text-[10px] font-medium tracking-[0.12em] text-white/70">Selected work</span>
                </div>

                <div
                  className={`absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 ${
                    project.visual === "paint-o" ? "text-[#0F1E3A]" : "text-white"
                  }`}
                >
                  <span
                    className={`mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] ${
                      project.visual === "paint-o" ? "text-[#1161E7]" : "text-[#FF453A]"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3
                    className={`font-black uppercase leading-none tracking-[-0.035em] ${
                      index === 0 ? "text-3xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-3 text-xs font-medium tracking-[0.12em] ${
                      project.visual === "paint-o" ? "text-[#0F1E3A]/55" : "text-white/55"
                    }`}
                  >
                    {project.type}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-zinc-500">
          More work available on request.
        </div>
      </div>
    </section>
  );
}
