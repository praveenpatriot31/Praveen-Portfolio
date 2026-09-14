import React from "react";

const EXPERIENCE = [
  {
    id: "01",
    company: "WHOOSH SINGAPORE PTE. LTD.",
    role: "Creative Visual Designer & AI Automation",
    period: "2026",
    location: "Singapore · Freelance",
    summary:
      "Developed visual concepts, website experiences and business communication assets across brand touchpoints.",
    bullets: [
      "Developed visual concepts, layouts and digital assets across brand touchpoints.",
      "Designed website experiences aligned with business requirements and brand objectives.",
      "Created business and marketing collateral for digital communication and promotional requirements.",
      "Applied AI-assisted workflows and explored automation opportunities for content and production."
    ],
    tags: ["Visual Design", "Web", "AI-Assisted", "Automation"]
  },
  {
    id: "02",
    company: "THERMO FISHER SCIENTIFIC",
    role: "Creative Visual Designer & AI Content Specialist",
    period: "Jan 2026 — Apr 2026",
    location: "Singapore / Remote · Contract",
    summary:
      "Created visual content for marketing and corporate communication, supporting motion, video and AI-assisted production workflows.",
    bullets: [
      "Developed visual content for marketing and corporate communication.",
      "Created AI-assisted concepts and generative content for creative workflows.",
      "Supported motion graphics, video and multimedia production.",
      "Collaborated with international stakeholders to develop and refine creative outputs."
    ],
    tags: ["Visual Design", "Motion", "Video", "AI-Assisted"]
  },
  {
    id: "03",
    company: "SACUMEN",
    role: "Graphic Designer",
    period: "2025",
    location: "Bengaluru, India",
    summary:
      "Designed campaign creatives, promotional materials and presentations across digital and marketing requirements.",
    bullets: [
      "Created campaign creatives, promotional materials and presentations.",
      "Translated business requirements into clear visual communication assets.",
      "Collaborated with stakeholders to refine and deliver creative work.",
      "Maintained visual consistency across digital and marketing materials."
    ],
    tags: ["Brand Design", "Marketing", "Campaigns", "Presentations"]
  },
  {
    id: "04",
    company: "ACUBE CREATIVE",
    role: "Post Production Artist",
    period: "Jun 2022 — May 2023",
    location: "Bengaluru, India",
    summary:
      "Worked across video editing, motion graphics and post-production projects from production through final delivery.",
    bullets: [
      "Worked on video editing, motion graphics and post-production projects.",
      "Created visual content for digital platforms, corporate videos and promotions.",
      "Collaborated with the creative team to deliver high-quality outputs.",
      "Managed projects from concept to final delivery."
    ],
    tags: ["Post-Production", "Video", "Motion", "Editing"]
  },
  {
    id: "05",
    company: "MICROGENESIS SOFTTECH PVT. LTD.",
    role: "Graphic Designer",
    period: "Nov 2021 — May 2022",
    location: "Bengaluru, India",
    summary:
      "Created marketing materials, presentations and digital creatives across web, social media and print.",
    bullets: [
      "Designed marketing materials, presentations and digital creatives.",
      "Developed visual assets for web, social media and print.",
      "Ensured brand consistency across creative deliverables.",
      "Supported concept development and design execution."
    ],
    tags: ["Graphic Design", "Digital", "Print", "Brand Consistency"]
  },
  {
    id: "06",
    company: "DIGILEARN SERVICES",
    role: "Graphic Design Intern",
    period: "Sep 2020 — Oct 2021",
    location: "Bengaluru, India",
    summary:
      "Built foundational experience in graphic design and digital content production while supporting senior designers.",
    bullets: [
      "Assisted in creating graphics for digital marketing and social media.",
      "Worked on layouts, banners and promotional creatives.",
      "Applied design principles in real-time projects.",
      "Supported senior designers in daily creative tasks."
    ],
    tags: ["Graphic Design", "Social", "Layouts", "Digital Content"]
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
            Experience across visual design, video, motion, post-production and AI-assisted creative workflows, including work with Singapore-based teams.
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
