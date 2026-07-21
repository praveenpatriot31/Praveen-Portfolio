import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EXPERIENCE_REGISTRY = [
  {
    id: "01",
    role: "Creative Visual Designer & AI Content Specialist",
    company: "Thermo Fisher Scientific (Contract)",
    location: "Global Team Focus",
    period: "2026",
    impact: "Designed premium visual creatives, high-end motion graphics, and integrated generative AI workflows using advanced systems like Higgsfield, Runway, Midjourney, Kling AI, and Veo 3 to scale global marketing and communication materials.",
    deliverables: ["Generative AI Pipelines", "Motion Graphics", "Global Brand Assets"],
    mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "02",
    role: "Graphic Designer",
    company: "Sacumen",
    location: "Bengaluru, IN",
    period: "2025",
    impact: "Engineered high-performance digital marketing creatives, corporate presentations, and custom visual brand communication materials tightly aligned with primary strategic marketing objectives.",
    deliverables: ["Brand Execution", "Digital Marketing Assets", "Presentation Systems"],
    mediaUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "03",
    role: "Creative Post-Production Artist",
    company: "ACube Creations",
    location: "Bengaluru, IN",
    period: "2024 — 2025",
    impact: "Produced complex motion graphic sequences, premium VFX layers, and high-fidelity video content for strategic corporate campaigns and digital multimedia showcases.",
    deliverables: ["VFX Pipelines", "Motion Design", "Post-Production"],
    mediaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "04",
    role: "Application Engineer — M&E Industry",
    company: "MicroGenesis CADSoft Pvt Ltd",
    location: "Bengaluru, IN",
    period: "2023 — 2024",
    impact: "Delivered advanced technical consulting, complex workflow optimization solutions, and professional training mechanics across the complete Adobe enterprise creative suite.",
    deliverables: ["Workflow Consulting", "Technical Support", "Adobe Ecosystems"],
    mediaUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "05",
    role: "Graphic Designer & Video Editor",
    company: "ACube Creations",
    location: "Bengaluru, IN",
    period: "2022 — 2023",
    impact: "Managed end-to-end post-production workflows, high-engagement promotional video assets, thumbnail optimization mechanics, and narrative visual storytelling campaigns.",
    deliverables: ["Video Editing", "Social Media Assets", "Visual Storytelling"],
    mediaUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "06",
    role: "Graphic Designer & Video Editor",
    company: "DIGILEARN Pvt Ltd",
    location: "Bengaluru, IN",
    period: "2021 — 2022",
    impact: "Designed underlying corporate identity assets, motion-led interactive educational content structures, and digital promotional matrices optimized for targeted webinars and product courses.",
    deliverables: ["E-Learning Layouts", "Branding Assets", "Kinetic Content"],
    mediaUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="relative w-full bg-[#050505] py-32 lg:py-48 px-6 md:px-12 xl:px-24 border-t border-white/[0.04] overflow-hidden select-none">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* LEFT CANVAS: Sticky Visual Preview Window */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.06]">
            
            <div className="absolute -inset-10 bg-[#FF453A]/10 blur-[50px] rounded-full opacity-40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 0.75, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={EXPERIENCE_REGISTRY[activeIndex].mediaUrl}
                  alt={`${EXPERIENCE_REGISTRY[activeIndex].company} Workspace Context`}
                  className="w-full h-full object-cover grayscale contrast-[1.15]"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#FF453A] uppercase block mb-1">
                  Firm Context
                </span>
                <p className="text-white text-sm font-semibold tracking-wider uppercase">
                  {EXPERIENCE_REGISTRY[activeIndex].company}
                </p>
              </div>
              <span className="text-[32px] font-black tracking-tighter text-white/20 font-mono">
                {EXPERIENCE_REGISTRY[activeIndex].id}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CANVAS: Interactive Stacked List */}
        <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
          
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#FF453A]" />
              <span className="text-[11px] font-black tracking-[0.4em] text-[#FF453A] uppercase">
                Track Record
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
              Professional <br />Experience
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/[0.08]">
            {EXPERIENCE_REGISTRY.map((item, index) => {
              const isSelected = activeIndex === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="relative flex flex-col pt-8 pb-10 border-b border-white/[0.08] cursor-pointer group transition-all duration-300"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF453A] transition-transform duration-500 ease-out origin-top ${isSelected ? "scale-y-100" : "scale-y-0"}`} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pl-4 sm:pl-6">
                    <div className="flex items-baseline gap-4">
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight uppercase transition-colors duration-300 ${isSelected ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                        {item.role}
                      </h3>
                    </div>
                    <span className="text-[12px] font-bold tracking-[0.2em] text-[#B8B8B8] sm:text-right">
                      {item.period}
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isSelected ? "auto" : 0, 
                      opacity: isSelected ? 1 : 0 
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pl-4 sm:pl-6 max-w-xl">
                      <p className="text-[#B8B8B8] text-[15px] font-normal leading-relaxed tracking-wide antialiased">
                        {item.impact}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.deliverables.map((tag) => (
                          <span
                            key={tag}
                            className="bg-zinc-950 border border-white/[0.06] text-zinc-400 text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}