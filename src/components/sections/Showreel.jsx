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

const ARTIFACTS = [
  {
    src: "/images/gallery/brand-1.jpg",
    title: "Studio Identity & Layouts",
    category: "Visual Design",
  },
  {
    src: "/images/gallery/brand-2.jpg",
    title: "Brand & Marketing Assets",
    category: "Graphic Design",
  },
  {
    src: "/images/gallery/brand-3.jpg",
    title: "Creative Visual Systems",
    category: "Brand Communication",
  },
];

export default function Showreel() {
  const [playing, setPlaying] = useState(null);

  return (
    <section
      id="showreel"
      className="relative w-full overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-12 xl:px-24"
      aria-label="Selected creative work"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-14">
        <header className="flex flex-col justify-between gap-7 border-b border-white/[0.08] pb-9 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A]" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FF453A]">
                Selected Work
              </span>
            </div>
            <h2 className="text-5xl font-semibold tracking-[-0.045em] leading-none md:text-7xl">
              Design. Motion. <span className="text-[#FF453A]">Edit.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
            A focused selection of visual design, motion and video work. Detailed case studies are presented separately below.
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
                    aria-label={`${reel.title} showreel`}
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

        <div className="border-t border-white/[0.08] pt-10">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF453A]">
                Visual Archive
              </span>
              <h3 className="text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
                Selected Design Work
              </h3>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:block">
              Case studies below
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ARTIFACTS.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-white/[0.02]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                    {item.category}
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-zinc-100">
                    {item.title}
                  </h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
