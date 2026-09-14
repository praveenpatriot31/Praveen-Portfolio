import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { id: "01", title: "Paint-O Paints", category: "BRAND IDENTITY", type: "Visual System & Guidelines", href: "#paint-o", visual: "paint-o" },
  { id: "02", title: "Studio Identity & Layouts", category: "VISUAL DIRECTION", type: "Brand Systems", image: "/images/gallery/brand-2.jpg", href: "/projects/identity" },
  { id: "03", title: "Vector Marketing Assets", category: "GRAPHIC DESIGN", type: "Marketing Communication", image: "/images/gallery/brand-3.jpg", href: "/projects/vector-assets" },
];

function PaintOVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F3F4F6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(17,97,231,0.20),transparent_30%),radial-gradient(circle_at_55%_65%,rgba(216,27,140,0.16),transparent_26%)]" />
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[34px] border-[#1161E7]/20" />
      <div className="absolute right-20 top-20 h-28 w-28 rounded-full border-[18px] border-[#FF8A00]/50" />
      <div className="absolute bottom-8 left-8 flex gap-2">{["#1161E7", "#1FA463", "#FF8A00", "#D81B8C", "#6A1B9A"].map((c) => <span key={c} className="h-2 w-10 rounded-full" style={{ backgroundColor: c }} />)}</div>
      <div className="absolute left-7 top-7 sm:left-10 sm:top-10">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1161E7]">PAINT-O PAINTS</p>
        <p className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#0F1E3A] sm:text-6xl">Transform.<br />Protect.<br /><span className="text-[#FF8A00]">Maintain.</span></p>
      </div>
    </div>
  );
}

export default function FeaturedProjectsPro() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-28 text-white md:px-12 lg:py-36 xl:px-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#FF453A]/[0.045] blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <header className="mb-16 flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end lg:mb-20">
          <div><div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-[#FF453A]" /><span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FF453A]">Selected Work</span></div><h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Work that shows<br /><span className="text-zinc-500">how I think.</span></h2></div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">A focused selection of visual design, brand communication and digital creative work. Each project is presented around the problem, craft and final outcome.</p>
        </header>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <a key={project.id} href={project.href} className={`group block rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF453A]/40 hover:bg-white/[0.04] md:p-4 ${index === 0 ? "lg:col-span-12" : "lg:col-span-6"}`}>
              <div className={`relative overflow-hidden rounded-[19px] bg-zinc-950 ${index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                {project.visual === "paint-o" ? <PaintOVisual /> : <><img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover opacity-75 grayscale transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" /></>}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 backdrop-blur-md"><span className={`text-[9px] font-mono tracking-[0.18em] ${project.visual === "paint-o" ? "text-[#1161E7]" : "text-[#FF453A]"}`}>{project.id}</span><span className="h-1 w-1 rounded-full bg-white/30" /><span className="text-[9px] font-mono tracking-[0.14em] text-white/60">CASE STUDY</span></div>
                <div className={`absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6 md:bottom-7 md:left-7 md:right-7 ${project.visual === "paint-o" ? "text-[#0F1E3A]" : "text-white"}`}>
                  <div><span className={`mb-2 block text-[9px] font-bold uppercase tracking-[0.25em] ${project.visual === "paint-o" ? "text-[#1161E7]" : "text-[#FF453A]"}`}>{project.category}</span><h3 className={`font-black uppercase leading-none tracking-[-0.035em] ${index === 0 ? "text-3xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl"}`}>{project.title}</h3><p className={`mt-3 text-[10px] font-mono uppercase tracking-[0.14em] ${project.visual === "paint-o" ? "text-[#0F1E3A]/50" : "text-white/50"}`}>{project.type}</p></div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-all group-hover:border-[#FF453A] group-hover:bg-[#FF453A] group-hover:text-black"><ArrowUpRight size={18} strokeWidth={1.8} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-600 sm:flex-row"><span>More work available on request</span><span>Design / Motion / VFX / AI-assisted creative</span></div>
      </div>
    </section>
  );
}
