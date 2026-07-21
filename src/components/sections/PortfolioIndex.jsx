import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ELEMENT_VARIANTS = {
  hidden: (shouldReduceMotion) => ({
    opacity: 0,
    y: shouldReduceMotion ? 0 : 32,
  }),
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioIndex() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="explore"
        className="relative w-full overflow-hidden bg-[#050505] py-32 select-none"
        aria-label="Portfolio Index Works Overview"
      >
        {/* Ambient Dark Accent Glow */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,69,58,0.04),transparent_50%)] mix-blend-screen" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-10 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-12">
            
            {/* LEFT COLUMN: CURATED TEXT TREE */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.15 }}
              className="lg:col-span-7 flex flex-col items-start text-left min-w-0"
            >
              {/* Index Subtitle Tag */}
              <motion.div 
                variants={ELEMENT_VARIANTS} 
                custom={shouldReduceMotion} 
                className="flex items-center gap-4 mb-6"
              >
                <span className="uppercase tracking-[0.35em] text-[#FF453A] text-[14px] font-bold">
                  Portfolio // Index
                </span>
                <div className="w-16 h-px bg-[#FF453A]" aria-hidden="true" />
              </motion.div>

              {/* Display Headline Block */}
              <motion.h2
                variants={ELEMENT_VARIANTS}
                custom={shouldReduceMotion}
                className="font-black text-left w-full select-none flex flex-col leading-[0.9] text-[56px] sm:text-[72px] md:text-[84px] tracking-tight text-white uppercase"
              >
                <span>SELECTED</span>
                {/* 🛠️ FIX: Replaced unstable scoped stroke style injection with a clean multi-directional drop shadow matrix */}
                <span 
                  className="block mt-1 text-[#050505]"
                  style={{ 
                    textShadow: `
                      -1px -1px 0 rgba(255, 255, 255, 0.25),  
                       1px -1px 0 rgba(255, 255, 255, 0.25),
                      -1px  1px 0 rgba(255, 255, 255, 0.25),
                       1px  1px 0 rgba(255, 255, 255, 0.25)
                    `,
                    letterSpacing: "-0.01em"
                  }}
                >
                  WORKS
                </span>
              </motion.h2>

              {/* Curated Description paragraph */}
              <motion.p
                variants={ELEMENT_VARIANTS}
                custom={shouldReduceMotion}
                className="mt-8 max-w-[500px] text-[#B8B8B8] text-[18px] font-normal leading-relaxed tracking-normal antialiased"
              >
                A highly curated digital playground containing commercial motion designs, 
                environment builds, and intricate VFX composites.
              </motion.p>

              {/* Interactive Navigation Trigger */}
              <motion.div 
                variants={ELEMENT_VARIANTS} 
                custom={shouldReduceMotion}
                className="mt-12"
              >
                <a
                  href="#project-grid"
                  className="group flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors duration-300 font-bold"
                >
                  Scroll down to explore
                  <span className="text-[14px] group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: STRUCTURAL MINIMALIST BALANCE GRAPHIC */}
            <div className="lg:col-span-5 hidden lg:flex justify-end select-none pointer-events-none relative pr-4">
              {/* Massive wireframe section background indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[240px] font-black leading-none text-transparent font-mono tracking-tighter select-none"
                style={{ 
                  textShadow: `
                    -1px -1px 0 rgba(255, 255, 255, 0.035),  
                     1px -1px 0 rgba(255, 255, 255, 0.035),
                    -1px  1px 0 rgba(255, 255, 255, 0.035),
                     1px  1px 0 rgba(255, 255, 255, 0.035)
                  `
                }}
              >
                01
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}