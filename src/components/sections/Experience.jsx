import React, { useState } from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    id: "01",
    company: "Thermo Fisher Scientific",
    role: "Creative Visual Designer & AI Content Specialist",
    period: "Jan 2026 — Apr 2026",
    location: "Singapore / Remote",
    summary:
      "Created visual content for internal and external communication, with motion, video and AI-assisted production supporting corporate and marketing needs.",
    bullets: [
      "Created visual content for internal and external communication.",
      "Designed motion graphics and edited videos for marketing and corporate use.",
      "Used AI-assisted tools to support content creation and ideation.",
      "Collaborated with global teams to deliver high-quality visual assets on time."
    ],
    tags: ["Visual Design", "Motion", "Video", "AI-Assisted"]
  },
  {
    id: "02",
    company: "Sacumen",
    role: "Graphic Designer",
    period: "2025",
    location: "Bengaluru, India",
    summary:
      "Designed brand creatives, marketing materials and digital assets across project and client requirements.",
    bullets: [
      "Designed brand creatives, marketing materials and digital assets.",
      "Supported visual communication across various projects and clients.",
      "Worked on social media content, print designs and presentations.",
      "Collaborated with the team to meet project requirements and deadlines."
    ],
    tags: ["Brand Design", "Marketing", "Social", "Presentations"]
  },
  {
    id: "03",
    company: "ACube Creations",
    role: "Creative Post-Production Artist",
    period: "2024 — 2025",
    location: "Bengaluru, India",
    summary:
      "Worked across video editing, motion graphics, VFX and post-production for commercial and digital content.",
    bullets: [
      "Worked on video editing, motion graphics and post-production for commercial projects.",
      "Supported visual storytelling for advertisements, corporate videos and digital content.",
      "Collaborated with creative teams to deliver high-quality final outputs.",
      "Handled multiple projects with focus on quality and on-time delivery."
    ],
    tags: ["Post-Production", "VFX", "Motion", "Video"]
  },
  {
    id: "04",
    company: "MicroGenesis CADSoft Pvt Ltd",
    role: "Application Engineer",
    period: "2023 — 2024",
    location: "Bengaluru, India",
    summary:
      "Provided technical support, training and workflow guidance for creative software users.",
    bullets: [
      "Delivered technical support and training on Adobe software to media professionals.",
      "Resolved software issues and workflow challenges.",
      "Provided guidance on creative applications and best practices."
    ],
    tags: ["Adobe", "Technical Support", "Training", "Workflows"]
  },
  {
    id: "05",
    company: "ACube Creations",
    role: "Graphic Designer & Video Editor",
    period: "2022 — 2023",
    location: "Bengaluru, India",
    summary:
      "Handled design and video production across promotional, social and post-production deliverables.",
    bullets: [
      "Managed end-to-end video editing and post-production workflows.",
      "Created thumbnails, social media creatives and promotional videos.",
      "Enhanced audience engagement through visual storytelling."
    ],
    tags: ["Graphic Design", "Video Editing", "Social", "Post-Production"]
  },
  {
    id: "06",
    company: "DIGILEARN Pvt Ltd",
    role: "Graphic Designer & Video Editor",
    period: "2021 — 2022",
    location: "Bengaluru, India",
    summary:
      "Built foundational experience across graphic design, video editing and digital content production.",
    bullets: [
      "Created branding materials and digital promotional content.",
      "Edited video content for educational and digital communication needs.",
      "Supported visual production across ongoing content requirements."
    ],
    tags: ["Graphic Design", "Video", "Digital Content"]
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCE[activeIndex];

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#050505] px-6 py-28 md:px-12 lg:px-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#FF453A]">
                Track Record
              </span>
            </div>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Experience that moves
              <span className="text-zinc-500"> across disciplines.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            A career spanning graphic design, video, motion, VFX, technical
            creative workflows and AI-assisted production.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909] lg:grid-cols-12">
          <aside className="border-b border-white/[0.08] lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/[0.08] px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Professional Experience
            </div>
            <div className="p-3">
              {EXPERIENCE.map((item, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-colors duration-300 ${
                      selected ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`mt-1 text-[10px] font-mono tracking-widest ${
                        selected ? "text-[#FF453A]" : "text-zinc-600"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-bold uppercase tracking-tight ${
                          selected ? "text-white" : "text-zinc-400"
                        }`}
                      >
                        {item.company}
                      </span>
                      <span className="mt-1 block text-[11px] leading-5 text-zinc-600">
                        {item.period}
                      </span>
                    </span>
                    {selected && (
                      <motion.span
                        layoutId="experience-indicator"
                        className="absolute bottom-3 left-0 top-3 w-[2px] bg-[#FF453A]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="relative min-h-[520px] lg:col-span-8">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#FF453A]/[0.07] blur-3xl" />
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative flex h-full flex-col p-7 sm:p-10 lg:p-14"
            >
              <div className="flex flex-col gap-5 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF453A]">
                    {active.location}
                  </span>
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                    {active.role}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-zinc-500">
                    {active.company}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  {active.period}
                </span>
              </div>

              <p className="max-w-2xl pt-8 text-base leading-7 text-zinc-300">
                {active.summary}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {active.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3 border-t border-white/[0.07] pt-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF453A]" />
                    <p className="text-sm leading-6 text-zinc-400">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-10">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
