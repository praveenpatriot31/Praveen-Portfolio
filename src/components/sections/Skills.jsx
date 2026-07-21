import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CV_SKILLS_DATA = [
  {
    category: "Core Competencies",
    icon: "⚡",
    isAi: false,
    items: ["Creative Visual Design", "Motion Graphics", "Video Production", "VFX Compositing", "AI Content Creation", "Brand Design", "Visual Storytelling"],
  },
  {
    category: "Creative Engine Tools",
    icon: "⚙️",
    isAi: false,
    items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe Premiere Pro", "Figma", "Nuke", "DaVinci Resolve"],
  },
  {
    category: "Neural Nodes & GenAI",
    icon: "🧠",
    isAi: true,
    items: ["Higgsfield", "Runway", "Midjourney", "Kling AI", "Veo 3", "Seedance", "Adobe Firefly", "ChatGPT"],
  },
];

const STAGGER_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const SkillTag = memo(({ name, isAi, shouldReduceMotion }) => {
  return (
    <motion.li
      whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.03 }}
      className={`px-4 py-2.5 rounded-xl text-[13px] font-medium tracking-wide transition-all duration-300 select-none will-change-transform cursor-pointer border ${
        isAi
          ? "bg-[#FF453A]/[0.02] border-[#FF453A]/30 text-zinc-100 hover:text-white hover:bg-[#FF453A]/[0.1] hover:border-[#FF453A] hover:shadow-[0_0_25px_rgba(255,69,58,0.18)]"
          : "bg-zinc-900/40 border-white/[0.04] text-zinc-400 hover:text-white hover:bg-zinc-800/60 hover:border-white/20"
      }`}
    >
      <span className="flex items-center gap-2">
        {isAi && <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" aria-hidden="true" />}
        {name}
      </span>
    </motion.li>
  );
});

SkillTag.displayName = "SkillTag";

export default function SkillsMatrix() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="skills"
      className="w-full bg-[#050505] py-32 border-t border-white/[0.02] overflow-hidden relative"
      aria-label="Expertise Interactive Toolkit Matrix"
    >
      {/* Dynamic Background Aura Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,69,58,0.03),transparent_50%)]" />

      <div className="w-full max-w-[1340px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          
          {/* LEFT SYSTEM DASHBOARD PANEL CONTROLS */}
          <motion.div 
            variants={FADE_UP_VARIANT}
            className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 self-start text-left select-none"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#FF453A]">
                SYSTEM // CORE
              </span>
              <div className="w-8 h-px bg-[#FF453A]/50" />
            </div>

            <h2 className="text-[38px] md:text-[46px] font-black tracking-tighter text-white uppercase leading-none mb-6">
              EXPERTISE<br />TOOLKIT.
            </h2>
            
            <p className="text-zinc-500 text-[14px] font-normal leading-relaxed max-w-xs">
              Curated workspace overview documenting production workflows, modern visualization suites, and generative neural assets.
            </p>
          </motion.div>

          {/* RIGHT VIEWPORT DISPLAY PANEL */}
          <div className="lg:col-span-8 flex flex-col gap-8 w-full">
            {CV_SKILLS_DATA.map((group, index) => (
              <motion.div
                key={index}
                variants={FADE_UP_VARIANT}
                className="flex flex-col items-start w-full border border-white/[0.03] bg-zinc-950/20 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative group overflow-hidden"
              >
                {/* Top Console Tray Accents */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                
                <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-white/[0.03]">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 font-mono flex items-center gap-2 select-none">
                    <span className="text-zinc-600">{group.icon}</span> {group.category}
                  </h3>
                  <span className="text-[10px] text-zinc-600 font-mono tracking-widest hidden sm:inline select-none">
                    NODE // 0{index + 1}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-3 m-0 p-0 list-none w-full">
                  {group.items.map((skill, sIdx) => (
                    <SkillTag
                      key={sIdx}
                      name={skill}
                      isAi={group.isAi}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}