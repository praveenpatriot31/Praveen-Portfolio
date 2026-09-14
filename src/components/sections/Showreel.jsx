import React, { useState } from "react";

const REELS = [
  {
    title: "Graphic Design",
    index: "01 / VISUAL DESIGN",
    src: "/videos/showreel.mp4",
  },
  {
    title: "Video Editing",
    index: "02 / EDITING",
    src: "/videos/Video_Editor.mp4",
  },
];

export default function Showreel() {
  const [playing, setPlaying] = useState(null);

  return (
    <section
      id="showreel"
      className="relative w-full overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-12 xl:px-24"
      aria-label="Motion and video work"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-14">
        <header className="flex flex-col justify-between gap-7 border-b border-white/[0.08] pb-9 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A]" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FF453A]">
                Motion & Video
              </span>
            </div>
            <h2 className="text-5xl font-semibold leading-none tracking-[-0.045em] md:text-7xl">
              Design. Motion. <span className="text-[#FF453A]">Edit.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
            Selected reel material showing visual design, editing and motion work. Brand case studies are presented separately.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {REELS.map((reel, index) => {
            const isPlaying = playing === index;
            return (
              <article
                key={reel.title}
                className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.02] p-3 md:p-4"
              >
                <div className="mb-4 flex items-center justify-between px-1">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {reel.title}
                  </h3>
                  <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-zinc-600">
                    {reel.index}
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[16px] bg-black">
                  <video
                    src={reel.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={isPlaying}
                    aria-label={`${reel.title} reel`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => setPlaying(index)}
                      aria-label={`Open controls for ${reel.title}`}
                      className="absolute inset-0 z-10 flex items-center justify-center"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF453A] text-black shadow-[0_0_35px_rgba(255,69,58,0.3)] transition-transform duration-300 hover:scale-105">
                        <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:flex-row sm:justify-between">
          <span>Brand work → Selected Work</span>
          <span>VFX → Compositing breakdown below</span>
        </div>
      </div>
    </section>
  );
}
