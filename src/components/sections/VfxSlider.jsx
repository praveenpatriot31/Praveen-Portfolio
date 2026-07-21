import React, { useState, useRef, useEffect } from 'react';

export default function VfxSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  // Sync Video Timelines
  useEffect(() => {
    const vidBefore = beforeVideoRef.current;
    const vidAfter = afterVideoRef.current;
    if (!vidBefore || !vidAfter) return;

    const handlePlay = () => {
      vidBefore.play().catch(() => {});
      vidAfter.play().catch(() => {});
    };

    const handlePause = () => {
      vidBefore.pause();
      vidAfter.pause();
    };

    const handleTimeUpdate = () => {
      if (Math.abs(vidBefore.currentTime - vidAfter.currentTime) > 0.04) {
        vidBefore.currentTime = vidAfter.currentTime;
      }
    };

    vidAfter.addEventListener('play', handlePlay);
    vidAfter.addEventListener('pause', handlePause);
    vidAfter.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      vidAfter.removeEventListener('play', handlePlay);
      vidAfter.removeEventListener('pause', handlePause);
      vidAfter.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Handle Drag Calculations
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section 
      id="vfx-slider" 
      className="w-full bg-[#050505] py-16 px-10 md:px-12 lg:px-20 overflow-hidden border-t border-white/[0.02]"
    >
      <div className="w-full max-w-[1000px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 select-none">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-500">
            VFX BREAKDOWN // BEFORE & AFTER
          </h2>
          <span className="w-8 h-px bg-[#FF453A] opacity-60" aria-hidden="true" />
        </div>

        {/* Interactive Slider Area */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.05] select-none cursor-ew-resize shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
        >
          
          {/* UNDERLAYER: Final VFX Composite Video */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <video
              ref={afterVideoRef}
              src="/videos/vfx-after.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest text-white uppercase">
              FINAL COMPOSITE
            </div>
          </div>

          {/* OVERLAYER: Raw Production Video (Clipped with static 100% video geometry) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <video
              ref={beforeVideoRef}
              src="/videos/vfx-before.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-10 bg-[#FF453A]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest text-white uppercase">
              RAW PROCESS PASS
            </div>
          </div>

          {/* DRAGGABLE CONTROL BAR */}
          <div 
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.6)] flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Center Drag Handle */}
            <div className="w-8 h-8 rounded-full bg-white text-black border border-zinc-300 shadow-2xl flex items-center justify-center pointer-events-none text-xs font-bold transition-transform group-hover:scale-110">
              ↔
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}