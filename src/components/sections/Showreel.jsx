import React, { useState } from "react";

export default function Showreel() {
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  // Gallery Photos Data with regular destination URLs/paths
  const photoGallery = [
    { 
      id: 1, 
      src: "/images/gallery/brand-1.jpg", 
      title: "Sacumen Design System", 
      category: "UI/UX & Branding", 
      path: "/projects/sacumen",
      metrics: "01 / CORE SYS",
      tag: "Design Architecture"
    },
    { 
      id: 2, 
      src: "/images/gallery/brand-2.jpg", 
      title: "Studio Identity & Layouts", 
      category: "Visual Direction", 
      path: "/projects/identity",
      metrics: "02 / IDENTITY",
      tag: "Brand Systems"
    },
    { 
      id: 3, 
      src: "/images/gallery/brand-3.jpg", 
      title: "Vector Marketing Assets", 
      category: "Graphic Design", 
      path: "/projects/vector-assets",
      metrics: "03 / COLLATERAL",
      tag: "Marketing UX"
    },
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-28 px-6 md:px-16 selection:bg-[#FF453A] selection:text-black relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF453A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF453A] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
              Selected Works & Showcase
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              WORKS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF453A] via-orange-400 to-amber-500">SHOWCASE</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-light">
            A meticulous orchestration of motion language, structural narrative editing, and enterprise-grade design assets.
          </p>
        </div>

        {/* ================= VIDEO SHOWCASE (SIDE BY SIDE) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Graphic Design Reel */}
          <div className="flex flex-col gap-4 group p-6 rounded-3xl bg-zinc-950/60 border border-white/10 hover:border-[#FF453A]/40 transition-all duration-500 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF453A]" />
                <h3 className="text-base font-bold text-zinc-100 tracking-wide uppercase font-mono">Graphic Design</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">01 / Motion Asset</span>
            </div>
            
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group-hover:shadow-[0_0_30px_rgba(255,69,58,0.15)] transition-all">
              {!playing1 ? (
                <div 
                  onClick={() => setPlaying1(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-zinc-900/50 hover:bg-zinc-900/20 transition-all group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#FF453A] flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,69,58,0.6)] pl-0.5 group-hover/btn:scale-110 group-hover/btn:rotate-6 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <video
                  src="/videos/showreel.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>

          {/* Video Editing Reel */}
          <div className="flex flex-col gap-4 group p-6 rounded-3xl bg-zinc-950/60 border border-white/10 hover:border-[#FF453A]/40 transition-all duration-500 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <h3 className="text-base font-bold text-zinc-100 tracking-wide uppercase font-mono">Video Editing</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">02 / Narrative Cut</span>
            </div>
            
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner group-hover:shadow-[0_0_30px_rgba(255,69,58,0.15)] transition-all">
              {!playing2 ? (
                <div 
                  onClick={() => setPlaying2(true)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-zinc-900/50 hover:bg-zinc-900/20 transition-all group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#FF453A] flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,69,58,0.6)] pl-0.5 group-hover/btn:scale-110 group-hover/btn:rotate-6 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <video
                  src="/videos/Video_Editor.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>

        </div>

        {/* ================= INTERACTIVE PHOTO GALLERY GRID ================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-[#FF453A] tracking-widest uppercase block mb-1">Visual Artifacts</span>
              <h3 className="text-3xl font-extrabold tracking-tight">Design Gallery & Architecture</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Click card to inspect case study
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoGallery.map((photo) => (
              <a
                key={photo.id}
                href={photo.path}
                className="group relative flex flex-col bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 rounded-3xl p-4 border border-white/10 hover:border-[#FF453A]/60 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-xl"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-5">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Absolute Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#FF453A] uppercase">
                    {photo.tag}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-grow justify-between px-2 pb-2">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500">
                      <span>{photo.metrics}</span>
                      <span className="text-zinc-400 group-hover:text-[#FF453A] transition-colors">↗</span>
                    </div>
                    <h4 className="text-lg font-bold text-zinc-100 group-hover:text-white tracking-wide">
                      {photo.title}
                    </h4>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{photo.category}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#FF453A] group-hover:text-black text-zinc-300 flex items-center justify-center transition-all duration-300">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}