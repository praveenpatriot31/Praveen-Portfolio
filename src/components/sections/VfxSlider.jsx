import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, Check, MousePointer2 } from "lucide-react";

const SKILLS = ["Compositing", "Roto", "Paint Prep", "Integration"];

export default function VfxSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  useEffect(() => {
    const before = beforeVideoRef.current;
    const after = afterVideoRef.current;
    if (!before || !after) return undefined;

    const syncBefore = () => {
      if (Math.abs(before.currentTime - after.currentTime) > 0.08) {
        before.currentTime = after.currentTime;
      }
    };

    const playBefore = () => before.play().catch(() => {});
    const pauseBefore = () => before.pause();

    after.addEventListener("timeupdate", syncBefore);
    after.addEventListener("play", playBefore);
    after.addEventListener("pause", pauseBefore);

    return () => {
      after.removeEventListener("timeupdate", syncBefore);
      after.removeEventListener("play", playBefore);
      after.removeEventListener("pause", pauseBefore);
    };
  }, []);

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);
    return () => {
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, []);

  const updatePosition = (clientX) => {
    const element = containerRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, next)));
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setSliderPosition((current) =>
      Math.max(0, Math.min(100, current + (event.key === "ArrowRight" ? 5 : -5)))
    );
  };

  return (
    <section
      id="vfx-slider"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="vfx-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF453A]">
                VFX / Compositing
              </span>
            </div>
            <h2
              id="vfx-title"
              className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              From plate
              <span className="text-zinc-500"> to final composite.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              A before-and-after view of a compositing pass, showing the visual integration work behind the final image.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </header>

        <div
          ref={containerRef}
          onMouseMove={(event) => {
            if (isDragging) updatePosition(event.clientX);
          }}
          onMouseDown={(event) => {
            setIsDragging(true);
            updatePosition(event.clientX);
          }}
          onTouchMove={(event) => {
            if (isDragging && event.touches[0]) updatePosition(event.touches[0].clientX);
          }}
          onTouchStart={(event) => {
            setIsDragging(true);
            if (event.touches[0]) updatePosition(event.touches[0].clientX);
          }}
          className="relative aspect-[16/8.5] w-full select-none overflow-hidden border border-white/10 bg-zinc-950 touch-none"
          aria-label="Interactive VFX before and after comparison"
        >
          <video
            ref={afterVideoRef}
            src="/videos/vfx-after.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <video
              ref={beforeVideoRef}
              src="/videos/vfx-before.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            />
          </div>

          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Before
          </div>
          <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            After
          </div>

          <div
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            aria-label="VFX comparison slider"
            onKeyDown={handleKeyDown}
            className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-white outline-none focus-visible:ring-2 focus-visible:ring-[#FF453A]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-black shadow-2xl">
              <ArrowLeftRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-b border-white/[0.07] pb-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <MousePointer2 size={14} aria-hidden="true" />
            Drag the divider or use ← → keys to inspect the pass.
          </p>
          <p className="flex items-center gap-2 text-zinc-400">
            <Check size={14} className="text-[#FF453A]" aria-hidden="true" />
            Before / after comparison
          </p>
        </div>
      </div>
    </section>
  );
}
