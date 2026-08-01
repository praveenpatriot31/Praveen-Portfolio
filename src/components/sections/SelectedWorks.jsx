import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================
// 📁 WORKS DATA CONFIGURATION
// =========================================================
const PROJECTS = [
  {
    id: "01",
    title: "DETECTIVE DONUT - STOP MOTION REEL",
    category: "3D VFX // COMPOSITING",
    type: "video",
    mediaUrl: "/videos/stop-motion-reel.mp4",
    posterImage: "/images/work-1.jpg",
    description: "A stylized noir stop-motion project featuring compositing, grading, and frame effects.",
    software: ["NUKE", "PREMIERE", "PHOTOSHOP"],
  },
  {
    id: "02",
    title: "CINEMATIC STUDIO BRANDING",
    category: "BRANDING // IDENTITY",
    type: "image",
    image: "/images/work-2.jpg",
    description: "Visual identity and marketing roadmap collateral for creative production.",
    software: ["ILLUSTRATOR", "AFTER EFFECTS"],
  },
  {
    id: "03",
    title: "SCI-FI MOTION REEL",
    category: "MOTION GRAPHICS",
    type: "image",
    image: "/images/work-3.jpg",
    description: "High-end motion graphics and title sequence animation.",
    software: ["CINEMA 4D", "AFTER EFFECTS"],
  },
  {
    id: "04",
    title: "CYBERSECURITY VISUAL CAMPAIGN",
    category: "DESIGN // UI",
    type: "image",
    image: "/images/work-4.jpg",
    description: "Visual marketing collateral and technical flowcharts for enterprise security.",
    software: ["FIGMA", "ILLUSTRATOR"],
  },
];

const CATEGORIES = ["All", "VFX", "Branding", "Motion", "Design"];

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="relative w-full py-28 bg-[#050505] text-white px-6 md:px-12 xl:px-24">
      <div className="max-w-[1600px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-px bg-[#FF453A]" />
              <span className="uppercase tracking-[0.35em] text-[#FF453A] text-[14px] font-bold">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              MORE PROJECTS
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#FF453A] text-white shadow-[0_0_20px_rgba(255,69,58,0.4)]"
                    : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - Two Column Split Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="grid grid-cols-1 gap-6 items-center p-6 lg:p-8 rounded-[32px] bg-zinc-950 border border-white/10 group"
              >
                {/* Media Container */}
                <div className="relative rounded-[20px] overflow-hidden bg-zinc-900 border border-white/10 aspect-[16/10]">
                  {/* Index Number Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-zinc-300 text-xs font-mono font-bold">
                    {project.id}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

                  {project.type === "video" ? (
                    <video
                      src={project.mediaUrl}
                      poster={project.posterImage}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                </div>

                {/* Project Meta & Details */}
                <div className="flex flex-col justify-center">
                  <span className="text-[#FF453A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-[#FF453A] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Software Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.software.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-mono tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Breakdown CTA */}
                  <div>
                    <button
                      onClick={() => alert(`Opening technical breakdown for ${project.title}`)}
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-transparent hover:bg-white text-white hover:text-black font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer"
                    >
                      <span>VIEW BREAKDOWN</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300 text-[#FF453A] group-hover/btn:text-black">
                        →
                      </span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}