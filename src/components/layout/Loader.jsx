import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const TOKENS = {
  colors: {
    bg: "#050505",
    accent: "#FF453A",
    track: "rgba(255, 255, 255, 0.04)",
  },
  transitions: {
    panelExit: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
    contentExit: { duration: 0.4, ease: "easeOut" }
  }
};

const Loader = memo(() => {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // 1. Core Scroll Lock Implementation
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // 2. Window Asset Resolution Listener
    const handleLoad = () => {
      // Small buffer to guarantee DOM stability before firing entrance transitions
      const delay = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 600);
      return () => clearTimeout(delay);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fail-safe protection boundary (Max threshold 4 seconds)
      const safetyTimeout = setTimeout(handleLoad, 4000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(safetyTimeout);
      };
    }
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio assets, please wait."
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0, transition: { duration: 0.4 } }
              : { y: "-100%", transition: TOKENS.transitions.panelExit }
          }
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, transition: TOKENS.transitions.contentExit }}
            className="flex flex-col items-center gap-5"
          >
            {/* Identity Brand Signature */}
            <span 
              className="text-white text-[13px] font-bold uppercase tracking-[0.35em] antialiased select-none"
            >
              Praveen S.
            </span>
            
            {/* Minimalist Interpolating Progress Bar */}
            <div 
              className="w-16 h-[2px] overflow-hidden rounded-full relative"
              style={{ backgroundColor: TOKENS.colors.track }}
            >
              <motion.div 
                className="h-full absolute left-0 top-0 rounded-full"
                style={{ backgroundColor: TOKENS.colors.accent }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: shouldReduceMotion ? 0.8 : 1.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Loader.displayName = "Loader";
export default Loader;