import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// If using react-router-dom, import Link: import { Link } from 'react-router-dom';

const CAPABILITIES_DATA = [
  {
    tag: "VISUALS",
    title: "Brand Identity",
    slug: "brand-identity",
    description: "Developing comprehensive graphic languages, precise design systems, and core marketing architectures that ground modern market footprints."
  },
  {
    tag: "MOTION",
    title: "VFX & Compositing",
    slug: "vfx-compositing",
    description: "Assembling high-fidelity multi-layer post-production strings, digital environment merges, and clean green-screen canvas extractions."
  },
  {
    tag: "PRODUCTION",
    title: "Video Editing",
    slug: "video-editing",
    description: "Cutting high-impact editorial sequences, mixing layered sound design channels, and tuning color tones to fit custom brand standards.",
    showTextDiscover: true
  },
  {
    tag: "NEXT-GEN",
    title: "AI Workflows",
    slug: "ai-workflows",
    description: "Integrating modern neural generation models directly into studio production pipelines to rapidly scale high-fidelity concept iterations."
  }
];

const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="w-full bg-[#050505] text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/[0.02]">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex items-center gap-4 mb-16 md:mb-20 select-none">
          <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#FF453A]">
            CORE CAPABILITIES
          </span>
          <div className="w-16 h-px bg-white/[0.08]" aria-hidden="true" />
        </div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {CAPABILITIES_DATA.map((item, idx) => (
            <motion.a
              href={`/services/${item.slug}`} // Or swap to <Link to={`/services/${item.slug}`}>
              key={idx}
              variants={FADE_UP_VARIANT}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className={`flex flex-col justify-between items-start text-left p-8 rounded-2xl border bg-zinc-950/20 backdrop-blur-sm shadow-xl relative group transition-all duration-300 ${
                item.showTextDiscover 
                  ? "border-white/10 bg-zinc-900/40" 
                  : "border-white/[0.03] hover:border-white/10 hover:bg-zinc-900/20"
              }`}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
              
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 font-mono block mb-5 select-none">
                  {item.tag}
                </span>
                <h3 className="text-[24px] font-black tracking-tight leading-tight mb-4 text-zinc-100 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-[13.5px] font-normal leading-relaxed tracking-wide antialiased max-w-xs mb-12">
                  {item.description}
                </p>
              </div>

              <div className="w-full flex items-center justify-end mt-auto pt-2 min-h-[20px]">
                {item.showTextDiscover ? (
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-[#FF453A] uppercase transition-colors select-none">
                    DISCOVER <span className="text-[12px]">→</span>
                  </div>
                ) : (
                  <span className="text-[14px] text-zinc-700 group-hover:text-[#FF453A] transform group-hover:translate-x-1 transition-all duration-300 select-none">
                    →
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}