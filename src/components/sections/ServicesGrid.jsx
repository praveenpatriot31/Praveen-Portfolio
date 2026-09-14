import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const CAPABILITIES = [
  {
    number: "01",
    tag: "DESIGN",
    title: "Brand & Visual Design",
    description:
      "Brand identities, marketing creatives, layouts and visual systems built for clear, consistent communication.",
    skills: ["Brand Design", "Marketing", "Layouts"]
  },
  {
    number: "02",
    tag: "MOTION",
    title: "Motion & Video",
    description:
      "Edited videos and motion graphics for corporate, promotional, social and digital communication.",
    skills: ["Editing", "Motion Graphics", "Post-Production"]
  },
  {
    number: "03",
    tag: "VFX",
    title: "VFX & Compositing",
    description:
      "Post-production support across compositing, roto, paint prep, green-screen work and visual integration.",
    skills: ["Nuke", "Compositing", "Roto / Paint"]
  },
  {
    number: "04",
    tag: "AI-ASSISTED",
    title: "AI Creative Workflows",
    description:
      "AI-assisted ideation and content exploration integrated into established design, motion and production workflows.",
    skills: ["Higgsfield", "Runway", "Firefly"]
  }
];

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="w-full border-t border-white/[0.06] bg-[#050505] px-6 py-28 text-white md:px-12 lg:px-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
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
                Capabilities
              </span>
            </div>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              What I can bring
              <span className="text-zinc-500"> to a creative team.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400 lg:col-span-4 lg:justify-self-end">
            A practical mix of design and production capabilities—built to move
            from concept through polished visual output.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {CAPABILITIES.map((item, index) => (
            <motion.article
              key={item.number}
              variants={FADE_UP}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={reduceMotion ? {} : { y: -4 }}
              className="group relative min-h-[310px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090909] p-7 transition-colors duration-300 hover:border-white/[0.14] sm:p-10"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#FF453A]/[0.035] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF453A]">
                    {item.number}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-14">
                  <h3 className="max-w-xl text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-10">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          Available for creative design, motion, video, VFX and AI-assisted production roles.
        </div>
      </div>
    </section>
  );
}
