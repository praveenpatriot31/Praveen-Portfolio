import React from "react";

const CAPABILITIES = [
  {
    number: "01",
    tag: "DESIGN",
    title: "Brand & Visual Design",
    description:
      "Brand identities, marketing creatives, layouts and visual systems designed for clear, consistent communication.",
    value: "Clear visual communication"
  },
  {
    number: "02",
    tag: "MOTION / VIDEO",
    title: "Motion & Video",
    description:
      "Video editing and motion graphics for corporate, promotional, social and digital communication.",
    value: "Polished moving content"
  },
  {
    number: "03",
    tag: "POST-PRODUCTION",
    title: "VFX & Compositing",
    description:
      "Compositing, roto, paint prep, green-screen work and visual integration across post-production workflows.",
    value: "Integrated final composites"
  },
  {
    number: "04",
    tag: "AI-ASSISTED",
    title: "AI Creative Workflows",
    description:
      "AI-assisted ideation and content exploration used alongside established design, motion and production workflows.",
    value: "Faster creative exploration"
  }
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="w-full border-b border-white/[0.06] bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-24 lg:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#FF453A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF453A]">
                Capabilities
              </span>
            </div>
            <h2
              id="services-title"
              className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
            >
              How I contribute
              <span className="text-zinc-500"> to creative teams.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            Cross-disciplinary capability built around visual thinking, production craft and reliable execution.
          </p>
        </header>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {CAPABILITIES.map((item) => (
            <article
              key={item.number}
              className="group flex min-h-[290px] flex-col bg-[#090909] p-7 transition-colors duration-300 hover:bg-[#0b0b0b] sm:p-9 lg:p-11"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF453A]">
                  {item.number}
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  {item.tag}
                </span>
              </div>

              <div className="mt-12">
                <h3 className="max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto border-t border-white/[0.08] pt-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  Contribution
                </span>
                <p className="mt-1 text-sm font-medium text-zinc-300">{item.value}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 border-t border-white/[0.06] pt-5 text-xs leading-6 text-zinc-600">
          Available for creative design, motion, video, VFX and AI-assisted production roles.
        </p>
      </div>
    </section>
  );
}
