import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SKILL_GROUPS = [
  {
    number: "01",
    title: "Design & Visual Communication",
    description: "The creative foundation behind brand, campaign and digital communication work.",
    items: [
      "Graphic Design",
      "Brand Design",
      "Visual Storytelling",
      "Layout & Composition",
      "Marketing Creatives",
      "Presentation Design"
    ]
  },
  {
    number: "02",
    title: "Motion, Video & VFX",
    description: "Production capabilities across editing, motion design and compositing workflows.",
    items: [
      "Video Editing",
      "Motion Graphics",
      "VFX Compositing",
      "Roto & Paint Prep",
      "Post-Production",
      "Content Production"
    ]
  },
  {
    number: "03",
    title: "Creative Software",
    description: "A cross-disciplinary production stack for design, video, compositing and 3D work.",
    items: [
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro",
      "Nuke",
      "DaVinci Resolve",
      "Blender",
      "Unreal Engine"
    ]
  },
  {
    number: "04",
    title: "AI-Assisted Creative",
    description: "Generative tools used to support ideation, exploration and production—not replace creative judgment.",
    ai: true,
    items: [
      "Higgsfield",
      "Runway",
      "Midjourney",
      "Kling AI",
      "Veo",
      "Adobe Firefly",
      "ChatGPT"
    ]
  }
];

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

const SkillTag = memo(({ name, ai, reduceMotion }) => (
  <motion.li
    whileHover={reduceMotion ? {} : { y: -2 }}
    className={`rounded-full border px-4 py-2.5 text-[12px] font-medium tracking-wide transition-colors duration-300 ${
      ai
        ? "border-[#FF453A]/25 bg-[#FF453A]/[0.04] text-zinc-200 hover:border-[#FF453A]/60 hover:bg-[#FF453A]/[0.08]"
        : "border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.18] hover:bg-white/[0.05] hover:text-white"
    }`}
  >
    <span className="flex items-center gap-2">
      {ai && <span className="h-1.5 w-1.5 rounded-full bg-[#FF453A]" aria-hidden="true" />}
      {name}
    </span>
  </motion.li>
));

SkillTag.displayName = "SkillTag";

export default function SkillsMatrix() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-28 md:px-12 lg:px-24 lg:py-40"
      aria-label="Skills and tools"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#FF453A]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FF453A]">
                Capabilities & Tools
              </span>
            </div>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              One creative stack.
              <span className="text-zinc-500"> Multiple disciplines.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            Design, motion, video, VFX and AI-assisted production brought together
            into a practical visual workflow.
          </p>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => (
            <motion.article
              key={group.number}
              variants={FADE_UP}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.05 }}
              className="group relative min-h-[300px] bg-[#090909] p-7 sm:p-9 lg:p-11"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF453A]">
                  {group.number}
                </span>
                {group.ai && (
                  <span className="rounded-full border border-[#FF453A]/20 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#FF453A]">
                    AI-assisted
                  </span>
                )}
              </div>

              <h3 className="max-w-md text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                {group.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
                {group.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5 p-0 list-none">
                {group.items.map((skill) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    ai={group.ai}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[10px] uppercase tracking-[0.18em] text-zinc-600 sm:flex-row sm:justify-between">
          <span>Core disciplines first</span>
          <span>Tools support the work</span>
        </div>
      </div>
    </section>
  );
}
