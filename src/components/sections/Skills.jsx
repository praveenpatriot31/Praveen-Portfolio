import React from "react";

const SKILL_GROUPS = [
  {
    number: "01",
    title: "Design & Visual Communication",
    description: "Core capabilities for brand, campaign and digital communication.",
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
    description: "Production capabilities across editing, motion design and compositing.",
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
    description: "Production tools used across design, video, compositing and 3D.",
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
    description: "AI tools used for ideation, visual exploration and production support.",
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

export default function SkillsMatrix() {
  return (
    <section
      id="skills"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF453A]">
                Skills & Tools
              </span>
            </div>
            <h2
              id="skills-title"
              className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              Creative skills.
              <span className="text-zinc-500"> Production tools.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            A practical mix of visual design, motion, video, VFX and AI-assisted production capabilities.
          </p>
        </header>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.number}
              className="bg-[#090909] p-7 sm:p-9 lg:p-11"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF453A]">
                  {group.number}
                </span>
                {group.ai && (
                  <span className="rounded-full border border-[#FF453A]/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#FF453A]">
                    AI-assisted
                  </span>
                )}
              </div>

              <h3 className="mt-10 max-w-md text-xl font-bold uppercase tracking-[-0.02em] text-white sm:text-2xl">
                {group.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
                {group.description}
              </p>

              <ul className="mt-8 flex list-none flex-wrap gap-2 p-0" aria-label={`${group.title} skills`}>
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-full border px-3.5 py-2 text-xs font-medium tracking-wide ${
                      group.ai
                        ? "border-[#FF453A]/20 bg-[#FF453A]/[0.03] text-zinc-300"
                        : "border-white/[0.09] bg-white/[0.02] text-zinc-400"
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600 sm:flex-row sm:justify-between">
          <span>Capabilities first</span>
          <span>Tools support the work</span>
        </div>
      </div>
    </section>
  );
}
