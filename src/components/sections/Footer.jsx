import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./MagneticButton"; // Leveraging your utility component directly

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [yearState, setYearState] = useState(2026); // Safely defaulted to current runtime context

  useEffect(() => {
    setYearState(new Date().getFullYear());
  }, []);

  const handleSmoothScrollToTop = () => {
    // Check if Lenis smooth scrolling instance is active on the window object
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: shouldReduceMotion });
    } else {
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <footer className="relative w-full bg-[#050505] px-6 md:px-12 xl:px-24 pt-32 pb-8 border-t border-white/[0.04] overflow-hidden select-none selection:bg-[#FF453A] selection:text-white">
      {/* Background Lighting Systems to match the Hero context */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF453A]/5 blur-[120px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      
      <div className="max-w-[1600px] mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Top Section: Brand & Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          
          <div className="flex flex-col gap-6 max-w-3xl min-w-0">
            <motion.h2 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] font-black tracking-[0.25em] text-[#FF453A] uppercase leading-none"
            >
              PRAVEEN
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 max-w-[360px] text-[#B8B8B8] text-[15px] font-normal leading-relaxed tracking-wide antialiased"
            >
              Creative Visual Designer specializing in Branding, Motion Graphics, UI/UX, Video Editing and VFX Compositing.
            </motion.p>
          </div>

          {/* Actions & Socials Links Tree */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto flex-shrink-0"
          >
            {/* Smooth Scroll Utility Trigger */}
            <MagneticButton 
              onClick={handleSmoothScrollToTop}
              strength={24}
              className="!border-white/5 !bg-white/[0.01] hover:!border-[#FF453A]/20 group"
            >
              <span className="flex items-center gap-3 font-bold text-[12px] tracking-[0.25em] text-zinc-300 group-hover:text-[#FF453A] transition-colors duration-300">
                BACK TO TOP 
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transform transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">
                  <path d="M5 9V1M5 1L1 5M5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </MagneticButton>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[#B8B8B8] text-[13px] uppercase tracking-[0.2em] font-medium">
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF453A] transition-colors duration-300">
                Behance
              </a>
              <a href="https://linkedin.com/in/praveens" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF453A] transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF453A] transition-colors duration-300">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright & Living Location Stamp */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.04] text-[#71717A] text-[12px] uppercase tracking-[0.2em] font-medium">
          <p className="tracking-widest text-zinc-500">&copy; {yearState} PRAVEEN. ALL RIGHTS RESERVED.</p>
          
          <div className="flex items-center gap-3 bg-zinc-900/30 px-4 py-2 rounded-full border border-white/[0.02]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            <span className="text-zinc-400">Bengaluru, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}