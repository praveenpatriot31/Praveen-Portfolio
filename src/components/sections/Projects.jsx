import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TOKENS = {
  transitions: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
};

const STAGGER_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const FADE_UP_VARIANT = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: TOKENS.transitions,
  },
};

const PROJECTS_DATA = [
  {
    id: "proj-01",
    title: "Synthetic Realism Cinematic",
    category: "AI Content & Video Production",
    description: "An advanced short film exploring temporal consistency across multi-modal generative AI pipelines. Combined Runway Gen-3 and Veo 3 frameworks with complex custom post-compositing.",
    tools: ["Veo 3", "Runway Gen-3", "After Effects", "Nuke"],
    metric: "100% Generative Pipeline",
  },
  {
    id: "proj-02",
    title: "Global Brand Motion System",
    category: "Motion Graphics & Identity",
    description: "Developed a comprehensive, dynamic design language and package guidelines for corporate communications, streamlining visual delivery across global cross-functional marketing teams.",
    tools: ["After Effects", "Illustrator", "Figma"],
    metric: "Global Deployment",
  },
  {
    id: "proj-03",
    title: "Cyberpunk VFX Short",
    category: "VFX Compositing & Grading",
    description: "Immersive narrative short featuring high-fidelity screen replacements, integrated 3D elements, chroma keying, and precise cinematic color balancing workflows.",
    tools: ["Nuke", "DaVinci Resolve", "Photoshop"],
    metric: "4K Master Delivery",
  },
];

const ProjectCard = memo(({ title, category, description, tools, metric, shouldReduceMotion }) => {
  return (
    <motion.li
      variants={FADE_UP_VARIANT}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              backgroundColor: "rgba(255, 255, 255, 0.015)",
            }
      }
      className="flex flex-col justify-between p-8 rounded-2xl border border-white/[0.04] bg-white/[0.02] transition-all duration-300 ease-out min-h-[340px] group outline-none focus-visible:ring-1 focus-visible:ring-[#FF453A]"
      tabIndex={0}
    >
      <div className="flex flex-col items-start text-left w-full">
        {/* Metric Badge */}
        <div className="flex items-center justify-between w-full mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
            // {category}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.04] text-[#FF453A]">
            {metric}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-[24px] font-black tracking-tight text-white leading-tight mb-3">
          {title}
        </h4>

        {/* Description */}
        <p className="text-[14px] leading-relaxed tracking-wide text-zinc-400 font-normal antialiased mb-6 group-hover:text-zinc-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Tools Footer */}
      <ul className="flex flex-wrap gap-2 m-0 p-0 list-none pt-4 border-t border-white/[0.03]">
        {tools.map((tool, idx) => (
          <li
            key={idx}
            className="text-[11px] font-medium tracking-wide text-zinc-500 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded"
          >
            {tool}
          </li>
        ))}
      </ul>
    </motion.li>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function ProjectsShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="projects"
      className="w-full bg-[#050505] py-24 border-t border-white/[0.04] overflow-hidden"
      aria-label="Selected Creative Projects Portfolio Showcase"
    >
      <div className="w-full max-w-[1280px] mx-auto px-10 md:px-12 lg:px-20">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          
          {/* Left Sticky Header Anchor Section */}
          <motion.div 
            variants={FADE_UP_VARIANT} 
            className="lg:col-span-4 flex items-center gap-3.5 h-auto lg:sticky lg:top-24 self-start select-none"
          >
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] whitespace-nowrap text-[#FF453A]">
              Featured Work
            </span>
            <div className="h-px bg-white/[0.08] flex-1 max-w-[80px]" aria-hidden="true" />
          </motion.div>

          {/* Right Cards Layout Matrix Grid */}
          <div className="lg:col-span-8 w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 m-0 p-0 list-none">
              {PROJECTS_DATA.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  tools={project.tools}
                  metric={project.metric}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}