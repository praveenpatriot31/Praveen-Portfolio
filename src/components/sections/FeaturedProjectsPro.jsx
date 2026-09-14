import React from "react";

const PROJECTS = [
  { id: "01", title: "Paint-O Paints", category: "Brand Identity", type: "Visual identity & guidelines", visual: "paint-o" },
  { id: "02", title: "MANI Group", category: "Brand & Marketing", type: "Corporate profile & creative systems", visual: "mani" },
  { id: "03", title: "WHOOSH Singapore", category: "Digital & Visual Design", type: "Brand communication & digital experience", visual: "whoosh" },
  { id: "04", title: "VFX Compositing", category: "VFX", type: "Compositing, roto & paint prep", visual: "vfx" },
  { id: "05", title: "Motion & Video", category: "Motion", type: "Editing & motion graphics", visual: "motion" },
  { id: "06", title: "AI Creative Workflows", category: "AI Creative", type: "AI-assisted visual exploration", visual: "ai" },
];

function ProjectVisual({ visual }) {
  if (visual === "paint-o") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#f4f2ed] text-[#0f1e3a]">
        <div className="absolute right-[-8%] top-[-18%] h-[75%] w-[45%] rounded-full border-[28px] border-[#1161e7]/20" />
        <div className="absolute bottom-8 left-8 flex gap-2">
          {['#1161E7', '#1FA463', '#FF8A00', '#D81B8C', '#6A1B9A'].map((color) => <span key={color} className="h-2 w-12 rounded-full" style={{ backgroundColor: color }} />)}
        </div>
        <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1161e7]">Brand Identity</p>
          <p className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">Paint-O<br /><span className="text-[#1161e7]">Paints.</span></p>
        </div>
      </div>
    );
  }

  const visualContent = {
    mani: ["#0b0b0b", "#d6b36a", "MANI", "GROUP"],
    whoosh: ["#e9f1f5", "#1268d4", "WHOOSH", "Digital transformation"],
    vfx: ["#111", "#ff453a", "VFX", "Before → Final"],
    motion: ["#0d0d0d", "#fff", "MOTION", "Edit / Animate"],
    ai: ["#0d0d0d", "#ff453a", "AI", "Creative exploration"],
  }[visual];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111]" style={{ background: visualContent[0], color: visualContent[2] === "WHOOSH" ? "#101820" : "#fff" }}>
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 75% 25%, ${visualContent[1]}33, transparent 38%), linear-gradient(135deg, transparent 30%, ${visualContent[1]}12)` }} />
      <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: visualContent[1] }}>Selected work</p>
        <p className="mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.06em]">{visualContent[2]}</p>
        <p className="mt-4 max-w-[240px] text-xs font-medium uppercase tracking-[0.14em] opacity-55">{visualContent[3]}</p>
      </div>
      <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border" style={{ borderColor: `${visualContent[1]}55` }} />
    </div>
  );
}

export default function FeaturedProjectsPro() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 md:py-28 lg:px-16 xl:px-20" aria-labelledby="selected-work-title">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-12 flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-end lg:mb-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF453A]">Featured work</p>
            <h2 id="selected-work-title" className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Selected <span className="text-zinc-500">projects.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-300">A focused view of brand, digital, motion, VFX and AI-assisted creative work.</p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <article key={project.id} className={`group ${index < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}>
              <div className="overflow-hidden rounded-[18px] border border-white/[0.10] bg-white/[0.02] p-2.5 transition-colors duration-300 group-hover:border-white/20">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
                  <ProjectVisual visual={project.visual} />
                  <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white/70 backdrop-blur-sm">
                    {project.id}
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF453A]">{project.category}</p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">{project.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-400">{project.type}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm leading-6 text-zinc-500">Selected work is presented with supporting case-study context below.</div>
      </div>
    </section>
  );
}
