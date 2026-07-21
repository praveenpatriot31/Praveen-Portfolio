import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Configuration for easy project updating
const PROJECTS_DATA = [
  {
    id: "01",
    title: "CUBIC METAVERSE",
    category: "Environment Build // 3D Motion",
    imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    link: "#",
  },
  {
    id: "02",
    title: "NEON SHADOWS",
    category: "VFX Composite // Cyberpunk Film",
    imgSrc: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    title: "KINETIC TYPE LOOP",
    category: "Motion Design // Typography",
    imgSrc: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

const CARD_VARIANTS = {
  hidden: (shouldReduceMotion) => ({
    opacity: 0,
    y: shouldReduceMotion ? 0 : 48,
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

export default function ProjectGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="project-grid" 
      className="w-full bg-[#050505] pb-40 px-10 md:px-12 xl:px-24 select-none"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-20 lg:gap-y-32">
          
          {PROJECTS_DATA.map((project, index) => {
            // Alternating alignment layout: shifts the second column down slightly for an editorial look
            const isEven = index % 2 === 1;
            
            return (
              <motion.a
                href={project.link}
                key={project.id}
                custom={shouldReduceMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={CARD_VARIANTS}
                className={`group block w-full relative cursor-pointer ${
                  isEven ? "md:mt-32" : ""
                }`}
              >
                {/* Image Showcase Container */}
                <div className="relative w-full aspect-[4/5] bg-zinc-900 rounded-[24px] overflow-hidden border border-white/[0.05] shadow-[0_32px_64px_-20px_rgba(0,0,0,0.8)]">
                  {/* Visual Overlay Mask */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Subtle Interactive Ambient Glow inside image card */}
                  <div className="absolute inset-0 z-10 bg-[#FF453A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-color-dodge pointer-events-none" />

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full bg-cover bg-center will-change-transform mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                    style={{ backgroundImage: `url(${project.imgSrc})` }}
                  />
                  
                  {/* Absolute Top Right Number Identifier */}
                  <span className="absolute top-6 right-8 text-white/20 font-mono text-[16px] font-bold z-20 group-hover:text-[#FF453A]/60 transition-colors duration-300">
                    {project.id}
                  </span>
                </div>

                {/* Typography Descriptive Base */}
                <div className="mt-6 flex flex-col items-start text-left pl-2">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#FF453A] font-bold">
                    {project.category}
                  </p>
                  
                  <h3 className="mt-2 text-[28px] sm:text-[32px] font-black tracking-tight text-white group-hover:text-zinc-300 transition-colors duration-300 uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="mt-3 flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-zinc-500 font-semibold group-hover:text-white transition-colors duration-300">
                    <span>View Case Study</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}