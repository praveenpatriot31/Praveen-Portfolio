import React from "react";

const EXPERIENCE = [
  {
    id: "01",
    company: "WHOOSH SINGAPORE PTE. LTD.",
    role: "Art Director — Project-Based",
    period: "Apr 2026 — Present",
    location: "Singapore",
    summary:
      "Supporting Whoosh Singapore and Paint-O Paints with art direction, brand-aligned creative assets and multimedia communication.",
    bullets: [
      "Develop visual concepts and brand-aligned creative assets for marketing and promotional campaigns.",
      "Create design and multimedia materials for digital platforms and advertising activities.",
      "Contribute to brand consistency across visual communication and multimedia deliverables.",
      "Support corporate communication requirements with impactful creative content."
    ],
    tags: ["Art Direction", "Brand Creative", "Campaigns", "Multimedia"]
  },
  {
    id: "02",
    company: "THERMO FISHER SCIENTIFIC",
    role: "Creative Visual Designer / AI Content Specialist — Contract",
    period: "Jan 2026 — Apr 2026",
    location: "Bengaluru, India",
    summary:
      "Developed visual assets and multimedia content within a multinational business environment, combining design expertise with AI-assisted creative production.",
    bullets: [
      "Developed visual assets and multimedia content for business communication.",
      "Applied design and AI-assisted workflows to support creative production.",
      "Created design materials for internal and external communication.",
      "Supported marketing and product communication through visual and motion content."
    ],
    tags: ["Visual Design", "AI-Assisted Workflows", "Marketing", "Motion"]
  },
  {
    id: "03",
    company: "SACUMEN",
    role: "Graphic Designer & Motion Graphics Designer",
    period: "2025",
    location: "Bengaluru, India",
    summary:
      "Created graphic design assets and motion graphics for marketing, corporate communication and digital platforms.",
    bullets: [
      "Created graphic design assets and motion graphics for digital and multimedia communication.",
      "Applied visual storytelling and animation principles to creative deliverables.",
      "Designed visual content for marketing, corporate communication and digital platforms.",
      "Supported brand consistency across communication materials."
    ],
    tags: ["Graphic Design", "Motion Graphics", "Visual Storytelling", "Brand Consistency"]
  },
  {
    id: "04",
    company: "MICROGENESIS CADSOFT LIMITED",
    role: "Motion Graphics Designer / Adobe Technical Engineer",
    period: "Jun 2023 — Jun 2024",
    location: "Bengaluru, India",
    summary:
      "Combined motion design and multimedia production with Adobe-related technical responsibilities in creative workflows.",
    bullets: [
      "Worked across motion graphics and Adobe-related technical responsibilities.",
      "Applied creative and technical knowledge to design and multimedia workflows.",
      "Supported visual content development and technical requirements associated with Adobe products.",
      "Created motion graphics, animated assets and multimedia content for internal and client projects.",
      "Collaborated with teams to support smooth creative and technical workflows."
    ],
    tags: ["Motion Graphics", "Adobe", "Multimedia", "Technical Support"]
  },
  {
    id: "05",
    company: "ACUBE CREATION STUDIOS",
    role: "Video Editor & Camera Operator",
    period: "Jun 2022 — May 2023",
    location: "Bengaluru, India",
    summary:
      "Worked across video production and post-production, from camera operation and footage selection to editing and final delivery.",
    bullets: [
      "Edited video content for creative and multimedia projects.",
      "Handled camera operations during video production.",
      "Supported post-production through footage selection, editing and final delivery.",
      "Created promotional videos, event coverage and digital content for various clients.",
      "Worked with directors and production teams to achieve the intended visual output."
    ],
    tags: ["Video Editing", "Camera Operation", "Post-Production", "Promotional Video"]
  },
  {
    id: "06",
    company: "DIGILEARN SERVICES",
    role: "Graphic Design & Video Editing Intern",
    period: "2019 — 2020",
    location: "Bengaluru, India",
    summary:
      "Built foundational experience in graphic design and video editing while supporting digital communication and promotional work.",
    bullets: [
      "Assisted in creating graphic design assets for digital communication.",
      "Edited video content for multimedia and promotional requirements.",
      "Developed foundational skills in visual design and post-production.",
      "Supported the team with creative assets for online and offline use."
    ],
    tags: ["Graphic Design", "Video Editing", "Digital Content", "Internship"]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF453A]">
                Experience
              </span>
            </div>
            <h2
              id="experience-title"
              className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              A multidisciplinary
              <span className="text-zinc-500"> creative track record.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            5+ years across art direction, brand communication, graphic design, motion graphics, video production and AI-assisted creative workflows.
          </p>
        </header>

        <div className="border-y border-white/10">
          {EXPERIENCE.map((item) => (
            <article
              key={item.id}
              className="grid gap-8 border-b border-white/10 py-10 last:border-b-0 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-3">
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-[10px] font-mono tracking-[0.2em] text-[#FF453A]">
                    {item.id}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                      {item.period}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-zinc-600">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="flex flex-col gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black uppercase leading-tight tracking-[-0.025em] text-white sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
                      {item.company}
                    </p>
                  </div>
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:block">
                    {item.id} / 06
                  </span>
                </div>

                <p className="max-w-3xl pt-6 text-sm leading-7 text-zinc-300 sm:text-base">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF453A]" aria-hidden="true" />
                      <p className="text-sm leading-6 text-zinc-400">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
