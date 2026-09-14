import React, { useRef, useState } from "react";

const REELS = [
  {
    title: "Graphic Design",
    discipline: "Visual Design",
    src: "/videos/showreel.mp4",
  },
  {
    title: "Video Editing",
    discipline: "Editing",
    src: "/videos/Video_Editor.mp4",
  },
];

export default function Showreel() {
  const [playing, setPlaying] = useState(null);
  const videoRefs = useRef([]);

  const handlePlay = async (index) => {
    videoRefs.current.forEach((video, videoIndex) => {
      if (video && videoIndex !== index) video.pause();
    });

    const video = videoRefs.current[index];
    if (!video) return;

    try {
      await video.play();
      video.controls = true;
      setPlaying(index);
    } catch {
      setPlaying(null);
    }
  };

  return (
    <section
      id="showreel"
      className="relative w-full overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-12 md:py-28 xl:px-24"
      aria-label="Motion and video work"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-14">
        <header className="flex flex-col justify-between gap-8 border-b border-white/[0.10] pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF453A]">
                Motion & Video
              </span>
            </div>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
              Design. Motion. <span className="text-[#FF453A]">Edit.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-300">
            A focused selection of visual design, editing and motion work. Brand identity and VFX projects are presented in their dedicated sections.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {REELS.map((reel, index) => {
            const isPlaying = playing === index;
            return (
              <article
                key={reel.title}
                className="overflow-hidden rounded-[22px] border border-white/[0.10] bg-white/[0.025] p-3 md:p-4"
              >
                <div className="mb-4 flex items-center justify-between gap-4 px-1">
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.01em] text-white md:text-lg">
                      {reel.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {reel.discipline}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-medium tabular-nums text-zinc-500" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[16px] bg-black">
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    src={reel.src}
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                    controls={isPlaying}
                    aria-label={`${reel.title} reel`}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
                    aria-hidden="true"
                  />

                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => handlePlay(index)}
                      aria-label={`Play ${reel.title} reel`}
                      className="absolute inset-0 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A] focus-visible:ring-inset"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF453A] text-black shadow-[0_0_35px_rgba(255,69,58,0.3)] transition-transform duration-300 hover:scale-105">
                        <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>

                <p className="px-1 pt-4 text-sm leading-6 text-zinc-400">
                  Click to play · Controls appear during playback
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
