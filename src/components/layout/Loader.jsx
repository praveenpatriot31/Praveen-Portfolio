import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Loader = memo(() => {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!loading) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    let releaseTimer;
    let safetyTimer;

    const release = () => {
      clearTimeout(safetyTimer);
      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === 'complete') {
      release();
    } else {
      window.addEventListener('load', release, { once: true });
      safetyTimer = setTimeout(release, 4000);
    }

    return () => {
      window.removeEventListener('load', release);
      clearTimeout(releaseTimer);
      clearTimeout(safetyTimer);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
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
              ? { opacity: 0, transition: { duration: 0.3 } }
              : { y: '-100%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505] will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="flex flex-col items-center gap-5"
          >
            <span className="select-none text-[13px] font-bold uppercase tracking-[0.35em] text-white antialiased">
              Praveen S.
            </span>

            <div
              className="relative h-[2px] w-16 overflow-hidden rounded-full bg-white/[0.04]"
              aria-hidden="true"
            >
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-[#FF453A]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: shouldReduceMotion ? 0.6 : 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Loader.displayName = 'Loader';
export default Loader;
