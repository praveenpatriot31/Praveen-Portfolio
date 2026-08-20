import React, { useState } from "react";

export default function Showreel() {
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const photoGallery = [
    {
      id: 1,
      src: "/images/gallery/brand-1.jpg",
      title: "Sacumen Design System",
      category: "UI/UX & Branding",
      path: "/projects/sacumen",
      metrics: "01 / CORE SYS",
      tag: "Design Architecture",
    },
    {
      id: 2,
      src: "/images/gallery/brand-2.jpg",
      title: "Studio Identity & Layouts",
      category: "Visual Direction",
      path: "/projects/identity",
      metrics: "02 / IDENTITY",
      tag: "Brand Systems",
    },
    {
      id: 3,
      src: "/images/gallery/brand-3.jpg",
      title: "Vector Marketing Assets",
      category: "Graphic Design",
      path: "/projects/vector-assets",
      metrics: "03 / COLLATERAL",
      tag: "Marketing UX",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#030303] px-6 py-24 text-white selection:bg-[#FF453A] selection:text-black md:px-12 xl:px-24">
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[520px] w-[520px] rounded-full bg-[#FF453A]/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-[-180px] h-[520px] w-[520px] rounded-full bg-orange-500/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-16">
        {/* Section header */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A] shadow-[0_0_12px_rgba(255,69,58,0.8)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FF453A]">
                Selected Works & Showcase
              </span>
            </div>
            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.045em] md:text-7xl">
              WORKS & <span className="text-[#FF453A]">SHOWCASE</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
            Motion, visual design, editing, and brand systems built for real-world creative communication.
          </p>
        </div>

        {/* Video showcase */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {[
            {
              title: "Graphic Design",
              index: "01 / MOTION ASSET",
              playing: playing1,
              setPlaying: setPlaying1,
              src: "/videos/showreel.mp4",
            },
            {
              title: "Video Editing",
              index: "02 / NARRATIVE CUT",
              playing: playing2,
              setPlaying: setPlaying2,
              src: "/videos/Video_Editor.mp4",
            },
          ].map((reel) => (
            <article
              key={reel.title}
              className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-500 hover:border-white/20 md:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-4 px-1">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FF453A]" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white md:text-base">
                    {reel.title}
                  </h3>
                </div>
                <span className="hidden rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 sm:block">
                  {reel.index}
                </span>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-[20px] border border-white/10 bg-black">
                {!reel.playing ? (
                  <button
                    type="button"
                    onClick={() => reel.setPlaying(true)}
                    aria-label={`Play ${reel.title} reel`}
                    className="absolute inset-0 flex cursor-pointer items-center justify-center bg-zinc-950/30 transition-all duration-500 hover:bg-zinc-950/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF453A] text-black shadow-[0_0_35px_rgba(255,69,58,0.45)] transition-transform duration-300 group-hover:scale-110">
                      <svg className="ml-0.5 h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <video src={reel.src} className="h-full w-full object-cover" controls autoPlay playsInline />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Design gallery */}
        <div className="space-y-8">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF453A]">
                Visual Artifacts
              </span>
              <h3 className="text-3xl font-black tracking-[-0.025em] md:text-4xl">
                Design Gallery & Architecture
              </h3>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A]" />
              Open case study
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {photoGallery.map((photo) => (
              <a
                key={photo.id}
                href={photo.path}
                className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-3.5 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF453A]/40 hover:bg-white/[0.035] md:p-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-black">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-[#FF453A] backdrop-blur-md">
                    {photo.tag}
                  </div>
                </div>

                <div className="px-1 pt-5">
                  <div className="mb-2 flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-zinc-600">
                    <span>{photo.metrics}</span>
                    <span className="text-zinc-500 transition-colors group-hover:text-[#FF453A]">↗</span>
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
                    {photo.title}
                  </h4>
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      {photo.category}
                    </span>
                    <span className="text-xs text-[#FF453A]">VIEW →</span>
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
