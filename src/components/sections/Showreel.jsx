import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Showreel() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(button, {
        x: x - button.offsetWidth / 2,
        y: y - button.offsetHeight / 2,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);
    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section 
      id="showreel" 
      className="w-full bg-[#050505] py-12 px-10 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Reduced outer layout box to a tighter maximal width boundary */}
      <div className="w-full max-w-[1000px] mx-auto">
        
        {/* Section Header Meta Line */}
        <div className="flex items-center gap-4 mb-8 select-none">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-500">
            SHOWREEL // CAPABILITIES LOOP
          </h2>
          <span className="w-8 h-px bg-[#FF453A] opacity-60" aria-hidden="true" />
        </div>

        {/* Cinematic Video Viewport - Swapped to a sleek 21:9 ultrawide crop aspect ratio */}
        <div 
          ref={containerRef}
          onClick={toggleMute}
          className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.05] cursor-none group shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
        >
          <video
            ref={videoRef}
            src="/videos/showreel.mp4" 
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            className="w-full h-full object-cover scale-[1.01] group-hover:scale-102 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
          />

          {/* Vignette Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Dynamic Follow Circle */}
          <div 
            ref={buttonRef}
            className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white text-black font-bold text-[10px] tracking-widest uppercase flex items-center justify-center opacity-0 pointer-events-none shadow-2xl backdrop-blur-sm z-20"
            style={{ transform: "scale(0)" }}
          >
            {isMuted ? "UNMUTE 🔊" : "MUTE 🔇"}
          </div>

          <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2 pointer-events-none">
            <span className="w-1.5 h-1.5 bg-[#FF453A] rounded-full animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest text-zinc-300 uppercase">2026 REEL</span>
          </div>

        </div>
      </div>
    </section>
  );
}