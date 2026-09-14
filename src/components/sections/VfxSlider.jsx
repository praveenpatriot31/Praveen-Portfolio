import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeftRight, Check, MousePointer2 } from 'lucide-react';

const SKILLS = ['Compositing', 'Roto', 'Paint Prep', 'Integration'];

export default function VfxSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  useEffect(() => {
    const before = beforeVideoRef.current;
    const after = afterVideoRef.current;
    if (!before || !after) return;

    const syncPlay = () => before.play().catch(() => {});
    const syncPause = () => before.pause();
    const syncTime = () => {
      if (Math.abs(before.currentTime - after.currentTime) > 0.05) {
        before.currentTime = after.currentTime;
      }
    };

    after.addEventListener('play', syncPlay);
    after.addEventListener('pause', syncPause);
    after.addEventListener('timeupdate', syncTime);

    return () => {
      after.removeEventListener('play', syncPlay);
      after.removeEventListener('pause', syncPause);
      after.removeEventListener('timeupdate', syncTime);
    };
  }, []);

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, []);

  const updatePosition = (clientX) => {
    const element = containerRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, next)));
  };

  const handleMouseMove = (event) => {
    if (isDragging) updatePosition(event.clientX);
  };

  const handleTouchMove = (event) => {
    if (isDragging && event.touches[0]) updatePosition(event.touches[0].clientX);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      setSliderPosition((current) =>
        Math.max(0, Math.min(100, current + (event.key === 'ArrowRight' ? 5 : -5)))
      );
    }
  };

  return (
    <section
      id="vfx-slider"
      className="w-full overflow-hidden border-t border-white/[0.06] bg-[#050505] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              <span className="text-[#ff453a]">VFX</span>
              <span className="h-px w-8 bg-[#ff453a]/60" />
              Compositing Breakdown
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              From plate to final composite.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              A practical before-and-after view of a compositing pass, presented as a process breakdown rather than a client or performance claim.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(event) => {
            setIsDragging(true);
            updatePosition(event.clientX);
          }}
          onTouchStart={(event) => {
            setIsDragging(true);
            if (event.touches[0]) updatePosition(event.touches[0].clientX);
          }}
          className="relative aspect-[16/8.5] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] touch-none"
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
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            />
          </div>

          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            Before
          </div>
          <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
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
            className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,0,0,0.8)] outline-none focus-visible:ring-2 focus-visible:ring-[#ff453a]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-black shadow-2xl">
              <ArrowLeftRight size={17} strokeWidth={2.2} />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-b border-white/[0.07] pb-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <MousePointer2 size={14} />
            Drag the divider or use ← → keys to inspect the pass.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Check size={14} className="text-[#ff453a]" />
            Before / after comparison
          </div>
        </div>
      </div>
    </section>
  );
}
